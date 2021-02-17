import {User} from './user';

export class Seller implements User{
  email: string;
  userId: string;
  firstName: string;
  lastName: string;
  userType: string;
  address: string;
  items = ['0'];
  key: string;

  constructor(userId: string, firstName: string, lastName: string,
              userType: string, address: string, email: string) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userType = userType;
    this.address = address;
    this.email = email;
  }
}
