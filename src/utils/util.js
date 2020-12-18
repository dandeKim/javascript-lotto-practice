import { NUMBER } from "./constants.js";

const getRandomNumber = () => {
  return (
    Math.floor(Math.random() * NUMBER.MAX_LOTTO_NUMBER) +
    NUMBER.MIN_LOTTO_NUMBER
  );
};

const getLottoNumberLists = amount => {
  const lottoLists = [];
  const lottoSet = new Set();

  while (amount > 0) {
    lottoSet.add(getRandomNumber());

    if (lottoSet.size === NUMBER.TOTAL_LOTTO_LENGTH) {
      lottoLists.push([...lottoSet]);
      lottoSet.clear();
      amount--;
    }
  }

  return lottoLists;
};

export { getLottoNumberLists };
