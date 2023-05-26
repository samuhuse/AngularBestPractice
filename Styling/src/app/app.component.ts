import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Styling';

  loading$ = new BehaviorSubject<boolean>(true)

  constructor() {
    setTimeout(() => {
      this.loading$.next(false)
    }, 3000);
  }
}
