import User from './user';

export default interface UserFactory {
  create(pseudo: string): User;
}
