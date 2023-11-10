"use client";
import React from "react";
import { TextBox } from "@/components/ui/TextBox";
import { Button } from "@/components/ui/Button";
import CheckButton from "@/components/ui/CheckButton";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GetCategoriesDocument } from "@/generatesTypes/gql/graphql";
import CheckBox from "@/components/ui/CheckBox";

type Props = {
  withCategories?: boolean;
  classNameContainer?: string;
  classNameInput?: string;
};
function Subscribe({
  withCategories,
  classNameContainer,
  classNameInput,
}: Props) {
  const { data } = useQuery(GetCategoriesDocument, {
    variables: {
      parent: 15,
    },
  });
  return (
    <div>
      {withCategories && data && (
        <div className={`mb-8`}>
          {data.productCategories &&
            data.productCategories.nodes.map((category) => {
              return (
                <CheckButton
                  name={`category`}
                  label={category.name!}
                  key={category.id}
                  className={`mr-3`}
                  value={category.slug!}
                  onChange={(event) => {
                    console.log((event.target as HTMLInputElement).value);
                  }}
                />
              );
            })}
        </div>
      )}
      <form className={`flex items-end  ${classNameContainer}`}>
        <TextBox
          type={"text"}
          label={`Email`}
          className={`${classNameInput} flex-grow max-w-[495px]`}
          classNameInput={` rounded-r-none text-red-50 h-11 w-57.5`}
        />
        <Button className={`!h-11 px-8 rounded-l-none`}>Subscribe</Button>
      </form>
      {withCategories ? (
        <CheckBox
          label={`I agree to receive communications from Createx Store.`}
        />
      ) : (
        <p className={`mt-5 text-sm text-gray-800 leading-normal max-w-90`}>
          *Sign up to be the first to hear about exclusive deals, special offers
          and upcoming collections.
        </p>
      )}
    </div>
  );
}

export default Subscribe;
