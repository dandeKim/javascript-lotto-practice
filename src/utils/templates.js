const purchasedAmountHTML = amount => {
  return `<p>${amount}개를 구매했습니다.</p>`;
};

const lottoNumbersHTML = lottoNumbersArray => {
  const listElements =
    lottoNumbersArray.reduce((list, number) => {
      return list + `<li>${number}</li>\n`;
    }, "<ul>") + "</ul>";

  return listElements;
};

export { purchasedAmountHTML, lottoNumbersHTML };
