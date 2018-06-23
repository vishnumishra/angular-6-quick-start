import { VisProfileModule } from './vis-profile.module';

describe('VisProfileModule', () => {
  let visProfileModule: VisProfileModule;

  beforeEach(() => {
    visProfileModule = new VisProfileModule();
  });

  it('should create an instance', () => {
    expect(visProfileModule).toBeTruthy();
  });
});
