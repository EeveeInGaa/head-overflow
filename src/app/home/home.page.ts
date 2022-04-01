import { Component, OnInit } from '@angular/core';
import { SplitterService } from '../services/splitter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public splitters = [];

  constructor(private readonly splitterService: SplitterService) {}

  ngOnInit(): any {
    //this.splitters = this.getAllSplitters();
  }

  addSplitter(text: string) {
    this.splitterService.add(text);
  }

  getAllSplitters() {
    this.splitterService.getAll();
  }
}
