import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';


const routes: Routes = [
  { path: '', loadChildren: 'src/app/pages/sign-in/sign-in.module#SignInModule' },
  { path: '', component: NavComponent, children: [
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    { path: '', loadChildren: 'src/app/pages/books/books.module#BooksModule' },
    { path: '', loadChildren: 'src/app/pages/book-details/book-details.module#BookDetailsModule' },
    { path: '', loadChildren: 'src/app/pages/add-book/add-book.module#AddBookModule' },
    {
      path: '**',
      redirectTo: '/books'
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
