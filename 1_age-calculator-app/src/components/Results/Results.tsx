import { useEffect, useRef, useState } from "react";
import { Result } from "../../types/ComponentProps";
import countUp from "../../utils/Animations";
import "./Results-styles.scss";

const Results = ({ resultYears, resultMonths, resultDays }: Result) => {
  const [yearCounter, setYearCounter] = useState(0);
  const [monthCounter, setMonthCounter] = useState(0);
  const [dayCounter, setDayCounter] = useState(0);

  // let yearHandler = useRef<undefined | number>();
  let yearHandler: number;
  let monthHandler: number;
  let dayHandler: number;

  const countYears = () => {
    if (resultYears) {
      yearHandler = countUp(resultYears, setYearCounter);
      return yearCounter === resultYears && clearInterval(yearHandler);
    }
  };

  const countMonths = () => {
    if (resultMonths) {
      yearHandler = countUp(resultMonths, setMonthCounter);
      return yearCounter === resultMonths && clearInterval(monthHandler);
    }
  };

  const countDays = () => {
    if (resultDays) {
      yearHandler = countUp(resultDays, setDayCounter);
      return dayCounter === resultDays && clearInterval(dayHandler);
    }
  };

  useEffect(() => {
    const counters = [countYears, countMonths, countDays];

    // Stagger function calls
    counters.forEach((fn, i) => {
      setTimeout(fn, i * 200);
    });
  }, [resultYears, resultMonths, resultDays]);

  return (
    <section className="age">
      <p className="age__data">
        <span className="age__value">
          {resultYears !== null ? yearCounter : "--"}
        </span>{" "}
        <span className="age__unit">years</span>
      </p>
      <p className="age__data">
        <span className="age__value">
          {resultMonths !== null ? monthCounter : "--"}
        </span>{" "}
        <span className="age__unit">months</span>
      </p>
      <p className="age__data">
        <span className="age__value">
          {resultDays !== null ? dayCounter : "--"}
        </span>{" "}
        <span className="age__unit">days</span>
      </p>
    </section>
  );
};

export default Results;
