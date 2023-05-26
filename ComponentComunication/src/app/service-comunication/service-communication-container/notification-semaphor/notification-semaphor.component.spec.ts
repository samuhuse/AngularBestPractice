import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSemaphorComponent } from './notification-semaphor.component';

describe('NotificationSemaphorComponent', () => {
  let component: NotificationSemaphorComponent;
  let fixture: ComponentFixture<NotificationSemaphorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationSemaphorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationSemaphorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
