import React from "react";
import "./style.css";
import Header from "../header";

const Index = ({ children, account, loadWeb3 }) => {
  return (
    <div className="flex flex-col min-h-screen h-auto">
      <Header account={account} loadWeb3={loadWeb3} />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Index;
