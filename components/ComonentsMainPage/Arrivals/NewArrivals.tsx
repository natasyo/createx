import React, { Suspense } from "react";
import Link from "next/link";

import ArrivalsProducts from "@/components/ComonentsMainPage/Arrivals/ArrivalsProducts";

function NewArrivals() {
  return (
    <div className={`xl:my-45 lg:my-35 my-20 px-7.5`}>
      <h1 className={`text-gray-900 text-center mb-6`}>New arrivals</h1>
      <p className={`text-center text-gray-700 text-lg leading-normal`}>
        Check out our latest arrivals for the upcoming season
      </p>
      <Link
        href={"/"}
        className={`text-lg text-center block leading-normal underline text-green-800 xl:mb-15 lg:mb-12 mb-10`}
      >
        See the collection here
      </Link>
      <ArrivalsProducts />
    </div>
  );
}

export default NewArrivals;
