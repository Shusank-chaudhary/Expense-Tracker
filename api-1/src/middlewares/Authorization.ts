import type { Request, Response, NextFunction } from "express"
import Jwt from "jsonwebtoken";
import { JwtSecret } from "../config/AppConfig";
import UserModel from "../model/UserModel";
import { IUser } from "../type/userAuthType";

const Authorization = () => {
    return async (req: Request & { loggedInUser?: IUser }, res: Response, next: NextFunction) => {
        try {
            let token = req.headers['authorization'] ?? null;

            if (!token) {
                return next({ code: 401, message: "Login required" })
            }

            token = token.replace("Bearer ", "")

            const data = Jwt.verify(token, JwtSecret as string);

            const userDetail = await UserModel.findOne({ _id: data.sub }) as unknown as IUser

            if (!userDetail) {
                throw { code: 401, message: "User not found." }
            }

            req.loggedInUser = {
                _id: userDetail._id,
                name: userDetail.name,
                email: userDetail.email,
                role: userDetail.role,
                createdAt: userDetail.createdAt,
                updatedAt: userDetail.updatedAt,
            }

            next();

        } catch (excecption) {
            if (
                excecption instanceof Jwt.JsonWebTokenError ||
                excecption instanceof Jwt.TokenExpiredError
            ) {
                return next({ code: 401, message: excecption.message })
            }

            return next(excecption)
        }
    }
}

const AdminAuthorization = () => {
    return (
        req: Request & { loggedInUser?: IUser },
        res: Response,
        next: NextFunction
    ) => {

        if (req.loggedInUser?.role !== "admin") {
            return next({
                code: 403,
                message: "Admin access required"
            });
        }

        next();
    }
}

export { 
    Authorization,
    AdminAuthorization,
}