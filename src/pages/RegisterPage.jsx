import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function RegisterPage() {
  const { register, handleSubmit, formState:{
    errors
  } } = useForm();
  const { signup, isAunthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate()

  useEffect(()=>{
    if(isAunthenticated) navigate('/tasks')
  })

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {
        RegisterErrors.map((error,i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))
      }
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          {...register("username", { required: true })}
          placeholder="Username"
        />
        {
          errors.username && <p className="text-red-500">Username is required</p>
        }
        <input
          type="email"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {
          errors.email && <p className="text-red-500">Email is required</p>
        }
        <input
          type="password"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {
          errors.password && <p className="text-red-500">Password is required</p>
        }
        <button type="submit">Register</button>
      </form>
      <p className="flex gap-x-2 justify-between">
        Already have an account? <Link to="/login" className="text-sky-500">Sign In</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
