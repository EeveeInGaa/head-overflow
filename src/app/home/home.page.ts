import { Component, OnInit } from '@angular/core';
import { SplitterService } from '../services/splitter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public splitters: string[] | undefined[] = [];

  constructor(private readonly splitterService: SplitterService) {}

  ngOnInit(): any {
    this.splitters = this.getAllSplitters();
  }

  addSplitter(text: string) {
    this.splitterService.add(text);
  }

  getAllSplitters(): string[] {
    return this.splitterService.getAll();
  }
}
