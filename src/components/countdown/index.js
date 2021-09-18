import "./style.css";

const Timer = ({ days, hours, minutes, seconds }) => {
  console.log(hours.toString().padStart(2));
  return (
    <div className="border-2 border-primary py-5   w-full  rounded-lg dark:text-gray-50">
      <h6 className="text-center text-md relative pb-5">ICO ends in</h6>
      <div className="mx-auto mt-3 text-center font-bold ">
        <p>{`${days.toString().padStart(2, "0")}d : ${hours
          .toString()
          .padStart(2, "0")}h  :  ${minutes
          .toString()
          .padStart(2, "0")}m  :  ${seconds.toString().padStart(2, "0")}s`}</p>
      </div>
    </div>
  );
};

export default Timer;
