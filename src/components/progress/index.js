import React from "react";
import "./style.css";

const Index = ({ value = 20, days = 20 }) => {
  return (
    <div className="my-4 mb-6 dark:text-gray-50 capitalize">
      <div className="flex justify-between items-center">
        <span>$6m</span>
        <span>50m</span>
      </div>
      <div className="progress my-1 border-2 border-gray-500">
        <div
          className="progress-value  bg-primary "
          style={{ width: value + "%" }}
        ></div>
      </div>
      <div className="flex justify-between items-center">
        <span>softcop in {days} days</span>
        <span>Hardcop</span>
      </div>
    </div>
  );
};

export default Index;
