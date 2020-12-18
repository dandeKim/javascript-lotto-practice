import { isValidBonusNumber } from "../utils/validations.js";

class LastBonusNumberContainer {
  constructor(getLastLottoNumber, setLastBonusNumber) {
    this.getLastLottoNumber = getLastLottoNumber;
    this.setLastBonusNumber = setLastBonusNumber;
    this.render();
  }

  handleSubmitButton = event => {
    event.preventDefault();
    const $input = document.querySelector("#last-bonus-number-input");
    const bonusNumber = Number($input.value);

    if (!isValidBonusNumber($input, bonusNumber, this.getLastLottoNumber())) {
      return;
    }

    this.setLastBonusNumber(bonusNumber);
  };

  render = () => {
    const $submitButton = document.querySelector("#last-bonus-number-button");
    $submitButton.addEventListener("click", this.handleSubmitButton);
  };
}

export default LastBonusNumberContainer;
