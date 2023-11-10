"use client";
// @flow
import * as React from "react";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GetProductsDocument } from "@/generatesTypes/gql/graphql";
import { Loading } from "@/components/Loading/Loading";
import Product, { ProductsType } from "@/components/Products/Product";
import { ProductsCarousel } from "@/components/Products/ProductsCarousel";

export function SaleProducts() {
  const { data, loading } = useQuery(GetProductsDocument, {
    variables: {
      first: 15,
      onSale: true,
    },
  });
  if (loading) return <Loading />;
  return (
    <>
      <ProductsCarousel>
        {data &&
          data.products &&
          data.products.nodes.map((product) => (
            <Product product={product as ProductsType} key={product.id} />
          ))}
      </ProductsCarousel>
    </>
  );
}
