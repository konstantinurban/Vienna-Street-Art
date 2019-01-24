import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkDashboardViewComponent } from './artwork-dashboard-view.component';

describe('ArtworkDashboardViewComponent', () => {
  let component: ArtworkDashboardViewComponent;
  let fixture: ComponentFixture<ArtworkDashboardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtworkDashboardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkDashboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
