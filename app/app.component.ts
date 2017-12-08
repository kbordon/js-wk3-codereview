import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>ANIMALS</h1>
  <div *ngFor="let currentAnimal of masterAnimalList">
    <h2>{{currentAnimal.name}}</h2>
    <h3>{{currentAnimal.species}}</h3>
    <p>{{currentAnimal.age}}</p>
    <p>{{currentAnimal.sex}}</p>
    <p>{{currentAnimal.diet}}</p>
    <p>{{currentAnimal.location}}</p>
    <p>{{currentAnimal.caretakers}}</p>
    <p>{{currentAnimal.likes}}</p>
    <p>{{currentAnimal.dislikes}}</p>
    <p>{{currentAnimal.age}}</p>
  `
})

export class AppComponent {
  animal1: Animal = new Animal("Artic Fox", "Moon", 2, "Female", "Carnivore", "Northern Trail", 5, "Cool shade", "Loud noises");
  animal2: Animal = new Animal("Ocelot", "Prince", 4, "Male", "Carnivore", "Tropical Rain Forest Building", 6, "Lying in in sunshine", "Toys that are not rope-based")
  animal3: Animal = new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Female", "Herbivore", "Northern Trail", 2, "Delicate roots and leaves", "Loud Noises");
  masterAnimalList: Animal[] = [this.animal1, this.animal2, this.animal3];
  selectedAnimal = null;
}
