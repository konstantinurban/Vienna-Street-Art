import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsNavComponent } from './views-nav.component';

describe('ViewsNavComponent', () => {
  let component: ViewsNavComponent;
  let fixture: ComponentFixture<ViewsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
