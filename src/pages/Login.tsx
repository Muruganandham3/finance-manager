import Card from "@components/ui/Card/Card";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "@components/button/Button";


type LoginForm = {
  email: String,
  password: String,
  gender: String
}
const Login = () => {
  const [loginError,setLoginError]=useState(false);
  const nagivate=useNavigate();

  const onSubmit = (data: LoginForm) => {
    if(data.email=="admin" && data.password=="123456"){
        nagivate("/dashboard");
    }else{
      setLoginError("Invalid Credentials");
    }
    console.log(data);
  }
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md min-h-[320px] pt-16">
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full min-h-[320px] h-full  flex-col gap-6 justify-center items-center">
          <div className="w-sm">
          <input
            className="border border-gray-300 px-3 py-2 rounded-md w-sm !p-0.5  focus:border-blue-600 focus:border-2 focus:outline-none"
            placeholder="Enter a email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}
          </div>

          <div className="w-sm">
          <input
            className="border border-gray-300 px-3 py-2 rounded-md w-sm !p-0.5 focus:border-blue-600 focus:border-2 focus:outline-none"
            placeholder="Enter a password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (<p className="text-red-500 text-sm">{errors.password.message}</p>)}
          </div>

          {loginError && (<p className="text-red-500 text-sm">{loginError}</p>)}

          <Button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 w-30 !p-0.5" name="Login"></Button>

          {/* <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 w-30 !p-0.5" type="submit">
            Login
          </button> */}
        </form>
      </Card>
    </div>
  )
}

export default Login
