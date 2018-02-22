import PropTypes from 'prop-types';
import React from 'react';

import { createHash, totalWeight, getWeighedIndex, customRange } from './utils';

const ExperimentUniqueIdWeighed = ({ experimentName, uid, weights, variants}) => {
  if (variants.length === 0) {
    return null;
  }

  const hash = createHash(uid + experimentName);
  const totWeight = totalWeight(weights);
  const hashFloat = parseFloat(`0.${hash}`);
  const rangeVal = customRange(hashFloat, 0.0, totWeight);
  const variant = getWeighedIndex(weights, rangeVal);
  const VariantComponent = variant ? variants[variant] : null;

  return VariantComponent ? <VariantComponent /> : null;
};

ExperimentUniqueIdWeighed.propTypes = {
  experimentName: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  weights: PropTypes.array.isRequired,
  variants: PropTypes.array.isRequired,
};

export default ExperimentUniqueIdWeighed;