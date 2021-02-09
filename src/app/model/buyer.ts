import {User} from './user';
import {BuyerService} from '../services/buyer.service';

export class Buyer implements User {

  userId: string;
  firstName: string;
  lastName: string;
  userType: string;
  email: string;
  address: string;
  cart: number[];
  favorite: number[];


  constructor(userId: string, firstName: string, lastName: string, userType: string, cart: number[], favorite: number[]) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userType = userType;
    this.cart = cart;
    this.favorite = favorite;
  }
}
