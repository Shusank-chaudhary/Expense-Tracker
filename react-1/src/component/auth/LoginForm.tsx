import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput, FormLabel } from "../form/Input";
import { OutLinedButton } from "../ui/Linked";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router";

export interface ICredentials {
  email: string;
  Password: string;
}

const LoginDTO = z.object({
  email: z.string().nonempty("Email is required").nonoptional(),
  Password: z.string().nonempty("Password is required").nonoptional(),
})

export const LoginForm = () => {
  const formFieldClassName = "flex flex-col gap-2";

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: "",
      Password: "",
    },
    resolver: zodResolver(LoginDTO)
  })

  const handleLoginSubmit = async (data: ICredentials) => {
    try {
      console.log(data);

      await login(data);

      navigate("/user");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLoginSubmit)}
        className="flex flex-col gap-4 mt-10 ml-25"
      >
        <div className={formFieldClassName}>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput
            name="email"
            type="email"
            handler={control}
            errMsg={errors?.email?.message}
          />
        </div>

        <div className={formFieldClassName}>
          <FormLabel htmlFor="password">Password:</FormLabel>
          <FormInput
            name="Password"
            type="password"
            handler={control}
            errMsg={errors?.Password?.message}
          />
        </div>

        <OutLinedButton
          btn="submit"
          txt="Sign In"
          className=""
        />

        <div className="flex flex-col justify-center items-center">
          <span className="text-sm text-gray-500">
            New here?{" "}
            <a href="/register" className="text-green-700">
              Create a free Account
            </a>
          </span>

          <span className="text-sm text-gray-500 mt-5">
            By continuing you agree to our Terms and Privacy Policy.
          </span>
        </div>
      </form>
    </>
  )
}