/* RUNS ON SUBMIT */

//full date validation
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
