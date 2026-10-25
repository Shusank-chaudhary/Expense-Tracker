import type { Request, Response, NextFunction } from "express"

export interface IAuthController{
  userLogin(req: Request, res: Response, next: NextFunction):void;
  userRegister(req: Request, res: Response, next: NextFunction):void;
  getLoggedInUserprofile(req: Request, res: Response, next: NextFunction):void;
}

export interface IAdminController{
  updateProfile(req: Request, res: Response, next: NextFunction):void;
}