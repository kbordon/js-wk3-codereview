import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template:`
  <div class="form-focus" *ngIf="childSelectedAnimal">
    <p class="button-close" (click)="exitEditForm()">X</p>
    <h2>EDIT</h2>
    <!-- For some reason, ngModel shortcut not recognized. Switched to long-hand syntax for time being.
      <input [(ngModel)]="childSelectedAnimal.name">
      <br>
      <input [(ngModel)]="childSelectedAnimal.age">
      <br>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
      -->
      <p>Name</p>
      <input [value]="childSelectedAnimal.name" (input)="childSelectedAnimal.name = $event.target.value">
      <p>Age</p>
      <input type="number" [value]="childSelectedAnimal.age" (input)="childSelectedAnimal.age = $event.target.value">
      <p>Number of Caretakers</p>
      <input type="number" [value]="childSelectedAnimal.caretakers" (input)="childSelectedAnimal.caretakers = $event.target.value">
      <br>
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
