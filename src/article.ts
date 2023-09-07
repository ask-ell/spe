import Database from './database';

type ArticleJson = {
  title: string;
};

export default class Article {
  constructor(private title: string) {}

  private database = new Database();

  saveInDatabase(): void {
    this.database.save({ title: this.title }, 'articles');
  }

  exportToJson(): ArticleJson {
    return {
      title: this.title,
    };
  }
}
