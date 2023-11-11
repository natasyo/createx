import React from "react";
import { GetCategoriesQuery } from "@/generatesTypes/gql/graphql";
import Image from "next/image";
import noImage from "@/public/no-image.jpg";
import Link from "next/link";

type Props = {
  category: NonNullable<
    GetCategoriesQuery["productCategories"]
  >["nodes"][number];
};
function PopularCategory({ category }: Props) {
  return (
    <Link href={category.uri!}>
      <div
        className={`h-45 w-45 rounded-full overflow-hidden mx-3.75 bg-gray-900 mb-6`}
      >
        {category.image ? (
          <Image
            src={category.image.mediaItemUrl!}
            alt={category.image.altText || category.name || "Category"}
            height={category.image.mediaDetails?.height!}
            width={category.image.mediaDetails?.width!}
          />
        ) : (
          <Image
            src={noImage.src}
            alt={"no-Image"}
            width={noImage.width}
            height={noImage.height}
          />
        )}
      </div>
      <p className={`text-center text-xl`}>{category.name}</p>
    </Link>
  );
}

export default PopularCategory;
