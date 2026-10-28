import type { Request, Response, NextFunction } from "express"
import { IUser } from "./userAuthType";

export interface IAuthController{
  userLogin(req: Request, res: Response, next: NextFunction):void;
  userRegister(req: Request, res: Response, next: NextFunction):void;
  getLoggedInUserprofile(req: Request, res: Response, next: NextFunction):void;
}

export interface IAdminController{
  getAllUsers(req: Request , res: Response, next: NextFunction):void;
  updateProfile(req: Request, res: Response, next: NextFunction):void;
  deleteUser(req: Request, res: Response, next: NextFunction):void;
}