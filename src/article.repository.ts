import Article from './article';
import Database from './database';

export default class ArticleRepository {
  constructor(private database: Database) {}

  save(article: Article): void {
    this.database.save(article, 'articles');
  }
}
