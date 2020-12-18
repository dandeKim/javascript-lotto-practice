import { NUMBER } from "../utils/constants.js";
import { gameResultHTML, gameResultTitleHTML } from "../utils/templates.js";
import { getLottoResult } from "../utils/util.js";

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
  };

  setCurrentState = () => {
    const {
      purchasedLotto,
      lastLottoNumber,
      lastBonusNumber,
    } = this.getState();

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
      }
    });
  };

  printGameResult = () => {
    this.$lottoGameResultContainer.innerHTML =
      gameResultTitleHTML() + gameResultHTML(this.result);
  };

  render = () => {
    this.resetResult();
    this.setCurrentState();
    this.setGameResult();
    this.printGameResult();
  };
}

export default GameResultContainer;
