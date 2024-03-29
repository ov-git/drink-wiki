"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { useSession } from "next-auth/react";

import Nav from "../../../public/Nav.png";
import SideMenu from "./SideMenu";
import ProfileMenu from "./ProfileMenu";

import { HiMenu, HiOutlineSearch } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

function Navbar() {
  const [nav, setNav] = useState(false);

  const { data } = useSession();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 z-30 flex items-center justify-between w-full h-16 text-orange-100 border-b-2 bg-dDarkGreen border-dLightGreen">
      <div className="flex items-center h-full">
        <button
          aria-label="menu button"
          className="p-4 hover:animate-pulse"
          onClick={() => handleNav()}
        >
          {nav ? (
            <CgClose className="text-5xl" />
          ) : (
            <HiMenu className="text-5xl" />
          )}
        </button>

        <Link className="flex w-[300px] h-full px-4 select-none " href={"/"}>
          <Image className="" src={Nav} alt={"Logo"} height={60} width={300} />
        </Link>
      </div>

      <ProfileMenu user={data?.user} />
      <SideMenu nav={nav} user={data?.user} loggedIn={!!data?.user} />
    </div>
  );
}

export default Navbar;
