import { DashingAngularPage } from './app.po';

describe('dashing-angular App', () => {
  let page: DashingAngularPage;

  beforeEach(() => {
    page = new DashingAngularPage();
  });

  it('should display app title in toolbar', () => {
    page.navigateTo();
    expect<any>(page.getTitleText()).toEqual('Dashing Angular');
  });
});
