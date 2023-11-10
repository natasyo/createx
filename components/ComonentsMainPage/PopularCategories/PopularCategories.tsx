"use client";
import React, { useState } from "react";
import PopularCategory from "@/components/ComonentsMainPage/PopularCategories/PopularCategory";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import {
  GetCategoriesDocument,
  OrderEnum,
  TermObjectsConnectionOrderbyEnum,
} from "@/generatesTypes/gql/graphql";
import { Loading } from "@/components/Loading/Loading";

function PopularCategories() {
  function setCount(innerWidth: number): number {
    if (innerWidth < 1280 && innerWidth > 1024) {
      return 5;
    }
    if (innerWidth <= 1024 && innerWidth > 768) return 4;
    if (innerWidth <= 768 && innerWidth > 648) return 3;
    if (innerWidth <= 648) return 2;
    return 6;
  }
  let count = 0;

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  count = setCount(innerWidth);
  window.addEventListener("resize", () => {
    setInnerWidth(window.innerWidth);
    count = setCount(innerWidth);
  });

  const { data, loading } = useQuery(GetCategoriesDocument, {
    variables: {
      first: count,
      childless: true,
      orderby: TermObjectsConnectionOrderbyEnum.TermOrder,
      order: OrderEnum.Asc,
    },
  });
  if (loading) return <Loading />;
  return (
    <div className={`xl:py-45 lg:py-37.5 py-20  container mx-auto`}>
      <p className={`text-center text-4.8xl font-black mb-15`}>
        Popular categories
      </p>
      <div className={`flex justify-center`}>
        {data?.productCategories?.nodes?.map((category) => (
          <PopularCategory category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
}

export default PopularCategories;
