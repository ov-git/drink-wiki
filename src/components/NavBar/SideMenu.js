"use client";
import { BiHome, BiLogOut, BiLogIn } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { useContext } from "react";
import { logoutUser } from "../../lib/ApiService";

function SideMenu({ nav, handleNav }) {
  const session = false;
  //   const router = useRouter();
  // const { data: session } = useSession();

  // function handleClick() {
  //     logoutUser();
  //     router.push('/signin');
  // }

  return (
    <div
      className={
        nav
          ? "rounded-r fixed left-0 top-[80px] w-full md:w-1/4 bg-black bg-opacity-80 ease-in duration-300"
          : "fixed -left-[50%] top-[80px] border w-[30%] bg-white opacity-0 ease-in duration-300"
      }
    >
      <ul className="flex flex-col py-3 overflow-hidden border-none">
        <Link
          className="flex gap-4 p-2 text-3xl border-b"
          href={"/profile/todo"}
        >
          <CgProfile />
          Profile
        </Link>

        {/* <Link className="flex gap-4 p-2 text-3xl border-b" href={"/"}>
            <BiHome />
            Home
          </Link> */}

        {session ? (
          <>
            <Link
              className="flex gap-4 p-2 text-3xl border-b"
              href={"/settings"}
            >
              <BiHome />
              Settings
            </Link>
            <Link
              className="flex gap-4 p-2 text-3xl border-b"
              href={"/contact"}
            >
              <BiHome />
              Contact
            </Link>
            <button
              className="flex items-center gap-4 p-2 text-3xl"
              onClick={() => logout()}
            >
              <BiLogOut /> Log Out
            </button>
          </>
        ) : (
          <Link
            className="flex items-center gap-4 p-2 text-3xl"
            href={"/signin"}
          >
            <BiLogIn /> Log In
          </Link>
        )}
      </ul>
    </div>
  );
}

export default SideMenu;
