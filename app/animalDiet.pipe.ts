import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "diet",
  pure: false
})

export class AnimalDietPipe implements PipeTransform {
  transform(input: Animal[], desiredDiet: string[]){
    let output: Animal[] = [];
    for(let i = 0; i <input.length; i++){
      if (desiredDiet.indexOf(input[i].diet) > -1){
        output.push(input[i]);
      }
    }
    return output;
  }
}
