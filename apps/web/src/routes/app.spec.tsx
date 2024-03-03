import { renderWebComponent } from '@nx/shared';
import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWebComponent(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a Heading 1 text', () => {
    const { getByText } = renderWebComponent(<App />);
    expect(getByText(/Heading 1/gi)).toBeTruthy();
  });
});
