// src/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/custom/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* This renders the matched child route */}
    </>
  );
};

export default Layout;
