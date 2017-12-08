import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AnimalListComponent } from './animal-list.component';
import { NewAnimalComponent  } from './new-animal.component';
import { EditAnimalComponent } from './edit-animal.component';
import { AnimalAgePipe } from './animalAge.pipe';
import { AnimalFilterComponent } from './animal-filter.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent,
                  AnimalListComponent,
                  NewAnimalComponent,
                  EditAnimalComponent,
                  AnimalAgePipe,
                  AnimalFilterComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
