"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import {
  GetCategoryDocument,
  ProductCategoryIdType,
} from "@/generatesTypes/gql/graphql";
import Product, { ProductsType } from "@/components/Products/Product";
import InfiniteScroll from "@/components/ui/Scroll/InfiniteScroll";
import { Loading } from "@/components/Loading/Loading";

function Page({ params }: { params: { slug: string[] } }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data, loading, error, fetchMore } = useQuery(GetCategoryDocument, {
    variables: {
      id: `/product-category/${params.slug.join("/")}`,
      idType: ProductCategoryIdType.Uri,
      first: 6,
    },
  });
  const products =
    data &&
    data.productCategory &&
    data.productCategory.products &&
    data.productCategory.products;

  function loadProducts() {
    setIsLoading(true);
    const length = products ? products.nodes.length : 0;
    (async () => {
      await fetchMore({
        variables: {
          after: products && products.pageInfo.endCursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          console.log(fetchMoreResult);
          if (!fetchMoreResult) return prev;
          return Object.assign({}, prev, {
            productCategory: {
              ...fetchMoreResult.productCategory,
              products: {
                ...fetchMoreResult.productCategory!.products,
                nodes: [
                  ...prev.productCategory!.products!.nodes,
                  ...fetchMoreResult.productCategory!.products!.nodes,
                ],
              },
            },
          });
        },
      });
      setIsLoading(false);
    })();
  }

  if (error) return <p>error</p>;
  if (loading) return <Loading />;
  if (products) {
    return (
      <InfiniteScroll
        onBottomHit={loadProducts}
        loadOnMount={true}
        isLoading={isLoading}
        hasMoreData={products.pageInfo.hasNextPage}
      >
        {loading && <p>Нет товаров</p>}
        {
          <div className={`grid grid-cols-3 gap-8`}>
            {products.nodes.map((product) => (
              <Product product={product as ProductsType} key={product.id} />
            ))}
          </div>
        }
      </InfiniteScroll>
    );
  } else return <p>Not fount products</p>;
}

export default Page;
