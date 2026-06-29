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
    <Card className={'mt-4'}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Enter a email" {...register("email",{required: 'Email is required'})}/>
      {errors.email && <span>{errors.email.message}</span>}
      <input placeholder="Enter a password" {...register("password",{required: 'Password is required'})}/>
      {errors.password && <span>{errors.password.message}</span>} 
      <input placeholder="Enter a gender" {...register("gender",{required:'Gender is required'})}/>
      {errors.gender &&  <span>errors.password?.message</span>}
      <button type="submit">Login</button>
    </form>
    </Card>
  )
}

export default Login
