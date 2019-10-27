import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // disables NGs default behaviour to not run the pipe when the input object or array is changed
})
export class FilterPipe implements PipeTransform {

  transform(
    list: any[],
    filterString: string,
    propName: string
  ): any {
    if (!list.length || !filterString.length) {
      return list;
    }
    return list
      .filter(server => server[propName]
        .substr(0, filterString.length)
        .toLowerCase() === filterString);
  }

}
