import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(list: any[], propName = 'name'): any {
    if (!list.length) {
      return list;
    }

    const listCopy = [...list]; // since sort works impure

    return listCopy.sort((firstEl, secondEl) => {
      const nameA = firstEl.name.toUpperCase();
      const nameB = secondEl.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });


  }

}
