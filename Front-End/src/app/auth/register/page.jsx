"use client";
import { register } from "../../../actions/auth";
import SubmitBtn from "../../../Components/SubmitBtn";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

export default function Register() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(register, {});

  useEffect(() => {
    if (state?.error) {
      toast.error(state?.error);
    } else if (state?.success) {
      toast.success(state?.success);
      router.push("/auth/login")
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
              Name
            </label>
            <input
              name="name"
              type="text"
              className="border border-gray-500 rounded outline-hidden px-3 py-2 w-full dark:text-gray-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text mb-3 dark:text-white text-zinc-800">
              Your password
            </label>
            <input
              name="password"
              type="password"
              className="border border-gray-500 outline-hidden rounded px-3 py-2 w-full dark:text-gray-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text mb-3 dark:text-white text-zinc-800">
              Repeat password
            </label>
            <input
              name="ConfirmPassword"
              type="password"
              className="border border-gray-500 rounded outline-hidden px-3 py-2 w-full dark:text-gray-200"
            />
          </div>
          <SubmitBtn title="Register" pending={pending} />
        </form>
      </div>
    </div>
  );
}
