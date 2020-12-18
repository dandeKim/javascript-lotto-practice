import { purchasedAmountHTML, lottoNumbersHTML } from "../utils/templates.js";
import { getLottoNumberLists } from "../utils/util.js";

class PurchaseLottoContainer {
  constructor($container, getAmount, setPurchasedLotto) {
    this.$container = $container;
    this.getAmount = getAmount;
    this.setPurchasedLotto = setPurchasedLotto;
  }

  printPurchasedAmount = () => {
    this.$container.innerHTML = purchasedAmountHTML(this.amount);
  };

  printLottoNumbers = () => {
    this.lottoLists.forEach(lottoList => {
      this.$container.innerHTML += lottoNumbersHTML(lottoList);
    });
  };

  setLottoLists = () => {
    this.lottoLists = getLottoNumberLists(this.amount);
    this.setPurchasedLotto(this.lottoLists);
  };

  render = () => {
    this.amount = this.getAmount();
    this.setLottoLists();
    this.printPurchasedAmount();
    this.printLottoNumbers();
  };
}

export default PurchaseLottoContainer;
