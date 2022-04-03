import { Component, OnInit } from '@angular/core';
import { SplitterService } from '../services/splitter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public splitters: Promise<string[]>;

  constructor(private readonly splitterService: SplitterService) {}

  ngOnInit(): any {
    this.splitters = this.getAllSplitters();
  }

  addSplitter(text: string) {
    this.splitterService.add(text);
    console.log(this.splitters);
    console.log('text:', text);
  }

  getAllSplitters(): Promise<string[]> {
    return this.splitterService.getAll();
  }
}
