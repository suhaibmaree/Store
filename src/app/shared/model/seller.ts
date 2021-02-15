import {User} from './user';

export class Seller implements User{
  email: string;
  userId: string;
  firstName: string;
  lastName: string;
  userType: string;
  address: string;
  items: number[];
  key: string;

  constructor(userId: string, firstName: string, lastName: string,
              userType: string, address: string, email: string, items: number[]) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userType = userType;
    this.items = items;
    this.address = address;
    this.email = email;
  }
}
