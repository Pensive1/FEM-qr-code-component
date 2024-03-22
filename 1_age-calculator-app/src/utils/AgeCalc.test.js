import detailedAge from "./AgeCalc";
import { test, expect } from "vitest";

test("Returns my current age", () => {
  const dob = { day: 9, month: 8, year: 1989 };
  const birthDate = new Date(dob.year, dob.month - 1, dob.day);
  const currentDate = new Date();

  const dateDiff = currentDate.getTime() - birthDate.getTime();
  const yearMs = 1000 * 60 * 60 * 24 * 365;
  const monthMs = yearMs / 12;
  const dayMs = 1000 * 60 * 60 * 24;

  const yearDiff = Math.floor(dateDiff / yearMs);
  const monthDiff = Math.floor((dateDiff % yearMs) / monthMs);
  const dayDiff = Math.floor((dateDiff % monthMs) / dayMs);

  expect(detailedAge(dob.day, dob.month, dob.year)).toEqual({
    years: yearDiff,
    months: monthDiff,
    days: dayDiff,
  });
});

test("Subtract from current year if year is less than 100", () => {
  const currentYear = new Date().getFullYear();
  const year = 10;

  expect(detailedAge(1, 1, year)).toEqual({
    years: currentYear - year,
    months: 3,
    days: 17,
  });
});

test("Return 'null' if date is invalid", () => {
  expect(detailedAge(29, 2, 2023)).toBeNull();
});

test("Return 'null' if any or all values aren't numbers", () => {
  expect(detailedAge("e1", 1, 1990)).toBeNull();
});
