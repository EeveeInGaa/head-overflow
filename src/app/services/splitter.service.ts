import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SplitterService {
  private splitters = [];

  constructor() {}

  add(splitter) {
    this.splitters.push(splitter);
  }

  getAll() {
    return [...this.splitters];
  }
}
