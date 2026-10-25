import { IUser } from "../userAuthType";

declare global {
  namespace Express {
    interface Request {
      loggedInUser?: IUser
    }
  }
}

export {};