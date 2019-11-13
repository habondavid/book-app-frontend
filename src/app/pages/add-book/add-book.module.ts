import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './component/add-book.component';
import { AddBookRoutingModule } from './add-book-routing.module';



@NgModule({
  declarations: [AddBookComponent],
  imports: [
    CommonModule,
    AddBookRoutingModule
  ]
})
export class AddBookModule { }
