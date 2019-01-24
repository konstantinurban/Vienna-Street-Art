import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkInputComponent } from './artwork-input.component';

describe('ArtworkInputComponent', () => {
  let component: ArtworkInputComponent;
  let fixture: ComponentFixture<ArtworkInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtworkInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
