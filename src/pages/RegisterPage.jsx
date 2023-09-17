import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    const res = await registerRequest(values);
    console.log(res);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          {...register("username", { required: true })}
          placeholder="Username"
        />
        <input
          type="email"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
