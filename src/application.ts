import Article from './article';

export default class Application {
  run(): number {
    try {
      const article = new Article('Mon premier article');

      article.saveInDatabase();

      const json = article.exportToJson();
      console.log('Mon JSON à renvoyer depuis mon API : ', json);

      return 0;
    } catch (error) {
      console.error(error);
      return 1;
    }
  }
}
