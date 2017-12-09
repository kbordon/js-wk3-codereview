import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-filter',
  template: `
  <div class="filter-form">
    <h2>Filter Animals By:</h2>
    <p>Age</p>
    <hr/>
    <select (change)="onChange($event.target.value)">
      <option value="all" selected="selected">All Ages</option>
      <option value="young">Young (less than 2 years)</option>
      <option value="mature">Mature (at least 2 years)</option>
    </select>
    <p>Diet</p>
    <hr/>
    <input type="checkbox" checked (change)="meatDiet = $event.target.checked; dietFilter();">Meat
    <br>
    <input type="checkbox" checked (change)="plantDiet = $event.target.checked; dietFilter();">Plants
    <br>
    <input type="checkbox" checked (change)="bothDiet = $event.target.checked; dietFilter();">Both
  </div>
  `
})

export class AnimalFilterComponent {
  @Output() filterAgeSender = new EventEmitter();
  @Output() filterDietSender = new EventEmitter();

  meatDiet:boolean = true;
  plantDiet:boolean = true;
  bothDiet: boolean = true;

  onChange(optionFromMenu){
    this.filterAgeSender.emit(optionFromMenu);
  }

  dietFilter(){
    let dietFilterArr:string[] = [];
    if (this.meatDiet === true){
      dietFilterArr.push("Carnivore");
    }
    if (this.plantDiet === true) {
      dietFilterArr.push("Herbivore");
    }
    if (this.bothDiet === true) {
      dietFilterArr.push("Omnivore");
    }
    this.filterDietSender.emit(dietFilterArr);
    console.log("this is "+dietFilterArr);
  }

}
