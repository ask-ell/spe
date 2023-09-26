import UserFactoryProvider from './user.factory.provider';
import Article from './article';
import ArticleJsonFactory from './article.json.factory';
import ArticleRepository from './article.repository';
import Database from './database';
import { UserType } from './types';
import User from './user';
import UserFactory from './user.factory';

export default class Application {
  run(): number {
    try {
      const database = new Database();
      const articleRepository = new ArticleRepository(database);

      const userPseudo = 'pierre';
      const userType: UserType = 'admin';

      const userFactory: UserFactory =
        UserFactoryProvider.provideFromUserType(userType);
      const user: User = userFactory.create(userPseudo);

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
