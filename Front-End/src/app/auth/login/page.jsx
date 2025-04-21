"use client";
import { login } from "../../../actions/auth";
import SubmitBtn from "../../../Components/SubmitBtn";
import { useRouter } from "next/navigation";
import { useActionState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import AuthContext from "../../../Context/AuthContext";

export default function Login() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(login, {});
  const { loginContext } = useContext(AuthContext);

  useEffect(() => {
    if (state?.error) {
      toast.error(state?.error);
    } else if (state?.success) {
      toast.success(state?.success);
      loginContext(state?.user)
      router.push("/");
    }
  }, [state]);

  return (
    <div className="container">
      <div className="h-screen flex items-center justify-center">
        <form
          action={formAction}
          className="max-w-sm mx-auto w-[400px] shadow-custome shadow-zinc-800/70 dark:shadow-white py-8 px-4 rounded-md -mt-[100px] border border-gray-500"
        >
          <div className="mb-4">
            <label className="block text mb-3 dark:text-white text-zinc-800">
              Email:
            </label>
            <input
              placeholder="example@gmail.com"
              name="email"
              type="email"
              className="border border-gray-500 rounded outline-hidden px-3 py-2 w-full dark:placeholder:text-gray-200 dark:text-gray-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text mb-3 dark:text-white text-zinc-800">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="border border-gray-500 outline-hidden rounded px-3 py-2 w-full dark:text-gray-200"
            />
          </div>
          <SubmitBtn title="Login" pending={pending} />
        </form>
      </div>
    </div>
  );
}
