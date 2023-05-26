import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationStateManagementService {

  get color$() {
    return this.color.asObservable()
  }

  private color = new BehaviorSubject<string>('black')

  constructor() {
    timer(0, 6000).subscribe(() =>
      this.color.next('green')
    )

    timer(2000, 6000).subscribe(() =>
      this.color.next('yellow')
    )

    timer(4000, 6000).subscribe(() =>
      this.color.next('red')
    )
  }

  setColor(value: string) {
    this.color.next(value)
  }
}
