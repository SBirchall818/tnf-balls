import someFunction from '../../src/server/somefunction';

describe('Some function test :: ', () => {
  it('should return 1 + 2 = 3', () => {
    const res = someFunction(1, 2);
    expect(res).toBe(3);
  });
});
