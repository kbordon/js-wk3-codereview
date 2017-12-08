import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template:`
  <div *ngIf="childSelectedAnimal">
    <h3>Edit:{{childSelectedAnimal.name}}</h3>
    <!-- For some reason, ngModel shortcut not recognized. Switched to long-hand syntax for time being.
      <input [(ngModel)]="childSelectedAnimal.name">
      <br>
      <input [(ngModel)]="childSelectedAnimal.age">
      <br>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
      -->
      <p (click)="exitEditForm()">X</p>
      <p>Name</p>
      <input [value]="childSelectedAnimal.name" (input)="childSelectedAnimal.name = $event.target.value">
      <p>Age</p>
      <input type="number" [value]="childSelectedAnimal.age" (input)="childSelectedAnimal.age = $event.target.value">
      <p>Number of Caretakers</p>
      <input type="number" [value]="childSelectedAnimal.caretakers" (input)="childSelectedAnimal.caretakers = $event.target.value">
      <br>
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
