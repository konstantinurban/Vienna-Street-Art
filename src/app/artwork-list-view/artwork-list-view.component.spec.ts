import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkListViewComponent } from './artwork-list-view.component';

describe('ArtworkListViewComponent', () => {
  let component: ArtworkListViewComponent;
  let fixture: ComponentFixture<ArtworkListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtworkListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
