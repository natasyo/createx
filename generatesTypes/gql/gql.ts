/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetCategories($parent: Int, $first: Int, $order: OrderEnum, $orderby: TermObjectsConnectionOrderbyEnum, $childless: Boolean) {\n  productCategories(\n    where: {parent: $parent, order: $order, orderby: $orderby, childless: $childless}\n    first: $first\n  ) {\n    nodes {\n      slug\n      image {\n        altText\n        title\n        mediaItemUrl\n        mediaDetails {\n          height\n          width\n        }\n        slug\n        parentDatabaseId\n        guid\n      }\n      uri\n      name\n      id\n    }\n  }\n}": types.GetCategoriesDocument,
    "query GetCategory($id: ID!, $idType: ProductCategoryIdType, $after: String, $before: String, $first: Int, $last: Int) {\n  productCategory(id: $id, idType: $idType) {\n    products(after: $after, first: $first, before: $before, last: $last) {\n      nodes {\n        name\n        sku\n        slug\n        id\n        ... on SimpleProduct {\n          id\n          name\n          uri\n          price\n          salePrice\n        }\n        image {\n          mediaDetails {\n            height\n            width\n          }\n          guid\n          parent {\n            node {\n              id\n            }\n          }\n        }\n        type\n        onSale\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n}": types.GetCategoryDocument,
    "query GetHeaderMenu($id: ID!) {\n  menu(id: $id, idType: DATABASE_ID) {\n    menuItems {\n      edges {\n        node {\n          label\n          path\n        }\n      }\n    }\n  }\n}": types.GetHeaderMenuDocument,
    "query GetPosts($first: Int, $orderby: [PostObjectsConnectionOrderbyInput]) {\n  posts(first: $first, where: {orderby: $orderby}) {\n    edges {\n      node {\n        guid\n        title\n        date\n        excerpt\n        featuredImage {\n          node {\n            altText\n            mediaDetails {\n              width\n              height\n            }\n            mediaItemUrl\n          }\n        }\n        categories {\n          edges {\n            node {\n              name\n              uri\n            }\n          }\n        }\n        commentCount\n        uri\n      }\n    }\n  }\n}": types.GetPostsDocument,
    "query GetProducts($onSale: Boolean = false, $orderby: [ProductsOrderbyInput], $last: Int, $first: Int, $before: String, $after: String) {\n  products(\n    where: {onSale: $onSale, orderby: $orderby}\n    last: $last\n    before: $before\n    first: $first\n    after: $after\n  ) {\n    nodes {\n      name\n      sku\n      slug\n      id\n      ... on SimpleProduct {\n        id\n        name\n        uri\n        price\n        salePrice\n        regularPrice\n      }\n      image {\n        mediaDetails {\n          height\n          width\n        }\n        guid\n        parent {\n          node {\n            id\n          }\n        }\n      }\n      type\n      onSale\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}": types.GetProductsDocument,
    "mutation RegisterUser($email: String, $firstName: String, $username: String!, $password: String) {\n  registerUser(\n    input: {username: $username, email: $email, firstName: $firstName, password: $password}\n  ) {\n    user {\n      id\n      username\n    }\n  }\n}": types.RegisterUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCategories($parent: Int, $first: Int, $order: OrderEnum, $orderby: TermObjectsConnectionOrderbyEnum, $childless: Boolean) {\n  productCategories(\n    where: {parent: $parent, order: $order, orderby: $orderby, childless: $childless}\n    first: $first\n  ) {\n    nodes {\n      slug\n      image {\n        altText\n        title\n        mediaItemUrl\n        mediaDetails {\n          height\n          width\n        }\n        slug\n        parentDatabaseId\n        guid\n      }\n      uri\n      name\n      id\n    }\n  }\n}"): (typeof documents)["query GetCategories($parent: Int, $first: Int, $order: OrderEnum, $orderby: TermObjectsConnectionOrderbyEnum, $childless: Boolean) {\n  productCategories(\n    where: {parent: $parent, order: $order, orderby: $orderby, childless: $childless}\n    first: $first\n  ) {\n    nodes {\n      slug\n      image {\n        altText\n        title\n        mediaItemUrl\n        mediaDetails {\n          height\n          width\n        }\n        slug\n        parentDatabaseId\n        guid\n      }\n      uri\n      name\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCategory($id: ID!, $idType: ProductCategoryIdType, $after: String, $before: String, $first: Int, $last: Int) {\n  productCategory(id: $id, idType: $idType) {\n    products(after: $after, first: $first, before: $before, last: $last) {\n      nodes {\n        name\n        sku\n        slug\n        id\n        ... on SimpleProduct {\n          id\n          name\n          uri\n          price\n          salePrice\n        }\n        image {\n          mediaDetails {\n            height\n            width\n          }\n          guid\n          parent {\n            node {\n              id\n            }\n          }\n        }\n        type\n        onSale\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n}"): (typeof documents)["query GetCategory($id: ID!, $idType: ProductCategoryIdType, $after: String, $before: String, $first: Int, $last: Int) {\n  productCategory(id: $id, idType: $idType) {\n    products(after: $after, first: $first, before: $before, last: $last) {\n      nodes {\n        name\n        sku\n        slug\n        id\n        ... on SimpleProduct {\n          id\n          name\n          uri\n          price\n          salePrice\n        }\n        image {\n          mediaDetails {\n            height\n            width\n          }\n          guid\n          parent {\n            node {\n              id\n            }\n          }\n        }\n        type\n        onSale\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetHeaderMenu($id: ID!) {\n  menu(id: $id, idType: DATABASE_ID) {\n    menuItems {\n      edges {\n        node {\n          label\n          path\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetHeaderMenu($id: ID!) {\n  menu(id: $id, idType: DATABASE_ID) {\n    menuItems {\n      edges {\n        node {\n          label\n          path\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPosts($first: Int, $orderby: [PostObjectsConnectionOrderbyInput]) {\n  posts(first: $first, where: {orderby: $orderby}) {\n    edges {\n      node {\n        guid\n        title\n        date\n        excerpt\n        featuredImage {\n          node {\n            altText\n            mediaDetails {\n              width\n              height\n            }\n            mediaItemUrl\n          }\n        }\n        categories {\n          edges {\n            node {\n              name\n              uri\n            }\n          }\n        }\n        commentCount\n        uri\n      }\n    }\n  }\n}"): (typeof documents)["query GetPosts($first: Int, $orderby: [PostObjectsConnectionOrderbyInput]) {\n  posts(first: $first, where: {orderby: $orderby}) {\n    edges {\n      node {\n        guid\n        title\n        date\n        excerpt\n        featuredImage {\n          node {\n            altText\n            mediaDetails {\n              width\n              height\n            }\n            mediaItemUrl\n          }\n        }\n        categories {\n          edges {\n            node {\n              name\n              uri\n            }\n          }\n        }\n        commentCount\n        uri\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProducts($onSale: Boolean = false, $orderby: [ProductsOrderbyInput], $last: Int, $first: Int, $before: String, $after: String) {\n  products(\n    where: {onSale: $onSale, orderby: $orderby}\n    last: $last\n    before: $before\n    first: $first\n    after: $after\n  ) {\n    nodes {\n      name\n      sku\n      slug\n      id\n      ... on SimpleProduct {\n        id\n        name\n        uri\n        price\n        salePrice\n        regularPrice\n      }\n      image {\n        mediaDetails {\n          height\n          width\n        }\n        guid\n        parent {\n          node {\n            id\n          }\n        }\n      }\n      type\n      onSale\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}"): (typeof documents)["query GetProducts($onSale: Boolean = false, $orderby: [ProductsOrderbyInput], $last: Int, $first: Int, $before: String, $after: String) {\n  products(\n    where: {onSale: $onSale, orderby: $orderby}\n    last: $last\n    before: $before\n    first: $first\n    after: $after\n  ) {\n    nodes {\n      name\n      sku\n      slug\n      id\n      ... on SimpleProduct {\n        id\n        name\n        uri\n        price\n        salePrice\n        regularPrice\n      }\n      image {\n        mediaDetails {\n          height\n          width\n        }\n        guid\n        parent {\n          node {\n            id\n          }\n        }\n      }\n      type\n      onSale\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RegisterUser($email: String, $firstName: String, $username: String!, $password: String) {\n  registerUser(\n    input: {username: $username, email: $email, firstName: $firstName, password: $password}\n  ) {\n    user {\n      id\n      username\n    }\n  }\n}"): (typeof documents)["mutation RegisterUser($email: String, $firstName: String, $username: String!, $password: String) {\n  registerUser(\n    input: {username: $username, email: $email, firstName: $firstName, password: $password}\n  ) {\n    user {\n      id\n      username\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;