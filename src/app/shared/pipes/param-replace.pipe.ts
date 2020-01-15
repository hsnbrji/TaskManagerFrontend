import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paramReplace'
})
export class ParamReplacePipe implements PipeTransform {
  objectKeys: (o: any) => string[] = Object.keys;

  transform(value: string, params: any, pattern = '{#}'): string {
    this.objectKeys(params).forEach(k => {
      const searchValue = pattern.replace('#', k);
      value = value.replace(searchValue, params[k]);
    });

    return value;
  }
}
