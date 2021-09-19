import React from "react";
import "./style.css";
import Header from "../header";

const Index = ({ children, account, loadWeb3 }) => {
  return (
    <>
      <Header account={account} loadWeb3={loadWeb3} />
      <div>{children}</div>
    </>
  );
};

export default Index;
