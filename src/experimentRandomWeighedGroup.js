import { randomFloat, totalWeight, getWeighedIndex } from './utils';

const experimentRandomWeighedGroup = ({ weights, logger }) => {
  if (weights.length === 0) {
    return null;
  }

  const totWeight = totalWeight(weights);
  const random = randomFloat(0, totWeight);
  const variant = getWeighedIndex(weights, random);

  if (logger && typeof logger === 'function') {
    logger(variant);
  }

  return variant;
}

export default experimentRandomWeighedGroup;
