import * as z from "zod";

export interface ICredentials {
  email: string,
  Password: string;
}

export interface IForgetPasswordData {
  email: string;
}

export const LoginDTO = z.object({
  email: z.email().nonempty('Email is required').nonoptional(),
  Password: z.string().nonempty("Password is required").nonoptional(),
});

export const LoginDefaultValue = {
  email: "",
  Password: "",
};