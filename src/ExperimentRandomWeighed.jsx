import PropTypes from 'prop-types';
import React from 'react';
import { randomFloat, totalWeight, getWeighedIndex } from './utils';

const ExperimentRandomWeighed = ({ weights, variants, logger }) => {
  if (variants.length === 0 || weights.length === 0) {
    return null;
  }

  if (variants.length !== weights.length) {
    return null;
  }

  const totWeight = totalWeight(weights);
  const random = randomFloat(0, totWeight);
  const variant = getWeighedIndex(weights, random);
  const VariantComponent = variants[variant];

  if (logger && typeof logger === 'function') {
    logger(variant);
  }

  return VariantComponent;
}

ExperimentRandomWeighed.propTypes = {
  weights: PropTypes.array.isRequired,
  variants: PropTypes.array.isRequired,
  logger: PropTypes.func,
};

export default ExperimentRandomWeighed;
