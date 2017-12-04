export default function getValueFeedback(values) {
  const currentValue = values[Object.keys(values).length-1];
  const lastWeekValue = values[0];
  const feedback = currentValue >= lastWeekValue ? 'positive' : 'negative';

  return { currentValue, lastWeekValue, feedback };
}
