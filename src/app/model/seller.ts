import {User} from './user';

export class Seller implements User{
  email: string;
  userId: number;
  userName: string;
  userType: string;

  items: number[];

  constructor(userId: number, userName: string, userType: string, items: number[]) {
    this.userId = userId;
    this.userName = userName;
    this.userType = userType;
    this.items = items;
  }
}
