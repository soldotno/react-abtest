import { randomInteger } from './utils';

const experimentRandomGroup = ({ groups, logger }) => {
    if (groups === 0) {
        return null;
      }
    
      const group = randomInteger(0, groups-1);
    
      if (logger && typeof logger === 'function') {
        logger(group);
      }
    
      return group;
}

export default experimentRandomGroup;
