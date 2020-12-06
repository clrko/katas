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
      expect(score).toEqual(47);
    });
  });
  describe('When spare on first two rolls and two normal one', () => {
    it('should double of the third roll', () => {
      // given
      const rolls = [4, 6, 2, 3];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(17);
    });
  });
  describe('When spare on first two rolls and spare on the second and third rolls', () => {
    it('should only double of the third roll', () => {
      // given
      const rolls = [4, 6, 4, 3];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(21);
    });
  });
  describe('When nothing on first roll, two next rolls sum up to 10', () => {
    it('should not count the spare', () => {
      // given
      const rolls = [2, 6, 4, 3];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(15);
    });
  });
  describe('When strike on first roll, two next rolls sum up to 10', () => {
    it('should count the spare', () => {
      // given
      const rolls = [10, 6, 4, 3];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(36);
    });
  });

  describe('When there is a spare in the last frame', () => {
    it('should not double the last roll', () => {
      // given
      const rolls = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 8, 6];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(34);
    });
  });

  describe('When there is a strike in the last frame', () => {
    it('should not double the last two rolls', () => {
      // given
      const rolls = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 6, 3];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(37);
    });
  });

  describe('When there are three strikes and one normal roll', () => {
    it('should double the scond roll, quadruple the 3 third roll', () => {
      // given
      const rolls = [10, 10, 10, 1];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(63);
    });
  });

  describe('When there are ONLY strikes in game', () => {
    it('reach max score for Yuri', () => {
      // given
      const rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

      // when
      const score = bowlingScore(rolls);

      // then
      expect(score).toEqual(300);
    });
  });
});
