export function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

export function totalWeight(weights) {
  return weights.reduce((prev, cur) => prev + cur);
}

export function createHash(str) {
  let i = 0;
  let hash = 0;

  for (i; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
  }

  return hash >>> 0;
}
