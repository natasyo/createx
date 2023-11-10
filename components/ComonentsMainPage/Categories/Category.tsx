import React from "react";
import { GetCategoriesQuery } from "@/generatesTypes/gql/graphql";
import Image from "next/image";

type Props = {
  category: NonNullable<
    GetCategoriesQuery["productCategories"]
  >["nodes"][number];
};

export function Category({ category }: Props) {
  return (
    <div>
      <div>
        {category.image && category.image.mediaItemUrl && (
          <Image
            className={"w-full h-90.75 mb-4"}
            src={category.image?.mediaItemUrl}
            alt={category.image.altText!}
            height={category.image.mediaDetails?.height!}
            width={category.image.mediaDetails?.width!}
          />
        )}
      </div>
      <p className={`text-center text-xl font-bold text-gray-800`}>
        {category.name}
      </p>
    </div>
  );
}
