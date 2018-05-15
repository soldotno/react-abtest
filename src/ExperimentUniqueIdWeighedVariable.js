import { createHash, totalWeight, getWeighedIndex, customRange } from './utils';

const ExperimentUniqueIdWeighedVariable = ({ experimentName, uid, weights, variants, logger }) => {
  if (variants.length === 0) {
    return null;
  }

  const hash = createHash(uid + experimentName);
  const totWeight = totalWeight(weights);
  const hashFloat = parseFloat(`0.${hash}`);
  const rangeVal = customRange(hashFloat, 0.0, totWeight);
  const variant = getWeighedIndex(weights, rangeVal);
  const VariantComponent = variants[variant];

  if (logger && typeof logger === 'function') {
    logger(variant);
  }

  return VariantComponent;
};

export default ExperimentUniqueIdWeighedVariable;
