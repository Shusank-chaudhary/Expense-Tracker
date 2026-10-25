import { type Request, type Response, type NextFunction } from "express";
import { IAdminController, IAuthController } from "../type/authType";
import bcrypt from "bcryptjs";
import UserModel from "../model/UserModel";
import { IUser } from "../type/userAuthType";
import jwt from "jsonwebtoken";
import { JwtSecret } from "../config/AppConfig";

class AuthController implements IAuthController {
    async userLogin(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, Password } = req.body;

            const userDetail = await UserModel.findOne({
                email: email
            })
            if (!userDetail) {
                throw { code: 422, message: "User not registered" }
            } else {

                if (!bcrypt.compareSync(Password, userDetail.Password)) {
                    throw { code: 422, message: "Credentials not match" }
                }else{
                    const token = jwt.sign({sub: userDetail._id}, JwtSecret as string, {
                        expiresIn: "1d"
                    })

                    res.json({
                        data: token,
                        message: "User Login",
                        status: true
                    })
                }
            }
        } catch (exception) {
            next(exception);
        }
    }

    async userRegister(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body;

            data.Password = bcrypt.hashSync(data.Password, 12)

            const userObj = new UserModel(data);
            await userObj.save()

            res.json({
                data: {
                    _id: userObj._id,
                    name: userObj.name,
                    email: userObj.email,
                    createdAt: userObj.createdAt,
                    updatedAt: userObj.updatedAt,
                } as unknown as IUser,
                message: "Register successfully",
                status: true
            })
        } catch (exception: any) {
            next(exception);
        }
    }

    async getLoggedInUserprofile(req: Request & {loggedInUser ?: IUser}, res: Response, next: NextFunction) {
        let LoggedInUserProfile = req?.loggedInUser;
        res.json({
            data: LoggedInUserProfile,
            message: "Your Profile",
            status: true
        })
    }

}

class AdminController implements IAdminController{
    async updateProfile(req: Request, res: Response, next: NextFunction){
        try{
            //
        }catch(exception){
            next(exception);
        }
    }
}

export { 
    AuthController,
    AdminController,
}