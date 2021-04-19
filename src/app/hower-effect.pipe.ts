import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'howerEffect'
})
export class HowerEffectPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
