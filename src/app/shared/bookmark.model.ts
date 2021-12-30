import { v4 as uuid4 } from 'uuid';

export class BookMark {
  id: string = '';
  name: string = '';
  url: string = '';

  constructor(name: string, url: string) {
    this.id = uuid4();
    this.name = name;
    this.url = url;
  }
}
