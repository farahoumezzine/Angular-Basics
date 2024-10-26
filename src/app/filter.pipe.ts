import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(listItems: any, term: any): any {
    if (term === undefined) return listItems;
    return listItems.filter((item: any) => item.toLowerCase().includes(term.toLowerCase()));



  }

}
