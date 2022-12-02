import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import dayjs from "dayjs";

function App() {
  const [startTime, setStartTime] = useState<dayjs.Dayjs | number>(0);
  const [passedTime, setPassedTime] = useState(0);
  var interval: number | undefined;

  const commafy = (num: number) => {
    var str = num.toString().split(":");
    if (str[0].length >= 4) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1:");
    }
    if (str[1] && str[1].length >= 4) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(":");
  };

  const startCounting = () => {
    setStartTime(dayjs());
  };

  const stopCounting = () => {
    clearInterval(interval);
  };

  // const resetCounting = () => {
  //   setPassedTime(0);
  //   setStartTime(0);
  // };

  useEffect(() => {
    if (startTime === 0) {
      setPassedTime(0);
    } else {
      interval = setInterval(() => {
        let currentTime = dayjs();
        setPassedTime(currentTime.diff(startTime));
        console.log(passedTime);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [startTime, passedTime]);

  return (
    <div className="App">
      <h1>Time Count Challenge</h1>
      <p>try to aim for 10 second as close as possible!</p>

      <div className="time-pass"></div>

      <div>
        <h1>{commafy(passedTime)}</h1>
      </div>

      <div className="comments">{}</div>

      <div>
        <button onClick={startCounting}>Start</button>
        <button onClick={stopCounting}>Stop!</button>
        {/* <button onClick={resetCounting}>Reset</button> */}
      </div>
    </div>
  );
}

export default App;
