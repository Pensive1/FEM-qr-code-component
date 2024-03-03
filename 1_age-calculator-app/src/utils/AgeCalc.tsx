const detailedAge = (day: number, month: number, year: number) => {
  const birthDate = new Date(year, month - 1, day);
  const dateDiff = new Date().getTime() - birthDate.getTime();

  //Millisecond Calcs
  const yearMs = 1000 * 60 * 60 * 24 * 365;
  const monthMs = yearMs / 12;
  const dayMs = 1000 * 60 * 60 * 24;

  const yearDiff = Math.floor(dateDiff / yearMs);
  const monthDiff = Math.floor((dateDiff % yearMs) / monthMs);
  const dayDiff = Math.floor((dateDiff % monthMs) / dayMs);

  return { years: yearDiff, months: monthDiff, days: dayDiff };
};

export default detailedAge;
