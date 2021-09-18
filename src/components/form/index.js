import React from "react";
import Button from "../button";
import "./style.css";
import Mamba from "../../assets/images/Mamba.png";
import Eth from "../../assets/images/ETH.png";

const Index = () => {
  return (
    <div
      className="w-full  mt-10 dark:text-gray-50 dark:bg-dark rounded-xl"
      style={{ boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.16)" }}
    >
      <h6
        style={{ borderBottom: "1px solid" }}
        className=" p-4 uppercase border-darkBorder dark:border-lightBorder"
      >
        Swap
      </h6>
      <form action="" className="max-w-sm mx-auto px-4 py-8">
        <div className="mb-4 field">
          <label htmlFor="eth" className="block ">
            From
          </label>
          <div className="curr uppercase dark:bg-mainDark">
            <img src={Eth} alt="eth" />
            <p>ETH</p>
          </div>
          <input type="text" name="eth" />
        </div>
        <span className="block text-center text-base">
          <i className="fas fa-arrow-down"></i>
        </span>
        <div className="mt-4  field">
          <label htmlFor="eth" className="block ">
            To
          </label>
          <div className="curr uppercase dark:bg-mainDark">
            <img src={Mamba} alt="eth" />
            <p>Mamba</p>
          </div>
          <input type="text" name="eth" />
        </div>
        <div className="mt-8">
          <Button secondary={true}>Connect Wallet</Button>
        </div>
      </form>
    </div>
  );
};

export default Index;
