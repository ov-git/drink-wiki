import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

type Props = {
  handleGoogleLogin: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
};

const SignInForm = ({ handleGoogleLogin }: Props) => {
  const router = useRouter();
  const userRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
        // callbackUrl: "/",
      });
      if (response && response.ok) {
        router.push("/");
      } else {
        console.log(response);
        throw new Error("No succesful response");
      }
    } catch (err) {
      setError("Invalid login credentials");
    }
  };

  return (
    <form
      className="flex flex-col gap-5 px-12 py-8 font-semibold text-white bg-gray-800 bg-opacity-50 border border-red-900 rounded w-80"
      onSubmit={(e) => handleSubmit(e)}
    >
      <p className="pt-2 text-red-500 h-[30px] text-sm">{error}</p>

      <input
        className="px-1 text-black rounded"
        ref={userRef}
        placeholder="Username or Email..."
        value={form.email}
        onChange={(e) =>
          setForm((prev) => {
            return { ...prev, email: e.target.value };
          })
        }
      />
      <input
        className="px-1 text-black rounded"
        placeholder="Password..."
        value={form.password}
        type="password"
        onChange={(e) =>
          setForm((prev) => {
            return { ...prev, password: e.target.value };
          })
        }
      />
      <button type="submit" className="p-1 rounded bg-dLightGreen ">
        Login
      </button>
      <div className="w-full">
        <p className="text-sm">or login with:</p>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full gap-2 p-1 bg-black rounded "
        >
          <FcGoogle className="text-xl" />
          <p>Google</p>
        </button>
      </div>

      <Link className="underline underline-offset-2" href="/register">
        New User?
      </Link>
    </form>
  );
};

export default SignInForm;
