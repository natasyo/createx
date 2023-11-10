// @flow
import * as React from "react";
import { CarouselWrap } from "@/components/ComonentsMainPage/Banner/CarouselWrap";
import { Button } from "@/components/ui/Button";

export function Banner() {
  return (
    <CarouselWrap>
      <div
        style={{ backgroundImage: "url(banner.png)" }}
        className={`bg-no-repeat xl:h-200 lg:h-150 h-125 xl:pt-35 lg:pt-30 sm:pt-25 text-gray-900 bg-cover bg-center`}
      >
        <div className={`container mx-auto px-3`}>
          <p className={`uppercase text-lg mb-3 font-bold`}>New collection</p>
          <p className={`text-7xl mt-3 font-black xl:mb-15 lg:mb-13 mb-10`}>
            Menswear 2020
          </p>
          <div>
            <Button
              href={"/sale"}
              type={"button"}
              typeColor={"basicOutline"}
              className={"px-10 mr-6"}
            >
              Shop sale
            </Button>
            <Button href={"/mens"} className={`px-10`}>
              Shop the menswear
            </Button>
          </div>
        </div>
      </div>
    </CarouselWrap>
  );
}
