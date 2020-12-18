import { hideElement } from "../utils/domUtils.js";
import PurchaseAmountForm from "./PurchaseAmountForm.js";

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
      "#lotto-game-result"
    );
  };

  resetDOMElements = () => {
    hideElement(this.$purchasedLottoContainer);
    hideElement(this.$lastLottoNumberContainer);
    hideElement(this.$lastBonusNumberContainer);
    hideElement(this.$lottoGameResultContainer);
  };

  createComponents = () => {
    this.purchaseAmountForm = new PurchaseAmountForm(this.setLottoAmount);
  };

  resetState = () => {
    this.state = {
      lottoAmount: 0,
      purchasedLotto: [],
      lastLottoNumber: [],
      lastBonusNumber: 0,
    };
  };

  setLottoAmount = amount => {
    this.state.lottoAmount = amount;
  };

  render = () => {
    this.getDOMElements();
    this.resetDOMElements();
    this.resetState();
    this.createComponents();
  };
}

export default LottoGame;
