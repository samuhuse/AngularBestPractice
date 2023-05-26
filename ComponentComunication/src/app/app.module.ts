import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComunicationContainerComponent } from './template-comunication/template-comunication-container/template-comunication-container.component';
import { CounterComponent } from './template-comunication/template-comunication-container/counter/counter.component';
import { GenericDirective } from './template-comunication/template-comunication-container/generic.directive';
import { ServiceCommunicationContainerComponent } from './service-comunication/service-communication-container/service-communication-container.component';
import { BagLabelComponent } from './service-comunication/service-communication-container/bag-label/bag-label.component';
import { FormsModule } from '@angular/forms';
import { WordsDisplayComponent } from './service-comunication/service-communication-container/words-display/words-display.component';
import { NotificationSemaphorComponent } from './service-comunication/service-communication-container/notification-semaphor/notification-semaphor.component';
import { RouterCommunicationModule } from './router-communication/router-communication.module';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComunicationContainerComponent,
    CounterComponent,
    GenericDirective,
    ServiceCommunicationContainerComponent,
    BagLabelComponent,
    WordsDisplayComponent,
    NotificationSemaphorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterCommunicationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
