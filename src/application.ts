import Article from './article';
import ArticleJsonFactory from './article.json.factory';
import ArticleRepository from './article.repository';
import Database from './database';

export default class Application {
  run(): number {
    try {
      const database = new Database();
      const articleRepository = new ArticleRepository(database);
      const article = new Article('Mon premier article');

      articleRepository.save(article);

      const json = ArticleJsonFactory.createFromArticle(article);
      console.log('Mon JSON à renvoyer depuis mon API : ', json);

      return 0;
    } catch (error) {
      console.error(error);
      return 1;
    }
  }
}
