import { randomFloat, totalWeight, getWeighedIndex } from './utils';
const ExperimentRandomWeighedVariable = ({ weights, variants, logger }) => {
  if (variants.length === 0 || weights.length === 0) {
    return null;
  }

  if (variants.length !== weights.length) {
    return null;
  }
  const totWeight = totalWeight(weights);
  const random = randomFloat(0, totWeight);
  const variant = getWeighedIndex(weights, random);
  const VariantVariable = variants[variant];

  if (logger && typeof logger === 'function') {
    logger(variant);
  }

  return VariantVariable;
}

export default ExperimentRandomWeighedVariable;
