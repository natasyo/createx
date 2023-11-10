// @flow
"use client";
import * as React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import Link from "next/link";

export const HeaderBottom = () => {
  return (
    <div className={`bg-green-800 text-white py-2`}>
      <Carousel
        className={`w-82 mx-auto`}
        navigation={() => false}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4  h-3 w-4"
          >
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.47075 0.862254C6.2104 0.601905 5.78829 0.601905 5.52794 0.862254L0.861277 5.52892C0.600927 5.78927 0.600927 6.21138 0.861277 6.47173L5.52794 11.1384C5.78829 11.3987 6.2104 11.3987 6.47075 11.1384C6.7311 10.878 6.7311 10.4559 6.47075 10.1956L2.27549 6.00033L6.47075 1.80506C6.7311 1.54471 6.7311 1.1226 6.47075 0.862254Z"
                fill="white"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4 h-3 w-4"
          >
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.529247 0.862254C0.789596 0.601905 1.21171 0.601905 1.47206 0.862254L6.13872 5.52892C6.39907 5.78927 6.39907 6.21138 6.13872 6.47173L1.47206 11.1384C1.21171 11.3987 0.789596 11.3987 0.529247 11.1384C0.268897 10.878 0.268897 10.4559 0.529247 10.1956L4.72451 6.00033L0.529247 1.80506C0.268897 1.54471 0.268897 1.1226 0.529247 0.862254Z"
                fill="white"
              />
            </svg>
          </IconButton>
        )}
      >
        <div>
          <p className={`m-0 text-center text-xs leading-normal`}>
            <span className={`font-black`}>Up to 70% Off. </span>
            <Link href={"/"} className={`underline`}>
              Shop our latest sale styles
            </Link>
          </p>
        </div>
        <div>
          <p className={`m-0 text-center text-xs leading-normal`}>
            <span className={`font-black`}>Up to 70% Off. </span>
            <Link href={"/"} className={`underline`}>
              Shop our latest sale styles
            </Link>
          </p>
        </div>
      </Carousel>
    </div>
  );
};
