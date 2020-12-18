import { ALERT, NUMBER } from "./constants.js";
import { showAlertMessage } from "./domUtils.js";

const isVaildPurchaseAmount = ($input, amount) => {
  const isPurchasedMoreThanOne = amount >= NUMBER.LOTTO_PRICE;
  const isVaildAmount = amount % 1000 === 0;

  if (!isPurchasedMoreThanOne) {
    showAlertMessage($input, ALERT.PURCHASE_NOTHING);
  }

  if (!isVaildAmount) {
    showAlertMessage($input, ALERT.INVALID_PURCHASE_AMOUNT);
  }

  return isPurchasedMoreThanOne && isVaildAmount;
};

const isUniqueSet = array => {
  const uniqueSet = new Set(array);

  return array.length === uniqueSet.size;
};

const isValidLottoNumber = numberList => {
  const validNumberList = numberList.filter(
    number =>
      number >= NUMBER.MIN_LOTTO_NUMBER && number <= NUMBER.MAX_LOTTO_NUMBER
  );

  return validNumberList.length === numberList.length;
};

const isValidLastLottoNumbers = ($input, numberList) => {
  const isUniqueNumberList = isUniqueSet(numberList);
  const isValidLength = numberList.length === NUMBER.TOTAL_LOTTO_LENGTH;
  const isValidNumber = isValidLottoNumber(numberList);

  if (!isUniqueNumberList || !isValidLength) {
    showAlertMessage($input, ALERT.INVALID_LOTTO_LENGTH);
  }

  if (!isValidNumber) {
    showAlertMessage($input, ALERT.INVALID_LAST_LOTTO_NUMBER);
  }

  return isUniqueNumberList && isValidLength && isValidNumber;
};

export { isVaildPurchaseAmount, isValidLastLottoNumbers };
