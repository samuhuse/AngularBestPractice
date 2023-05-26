import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCommunicationContainerComponent } from './service-communication-container.component';

describe('ServiceCommunicationContainerComponent', () => {
  let component: ServiceCommunicationContainerComponent;
  let fixture: ComponentFixture<ServiceCommunicationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCommunicationContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCommunicationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
