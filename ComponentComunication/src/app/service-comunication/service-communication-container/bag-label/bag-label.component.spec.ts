import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagLabelComponent } from './bag-label.component';

describe('BagLabelComponent', () => {
  let component: BagLabelComponent;
  let fixture: ComponentFixture<BagLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
