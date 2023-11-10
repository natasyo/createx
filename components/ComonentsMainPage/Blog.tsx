"use client";
import React from "react";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GetPostsDocument } from "@/generatesTypes/gql/graphql";
import Post from "@/components/Posts/Post";
import { Loading } from "@/components/Loading/Loading";
import { Button } from "@/components/ui/Button";

function Blog() {
  const { data, loading } = useQuery(GetPostsDocument, {
    variables: {
      first: 2,
    },
  });
  if (loading) return <Loading />;
  return (
    <div className={`container mx-auto px-3`}>
      <div className={`flex justify-between items-center mb-15`}>
        <p className={`font-black text-4.8xl`}>Fashion blog</p>
        <Button
          className={"!h-11 !mb-0"}
          href={`/blog`}
          typeColor={`basicOutline`}
        >
          View blog
        </Button>
      </div>

      <div className={`grid lg:grid-cols-2 gap-7.5 lg:mb-21.25 mb-0`}>
        {data &&
          data.posts &&
          data.posts.edges.map((post) => (
            <Post
              post={post.node}
              key={post.node.guid}
              className={`shadow-md mb-16 lg:mb-0`}
            />
          ))}
      </div>
    </div>
  );
}

export default Blog;
