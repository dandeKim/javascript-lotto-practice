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

export { isVaildPurchaseAmount };
