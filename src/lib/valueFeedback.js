export const FEEDBACK = {
  POSITIVE: { CLASSNAME: 'positive', COLOR: '#26e2a7' },
  NEGATIVE: { CLASSNAME: 'negative', COLOR: '#EF5350' },
};

export default function getValueFeedback(values) {
  const currentValue = values[Object.keys(values).length - 1];
  const lastWeekValue = values[0];
  const feedback = currentValue >= lastWeekValue
    ? FEEDBACK.POSITIVE.CLASSNAME
    : FEEDBACK.NEGATIVE.CLASSNAME;

  return { currentValue, lastWeekValue, feedback };
}
