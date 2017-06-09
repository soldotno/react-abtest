export function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

export function customRange(num, min, max) {
  return num * (max - min) + min;
}

export function totalWeight(weights) {
  return weights.reduce((prev, cur) => prev + cur);
}

export function getWeighedIndex(weights, stopValue) {
  let sum = 0;
  let index = null;

  weights.some((weight, i) => {
    sum += weight;

    if (stopValue <= sum) {
      index = i;
      return true;
    }

    return false;
  });

  return index;
}

export function createHash(str) {
  let i = 0;
  let hash = 0;

  for (i; i < str.length; i++) {
    hash = str.charCodeAt(i) + (hash << 6) + (hash << 16) - hash;
  }

  return hash >>> 0;
}
