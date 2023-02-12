import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="bg-primary-black overflow-hidden scrollbar-hide">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
