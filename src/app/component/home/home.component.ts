import {Component, OnInit} from '@angular/core';
import {Item} from '../../shared/model/item';
import {ItemService} from '../../shared/services/item.service';
import {SellerService} from '../../shared/services/seller.service';
import {BuyerService} from '../../shared/services/buyer.service';
import {AppSharedConst} from '../../shared/app-shared-const';
import {User} from '../../shared/model/user';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private email: string;
  private user: User;
  private heIsBuyer: boolean;

  constructor(private router: Router, private buyerService: BuyerService, private sellerService: SellerService) {
    this.email = localStorage.getItem(AppSharedConst.EMAIL);
    this.user = JSON.parse(localStorage.getItem(AppSharedConst.USER));
  }

  ngOnInit(): void {
    this.heIsBuyer = false;
    this.getUser();
  }

  getUser(): void {

    this.buyerService.getAll()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c =>
            ({key: c.payload.key, ...c.payload.val()})
          )
        )
      ).subscribe(data => {
      console.log(data);
      data.map((x) => {
        if (x.email === this.email) {
          localStorage.setItem(AppSharedConst.USER, JSON.stringify(x));
          localStorage.setItem(AppSharedConst.USER_KEY, x.key);
          this.heIsBuyer = true;
        }
      });
    });

    if (!this.heIsBuyer) {
      this.sellerService.getAll()
        .snapshotChanges()
        .pipe(
          map(changes =>
            changes.map(c =>
              ({key: c.payload.key, ...c.payload.val()})
            )
          )
        )
        .subscribe(data => {
          console.log(data);
          data.map((x) => {
            if (x.email === this.email) {
              localStorage.setItem(AppSharedConst.USER, JSON.stringify(x));
              localStorage.setItem(AppSharedConst.USER_KEY, x.key);
              this.router.navigate(['/home/seller-dashboard']);
            }
          });
        });
    }

  }

}
