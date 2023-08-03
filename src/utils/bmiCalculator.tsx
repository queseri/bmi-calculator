export const bmiCalculator = (
  weight: number,
  height: number,
  bmiFactor: number
) => {
  return (weight / height / height) * bmiFactor;
};
