import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SplitterService {
  private splitters: string[] = [];

  constructor() {}

  add(splitter) {
    this.splitters.push(splitter);
  }

  getAll(): string[] {
    return this.splitters;
  }
}
