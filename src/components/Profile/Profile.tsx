import { getUserFromCookie } from "../../lib/auth";
import { cookies } from "next/headers";
import DrinkCarousel from "./DrinkCarousel";
import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";

const getData = async () => {
  const user = getUserFromCookie(cookies() as RequestCookies);
  return user;
};

const Profile = async () => {
  const user = await getData();
  const drinks = user?.drinks || [];
  return (
    <div className="flex flex-col h-full px-12 ">
      <div className="flex items-center justify-center w-full h-64">
        <h1 className="text-2xl font-bold text-white">
          Welcome user: {user?.email}
        </h1>
      </div>
      <DrinkCarousel drinks={drinks} />
    </div>
  );
};

export default Profile;