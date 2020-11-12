const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  describe('when no line is requested', () => {
    it('should return nothing', () => {
      // given
      const hightLimit = 0;

      // when
      const result = fizzbuzz(hightLimit);

      // then
      expect(result).toEqual('');
    });
  });

  describe('when one line is requested', () => {
    it('should return 1', () => {
      // given
      const hightLimit = 1;

      // when
      const result = fizzbuzz(hightLimit);

      // then
      expect(result).toEqual('1');
    });
  });

  describe('when 2 lines are required', () => {
    it('should return one line per number', () => {
      // given
      const hightLimit = 2;

      // when
      const result = fizzbuzz(hightLimit);

      // then
      expect(result).toEqual('1\n2');
    });
  });

  describe('when 3 lines are required', () => {
    let result;
    beforeEach(() => {
      // given
      const hightLimit = 3;

      // when
      result = fizzbuzz(hightLimit);
    });

    it('should return 3 lines', () => {
      // then
      expect(result.split('\n')).toHaveLength(3);
    });

    it('should return Fizz as thrid line', () => {
      // then
      expect(result.split('\n')[2]).toEqual('Fizz');
    });

    it('should the correct answer', () => {
      // then
      expect(result).toEqual('1\n2\nFizz');
    });
  });

  describe('when 5 lines are required', () => {
    let result;
    beforeEach(() => {
      // given
      const hightLimit = 5;

      // when
      result = fizzbuzz(hightLimit);
    });

    it('should return Buzz as fith line', () => {
      // then
      expect(result.split('\n')[4]).toEqual('Buzz');
    });
  });

  describe('when 6 lines are required', () => {
    let result;
    beforeEach(() => {
      // given
      const hightLimit = 6;

      // when
      result = fizzbuzz(hightLimit);
    });

    it('should return Fizz as the thrid and sixth lines and Buzz as fith line', () => {
      // then
      expect(result).toEqual('1\n2\nFizz\n4\nBuzz\nFizz');
    });
  });

  describe('when 10 lines are required', () => {
    let result;
    beforeEach(() => {
      // given
      const hightLimit = 10;

      // when
      result = fizzbuzz(hightLimit);
    });

    it('should return Fizz as the thrid and sixth lines and Buzz as fith line', () => {
      // then
      expect(result).toEqual('1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz');
    });
  });

  describe('when 15 lines are required', () => {
    let result;
    beforeEach(() => {
      // given
      const hightLimit = 15;

      // when
      result = fizzbuzz(hightLimit);
    });

    it('should return Fizz as the thrid and sixth lines and Buzz as fith line', () => {
      // then
      expect(result).toEqual(`1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz`);
    });
  });
});
