import { Request, Response } from 'express';
import { AwsS3Service } from '../services/AwsS3Service';
import multer from "multer";
import { v4 as uuidv4 } from 'uuid';


const upload = multer({ storage: multer.memoryStorage() });
const awsS3Service = new AwsS3Service()

export const uploadMiddleware = upload.single("image");

export class AwsS3Controller {
    static async CreateUrlImage(req: Request, res: Response): Promise<void> {
        try {
            const token = req.headers.authorization;
            const image = req.file?.buffer;
            if (!token) {
                res.status(400).json({ message: "Token faltando" });
                return;
            }
            if (!image) {
                res.status(400).json({ message: "imagem faltando" });
                return;
            }
            const post = await awsS3Service.uploadFileToAws(uuidv4(), image, token);
            res.status(201).json(post);
        } catch (error) {

            if (error instanceof Error) {
                switch (error.message) {
                    case "Usuário sem permissão":
                        res.status(403).json({ message: error.message });
                        return;
                    case "Usuário não encontrado":
                        res.status(404).json({ message: error.message });
                        return;
                    default:
                        res.status(500).json({ message: error.message });
                        return;
                }
            }
        }
    }
}
