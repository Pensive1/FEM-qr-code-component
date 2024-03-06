import { Result } from "../../types/ComponentProps";
import "./Results-styles.scss";

const Results = ({ resultYears, resultMonths, resultDays }: Result) => {
  return (
    <section className="age">
      <p className="age__data">
        <span className="age__value">
          {resultYears !== null ? resultYears : "--"}
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
