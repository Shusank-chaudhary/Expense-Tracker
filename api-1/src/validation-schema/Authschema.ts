import z from "zod";

const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_-]).{8,25}$/;

export const RegisterSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 character long").max(50, "Name must be less than 50 charcter long"),
    email: z.email("Invalid email format").nonempty("Email is required"),
    Password: z.string().regex(PasswordRegex).nonempty("Password must contain 1 smallletter,capital letter, a number and 1 special character"),
    confirmPassword: z.string().regex(PasswordRegex).nonempty("confirm-Password is required")
}).refine((data) => data.Password === data.confirmPassword, {
    message: "Password and Comfirm Password must match",
    path: ["confirmPassword"]
})

export const UserProfileUpdateSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 character long").max(50, "Name must be less than 50 charcter long"),
    email: z.email("Invalid email format").nonempty("Email is required"),
    gender: z.string().regex(/^male|female|other$/).nullable().optional(),
    address:z.string().min(10).max(100).nonempty(), 
})

export const LoginSchema = z.object({
    email: z.email("Invalid email format").nonempty("Email is required"),
    Password: z.string().regex(PasswordRegex).nonempty("Password must contain 1 smallletter,capital letter, a number and 1 special character"),
})