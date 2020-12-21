const BOOK_PRICE = 8;
const NO_DISCOUNT = 1;
const DISCOUNT_FOR_TWO_DIFFERENT = 0.95;
const DISCOUNT_FOR_THREE_DIFFERENT = 0.9;
const DISCOUNT_FOR_FOUR_DIFFERENT = 0.8;
const DISCOUNT_FOR_FIVE_DIFFERENT = 0.75;
const DISCOUNTS = [
  0,
  NO_DISCOUNT,
  DISCOUNT_FOR_TWO_DIFFERENT,
  DISCOUNT_FOR_THREE_DIFFERENT,
  DISCOUNT_FOR_FOUR_DIFFERENT,
  DISCOUNT_FOR_FIVE_DIFFERENT,
];

function calculatePrice(books) {
  const booksCountByVolume = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  books.forEach((currentBook) => {
    booksCountByVolume[currentBook]++;
  });
  let totalPrice = 0;
  const numberOfIteration = Math.max(...Object.values(booksCountByVolume)) + 1;
  for (let i = 0; i <= numberOfIteration; i++) {
    let numberOfBooks = 0;
    for (const bookVolume in booksCountByVolume) {
      const bookCount = booksCountByVolume[bookVolume];
      if (bookCount > 0) {
        numberOfBooks++;
        booksCountByVolume[bookVolume]--;
      }
    }
    totalPrice += calculatePriceForXBook(numberOfBooks);
  }
  return totalPrice;
}

function calculatePriceForXBook(numberOfDifferentBook) {
  const discount = DISCOUNTS[numberOfDifferentBook];
  const numberOfBooksWithDiscount = numberOfDifferentBook;
  return BOOK_PRICE * discount * numberOfBooksWithDiscount;
}

module.exports = calculatePrice;
