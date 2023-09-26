import Admin from './admin';
import User from './user';
import UserFactory from './user.factory';

export default class AdminType implements UserFactory {
  create(pseudo: string): User {
    return new Admin(pseudo);
  }
}
