import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uItempleates',
})
export class UItempleatesPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
