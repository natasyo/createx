import React from "react";
import {
  GetProductsQuery,
  SimpleProduct,
  VariableProduct,
} from "@/generatesTypes/gql/graphql";
import { Button } from "@/components/ui/Button";
import NoImage from "@/public/no-image.jpg";
import Image from "next/image";

export type ProductsType = NonNullable<
  GetProductsQuery["products"]
>["nodes"][number] &
  (SimpleProduct | VariableProduct);

type Props = {
  className?: string;
  product: ProductsType;
};
function Product({ product, className }: Props) {
  return (
    <div
      className={`${className} mx-3.75 group transform-cpu hover:shadow-regular hover:bg-white`}
    >
      <div className={`h-90 lg:р-80 bg-100% bg-no-repeat bg-center mb-4`}>
        {product.image ? (
          <Image
            src={product.image.guid!}
            alt={product.image?.altText || product.title! || "Product"}
            height={product.image.mediaDetails?.height!}
            width={product.image.mediaDetails?.width!}
            className={`h-full w-full container`}
          />
        ) : (
          <Image
            src={NoImage.src}
            alt={product.title || "No"}
            width={NoImage.width}
            height={NoImage.height}
            className={`h-full w-full container`}
          />
        )}
      </div>
      <div className={`px-4 pb-4`}>
        <p
          className={`text-lg text-gray-800 mb-2 leading-normal h-13.5 overflow-y-hidden`}
        >
          {product.name}
        </p>
        {product.onSale}
        {product.onSale ? (
          <p>
            <span
              dangerouslySetInnerHTML={{ __html: product.salePrice || "" }}
              className={`mr-3 text-red-400 text-2xl`}
            />
            <span
              dangerouslySetInnerHTML={{ __html: product.regularPrice || "" }}
              className={`line-through text-lg text-gray-700`}
            />
          </p>
        ) : (
          <p
            className={`text-xl font-bold`}
            dangerouslySetInnerHTML={{ __html: product.price || "" }}
          />
        )}

        <div className={`group-hover:overflow-hidden text-center`}>
          <Button
            className={`w-full h-11 mt-5 !mb-0 opacity-0 group-hover:opacity-100`}
          >
            <span className={`mr-2`}>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.5944 2.0047C2.52929 1.99979 2.43894 1.99935 2.2695 1.99935H1.16667C0.798477 1.99935 0.5 1.70088 0.5 1.33269C0.5 0.964496 0.798477 0.666019 1.16667 0.666019H2.2695C2.27578 0.666019 2.28207 0.666018 2.28835 0.666017C2.43146 0.666 2.57315 0.665982 2.69458 0.675131C2.82971 0.685313 2.9867 0.709227 3.14911 0.781673C3.37767 0.883629 3.57293 1.04786 3.71254 1.25557C3.81174 1.40317 3.8622 1.55374 3.89538 1.68512C3.9252 1.80319 3.94946 1.94279 3.97397 2.08378C3.97504 2.08997 3.97612 2.09617 3.9772 2.10236L4.13605 3.01574L12.812 3.27256C13.152 3.28261 13.4458 3.2913 13.6878 3.31795C13.9436 3.34612 14.1971 3.39908 14.4404 3.52867C14.809 3.72503 15.1068 4.03184 15.2922 4.40607C15.4145 4.65304 15.46 4.90806 15.4805 5.16454C15.5 5.40719 15.5 5.70112 15.5 6.04126V6.09042C15.5 6.41007 15.5 6.68734 15.4821 6.91727C15.4631 7.16111 15.4213 7.4033 15.3095 7.64061C15.1395 8.00182 14.8653 8.30387 14.5221 8.5079C14.2967 8.64195 14.0597 8.70696 13.8188 8.74935C13.5917 8.78932 13.3157 8.81601 12.9975 8.84679L6.50826 9.47478C6.18213 9.50636 5.89956 9.53371 5.66381 9.53786C5.41403 9.54225 5.1636 9.52285 4.91219 9.4305C4.53514 9.29199 4.20854 9.04315 3.97491 8.71639C3.81913 8.49851 3.73395 8.26222 3.67188 8.02024C3.6133 7.79184 3.56467 7.51216 3.50854 7.18935L2.66358 2.33082C2.63455 2.16388 2.61864 2.07494 2.60265 2.01163C2.60208 2.00938 2.60153 2.00725 2.601 2.00522C2.59891 2.00505 2.59672 2.00487 2.5944 2.0047ZM4.36923 4.35656L4.81796 6.93675C4.8795 7.29058 4.9195 7.51777 4.96341 7.68897C5.00529 7.85226 5.03842 7.91138 5.05953 7.9409C5.1374 8.04982 5.24627 8.13277 5.37195 8.17894C5.40602 8.19145 5.47181 8.2077 5.64036 8.20473C5.81708 8.20163 6.04674 8.17989 6.40421 8.14529L12.8451 7.52198C13.1941 7.48821 13.4178 7.46608 13.5877 7.43619C13.7495 7.40772 13.8099 7.38017 13.8407 7.36185C13.9551 7.29384 14.0465 7.19315 14.1032 7.07275C14.1184 7.04033 14.1401 6.97756 14.1528 6.81376C14.1662 6.64181 14.1667 6.41694 14.1667 6.06635C14.1667 5.69402 14.1662 5.45411 14.1515 5.27122C14.1374 5.09622 14.1136 5.03061 14.0974 4.99789C14.0356 4.87315 13.9363 4.77088 13.8135 4.70542C13.7812 4.68825 13.7164 4.66249 13.5418 4.64327C13.3595 4.62318 13.1197 4.61558 12.7475 4.60457L4.36923 4.35656Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.16667 11.666C5.79848 11.666 5.5 11.9645 5.5 12.3327C5.5 12.7009 5.79848 12.9993 6.16667 12.9993C6.53486 12.9993 6.83333 12.7009 6.83333 12.3327C6.83333 11.9645 6.53486 11.666 6.16667 11.666ZM4.16667 12.3327C4.16667 11.2281 5.0621 10.3327 6.16667 10.3327C7.27124 10.3327 8.16667 11.2281 8.16667 12.3327C8.16667 13.4373 7.27124 14.3327 6.16667 14.3327C5.0621 14.3327 4.16667 13.4373 4.16667 12.3327Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5 11.666C12.1318 11.666 11.8333 11.9645 11.8333 12.3327C11.8333 12.7009 12.1318 12.9993 12.5 12.9993C12.8682 12.9993 13.1667 12.7009 13.1667 12.3327C13.1667 11.9645 12.8682 11.666 12.5 11.666ZM10.5 12.3327C10.5 11.2281 11.3954 10.3327 12.5 10.3327C13.6046 10.3327 14.5 11.2281 14.5 12.3327C14.5 13.4373 13.6046 14.3327 12.5 14.3327C11.3954 14.3327 10.5 13.4373 10.5 12.3327Z"
                  fill="white"
                />
              </svg>
            </span>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
