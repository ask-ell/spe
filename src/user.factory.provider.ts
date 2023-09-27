import AdminType from './admin.type';
import ContributorType from './contributor.type';
import { UserType } from './types';
import UserFactory from './user.factory';

export default abstract class UserFactoryProvider {
  static provideFromUserType(userType: UserType): UserFactory {
    if (userType === 'admin') {
      return new AdminType();
    } else if (userType === 'contributor') {
      return new ContributorType();
    }
    throw new Error(`"${userType} is not a valid user type"`);
  }
}
