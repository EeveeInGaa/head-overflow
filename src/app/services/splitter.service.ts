import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@Injectable({
  providedIn: 'root',
})
export class SplitterService {
  private _storage: Storage | null = null;
  private splitters: string[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    await this.storage.defineDriver(CordovaSQLiteDriver);
  }

  async add(splitter: string) {
    this.splitters.push(splitter);
    await this._storage?.set('splitters', this.splitters);
  }

  async getAll(): Promise<string[]> {
    return await this._storage?.get('splitters').then((spltr: string[]) => {
      this.splitters = spltr === null ? [] : spltr;
      return this.splitters;
    });
  }
}
