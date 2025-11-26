import React from "react";
import Headers from "./Ui/Headers";
import Footer from "./Ui/Footer";
import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
}

export default Applayout;
