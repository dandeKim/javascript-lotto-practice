import { NUMBER } from "../utils/constants.js";

const purchasedAmountHTML = amount => {
  return `<p>${amount}개를 구매했습니다.</p>`;
};

const lottoNumbersHTML = lottoNumbersArray => {
  const listElements =
    lottoNumbersArray.reduce((list, number) => {
      return list + `<li>${number}</li>\n`;
    }, "<ul>") + "</ul>";

  return listElements;
};

const gameResultTitleHTML = () => {
  return `<h3>당첨 통계</h3>`;
};

const gameResultHTML = resultObject => {
  return `
    <ul>
      <li>3개 일치(${NUMBER.THREE_MATCHED_PRIZE}원)- ${resultObject[3]}개</li>
      <li>4개 일치(${NUMBER.FOUR_MATCHED_PRIZE}원)- ${resultObject[4]}개</li>
      <li>5개 일치(${NUMBER.FIVE_MATCHED_PRIZE}원)- ${resultObject[5]}개</li>
      <li>5개 일치, 보너스 볼 일치(${NUMBER.FIVE_MATCHED_AND_BONUS_PRIZE}원)- ${resultObject[5.5]}개</li>
      <li>6개 일치(${NUMBER.ALL_MATCHED_PRIZE}원)- ${resultObject[6]}개</li>
    </ul>
  `;
};

const getStatisticsHTML = number => {
  return `총 수익률은 ${number}입니다.`;
};

export {
  purchasedAmountHTML,
  lottoNumbersHTML,
  gameResultTitleHTML,
  gameResultHTML,
  getStatisticsHTML,
};
