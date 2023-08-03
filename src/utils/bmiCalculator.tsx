export const bmiCalculator = (
  weight: number,
  height: number,
  bmiFactor: number
) => {
  return (weight / height / height) * bmiFactor;
};

export const minMaxWeight = (
  bmiMinMaxValue: number,
  bmiFactor: number,
  height: number
) => {
  return (bmiMinMaxValue / bmiFactor) * height * height;
};
