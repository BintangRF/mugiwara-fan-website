"use client";

import React, { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useCrews } from "@/hooks/useGetCrews";
import { LoadingCover } from "@/components/LoadingCover";
import { useStories } from "@/hooks/useGetStories";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useCrews.useGet();
  const { isLoading: isLoadingStories } = useStories.useGet();

  if (isLoading || isLoadingStories) {
    return <LoadingCover />;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
