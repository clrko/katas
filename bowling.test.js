const bowlingScore = require('./bowling');

describe('bowling', () => {
  describe('When game has not started yet', () => {
    it('should return 0', () => {
      // given
      const rolls = [];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(0);
    });
  });
  describe('When one pin fell on the first roll', () => {
    it('should return 1', () => {
      // given
      const rolls = [1];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(1);
    });
  });
  describe('When five pins fell on the first roll', () => {
    it('should return 5', () => {
      // given
      const rolls = [5];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(5);
    });
  });
  describe('When 1 pin fell on the first roll and 2 pins on the second', () => {
    it('should return 3', () => {
      // given
      const rolls = [1, 2];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(3);
    });
  });

  describe('When strike on the first roll and 2 on the second and 3 on the third', () => {
    it('should return 20', () => {
      // given
      const rolls = [10, 2, 3];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(20);
    });
  });

  describe('When strike on the first roll and 2 on the second and 3 on the third and 4 on the last', () => {
    it('should return 24', () => {
      // given
      const rolls = [10, 2, 3, 4];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(24);
    });
  });

  describe('When strike on the first roll , followed by 4 normal rolls', () => {
    it('should only double the next 2', () => {
      // given
      const rolls = [10, 2, 3, 4, 5];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(29);
    });
  });

  describe('When strike on the first roll  followed by nothing', () => {
    it('should only return', () => {
      // given
      const rolls = [10];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(10);
    });
  });

  describe('When strike on the first roll and second roll and then 2 and 3 and 5', () => {
    it('should double the correct', () => {
      // given
      const rolls = [10, 10, 2, 3, 5];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(45);
    });
  });
});
