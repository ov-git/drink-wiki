import Image from "next/image";
import bg from "../../../public/bg.jpg";

function Hero() {
  return (
    <div className="relative flex justify-center h-[75vh] border-b-2 select-none bg-gradient-to-b from-white to-black text-slate-300">
      <div className="absolute z-30 pt-48 pr-40">
        <h1 className="font-bold text-7xl pt-28">
          Find your
          <br />
          <span className="pl-10 md:pl-20 text-slate-200">New favorite</span>
          <br />
          <span className="pl-24 md:pl-60 text-[#379a47] font-extrabold italic">
            Drinkzz
          </span>
        </h1>
      </div>

      <Image
        className="w-full col-span-1 px-24 rounded opacity-40"
        src={bg}
        alt={"Drinkzz"}
        priority
      />
    </div>
  );
}

export default Hero;
