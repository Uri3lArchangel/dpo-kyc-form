import Head from "next/head";
import React, { ReactNode, Suspense } from "react";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

interface Props {
  children: ReactNode;
}

function Rootlayout({ children }: Props) {
  return (
    <>
      <header>
        <Topbar />
      </header>
         <main style={{paddingTop:'7em'}}>{children}</main>

      <Footer />
    </>
  );
}

export default Rootlayout;
