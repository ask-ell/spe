import Contributor from './contributor';
import User from './user';
import UserFactory from './user.factory';

export default class ContributorType implements UserFactory {
  create(pseudo: string): User {
    return new Contributor(pseudo);
  }
}
