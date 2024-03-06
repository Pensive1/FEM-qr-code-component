/* RUNS ON SUBMIT */
// If date is invalid (eg 31/02/2000) -> Must be a valid date

//full date validation
export const checkFullDate = (day: string, month: string, year: string) => {
  // 1. All values can be converted to numbers -> isNan(+val)
  if ([+day, +month, +year].every((val) => isNaN(val))) {
    return false;
  }

  // 2. if date is incorrect (30/2/2024) -> check that the month matches the reference month
  const dateLimits = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dayNum = +day;
  const monthNum = +month - 1;
  const yearNum = +year;
  const leapYear =
    (yearNum % 4 === 0 && yearNum % 100 !== 0) || yearNum % 400 === 0;

  if (monthNum === 1 && !leapYear && dayNum === 29) {
    return false;
  }

  if (dayNum > dateLimits[monthNum]) {
    return false;
  }

  // 3. if full date is ahead of current date -> setYearErr("Must be in the past")
  return true;
};
