const NUMBER = {
  LOTTO_PRICE: 1000,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  TOTAL_LOTTO_LENGTH: 6,
};

const ALERT = {
  INVALID_PURCHASE_AMOUNT:
    "로또 한 장의 가격은 1000원입니다. 1000원 단위로 입력해주세요.",
  PURCHASE_NOTHING: "최소 1장은 구입해야 합니다. 1000원 이상 입력해주세요.",
  INVALID_LAST_LOTTO_NUMBER: "1~45 사이의 숫자를 입력해주세요.",
  USE_COMMAS: "쉼표로 구분해서 입력할 수 있습니다.",
  INVALID_LOTTO_LENGTH: "숫자를 중복 없이 6개 입력해주세요.",
  INVALID_BONUS_NUMBER:
    "지난 주 당첨 번호와 겹치는 숫자는 보너스 숫자가 될 수 없습니다.",
};

export { NUMBER, ALERT };
