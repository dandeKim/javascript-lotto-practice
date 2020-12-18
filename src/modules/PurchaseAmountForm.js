import { NUMBER } from "../utils/constants.js";
import { isVaildPurchaseAmount } from "../utils/validations.js";

class PurchaseAmountForm {
  constructor(setLottoAmount) {
    this.setLottoAmount = setLottoAmount;
    this.render();
  }

  handleSubmitButton = event => {
    event.preventDefault();
    const $input = document.querySelector("#purchase-amount-input");
    const amount = Number($input.value);

    if (!isVaildPurchaseAmount($input, amount)) {
      return;
    }

    this.setLottoAmount(amount / NUMBER.LOTTO_PRICE);
  };

  render = () => {
    const $submitButton = document.querySelector("#purchase-amount-button");
    $submitButton.addEventListener("click", this.handleSubmitButton);
  };
}

export default PurchaseAmountForm;
