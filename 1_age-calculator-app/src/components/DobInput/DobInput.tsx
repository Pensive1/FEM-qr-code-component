import { useRef, useState } from "react";
import { DOBInput } from "../../types/ComponentProps";
import detailedAge from "../../utils/AgeCalc";
import {
  checkFullDate,
  dateCheck,
  monthCheck,
  yearCheck,
} from "../../utils/Validations";
import "./DobInput-styles.scss";

const DobInput = ({
  setResultYears,
  setResultMonths,
  setResultDays,
}: DOBInput) => {
  const dobYear = useRef<HTMLInputElement>(null);
  const dobMonth = useRef<HTMLInputElement>(null);
  const dobDay = useRef<HTMLInputElement>(null);

  const [dateErr, setDateErr] = useState("");
  const [monthErr, setMonthErr] = useState("");
  const [yearErr, setYearErr] = useState("");

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    const yearField = dobYear.current;
    const monthField = dobMonth.current;
    const dayField = dobDay.current;

    const filledFields = yearField && monthField && dayField;
    const noErrors =
      filledFields && [dateErr, monthErr, yearErr].some((err) => err === "");

    const isValidDate =
      filledFields &&
      checkFullDate(dayField?.value, monthField?.value, yearField?.value);

    if (noErrors && isValidDate) {
      const yearVal = +yearField.value;
      const monthVal = +monthField.value;
      const dayVal = +dayField.value;

      const result = detailedAge(dayVal, monthVal, yearVal);
      setResultYears(result.years);
      setResultMonths(result.months);
      setResultDays(result.days);
    } else {
      setDateErr("Must be a valid date");
      setResultYears(null);
      setResultMonths(null);
      setResultDays(null);
    }
  };

  return (
    <form action="submit" className="dob" onSubmit={handleSubmit}>
      <fieldset className="dob__fields">
        <p className="dob__field-err">{dateErr}</p>
        <input
          type="number"
          placeholder="DD"
          className="dob__input"
          id="dobDay"
          ref={dobDay}
          // min={1}
          // max={31}
          onBlur={() => dateCheck(dobDay, setDateErr)}
          onChange={() => dateCheck(dobDay, setDateErr)}
        ></input>
        <label className="dob__field-label" htmlFor="dobDay">
          Day
        </label>
      </fieldset>

      <fieldset className="dob__fields">
        <p className="dob__field-err">{monthErr}</p>
        <input
          type="number"
          placeholder="MM"
          className="dob__input"
          id="dobMonth"
          ref={dobMonth}
          // min={1}
          // max={12}
          onBlur={() => monthCheck(dobMonth, setMonthErr)}
          onChange={() => monthCheck(dobMonth, setMonthErr)}
        ></input>
        <label className="dob__field-label" htmlFor="dobMonth">
          Month
        </label>
      </fieldset>

      <fieldset className="dob__fields">
        <p className="dob__field-err">{yearErr}</p>
        <input
          type="number"
          placeholder="YYYY"
          className="dob__input"
          ref={dobYear}
          id="dobYear"
          // min={1}
          // max={new Date().getFullYear()}
          onBlur={() => yearCheck(dobYear, setYearErr)}
          onChange={() => yearCheck(dobYear, setYearErr)}
        ></input>
        <label className="dob__field-label" htmlFor="dobYear">
          Year
        </label>
      </fieldset>
      <button type="submit" className="dob__submit"></button>
    </form>
  );
};

export default DobInput;
