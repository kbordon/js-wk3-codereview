import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div *ngFor="let currentAnimal of childAnimalList">
      <h2>{{currentAnimal.name}}</h2>
      <h3>{{currentAnimal.species}}</h3>
      <p>{{currentAnimal.age}}</p>
      <p>{{currentAnimal.sex}}</p>
      <p>{{currentAnimal.diet}}</p>
      <p>{{currentAnimal.location}}</p>
      <p>{{currentAnimal.caretakers}}</p>
      <p>{{currentAnimal.likes}}</p>
      <p>{{currentAnimal.dislikes}}</p>
      <p (click)="editButtonClicked(currentAnimal)">EDIT</p>
    </div>
  `
})

export class AnimalListComponent{
  @Input() childAnimalList: Animal[];
  @Output() editSender = new EventEmitter();

  editButtonClicked(animal: Animal){
    this.editSender.emit(animal);
  }

}
