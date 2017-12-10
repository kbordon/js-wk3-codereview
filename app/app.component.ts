import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="wrapper">
    <h1>Brookhaven Zoo</h1>
    <new-animal [childViewUnFocus]="viewUnFocus" (focusSender)="changeFocus()" (newAnimalSender)="addAnimal($event)"></new-animal>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (finishEditSender)="finishEdit()"></edit-animal>
    <div class="view-wrapper">
      <animal-filter (filterAgeSender)="changeFilter($event)" (filterDietSender)="changeDietFilter($event)"></animal-filter>
      <animal-list [childAnimalList]="masterAnimalList" [childFilterDiet]="masterFilterDiet" [childFilterAnimal]="masterFilterAnimal" (editSender)="editAnimal($event)"></animal-list>
    </div>
  </div>
  `
})

export class AppComponent {
  animal1: Animal = new Animal("Artic Fox", "Moon", 1, "Female", "Carnivore", "Northern Trail", 5, "Cool shade", "Loud noises", "resources/img/moon.jpg");
  animal2: Animal = new Animal("Ocelot", "Prince", 4, "Male", "Carnivore", "Tropical Rain Forest Building", 6, "Lying in in sunshine", "Toys that are not rope-based", "resources/img/prince.jpg")
  animal3: Animal = new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Female", "Herbivore", "Northern Trail", 2, "Delicate roots and leaves", "Loud Noises", "resources/img/tinkerbell.jpg");
  animal4: Animal = new Animal("Human", "Jason", 50, "Male", "Omnivore", "Camp Crystal", 13, "Red rum", "Peace and quiet", "resources/img/jason.jpg");
  animal5: Animal = new Animal("Hylian", "Zelda", 20, "Female", "Omnivore", "Hyrule Castle", 2, "Taking pictures", "Corrupted power", "");

  masterAnimalList: Animal[] = [this.animal1, this.animal2, this.animal3, this.animal4, this.animal5];
  selectedAnimal = null;
  masterFilterAnimal: string = "all";
  masterFilterDiet: string[] =["Carnivore","Herbivore", "Omnivore"];

  viewUnFocus = null;

  addAnimal(newAnimalFromChild){
    this.masterAnimalList.unshift(newAnimalFromChild);
  }

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  finishEdit(){
    this.selectedAnimal = null;
  }

  changeFilter(filter){
    this.masterFilterAnimal = filter;
    console.log(filter);
  }

  changeDietFilter(dietFilter){
    this.masterFilterDiet = dietFilter;
    console.log(dietFilter);
  }

  changeFocus(){
    if (this.viewUnFocus === null){
      this.viewUnFocus = "unfocus";
    } else {
      this.viewUnFocus = null;
    }
  }
}
