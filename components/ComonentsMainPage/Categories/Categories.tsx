// @flow
import * as React from "react";
import { getCategories } from "@/api/Categories";
import { Loading } from "@/components/Loading/Loading";
import { Category } from "@/components/ComonentsMainPage/Categories/Category";

export async function Categories() {
  const { categories, errors, loading } = await getCategories(15);

  if (loading) return <Loading />;
  if (errors) return <p>Error</p>;
  return (
    <div
      className={`container px-7.5 grid gap-7.5 lg:grid-cols-3 mx-auto lg:-mt-15 mt-15 relative xl:mb-45 lg:mb-35 mb-20`}
    >
      {categories?.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </div>
  );
}
