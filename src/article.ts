import User from './user';

export default class Article {
  constructor(private creator: User, private title: string) {}

  getTitle(): string {
    return this.title;
  }

  getCreator(): User {
    return this.creator;
  }
}
