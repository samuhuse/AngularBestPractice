import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterCommunicationContainerComponent } from './router-communication-container.component';

describe('RouterCommunicationContainerComponent', () => {
  let component: RouterCommunicationContainerComponent;
  let fixture: ComponentFixture<RouterCommunicationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterCommunicationContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterCommunicationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
