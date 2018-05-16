import { createHash, totalWeight, getWeighedIndex, customRange } from './utils';

const ExperimentUniqueIdWeighedVariable = ({ experimentName, uid, weights,  logger }) => {

  const hash = createHash(uid + experimentName);
  const totWeight = totalWeight(weights);
  const hashFloat = parseFloat(`0.${hash}`);
  const rangeVal = customRange(hashFloat, 0.0, totWeight);
  const variant = getWeighedIndex(weights, rangeVal);

  if (logger && typeof logger === 'function') {
    logger(variant);
  }

  return variant;
};

export default ExperimentUniqueIdWeighedVariable;
