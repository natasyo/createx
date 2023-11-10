// @flow
import * as React from "react";
import TrendingProducts from "@/components/ComonentsMainPage/Trending/TrendingProducts";
import { Button } from "@/components/ui/Button";

export function Trending() {
  return (
    <div className={`bg-gray-300 xl:py-20 lg:py-15 py-10`}>
      <div className={`container px-3 mx-auto`}>
        <p className={`text-4.8xl font-black lg:mb-15 mb-7.5`}>Trending now</p>
        <TrendingProducts />
        <Button typeColor={"basicOutline"} className={`!mx-auto !flex -mt-7`}>
          Explore top sales
        </Button>
      </div>
    </div>
  );
}
