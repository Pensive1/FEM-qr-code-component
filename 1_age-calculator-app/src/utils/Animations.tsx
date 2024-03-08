const countUp = (
  targetVal: number,
  uiUpdateFn: Function
  //   uiRef: React.MutableRefObject<undefined>
) => {
  //1 Fetch the existing value (from dom)
  // 2. Start from 0
  const steps = 3;
  let startVal = 0;
  const remainder = targetVal % steps;
  const softTargetVal = targetVal - remainder;

  //   reset per function call
  uiUpdateFn(startVal);

  const counter = setInterval(() => {
    // for number of steps -> increase by steps
    console.log(
      `start val: ${startVal}, Soft target: ${softTargetVal}, Target: ${targetVal}`
    );

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
  }, 30);

  return counter;

  // ----------------------

  // const spd = 97;
  // const inc = targetVal / spd;

  // if (startVal < targetVal){

  // }
};

export default countUp;
