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
          <p class="edit-button" (click)="editButtonClicked(currentAnimal)"><i class="tiny material-icons">edit</i>edit</p>
          <h2>{{currentAnimal.name}}</h2>
          <p><span>Species:</span> {{currentAnimal.species}}</p>
          <p><span>Age:</span> {{currentAnimal.age}}</p>
          <p><span>Sex:</span> {{currentAnimal.sex}}</p>
          <p><span>Diet:</span> {{currentAnimal.diet}}</p>
          <p><span>Location:</span> {{currentAnimal.location}}</p>
          <p><span>Number of caretakers:</span> {{currentAnimal.caretakers}}</p>
          <p><span>Likes:</span> {{currentAnimal.likes}}</p>
          <p><span>Dislikes:</span> {{currentAnimal.dislikes}}</p>
        </div>
        <img *ngIf="currentAnimal.animalImg" src={{currentAnimal.animalImg}}>
        <div class="no-image" *ngIf="currentAnimal.animalImg === ''"> No Image Available</div>
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
