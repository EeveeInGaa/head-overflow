import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  async transform(value: Promise<string[]>): Promise<string[]> {
    return (await value).slice().reverse();
  }
}
