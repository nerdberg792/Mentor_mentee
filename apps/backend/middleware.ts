import  type {Request , Response , NextFunction} from "express"

export const authMiddleware = async(req:Request , res:Response , next:NextFunction)=>{
        const authHeader = req.headers.authorization;
        (req as any).userId = "1"
        next()
}