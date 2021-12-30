import { v4 as uuid4 } from 'uuid';

export class Todo {
  id: string = '';
  completed: boolean = false;

  constructor(public text: string) {
    this.id = uuid4();
  }
}
