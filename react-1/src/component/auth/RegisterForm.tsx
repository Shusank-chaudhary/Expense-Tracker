import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput, FormLabel } from "../form/Input";
import { OutLinedButton } from "../ui/Linked";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axiosInstance from "../../config/axiosConfig";
import { useNavigate } from "react-router";

export interface ICredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterinDTO = z.object({
  name: z.string().nonempty("Name is required").nonoptional(),
  email: z.string().nonempty("Email is required").nonoptional(),
  password: z.string().nonempty("Password is required").nonoptional(),
  confirmPassword: z.string().nonempty("Confirm Password is required").nonoptional(),
})

export const RegisterForm = () => {
  const formFieldClassName = "flex flex-col gap-2";
  const navigate = useNavigate();
  const {control, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(RegisterinDTO)
  });

  // const handleRegisterSubmit = (data: ICredentials) => {
  //   console.log(data);
  // }
  const handleRegisterSubmit = async (data: ICredentials) => {
    try {
      const response = await axiosInstance.post("/auth/register", {
        name: data.name,
        email: data.email,
        Password: data.password,
        confirmPassword: data.confirmPassword,
      });

      if (response.data.status) {
        navigate("/", {
          state: {
            message: "Registration successful! Please log in.",
            email: data.email,
          },
        });
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleRegisterSubmit)} className="flex flex-col gap-4 mt-10 ml-25">
        <div className={formFieldClassName}>
          <FormLabel htmlFor="name">Full Name:</FormLabel>
          <FormInput name="name" type="text" handler={control} errMsg={errors?.name?.message} />
        </div>

        <div className={formFieldClassName}>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput name="email" type="email" handler={control} errMsg={errors?.email?.message} />
        </div>

        <div className={formFieldClassName}>
          <FormLabel htmlFor="password">Password:</FormLabel>
          <FormInput name="password" type="password" handler={control} errMsg={errors?.password?.message} />
        </div>

        <div className={formFieldClassName}>
          <FormLabel htmlFor="confirmPassword">Confirm Password:</FormLabel>
          <FormInput name="confirmPassword" type="password" handler={control} errMsg={errors?.confirmPassword?.message} />
        </div>

        <OutLinedButton btn="submit" txt="Create Free Account" className="" />
    
        <div className="flex flex-col justify-center items-center">
           <span className="text-sm text-gray-500 ">
               Already have an account? <a href ="/" className="text-green-700">Login</a>
           </span>
           <span className="text-sm text-gray-500 mt-5">
              By creating an account you agree to our Terms and Privacy Policy.
           </span>
        </div>
      </form>
    </>
  );
};