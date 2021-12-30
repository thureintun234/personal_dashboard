import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookMark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss'],
})
export class EditBookmarkComponent implements OnInit {
  bookmark: BookMark | undefined = new BookMark('', '');
  constructor(
    private bookmarkService: BookmarkService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      let bookmarkId = paramMap.get('id');
      this.bookmark = this.bookmarkService.getBookMark(bookmarkId);
    });
  }

  onFormSubmit(form: NgForm) {
    this.bookmarkService.updateBookMark(this.bookmark?.id, form.value);
    this.notificationService.show('Bookmark updated!');
  }

  delete(id: any) {
    this.bookmarkService.deleteBookMark(this.bookmark?.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
