import { NUMBER } from "../utils/constants.js";
import {
  gameResultHTML,
  gameResultTitleHTML,
  getStatisticsHTML,
} from "../utils/templates.js";
import { getLottoResult, getStatisticsResult } from "../utils/util.js";

class GameResultContainer {
  constructor($lottoGameResultContainer, getState) {
    this.$lottoGameResultContainer = $lottoGameResultContainer;
    this.getState = getState;
  }

  resetResult = () => {
    this.result = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
    };
    this.totalPrize = 0;
  };

  setCurrentState = () => {
    const {
      lottoAmount,
      purchasedLotto,
      lastLottoNumber,
      lastBonusNumber,
    } = this.getState();

    this.lottoAmount = lottoAmount;
    this.purchasedLotto = purchasedLotto;
    this.lastLottoNumber = lastLottoNumber;
    this.lastBonusNumber = lastBonusNumber;
  };

  setGameResult = () => {
    this.purchasedLotto.forEach(lottoList => {
      let matchedNumber = getLottoResult(this.lastLottoNumber, lottoList);

      if (
        matchedNumber === NUMBER.CHECK_BONUS_NUMBER_STANDARD &&
        lottoList.includes(this.lastBonusNumber)
      ) {
        matchedNumber += NUMBER.MATCHED_BONUS_NUMBER_POINT;
      }

      if (matchedNumber >= NUMBER.MIN_MATCHED_LENGTH) {
        this.result[matchedNumber]++;
        this.setTotalPrize(matchedNumber);
      }
    });
  };

  setTotalPrize = matchedNumber => {
    switch (matchedNumber) {
      case 3:
        this.totalPrize += NUMBER.THREE_MATCHED_PRIZE;
        break;

      case 4:
        this.totalPrize += NUMBER.FOUR_MATCHED_PRIZE;
        break;

      case 5:
        this.totalPrize += NUMBER.FIVE_MATCHED_PRIZE;
        break;

      case 5.5:
        this.totalPrize += NUMBER.FIVE_MATCHED_AND_BONUS_PRIZE;
        break;

      case 6:
        this.totalPrize += NUMBER.ALL_MATCHED_PRIZE;

      // no default
    }
  };

  printGameResult = () => {
    this.$lottoGameResultContainer.innerHTML =
      gameResultTitleHTML() +
      gameResultHTML(this.result) +
      getStatisticsHTML(getStatisticsResult(this.totalPrize, this.lottoAmount));
  };

  render = () => {
    this.resetResult();
    this.setCurrentState();
    this.setGameResult();
    this.printGameResult();
  };
}

export default GameResultContainer;
