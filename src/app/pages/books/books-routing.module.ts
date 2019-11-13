import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './component/books.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  { path: 'books', component: BooksComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BooksRoutingModule { }
