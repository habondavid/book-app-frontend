import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './component/book-details.component';
import { AuthGuard } from 'src/app/auth.guard';


const routes: Routes = [
  { path: 'book-details/:id', component: BookDetailsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookDetailsRoutingModule { }
