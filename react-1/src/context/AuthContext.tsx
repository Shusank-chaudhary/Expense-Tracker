import type { ICredentials } from "../types/authType";
import { createContext, type Dispatch, type SetStateAction } from "react";

export type IUser = {
  _id: string,
  createdAt:string,
  email:string,
  name:string,
  updatedAt:string,
  role: "admin" | "user"
};

export interface IAuthContext {
  login: (data: ICredentials) => Promise<IUser | void>;
  getLoggedInUser: () => Promise<IUser | void>;
  logout: () => void;
  loggedInUser: undefined | IUser,
  setLoggedInUser: Dispatch<SetStateAction<IUser|undefined>>
}

const AuthContext = createContext<IAuthContext>({
  loggedInUser: undefined,
  login: async (): Promise<IUser | void> => {},
  logout: ():void => {},
  getLoggedInUser:  async (): Promise<IUser | void> => {}, 
  setLoggedInUser: ():void => {}
});

export default AuthContext