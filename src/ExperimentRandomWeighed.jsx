import PropTypes from 'prop-types';
import React from 'react';
import { randomFloat, totalWeight, getWeighedIndex } from './utils';

const ExperimentRandomWeighed = ({ weights, variants }) => {
  if (variants.length === 0 || weights.length === 0) {
    return null;
  }

  if (variants.length !== weights.length) {
    return null;
  }

  const totWeight = totalWeight(weights);
  const random = randomFloat(0, totWeight);
  const variant = getWeighedIndex(random, weights);
  const VariantComponent = variant ? variants[variant] : null;

  return VariantComponent ? <VariantComponent /> : null;
}

ExperimentRandomWeighed.propTypes = {
  weights: PropTypes.array.isRequired,
  variants: PropTypes.array.isRequired,
};

export default ExperimentRandomWeighed;
