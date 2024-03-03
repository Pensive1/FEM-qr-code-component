import { Result } from "../types/ComponentProps";

const Results = ({ resultYears, resultMonths, resultDays }: Result) => {
  return (
    <section className="age">
      <p className="age__data">
        <span className="age__year">{resultYears ? resultYears : "--"}</span>{" "}
        years
      </p>
      <p className="age__data">
        <span className="age__months">
          {resultMonths ? resultMonths : "--"}
        </span>{" "}
        months
      </p>
      <p className="age__data">
        <span className="age__days">{resultDays ? resultDays : "--"}</span> days
      </p>
    </section>
  );
};

export default Results;
