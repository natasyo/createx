"use client";
import React from "react";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import {
  GetProductsDocument,
  OrderEnum,
  ProductsOrderByEnum,
} from "@/generatesTypes/gql/graphql";
import Product, { ProductsType } from "@/components/Products/Product";
import { ProductsCarousel } from "@/components/Products/ProductsCarousel";
import { Loading } from "@/components/Loading/Loading";
import product from "@/components/Products/Product";

function TrendingProducts() {
  const { data, loading } = useQuery(GetProductsDocument, {
    variables: {
      first: 20,
      orderby: [{ field: ProductsOrderByEnum.Name, order: OrderEnum.Desc }],
    },
    errorPolicy: "all",
  });
  if (loading) return <Loading />;
  if (data) console.log(data.products);
  return (
    <ProductsCarousel>
      {data?.products &&
        data.products?.nodes?.map((product) => (
          <Product product={product as ProductsType} key={product.id} />
        ))}
    </ProductsCarousel>
  );
}

export default TrendingProducts;
