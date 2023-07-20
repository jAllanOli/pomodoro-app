import { AppComponent } from './app.component';
import { render } from '@testing-library/angular';

describe('AppComponent', () => {
  it('should render component', async () => {
    const { container } = await render(AppComponent);
    expect(container).toBeTruthy();
  });
});
