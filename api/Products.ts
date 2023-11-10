import { getClient } from "@/api/ApolloClient";
import { GetProductsDocument } from "@/generatesTypes/gql/graphql";

export async function getProducts(count: number) {
  const { data, loading, errors } = await getClient().query({
    query: GetProductsDocument,
    variables: {
      first: count,
    },
  });
  return { data, loading, errors };
}
