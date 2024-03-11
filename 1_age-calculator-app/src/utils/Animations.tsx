const countUp = (
  targetVal: number,
  uiUpdateFn: Function,
  speed: number = 90
) => {
  const steps = Math.floor(targetVal / 3) > 0 ? Math.floor(targetVal / 3) : 1;
  const remainder = steps > 0 ? targetVal % steps : 0;
  const softTargetVal = targetVal - remainder;
  let startVal = 0;

  //   (State set function) resets per function call
  uiUpdateFn(startVal);

  const counter = setInterval(() => {
    // For testing calculation output
    // console.log(
    //   `start val: ${startVal}, Soft target: ${softTargetVal}, Target: ${targetVal}`
    // );

    if (startVal < softTargetVal) {
      uiUpdateFn((startVal += steps));
      return;
    }

    if (startVal >= softTargetVal && startVal !== targetVal) {
      uiUpdateFn(++startVal);
    }

    if (startVal === targetVal) {
      clearInterval(counter);
    }
  }, speed);

  return counter;
};

export default countUp;
