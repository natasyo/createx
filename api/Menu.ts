import { getClient } from "@/api/ApolloClient";
import {
  GetHeaderMenuDocument,
  GetHeaderMenuQuery,
} from "@/generatesTypes/gql/graphql";

export type TMenu = NonNullable<
  NonNullable<GetHeaderMenuQuery["menu"]>["menuItems"]
>["edges"][0];
export async function getHeaderMenu(id: string) {
  const { data, errors, loading } = await getClient().query({
    query: GetHeaderMenuDocument,
    variables: {
      id,
    },
  });
  const menu: TMenu[] | undefined = data.menu?.menuItems?.edges;
  return { menu, errors, loading };
}
