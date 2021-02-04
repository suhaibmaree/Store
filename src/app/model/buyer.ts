import {User} from './user';

export class Buyer implements User {

  userId: number;
  userName: string;
  userType: string;
  email: string;
  cart: number[];

  favorite: number[];

  constructor(userId: number, userName: string, userType: string, cart: number[], favorite: number[]) {
    this.userId = userId;
    this.userName = userName;
    this.userType = userType;
    this.cart = cart;
    this.favorite = favorite;
  }
}
