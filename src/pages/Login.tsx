import  Card  from "@components/ui/Card/Card";
import { useForm } from "react-hook-form";
type LoginForm={
  email:String,
  password:String,
  gender:String
}
const onSubmit=(data:LoginForm)=>{
  console.log(data);
}
const Login = () => {
  const {register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
   <Card className="w-full max-w-md h-2/4 !pt-16">
  <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-6">
    <input
      className="border border-gray-300 px-3 py-2 rounded-md"
      placeholder="Enter a email"
      {...register("email", { required: "Email is required" })}
    />

    <input
      className="border border-gray-300 px-3 py-2 rounded-md"
      placeholder="Enter a password"
      {...register("password", { required: "Password is required" })}
    />

    <input
      className="border border-gray-300 px-3 py-2 rounded-md"
      placeholder="Enter a gender"
      {...register("gender", { required: "Gender is required" })}
    />

    <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700" type="submit">
      Login
    </button>
  </form>
</Card>
    </div>
  )
}

export default Login
