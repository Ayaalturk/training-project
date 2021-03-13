import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add'
})
export class AddPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]) {
   if(!value)
      return null;

   else

     return value +"Shoe-NO"
  }

}
