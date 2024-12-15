import {
    S3Client,
    PutObjectCommand,
    PutObjectCommandInput
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from '../env';
import { AuthService } from "./AuthService";

const s3Client = new S3Client({
    region: env.AWS_REGION, 
    credentials: {
        accessKeyId: env.AWS_ACCESS_KEY,
        secretAccessKey: env.AWS_SECRET_KEY 
    }
});

const authService = new AuthService()
export class AwsS3Service {
    // sobe a imagem para o S3
    async uploadFileToAws(fileName: string, file: Buffer): Promise<string> {
        try {
            const uploadParams: PutObjectCommandInput = {
                Bucket: env.AWS_BUCKET_NAME,
                Key: fileName,
                Body: file,
                ACL: "public-read" 
            };


            await s3Client.send(new PutObjectCommand(uploadParams));


            return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;

        } catch (err) {
            console.error("Error uploading file to AWS S3: ", err);
            throw new Error(`[AwsS3Service.uploadFileToAws] Error when uploading file: ${err}`);
        }
    };
}


