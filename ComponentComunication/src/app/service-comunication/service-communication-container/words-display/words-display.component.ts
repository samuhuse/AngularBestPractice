import { Component, OnInit } from '@angular/core';
import { StateManagementService } from '../../state-management.service';
import { tap, timer } from 'rxjs';

@Component({
  selector: 'app-words-display',
  templateUrl: './words-display.component.html',
  styleUrls: ['./words-display.component.scss']
})
export class WordsDisplayComponent implements OnInit {

  words: string[] = []
  inputWord: string = ''

  constructor(private readonly stateManagementService: StateManagementService) { }

  ngOnInit(): void {

    this.words = this.stateManagementService.getWords()

    //// if observable
    // timer(0, 2000)
    //   .pipe(
    //     tap(() => console.log('getting words')),
    //     tap(() => this.words = this.stateManagementService.getWords())
    //   )
    //   .subscribe()
  }

  onAddWord() {
    if (this.inputWord)
      this.stateManagementService.addWord(this.inputWord)
  }

}
