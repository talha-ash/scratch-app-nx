import { device, element, by, expect } from 'detox';
import { shared } from '@nx/shared';

describe('Mobile', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display welcome message', async () => {
    await expect(element(by.id('heading'))).toHaveText(shared());
  });
});
