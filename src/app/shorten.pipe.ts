import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, // the value the pipe is applied to
            limit: number // any args
  ): any { // method has to return something
    const DEFAULT_MAX_LENGTH = 10;
    const appliedLength = limit || DEFAULT_MAX_LENGTH;

    return value.length > appliedLength ?
      value.substr(0, appliedLength || 10) + ' ...' :
      value;
  }
}
