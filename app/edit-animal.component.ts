import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template:`
  <div class="form-focus" *ngIf="childSelectedAnimal">
    <div class="form-top">
      <h2>EDIT</h2>
      <p class="button-close" (click)="exitEditForm()">X</p>
    </div>
    <div class="form-body">
      <div class="body-section">
        <p><span>Species</span></p>
        <input [value]="childSelectedAnimal.species" (input)="childSelectedAnimal.species = $event.target.value">
        <br>
        <p><span>Name</span></p>
        <input [value]="childSelectedAnimal.name" (input)="childSelectedAnimal.name = $event.target.value">
        <br>
        <p><span>Age</span></p>
        <input type="number" [value]="childSelectedAnimal.age" (input)="childSelectedAnimal.age = $event.target.value">
        <br>
        <p><span>Sex</span></p>
        <!-- <input type="text" #animalSex> -->
        <div>
        <input name="sex" [checked]="childSelectedAnimal.sex === 'Female'" type="radio" (change)="childSelectedAnimal.sex='Female'">Female
        <input name="sex" [checked]="childSelectedAnimal.sex === 'Male'" type="radio" (change)="childSelectedAnimal.sex='Male'">Male
        </div>
        <p><span>Diet</span></p>
        <div>
          <input name="diet" [checked]="childSelectedAnimal.diet === 'Carnivore'" type="radio" (change)="childSelectedAnimal.diet='Carnivore'">Carnivore
          <input name="diet" [checked]="childSelectedAnimal.diet === 'Herbivore'" type="radio" (change)="childSelectedAnimal.diet='Herbivore'">Herbivore
          <input name="diet" [checked]="childSelectedAnimal.diet === 'Omnivore'" type="radio" (change)="childSelectedAnimal.diet='Omnivore'">Omnivore
        </div>
      </div>
      <div class="body-section">
        <p><span>Location</span></p>
        <input [value]="childSelectedAnimal.location" (input)="childSelectedAnimal.location = $event.target.value">
        <br>
        <p><span>Number of Caretakers</span></p>
        <input [value]="childSelectedAnimal.caretakers" (input)="childSelectedAnimal.caretakers = $event.target.value">
        <br>
        <p><span>Likes</span></p>
        <input [value]="childSelectedAnimal.likes" (input)="childSelectedAnimal.likes = $event.target.value">
        <br>
        <p><span>Dislikes</span></p>
        <input [value]="childSelectedAnimal.dislikes" (input)="childSelectedAnimal.dislikes = $event.target.value">
        <br>
        <p><span>Image URL (If none available, leave blank)</span></p>
        <!-- <input name="image" type="checkbox" (change)="animalImg=$event.target.checked">-->
        <input [value]="childSelectedAnimal.animalImg" (input)="childSelectedAnimal.animalImg = $event.target.value">
      </div>
    </div>
      <p class="button" (click)="exitEditForm()">SAVE</p>
  </div>
  `
})

export class EditAnimalComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() finishEditSender = new EventEmitter();

  exitEditForm(){
    this.finishEditSender.emit();
  }
}
