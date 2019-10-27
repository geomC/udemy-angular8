import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(
    list: any[],
    filterString: string,
    propName: string
  ): any {
    if (!list.length) {
      return list;
    }
    return list
      .filter(server => server[propName]
        .substr(0, filterString.length)
        .toLowerCase() === filterString);
  }

}
