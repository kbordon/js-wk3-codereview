import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>ANIMALS</h1>
  <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  <edit-animal [childSelectedAnimal]="selectedAnimal" (finishEditSender)="finishEdit()"></edit-animal>
  <animal-filter (filterSender)="changeFilter($event)"></animal-filter>
  <animal-list [childAnimalList]="masterAnimalList" [childFilterAnimal]="masterFilterAnimal" (editSender)="editAnimal($event)"></animal-list>
  `
})

export class AppComponent {
  animal1: Animal = new Animal("Artic Fox", "Moon", 1, "Female", "Carnivore", "Northern Trail", 5, "Cool shade", "Loud noises");
  animal2: Animal = new Animal("Ocelot", "Prince", 4, "Male", "Carnivore", "Tropical Rain Forest Building", 6, "Lying in in sunshine", "Toys that are not rope-based")
  animal3: Animal = new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Female", "Herbivore", "Northern Trail", 2, "Delicate roots and leaves", "Loud Noises");

  masterAnimalList: Animal[] = [this.animal1, this.animal2, this.animal3];
  selectedAnimal = null;
  masterFilterAnimal: string = "all";

  addAnimal(newAnimalFromChild){
    this.masterAnimalList.push(newAnimalFromChild);
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
}
