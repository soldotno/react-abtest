import React from 'react';
import { randomInteger } from './utils';

const ExperimentRandom = ({ variants }) => {
  if (variants.length === 0) {
    return null;
  }

  const random = randomInteger(0, variants.length-1);
  let VariantComponent = variants[random];

  return <VariantComponent />;
}

export default ExperimentRandom;
