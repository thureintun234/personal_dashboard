import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[] = [
    new Note('Testing One', 'This is testing content for note'),
    new Note('Testing Two', 'This is testing content for note'),
  ];

  constructor() {}

  getNotes() {
    return this.notes;
  }

  getNote(id: string): any {
    const note = this.notes.filter((note) => note.id === id);
    return note;
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  updateNote(id: string, updatedField: Partial<Note>) {
    const note = this.getNote(id);
    Object.assign(note[0], updatedField);
  }

  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex((n) => n.id === id);
    if (noteIndex == -1) return;
    this.notes.splice(noteIndex, 1);
  }
}
