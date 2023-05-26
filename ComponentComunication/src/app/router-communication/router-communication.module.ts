import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ParameterComponent } from './router-communication-container/parameter/parameter.component';
import { SimpleComponent } from './router-communication-container/simple/simple.component';
import { RouterCommunicationContainerComponent } from './router-communication-container/router-communication-container.component';



@NgModule({
  declarations: [RouterCommunicationContainerComponent, SimpleComponent, ParameterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SimpleComponent },
      { path: ':id', component: ParameterComponent }
    ])
  ],
  exports: [RouterCommunicationContainerComponent]
})
export class RouterCommunicationModule { }
