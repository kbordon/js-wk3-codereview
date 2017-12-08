import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-filter',
  template: `
  <div class="filter-form">
    <h2>Filter Animals</h2>
    <select (change)="onChange($event.target.value)">
      <option value="all" selected="selected">All Ages</option>
      <option value="young">Young (less than 2 years)</option>
      <option value="mature">Mature (at least 2 years)</option>
    </select>
  </div>
  `
})

export class AnimalFilterComponent {
  @Output() filterSender = new EventEmitter();

  onChange(optionFromMenu){
    this.filterSender.emit(optionFromMenu);
  }
}
