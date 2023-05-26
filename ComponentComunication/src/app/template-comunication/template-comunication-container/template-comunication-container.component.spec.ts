import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComunicationContainerComponent } from './template-comunication-container.component';

describe('TemplateComunicationContainerComponent', () => {
  let component: TemplateComunicationContainerComponent;
  let fixture: ComponentFixture<TemplateComunicationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateComunicationContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateComunicationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
