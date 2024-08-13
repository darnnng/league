import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "components/compositions";
import { Loader } from "components/ui";
import { ModalsContainer } from "components/compositions";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ModalsContainer />
    </>
  );
};
