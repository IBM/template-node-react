import timer from './timer';

describe('timer', () => {
  test('canary verifies test infrastructure', () => {
    expect(true).toEqual(true);
  });

  describe('when timer called without any parameters', () => {
    test('should return immediately without errors', async () => {
      await timer();
    });
  });

  describe('when timer called with a time and no callback', () => {
    test('should return after the timer', async () => {
      const startTime = new Date().getTime();

      const expectedTime = 500;
      await timer(expectedTime);

      const endTime = new Date().getTime();
      expect(endTime - startTime).toBeGreaterThanOrEqual(expectedTime);
    });
  });

  describe('when timer called with time and callback', () => {
    test('should return result from callback after timer executes', async () => {
      const startTime = new Date().getTime();

      const expectedTime = 500;
      const endTime = await timer(expectedTime, () => new Date().getTime());

      expect(endTime - startTime).toBeGreaterThanOrEqual(expectedTime);
    });
  })
});
