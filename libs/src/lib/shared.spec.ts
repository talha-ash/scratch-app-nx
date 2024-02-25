import { shared } from './shared';

describe('shared', () => {
  it('should work', () => {
    expect(shared()).toEqual('shared every where on mobile and web as well');
  });
});
