import PropTypes from 'prop-types';
import React from 'react';

import { createHash } from './utils';

const ExperimentUniqueId = ({ experimentName, uid, variants, logger }) => {
  if (variants.length === 0) {
    return null;
  }

  const hash = createHash(uid + experimentName);
  const variant = hash % variants.length;
  const VariantComponent = variants[variant];

  if (logger && typeof logger === 'function') {
    logger(variant);
  }

  return VariantComponent;
};

ExperimentUniqueId.propTypes = {
  experimentName: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  variants: PropTypes.array.isRequired,
  logger: PropTypes.func,
};

export default ExperimentUniqueId;
