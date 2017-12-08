import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template:`
  <div *ngIf="childSelectedAnimal">
  <h3>Edit:{{childSelectedAnimal.name}}</h3>
  // For some reason ngModel does not want to work 

  <input [value]="childSelectedAnimal.name" (input)="childSelectedAnimal.name = $event.target.value">
  <input type="number" [value]="childSelectedAnimal.age" (input)="childSelectedAnimal.age = $event.target.value">
  <input type="number" [value]="childSelectedAnimal.caretakers" (input)="childSelectedAnimal.caretakers = $event.target.value">

  <button (click)="exitEditForm()">Save Changes</button>
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
