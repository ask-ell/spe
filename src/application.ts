import Admin from './admin';
import Article from './article';
import ArticleJsonFactory from './article.json.factory';
import ArticleRepository from './article.repository';
import Contributor from './contributor';
import Database from './database';
import { UserType } from './types';
import User from './user';

export default class Application {
  run(): number {
    try {
      const database = new Database();
      const articleRepository = new ArticleRepository(database);

      const userPseudo = 'pierre';
      const userType: UserType = 'admin';

      const user: User = (() => {
        switch (userType as UserType) {
          case 'admin':
            return new Admin(userPseudo);
          case 'contributor':
            return new Contributor(userPseudo);
        }
      })();

      const article = new Article(user, 'Mon premier article');

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
