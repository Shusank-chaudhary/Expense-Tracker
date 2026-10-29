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
    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await UserModel.find().select("-Password");

            return res.status(200).json({
                status: true,
                message: "Users fetched successfully",
                data: users,
            });
        } catch (exception) {
            next(exception);
        }
    }

    async updateProfile(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const userId = req.params.userId;
            const { name, email, Password } = req.body;

            // Check whether any fields were provided
            if (!name && !email && !Password) {
                throw {
                    code: 422,
                    message: "No profile fields provided."
                };
            }

            // Find the user
            const userDetail = await UserModel.findById(userId);

            if (!userDetail) {
                throw {
                    code: 404,
                    message: "User not found."
                };
            }

            // Validate name
            if (name !== undefined) {
                if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 50) {
                    throw {
                        code: 422,
                        message: "Name must be between 2 and 50 characters."
                    };
                }

                userDetail.name = name.trim();
            }

            // Validate email
            if (email !== undefined) {
                if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    throw {
                        code: 422,
                        message: "Please provide a valid email address."
                    };
                }

                userDetail.email = email.trim();
            }

            // Hash password if provided
            if (Password !== undefined) {
                if (typeof Password !== "string" || Password.length < 8) {
                    throw {
                        code: 422,
                        message: "Password must be at least 8 characters long."
                    };
                }

                userDetail.Password = bcrypt.hashSync(Password, 12);
            }

            // Save updated user
            await userDetail.save();

            // Return updated profile without password
            res.status(200).json({
                data: {
                    _id: userDetail._id,
                    name: userDetail.name,
                    email: userDetail.email,
                    role: userDetail.role,
                    createdAt: userDetail.createdAt,
                    updatedAt: userDetail.updatedAt,
                },
                status: true,
                message: "Profile updated successfully."
            });

        } catch (exception: any) {
            // Handle duplicate email
            if (exception?.code === 11000) {
                return next({
                    code: 409,
                    message: "This email address is already in use."
                });
            }

            next(exception);
        }
    }

    async deleteUser(
        req: Request & { loggedInUser?: IUser },
        res: Response,
        next: NextFunction
    ) {
        try {
            const { userId } = req.params;
            const loggedInUser = req.loggedInUser;

            if (!loggedInUser) {
                return res.status(401).json({
                    status: false,
                    message: "User not authenticated",
                });
            }

            const userDetail = await UserModel.findById(userId);

            if (!userDetail) {
                return res.status(404).json({
                    status: false,
                    message: "User not found.",
                });
            }

            if (userDetail._id.equals(loggedInUser._id as string)) {
                return res.status(403).json({
                    status: false,
                    message: "You cannot delete your own account.",
                });
            }

            await UserModel.findByIdAndDelete(userId);

            return res.status(200).json({
                status: true,
                message: "User deleted successfully",
            });
        } catch (exception) {
            next(exception);
        }
    }
    
}

export { 
    AuthController,
    AdminController,
}