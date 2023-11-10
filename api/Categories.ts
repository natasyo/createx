import { getClient } from "@/api/ApolloClient";
import {
  GetCategoriesDocument,
  OrderEnum,
  TermObjectsConnectionOrderbyEnum,
} from "@/generatesTypes/gql/graphql";

export async function getCategories(parent: number, first?: 6) {
  const { data, loading, errors } = await getClient().query({
    query: GetCategoriesDocument,
    variables: {
      parent,
      first,
    },
  });
  const categories = data.productCategories?.nodes;
  return { categories, loading, errors };
}

export async function getPopularCategories(count: number) {
  const { data, errors } = await getClient().query({
    query: GetCategoriesDocument,
    variables: {
      orderby: TermObjectsConnectionOrderbyEnum.TermOrder,
      order: OrderEnum.Asc,
      first: count,
      childless: true,
    },
  });
  if (errors) throw new DOMException("Database error");
  return { categories: data.productCategories?.nodes };
}
