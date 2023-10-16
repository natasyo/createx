import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://taask.atwebpages.com/graphql",
  documents: ["documents/**/*.graphql"],
  // ignoreNoDocuments: true,
  generates: {
    "generatesTypes/gql/": {
      preset: "client",
    },
  },
};

export default config;
