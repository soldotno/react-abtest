import { createHash, totalWeight, getWeighedIndex, customRange } from './utils';

const experimentUniqueIdWeighedGroup = ({ experimentName, uid, weights,  logger }) => {
  if (weights.length === 0) {
    return null;
  }

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

export default experimentUniqueIdWeighedGroup;
