import {
    S3Client,
    PutObjectCommand,
    PutObjectCommandInput
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from '../env';
import { AuthService } from "./AuthService";
// Initialize an S3 client
const s3Client = new S3Client({
    region: env.AWS_REGION, // AWS region
    credentials: {
        accessKeyId: env.AWS_ACCESS_KEY, // Access key ID
        secretAccessKey: env.AWS_SECRET_KEY // Secret access key
    }
});

const authService = new AuthService()
export class AwsS3Service {
    // sobe a imagem para o S3
    async uploadFileToAws(fileName: string, file: Buffer, token: string): Promise<string> {
        try {
            await authService.validateUser(token, "admin");
            await authService.decodeToken(token)
            // Configure the parameters for the S3 upload
            const uploadParams: PutObjectCommandInput = {
                Bucket: env.AWS_BUCKET_NAME,
                Key: fileName,
                Body: file,
                ACL: "public-read" // Optional: make the file publicly accessible
            };

            // Upload the file to S3
            await s3Client.send(new PutObjectCommand(uploadParams));

            // Construct the public URL (if the object is publicly accessible)
            return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;

        } catch (err) {
            console.error("Error uploading file to AWS S3: ", err);
            throw new Error(`[AwsS3Service.uploadFileToAws] Error when uploading file: ${err}`);
        }
    };
}


