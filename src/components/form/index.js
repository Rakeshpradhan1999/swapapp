import React from "react";
import Button from "../button";
import "./style.css";
import Mamba from "../../assets/images/Mamba.png";
import Eth from "../../assets/images/ETH.png";
import Bnb from "../../assets/images/logo.png";

const Index = () => {
  return (
    <div
      className="w-full mt-10 dark:text-gray-50 dark:bg-dark rounded-xl"
      style={{ boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.16)" }}
    >
      <h6 className="text-sm font-medium py-3 px-5 uppercase border-b-2 border-gary-400 dark:border-lightBorder">
        Swap
      </h6>
      <form action="" className="max-w-sm mx-auto px-4 pt-3 pb-8">
        <div className="mt-8">
          <Field />
          <span className="block text-center text-base my-2">
            <i className="fas fa-arrow-down"></i>
          </span>
          <Field label1="Receive (Estimated)" icon={Bnb} name="BNB" />
          <span className="block text-xs mt-2 text-gray-500 text-center">
            1 ETH = 0.1 BNB
          </span>
          <div className="mt-8">
            <Button secondary={true}>Connect Wallet</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Index;

const Field = ({
  label1 = "Pay",
  icon = Eth,
  name = "Eth",
  balance = "00",
}) => (
  <div className="">
    <div className="text-sm flex justify-between items-center mb-2">
      <span className="font-medium">{label1}</span>
      <span className=" text-xs dark:text-gray-400">
        Available balance : {balance}
      </span>
    </div>
    <div className="h-14 w-full rounded-xl field">
      <input
        type="text"
        className="h-full w-full rounded-xl dark:bg-mainDark bg-transparent border border-gray-400"
      />
      <div className="currency">
        <img src={icon} alt="" className="w-5 mr-2" />
        <span className="text-xs uppercase dark:text-gray-50">{name}</span>
      </div>
    </div>
  </div>
);
