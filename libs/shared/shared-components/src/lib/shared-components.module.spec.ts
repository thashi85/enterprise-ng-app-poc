import { async, TestBed } from '@angular/core/testing';
import { SharedComponentsModule } from './shared-components.module';

describe('SharedSharedComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedComponentsModule).toBeDefined();
  });
});
