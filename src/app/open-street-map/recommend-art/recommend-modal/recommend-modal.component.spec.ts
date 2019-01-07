import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendModalComponent } from './recommend-modal.component';

describe('RecommendModalComponent', () => {
  let component: RecommendModalComponent;
  let fixture: ComponentFixture<RecommendModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
