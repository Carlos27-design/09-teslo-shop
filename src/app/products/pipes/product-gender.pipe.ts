import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'productGender',
})
export class ProductGenderPipe implements PipeTransform {
  transform(value: string): string {
    if (value === 'men') return 'Hombres';
    if (value === 'woman') return 'Mujeres';
    if (value === 'kid') return 'Niños';

    return value;
  }
}
