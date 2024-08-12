import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../ui/header";
import { Loader } from "../primitives/loader";
import { modalService } from "@/services/modals";
import React from "react";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
