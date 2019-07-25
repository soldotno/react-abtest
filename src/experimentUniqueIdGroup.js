import { createHash } from './utils';

const experimentUniqueIdGroup = ({ experimentName, uid, groups, logger }) => {
  if (groups === 0) {
    return null;
  }

  const hash = createHash(uid + experimentName);
  const group = hash % groups;

  if (logger && typeof logger === 'function') {
    logger(group);
  }

  return group;
};

export default experimentUniqueIdGroup;
