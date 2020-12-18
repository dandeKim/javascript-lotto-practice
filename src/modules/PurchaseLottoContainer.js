import { purchasedAmountHTML, lottoNumbersHTML } from "../utils/templates.js";

class PurchaseLottoContainer {
  constructor($container, getAmount, setPurchasedLotto) {
    this.$container = $container;
    this.getAmount = getAmount;
    this.setPurchasedLotto = setPurchasedLotto;
  }

  printPurchasedAmount = () => {
    this.$container.innerHTML = purchasedAmountHTML(this.getAmount());
  };

  render = () => {
    this.printPurchasedAmount();
  };
}

export default PurchaseLottoContainer;
