import { Router,type Request, type Response, type NextFunction } from "express";
import { IAdminController, IAuthController } from "../type/authType";
import { AuthController, AdminController } from "../controller/AuthController";
import bodyValidator from "../middlewares/Validator";
import { RegisterSchema } from "../validation-schema/Authschema";
import { AdminAuthorization, Authorization } from "../middlewares/Authorization";

const authRouter = Router();
const authctrl: IAuthController = new AuthController();
const adminctrl: IAdminController = new AdminController();

authRouter.post("/login", authctrl.userLogin);
authRouter.post("/register", bodyValidator(RegisterSchema),authctrl.userRegister);
authRouter.get("/me", Authorization(), authctrl.getLoggedInUserprofile);

authRouter.get("/users",Authorization(), AdminAuthorization(), adminctrl.updateProfile)

export default authRouter;