import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilters',
})
export class FiltersPipe implements PipeTransform {

  transform(list: any[], filters: Object) {
    console.log("filter", filters);
    const keys = Object.keys(filters).filter(key => filters[key]);
    console.log("keys:" , keys);
    const filterUser = user => keys.every(key => user[key] === filters[key]);
    return keys.length ? list.filter(filterUser) : list;
  }

}
