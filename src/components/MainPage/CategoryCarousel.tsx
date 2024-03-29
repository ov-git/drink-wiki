"use client";

import categories from "../../lib/Categories";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  setCategory: Dispatch<SetStateAction<string>>;
  category: string;
};

const CategoryCarousel = ({ setCategory, category }: Props) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Apply active status only after page is hydrated
    setHydrated(true);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full text-white">
        <h1 className="py-5 text-4xl font-bold">Categories</h1>
        {/* <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          ducimus sapiente officiis vitae unde fugit, architecto iure? Totam
          nulla dolor at sequi veritatis, maiores quasi, cupiditate aspernatur
          officia accusantium eos.
        </p> */}
        {hydrated && (
          <div className="flex gap-2 flex-wrap items-center justify-center lg:max-w-[80vw] px-4">
            {categories.map((cat) => {
              let active = "";

              active =
                category === cat.link ? "border-2 border-dDarkOrange" : "";

              return (
                <button
                  className={`relative flex rounded-lg w-[200px] h-[120px] bg-black hover:opacity-80 ${active}`}
                  key={cat.name}
                  onClick={() => setCategory(cat.link)}
                >
                  <Image
                    className="object-cover rounded-lg opacity-80"
                    src={cat.image.src}
                    alt={cat.name}
                    sizes="200px"
                    fill
                  />
                  <p className="absolute z-10 w-full h-full text-lg font-bold">
                    {cat.name}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryCarousel;
