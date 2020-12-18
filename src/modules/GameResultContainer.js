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

  render = () => {
    this.resetResult();
    this.setCurrentState();
  };
}

export default GameResultContainer;
