import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div class="all-animals">
      <div class="animal-info" *ngFor="let currentAnimal of childAnimalList | age:childFilterAnimal | diet:childFilterDiet">
      <div class="error-box" *ngIf="currentAnimal.errorMsg">
        <h2>There are no animals that match your specifications.</h2>
        <p>Adjust your filters appropriately.</p>
      </div>
        <div *ngIf="currentAnimal.name" class="animal-text">
          <p class="edit" (click)="editButtonClicked(currentAnimal)">EDIT</p>
          <h2>{{currentAnimal.name}}</h2>
          <p>Species: {{currentAnimal.species}}</p>
          <p>Age: {{currentAnimal.age}}</p>
          <p>Sex: {{currentAnimal.sex}}</p>
          <p>Diet: {{currentAnimal.diet}}</p>
          <p>Location: {{currentAnimal.location}}</p>
          <p>Number of caretakers: {{currentAnimal.caretakers}}</p>
          <p>Likes: {{currentAnimal.likes}}</p>
          <p>Dislikes: {{currentAnimal.dislikes}}</p>
        </div>
        <img *ngIf="currentAnimal.hasImg === true" src={{currentAnimal.animalImg}}>
      </div>
    </div>
  `
})

export class AnimalListComponent{
  @Input() childFilterAnimal: string;
  @Input() childFilterDiet: string[];
  @Input() childAnimalList: Animal[];
  @Output() editSender = new EventEmitter();


  editButtonClicked(animal: Animal){
    this.editSender.emit(animal);
  }

}
