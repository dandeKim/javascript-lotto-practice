const purchasedAmountHTML = amount => {
  return `<p>${amount}개를 구매했습니다.</p>`;
};

const lottoNumbersHTML = lottoNumbersArray => {
  const listHTML = lottoNumbersArray.reduce((list, number) => {
    return list + `<li>${number}</li>\n`;
  }, "");

  return listHTML;
};

export { purchasedAmountHTML, lottoNumbersHTML };
