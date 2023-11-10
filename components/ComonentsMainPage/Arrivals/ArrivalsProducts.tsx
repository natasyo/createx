import React from "react";

import Product, { ProductsType } from "@/components/Products/Product";
import { ArrivalCarousel } from "@/components/ComonentsMainPage/Arrivals/ArrivalCarousel";
import { getProducts } from "@/api";

async function ArrivalsProducts() {
  const { data } = await getProducts(10);
  return (
    <ArrivalCarousel>
      {data.products &&
        data.products.nodes?.map((product) => (
          <Product
            product={product as ProductsType}
            key={product.id}
            className={`xl:mb-20 lg:mb-15 mb-10`}
          />
        ))}
    </ArrivalCarousel>
  );
}

export default ArrivalsProducts;
