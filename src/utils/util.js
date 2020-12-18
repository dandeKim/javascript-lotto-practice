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
      lottoLists.push([...lottoSet].sort((a, b) => a - b));
      lottoSet.clear();
      amount--;
    }
  }

  return lottoLists;
};

const getLottoResult = (lastLottoNumberList, purchasedLottoList) => {
  const correctNumbers = purchasedLottoList.filter(number =>
    lastLottoNumberList.includes(number)
  );

  return correctNumbers.length;
};

const getStatisticsResult = (totalPrize, amount) => {
  return totalPrize / (amount * NUMBER.LOTTO_PRICE);
};

export { getLottoNumberLists, getLottoResult, getStatisticsResult };
