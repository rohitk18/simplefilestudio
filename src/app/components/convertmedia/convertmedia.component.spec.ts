import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertmediaComponent } from './convertmedia.component';

describe('ConvertmediaComponent', () => {
  let component: ConvertmediaComponent;
  let fixture: ComponentFixture<ConvertmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertmediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
