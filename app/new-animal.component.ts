import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <p class="button" (click)="getForm()">ADD</p>
  <div draggable="true" class="form-focus" *ngIf="newAnimal === true">
    <p class="button-close" (click)="exitForm()">X</p>
    <h2>ADD</h2>
    <p><span>Species:</span></p>
    <input type="text" #animalSpecies>
    <br>
    <p><span>Name:</span></p>
    <input type="text" #animalName>
    <br>
    <p><span>Age:</span></p>
    <input type="number" #animalAge>
    <br>
    <p><span>Sex:</span></p>
    <!-- <input type="text" #animalSex> -->
    <div>
    <input name="sex" type="radio" (change)="animalSex='Female'">Female
    <input name="sex" type="radio" (change)="animalSex='Male'">Male
    </div>
    <p><span>Diet:</span></p>
    <!-- <input type="text" #animalDiet> -->
    <div>
      <input name="diet" type="radio" (change)="animalDiet='Carnivore'">Carnivore
      <input name="diet" type="radio" (change)="animalDiet='Herbivore'">Herbivore
      <input name="diet" type="radio" (change)="animalDiet='Omnivore'">Omnivore
    </div>
    <br>
    <p><span>Location:</span></p>
    <input type="text" #animalLocation>
    <br>
    <p><span>Number of Caretakers:</span></p>
    <input type="number" #animalCaretakers>
    <br>
    <p><span>Likes:</span></p>
    <input type="text" #animalLikes>
    <br>
    <p><span>Dislikes:</span></p>
    <input type="text" #animalDislikes>
    <br>
    <p><span>Image URL (If none available, leave blank):</span></p>
    <!-- <input name="image" type="checkbox" (change)="animalImg=$event.target.checked">-->
    <input type="text" #animalImg>
    <p class="button" (click)="submitForm(animalSpecies.value,animalName.value,animalAge.value,animalSex,animalDiet,animalLocation.value,animalCaretakers.value,animalLikes.value,animalDislikes.value, animalImg.value); exitForm(); getConfirm(animalName.value); animalSpecies.value='';animalName.value='';animalAge.value='';animalSex='';animalDiet='';animalLocation.value='';animalCaretakers.value='';animalLikes.value='';animalDislikes.value='';animalImg.value='';">SAVE</p>
  </div>
  <div class="confirm-focus" *ngIf="newAnimalConfirm">
    <h3>{{newAnimalConfirm}}</h3>
    <p>has been added!</p>
    <p (click)="newAnimalConfirm = null">OK</p>
  </div>
  `
})

export class NewAnimalComponent {
  @Input() childViewUnFocus:string;
  @Output() focusSender = new EventEmitter();
  @Output() newAnimalSender = new EventEmitter();

  newAnimal = false;
  newAnimalConfirm = null;



  submitForm(species, name, age, sex, diet, location, caretakers, likes, dislikes, img ){
    let newAnimalToAdd: Animal = new Animal(species, name, age, sex, diet, location, caretakers, likes, dislikes, img);
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
