import React from "react";
import { GetCategoriesQuery } from "@/generatesTypes/gql/graphql";
import Image from "next/image";
import Link from "next/link";

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
            alt={category.image.altText! || category.name!}
            height={category.image.mediaDetails?.height!}
            width={category.image.mediaDetails?.width!}
          />
        )}
      </div>
      <Link
        href={category.uri!}
        className={`text-center text-xl font-bold text-gray-800`}
      >
        {category.name}
      </Link>
    </div>
  );
}
