import { Injectable } from '@angular/core';
import { BookMark } from './bookmark.model';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  bookmarks: BookMark[] = [
    new BookMark('Wiki', 'http://www.wikipedia.org/favicon.ico'),
    new BookMark('YouTube', 'http://www.youtube.com/favicon.ico'),
    new BookMark('Google', 'http://www.google.com/favicon.ico'),
  ];

  constructor() {}

  getBookMarks() {
    return this.bookmarks;
  }

  getBookMark(id: string | null) {
    return this.bookmarks.find((b) => b.id === id);
  }

  addBookMark(bookmark: BookMark) {
    return this.bookmarks.push(bookmark);
  }

  updateBookMark(id: any | undefined, updateFields: Partial<BookMark>) {
    const bookmark = this.getBookMark(id);
    Object.assign(bookmark, updateFields);
  }

  deleteBookMark(id: any) {
    const bookmarkIdx = this.bookmarks.findIndex((b) => b.id === id);
    if (bookmarkIdx == -1) return;
    this.bookmarks.splice(bookmarkIdx, 1);
  }
}
