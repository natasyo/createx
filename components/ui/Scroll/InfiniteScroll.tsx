"use client";
import React, {
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { Loading } from "@/components/Loading/Loading";

type Props = {
  children: ReactNode;
  loadOnMount?: boolean;
  isLoading?: boolean;
  hasMoreData?: boolean;
  initialLoad?: boolean;
  onBottomHit: () => void;
};
function isBottom(ref: RefObject<HTMLDivElement>) {
  if (!ref.current) return false;
  console.log(ref.current.getBoundingClientRect().bottom, window.innerHeight);
  return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
}
function InfiniteScroll({
  children,
  onBottomHit,
  hasMoreData,
  isLoading,
}: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  let i = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (!isLoading && isBottom(contentRef) && hasMoreData) {
        onBottomHit();
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [onBottomHit, isLoading, hasMoreData]);

  return (
    <>
      <div ref={contentRef}>{children}</div>
      {isLoading && <Loading />}
    </>
  );
}

export default InfiniteScroll;
