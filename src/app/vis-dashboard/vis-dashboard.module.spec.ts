import { VisDashboardModule } from './vis-dashboard.module';

describe('VisDashboardModule', () => {
  let visDashboardModule: VisDashboardModule;

  beforeEach(() => {
    visDashboardModule = new VisDashboardModule();
  });

  it('should create an instance', () => {
    expect(visDashboardModule).toBeTruthy();
  });
});
