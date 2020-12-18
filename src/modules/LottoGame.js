import { hideElement } from "../utils/domUtils.js";

class LottoGame {
  constructor() {
    this.render();
  }

  getDOMElements = () => {
    this.$purchasedLottoContainer = document.querySelector(
      "#purchased-lotto-container"
    );
    this.$lastLottoNumberContainer = document.querySelector(
      "#last-lotto-number-container"
    );
    this.$lastBonusNumberContainer = document.querySelector(
      "#last-bonus-number-container"
    );
    this.$lottoGameResultContainer = document.querySelector(
      "#llotto-game-result"
    );
  };

  resetDOMElements = () => {
    hideElement(this.$purchasedLottoContainer);
    hideElement(this.$lastLottoNumberContainer);
    hideElement(this.$lastBonusNumberContainer);
    hideElement(this.$lottoGameResultContainer);
  };

  resetState = () => {
    this.state = {
      lottoAmount: 0,
      purchasedLotto: [],
      lastLottoNumber: [],
      lastBonusNumber: 0,
    };
  };

  render = () => {
    this.getDOMElements();
    this.resetDOMElements();
    this.resetState();
  };
}

export default LottoGame;
