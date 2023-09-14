import Article from './article';
import { ArticleJson } from './types';

export default class ArticleJsonFactory {
  static createFromArticle(article: Article): ArticleJson {
    return {
      title: article.getTitle(),
      creatorPseudo: article.getCreator().getPseudo(),
    };
  }
}
