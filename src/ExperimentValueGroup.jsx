import PropTypes from 'prop-types';
import React from 'react';

const ExperimentValueGroup = ({ userGroup, variants }) => {
  let VariantComponent = null;

  variants.some((variant) => {
    if (typeof variant.group === 'number') {
      if (variant.group === userGroup) {
        VariantComponent = variant.component;
        return true;
      }
    }

    if (typeof variant.group === 'string') {
      const range = variant.group.split('-').map(num => parseInt(num, 10));

      if (userGroup >= range[0] && userGroup <= range[1]) {
        VariantComponent = variant.component;
        return true;
      }
    }

    return false;
  });

  return VariantComponent ? <VariantComponent /> : null;
}

ExperimentValueGroup.propTypes = {
  userGroup: PropTypes.number.isRequired,
  variants: PropTypes.array.isRequired,
};

export default ExperimentValueGroup;
