import App from './App.js';

describe('App', () => {
  it('should render without crashing', () => {
    const container = App();
    expect(container instanceof HTMLElement).toBe(true);
  });
});
