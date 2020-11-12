function fizzbuzz(hightLimit) {
  let lines = '';
  for (let i = 1; i <= hightLimit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      lines += `FizzBuzz\n`;
    } else if (i % 3 === 0) {
      lines += `Fizz\n`;
    } else if (i % 5 === 0) {
      lines += `Buzz\n`;
    } else {
      lines += `${i}\n`;
    }
  }
  return lines.slice(0, lines.length - 1);
}

module.exports = fizzbuzz;
