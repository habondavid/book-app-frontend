import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './component/books.component';
import { BooksRoutingModule } from './books-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    RouterModule
  ]
})
export class BooksModule { }
