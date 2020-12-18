import PurchaseAmountForm from "./PurchaseAmountForm.js";
import PurchaseLottoContainer from "./PurchaseLottoContainer.js";
import LastLottoNumberContainer from "./LastLottoNumberContainer.js";
import LastBonusNumberContainer from "./LastBonusNumberContainer.js";
import GameResultContainer from "./GameResultContainer.js";

import { hideElement, showElement } from "../utils/domUtils.js";

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
    this.purchaseLottoContainer = new PurchaseLottoContainer(
      this.$purchasedLottoContainer,
      this.getAmount,
      this.setPurchasedLotto
    );
    this.lastLottoNumberContainer = new LastLottoNumberContainer(
      this.setLastLottoNumber
    );
    this.lastBonusNumberContainer = new LastBonusNumberContainer(
      this.getLastLottoNumber,
      this.setLastBonusNumber
    );
    this.gameResultContainer = new GameResultContainer(
      this.$lottoGameResultContainer,
      this.getState
    );
  };

  resetState = () => {
    this.state = {
      lottoAmount: 0,
      purchasedLotto: [],
      lastLottoNumber: [],
      lastBonusNumber: 0,
    };
  };

  getAmount = () => {
    return this.state.lottoAmount;
  };

  getLastLottoNumber = () => {
    return [...this.state.lastLottoNumber];
  };

  getState = () => {
    return this.state;
  };

  setLottoAmount = amount => {
    this.state.lottoAmount = amount;

    showElement(this.$purchasedLottoContainer);
    showElement(this.$lastLottoNumberContainer);
    this.purchaseLottoContainer.render();
  };

  setPurchasedLotto = lottoList => {
    this.state.purchasedLotto = lottoList;
  };

  setLastLottoNumber = numberList => {
    this.state.lastLottoNumber = numberList;

    showElement(this.$lastBonusNumberContainer);
  };

  setLastBonusNumber = number => {
    this.state.lastBonusNumber = number;

    showElement(this.$lottoGameResultContainer);
    this.gameResultContainer.render();
  };

  render = () => {
    this.getDOMElements();
    this.resetDOMElements();
    this.resetState();
    this.createComponents();
  };
}

export default LottoGame;
