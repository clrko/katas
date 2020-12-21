const calculatePrice = require('./potter');

describe('calculatePrice', () => {
  describe('when there is no book', () => {
    it('should return $0', () => {
      // given
      const books = [];

      // when
      const price = calculatePrice(books);

      // then
      expect(price).toBe(0);
    });
  });

  describe('when there is the first volume', () => {
    it('should return $8', () => {
      // given
      const books = [1];

      // when
      const price = calculatePrice(books);

      // then
      expect(price).toBe(8);
    });
  });

  describe('when there is second volume', () => {
    it('should return $8', () => {
      // given
      const books = [2];

      // when
      const price = calculatePrice(books);

      // then
      expect(price).toBe(8);
    });
  });

  describe('when there are two similar volumes', () => {
    it('should return $16', () => {
      // given
      const books = [1, 1];

      // when
      const price = calculatePrice(books);

      // then
      expect(price).toBe(16);
    });
  });

  describe('when there are three similar volumes', () => {
    it('should return $24', () => {
      // given
      const books = [1, 1, 1];

      // when
      const price = calculatePrice(books);

      // then
      expect(price).toBe(24);
    });
  });

  describe('when there are two different volumes', () => {
    it('should return $15.2', () => {
      // given
      const books = [1, 2];

      // when
      const price = calculatePrice(books);

      // then
      expect(price).toBe(15.2);
    });
  });

  describe('when there are three different volumes', () => {
    it('should return $21.6', () => {
      // given
      const books = [1, 2, 3];

      // when
      const price = calculatePrice(books);

      // then
      expect(price).toBe(21.6);
    });
  });

  describe('when there are one first volume and two second volumes', () => {
    it('should return $23.2', () => {
      // given
      const books = [1, 2, 2];

      // when
      const price = calculatePrice(books);

      // then
      expect(price).toBe(23.2);
    });
  });

  describe('when there are one first volume and two second volumes (bis)', () => {
    it('should return $23.2', () => {
      // given
      const books = [2, 1, 2];

      // when
      const price = calculatePrice(books);

      // then
      expect(price).toBe(23.2);
    });
  });

  describe('when there are four different volumes', () => {
    it('should return $25.6', () => {
      // given
      const books = [1, 2, 3, 4];

      // when
      const price = calculatePrice(books);

      // then
      expect(price).toBe(25.6);
    });
  });

  describe('when there are five different volumes', () => {
    it('should return $30', () => {
      // given
      const books = [1, 2, 3, 4, 5];

      // when
      const price = calculatePrice(books);

      // then
      expect(price).toBe(30);
    });
  });

  describe('when there are two different discount', () => {
    it('should return $36.8', () => {
      // given
      const books = [1, 2, 3, 1, 2];

      // when
      const price = calculatePrice(books);

      // then
      expect(price).toBe(36.8);
    });
  });

  describe('when there are two different discount', () => {
    it('should return $51.2', () => {
      // given
      const books = [2, 2, 2, 1, 1];

      // when
      const price = calculatePrice(books);

      // then
      expect(price).toBe(51.2);
    });
  });
});
