import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBookDetails();
  }

  getBookDetails() {
    const bookId = this.route.snapshot.params.id;
    this.bookService.getBook(bookId).subscribe();
  }

}
