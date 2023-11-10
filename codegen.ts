import type { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.URL,
  documents: ["documents/**/*.graphql"],
  // ignoreNoDocuments: true,
  generates: {
    "generatesTypes/gql/": {
      preset: "client",
    },
  },
  ignoreNoDocuments: true,
};

export default config;
