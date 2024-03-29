"use client";
import useDrink from "@/lib/hooks/useDrink";
import Drink from "./Drink";

import { useSession } from "next-auth/react";

type Props = {
  category: string;
  ingredients: string[];
};

export default function Drinks({ category, ingredients }: Props) {
  const { drinks, isLoading, isError } = useDrink(category, ingredients);
  const { data: user } = useSession();

  if (typeof window !== "undefined") {
    localStorage.setItem("category", category);
  }

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="mx-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-4 max-w-[1860px]">
      {drinks.map((drink) => (
        <Drink key={drink.idDrink} drink={drink} loggedIn={!!user} />
      ))}
    </div>
  );
}
