import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'login'
})
export class LoginPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
