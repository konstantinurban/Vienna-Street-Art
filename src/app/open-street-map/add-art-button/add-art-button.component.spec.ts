import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtButtonComponent } from './add-art-button.component';

describe('AddArtButtonComponent', () => {
  let component: AddArtButtonComponent;
  let fixture: ComponentFixture<AddArtButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArtButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArtButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
