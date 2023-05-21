import { useState } from "react";

export default function useClock() {
  const [time, setTime] = useState();
  const [day, setDay] = useState();

  const updateTime = () => {
    let dayInfo = new Date();
    let hour = 0;
    if (dayInfo.getHours() == 0) {
      hour = 12;
    } else if (dayInfo.getHours() > 12) {
      hour = dayInfo.getHours() - 12;
    } else {
      hour = dayInfo.getHours();
    }
    let minute =
      dayInfo.getMinutes() < 10
        ? "0" + dayInfo.getMinutes()
        : dayInfo.getMinutes();
    let second =
      dayInfo.getSeconds() < 10
        ? "0" + dayInfo.getSeconds()
        : dayInfo.getSeconds();

    let day = dayInfo.getHours() >= 12 ? "PM" : "AM";

    setTime(hour + ":" + minute + ":" + second);
    setDay(day);
  };

  setInterval(() => {
    updateTime();
  }, 1000);
  return [time, day];
}
