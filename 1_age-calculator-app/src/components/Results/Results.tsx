import { useEffect, useRef, useState } from "react";
import { Result } from "../../types/ComponentProps";
import countUp from "../../utils/Animations";
import "./Results-styles.scss";

const Results = ({ resultYears, resultMonths, resultDays }: Result) => {
  const [yearCounter, setYearCounter] = useState(0);
  const [monthCounter, setMonthCounter] = useState(0);
  const [dayCounter, setDayCounter] = useState(0);

  let yearHandler = useRef<undefined | number>();

  const countYears = () => {
    if (resultYears) {
      yearHandler.current = countUp(resultYears, setYearCounter);
      return () =>
        yearCounter === resultYears && clearInterval(yearHandler.current);
    }
  };

  useEffect(() => {
    countYears();
  }, [resultYears]);

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
          {resultMonths !== null ? resultMonths : "--"}
        </span>{" "}
        <span className="age__unit">months</span>
      </p>
      <p className="age__data">
        <span className="age__value">
          {resultDays !== null ? resultDays : "--"}
        </span>{" "}
        <span className="age__unit">days</span>
      </p>
    </section>
  );
};

export default Results;
