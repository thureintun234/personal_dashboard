import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  showValidationError: boolean = false;
  constructor(private noteService: NoteService, private router: Router) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm): any {
    console.log(form);
    if (form.invalid) return (this.showValidationError = true);

    const { title, content } = form.value;
    const note = new Note(title, content);

    this.noteService.addNote(note);
    this.router.navigateByUrl('/notes');

    console.log(note);
  }
}
