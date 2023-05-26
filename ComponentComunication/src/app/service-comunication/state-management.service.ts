import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {

  private _words = ['hello']

  constructor() { }

  getWords() {
    return this._words
  }

  addWord(value: string) {
    this._words.push(value)
  }
}
