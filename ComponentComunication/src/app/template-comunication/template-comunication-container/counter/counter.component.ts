import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() count: number = 0

  @Output() countChange = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

}
