import { useState } from "react";

const useDateHandler = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [timeFrequency, setTimeFrequency] = useState("daily");


  const handleOnDayDateChange = (changeDirection) => {
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

  const handleOnMonthDateChange = (changeDirection) => {
    let newDate = null;
    if (changeDirection === "left") {
      newDate = currentDate.setMonth(currentDate.getMonth() - 1);
      setCurrentDate(new Date(newDate));
    }
    if (changeDirection === "right") {
      newDate = currentDate.setMonth(currentDate.getMonth() + 1);
      setCurrentDate(new Date(newDate));
    }
  };

  const handleOnYearDateChange = (changeDirection) => {
    let newDate = null;
    if (changeDirection === "left") {
      newDate = currentDate.setFullYear(currentDate.getFullYear() - 1);
      setCurrentDate(new Date(newDate));
    }
    if (changeDirection === "right") {
      newDate = currentDate.setFullYear(currentDate.getFullYear() + 1);
      setCurrentDate(new Date(newDate));
    }
  };

  const timeFrequencyMap = {
    daily: handleOnDayDateChange,
    monthly: handleOnMonthDateChange,
    yearly: handleOnYearDateChange,
  }

  const handleOnDateChange = timeFrequencyMap[timeFrequency];


  const handleOnChangeTimeFrequency = (frequency) => {
    setTimeFrequency(frequency);
  };

  return {
    currentDate,
    timeFrequency,
    handleOnDateChange,
    handleOnChangeTimeFrequency
  };
};

export default useDateHandler;
