import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <button (click)="getForm()">Add</button>
  <div class="form-focus" *ngIf="newAnimal === true">
    <p (click)="exitForm()">X</p>
    <h2>Add Animal</h2>
    <label>Species</label>
    <input type="text" #animalSpecies>
    <br>
    <label>Name</label>
    <input type="text" #animalName>
    <br>
    <label>Age</label>
    <input type="number" #animalAge>
    <br>
    <label>Sex</label>
    <!-- <input type="text" #animalSex> -->
    <input name="sex" type="radio" (change)="animalSex='Female'">Female
    <input name="sex" type="radio" (change)="animalSex='Male'">Male
    <br>
    <label>Diet</label>
    <!-- <input type="text" #animalDiet> -->
    <input name="diet" type="radio" (change)="animalDiet='Carnivore'">Carnivore
    <input name="diet" type="radio" (change)="animalDiet='Herbivore'">Herbivore
    <input name="diet" type="radio" (change)="animalDiet='Omnivore'">Omnivore
    <br>
    <label>Location</label>
    <input type="text" #animalLocation>
    <br>
    <label>Number of Caretakers</label>
    <input type="number" #animalCaretakers>
    <br>
    <label>Likes</label>
    <input type="text" #animalLikes>
    <br>
    <label>Dislikes</label>
    <input type="text" #animalDislikes>
    <br>
    <button (click)="submitForm(animalSpecies.value,animalName.value,animalAge.value,animalSex,animalDiet,animalLocation.value,animalCaretakers.value,animalLikes.value,animalDislikes.value); exitForm(); getConfirm(animalName.value); animalSpecies.value='';animalName.value='';animalAge.value='';animalSex='';animalDiet='';animalLocation.value='';animalCaretakers.value='';animalLikes.value='';animalDislikes.value='';">Add</button>
  </div>
  <div *ngIf="newAnimalConfirm">
    <h3>{{newAnimalConfirm}}</h3>
    <p>has been added!</p>
    <p (click)="newAnimalConfirm = null">OK</p>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() focusSender = new EventEmitter();
  @Output() newAnimalSender = new EventEmitter();

  newAnimal = false;
  newAnimalConfirm = null;



  submitForm(species, name, age, sex, diet, location, caretakers, likes, dislikes ){
    let newAnimalToAdd: Animal = new Animal(species, name, age, sex, diet, location, caretakers, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
  getForm(){
    this.newAnimal = true;
    this.focusSender.emit();
  }

  exitForm(){
    this.newAnimal = false;
    this.focusSender.emit();
  }

  getConfirm(name){
    this.newAnimalConfirm = name;
  }

}
