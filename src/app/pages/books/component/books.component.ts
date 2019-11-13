import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  constructor() { }

  ngOnInit() { }
}
