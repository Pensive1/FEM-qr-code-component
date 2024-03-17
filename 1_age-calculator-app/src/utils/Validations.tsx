import { fieldRef, fnErrMsg } from "../types/ValidationUtils";

// DATE VALIDATION
export const dateCheck = (fieldRef: fieldRef, fnErrMsg: fnErrMsg) => {
  const dateField = fieldRef.current;
  const dateVal = Number(dateField?.value);
  const invalidDate = dateVal === 0 || !(dateVal > 0) || !(dateVal <= 31);

  if (dateField?.value === "") {
    return fnErrMsg("This field is required");
  }

  if (invalidDate) {
    return fnErrMsg("Must be a valid day");
  }
  fnErrMsg("");
};

// MONTH VALIDATION
export const monthCheck = (fieldRef: fieldRef, fnErrMsg: fnErrMsg) => {
  const monthField = fieldRef.current;
  const monthVal = Number(monthField?.value);
  const invalidMonth = monthVal === 0 || !(monthVal > 0) || !(monthVal <= 12);
  if (monthField?.value === "") {
    return fnErrMsg("This field is required");
  }

  if (invalidMonth) {
    return fnErrMsg("Must be a valid month");
  }
  fnErrMsg("");
};

// YEAR VALIDATION
export const yearCheck = (fieldRef: fieldRef, fnErrMsg: fnErrMsg) => {
  const yearField = fieldRef.current;
  const yearVal = Number(yearField?.value);
  const invalidYear = yearVal > new Date().getFullYear();
  if (yearField?.value === "") {
    return fnErrMsg("This field is required");
  }

  if (invalidYear) {
    return fnErrMsg("Must be in the past");
  }

  if (yearVal <= 0) {
    return fnErrMsg("Invalid year");
  }
  fnErrMsg("");
};

//full date validation -> RUNS ON SUBMIT
export const checkFullDate = (day: string, month: string, year: string) => {
  // 1. All values can be converted to numbers -> isNan(+val)
  if ([+day, +month, +year].some((val) => isNaN(val))) {
    return false;
  }

  // 2. if date is incorrect (30/2/2024) -> check that the month matches the reference month
  const dayNum = +day;
  const monthNum = +month - 1;
  const yearNum = +year;
  const leapYear =
    (yearNum % 4 === 0 && yearNum % 100 !== 0) || yearNum % 400 === 0;
  const dateLimits = [
    31,
    leapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  if (
    monthNum < 0 ||
    monthNum > 11 ||
    dayNum < 1 ||
    dayNum > dateLimits[monthNum]
  ) {
    return false;
  }

  // 3. if full date is ahead of current date -> setYearErr("Must be in the past")
  const queryDate = new Date(yearNum, monthNum, dayNum);
  if (queryDate > new Date()) {
    return false;
  }

  return true;
};
