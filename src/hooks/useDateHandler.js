import {useState} from "react";

const useDateHandler = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleOnDateChange = (changeDirection) => {
    let newDate = null;
    if (changeDirection === "left") {
      newDate = currentDate.setDate(currentDate.getDate() - 1);
      setCurrentDate(new Date(newDate));
    }
    if (changeDirection === "right") {
      newDate = currentDate.setDate(currentDate.getDate() + 1);
      setCurrentDate(new Date(newDate));
    }
  };

  return {currentDate, handleOnDateChange}
};

export default useDateHandler;
