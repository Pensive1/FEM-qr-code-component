import { useRef, useState } from "react";
import { DOBInput } from "../../types/ComponentProps";
import detailedAge from "../../utils/AgeCalc";
import "./DobInput-styles.scss";

const DobInput = ({
  setResultYears,
  setResultMonths,
  setResultDays,
}: DOBInput) => {
  const dobYear = useRef<HTMLInputElement>(null);
  const dobMonth = useRef<HTMLInputElement>(null);
  const dobDay = useRef<HTMLInputElement>(null);
  const dobForm = useRef<HTMLFormElement>(null);

  const [dateErr, setDateErr] = useState("");
  const [monthErr, setMonthErr] = useState("");
  const [yearErr, setYearErr] = useState("");

  // Field validations (onFocusOut)
  const dateCheck = () => {
    const dateField = dobDay.current;
    const dateVal = Number(dateField?.value);
    const invalidDate = dateVal === 0 || !(dateVal > 0) || !(dateVal <= 31);

    if (dateField?.value === "") {
      return setDateErr("This field is required");
    }

    if (invalidDate) {
      return setDateErr("Must be a valid day");
    }
    setDateErr("");
  };

  const monthCheck = () => {
    const monthField = dobMonth.current;
    const monthVal = Number(monthField?.value);
    const invalidMonth = monthVal === 0 || !(monthVal > 0) || !(monthVal <= 12);
    if (monthField?.value === "") {
      return setMonthErr("This field is required");
    }

    if (invalidMonth) {
      return setMonthErr("Must be a valid month");
    }
    setMonthErr("");
  };
  const yearCheck = () => {
    const yearField = dobYear.current;
    const yearVal = Number(yearField?.value);
    const invalidYear = yearVal > new Date().getFullYear();
    if (yearField?.value === "") {
      return setYearErr("This field is required");
    }

    if (invalidYear) {
      return setYearErr("Must be in the past");
    }

    if (yearVal <= 0) {
      return setYearErr("Invalid year");
    }
    setYearErr("");
  };
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    // console.dir(dobYear.current);

    const noErrors =
      dobYear.current &&
      dateErr === "" &&
      dobMonth.current &&
      monthErr === "" &&
      dobDay.current &&
      yearErr === "";

    if (noErrors) {
      const yearVal = +dobYear.current?.value;
      const monthVal = +dobMonth.current?.value;
      const dayVal = +dobDay.current?.value;

      const result = detailedAge(dayVal, monthVal, yearVal);
      setResultYears(result.years);
      setResultMonths(result.months);
      setResultDays(result.days);
    } else {
      setResultYears(null);
      setResultMonths(null);
      setResultDays(null);
    }
  };

  return (
    <form action="submit" className="dob" onSubmit={handleSubmit} ref={dobForm}>
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
          onBlur={dateCheck}
          onChange={dateCheck}
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
          onBlur={monthCheck}
          onChange={monthCheck}
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
          onBlur={yearCheck}
          onChange={yearCheck}
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
