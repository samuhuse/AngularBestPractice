import { AfterContentChecked, AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { GenericDirective } from './generic.directive';

@Component({
  selector: 'app-template-comunication-container',
  templateUrl: './template-comunication-container.component.html',
  styleUrls: ['./template-comunication-container.component.scss']
})
export class TemplateComunicationContainerComponent implements OnInit, AfterViewInit, AfterContentChecked {


  // Two ways binding

  get counter1() {
    console.log('get count')
    return this._counter1
  }

  set counter1(value: number) {
    console.log('count + 1')
    this._counter1 = value
  }

  _counter1: number = 5

  // ViewChild

  // work with ngIf
  private _setted: boolean = false

  @ViewChild(GenericDirective)
  set genericDirective(directive: GenericDirective) {
    if (!this._setted) {
      console.log('directive text', directive.text)
      directive.setText('new text')
      this._setted = true
    }
  };

  @ViewChild('counterViewChild') counterViewChild!: CounterComponent

  // ViewChildren

  @ViewChildren(CounterComponent) counters!: QueryList<CounterComponent>

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.counters.changes.subscribe(() => console.log('counters changed'))

    this.counters.forEach(c => console.log(c.count))
  }

  ngAfterContentChecked(): void {
    if (this.counterViewChild) {
      console.log('counterViewChild', this.counterViewChild)
      this.counterViewChild.count = 0
      this.counterViewChild.countChange.subscribe(count => console.log('count is ' + count))
    }
  }

}
