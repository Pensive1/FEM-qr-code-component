import { useRef } from "react";
import { DOBInput } from "../types/ComponentProps";
import detailedAge from "../utils/AgeCalc";

const DobInput = ({
  setResultYears,
  setResultMonths,
  setResultDays,
}: DOBInput) => {
  const dobYear = useRef<HTMLInputElement>(null);
  const dobMonth = useRef<HTMLInputElement>(null);
  const dobDay = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const inputValidation =
      dobYear.current?.value &&
      dobMonth.current?.value &&
      dobDay.current?.value;

    if (inputValidation) {
      const yearVal = +dobYear.current?.value;
      const monthVal = +dobMonth.current?.value;
      const dayVal = +dobDay.current?.value;

      const result = detailedAge(dayVal, monthVal, yearVal);
      setResultYears(result.years);
      setResultMonths(result.months);
      setResultDays(result.days);
    }
  };

  return (
    <form action="submit" className="dob" onSubmit={handleSubmit}>
      <fieldset className="dob__fields">
        <label className="dob__field-label" htmlFor="dobDay">
          Day
        </label>
        <input
          type="number"
          placeholder="DD"
          className="dob_input"
          id="dobDay"
          ref={dobDay}
          min={1}
          max={31}
        ></input>
      </fieldset>

      <fieldset className="dob__fields">
        <label className="dob__field-label" htmlFor="dobMonth">
          Month
        </label>
        <input
          type="number"
          placeholder="MM"
          className="dob_input"
          id="dobMonth"
          ref={dobMonth}
          min={1}
          max={12}
        ></input>
      </fieldset>

      <fieldset className="dob__fields">
        <label className="dob__field-label" htmlFor="dobYear">
          Year
        </label>
        <input
          type="number"
          placeholder="YYYY"
          className="dob_input"
          ref={dobYear}
          id="dobYear"
          min={1}
        ></input>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DobInput;
