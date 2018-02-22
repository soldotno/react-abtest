import PropTypes from 'prop-types';
import React from 'react';
import { randomInteger } from './utils';

const ExperimentRandom = ({ variants, logger }) => {
  if (variants.length === 0) {
    return null;
  }

  const random = randomInteger(0, variants.length-1);
  const VariantComponent = variants[random];

  if (logger && typeof logger === 'function') {
    logger(random);
  }

  return <VariantComponent />;
}

ExperimentRandom.propTypes = {
  variants: PropTypes.array.isRequired,
};

export default ExperimentRandom;
