import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkDashboardComponent } from './artwork-dashboard.component';

describe('ArtworkDashboardComponent', () => {
  let component: ArtworkDashboardComponent;
  let fixture: ComponentFixture<ArtworkDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtworkDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
