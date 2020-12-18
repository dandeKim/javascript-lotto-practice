import { isValidLastLottoNumbers } from "../utils/validations.js";

class LastLottoNumberContainer {
  constructor(setLastLottoNumber) {
    this.setLastLottoNumber = setLastLottoNumber;
    this.render();
  }

  handleSubmitButton = event => {
    event.preventDefault();
    const $input = document.querySelector("#last-lotto-number-input");
    const lottoNumbers = $input.value
      .split(",")
      .map(number => Number(number.trim()));

    if (!isValidLastLottoNumbers($input, lottoNumbers)) {
      return;
    }

    this.setLastLottoNumber(lottoNumbers);
  };

  render = () => {
    const $submitButton = document.querySelector("#last-lotto-number-button");
    $submitButton.addEventListener("click", this.handleSubmitButton);
  };
}

export default LastLottoNumberContainer;
