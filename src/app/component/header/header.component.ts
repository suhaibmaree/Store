import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {AppSharedConst} from '../../shared/app-shared-const';
import {BuyerService} from '../../shared/services/buyer.service';
import {map} from 'rxjs/operators';
import {SellerService} from '../../shared/services/seller.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  searchValue: string;
  email: string;
  isCartValid: boolean;
  sellerItems = [
    {
      label: 'Account',
      icon: 'pi pi-fw pi-th-large',
      items: [
        {
          label: 'Seller Items',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Add',
              icon: 'pi pi-fw pi-plus-circle',
              command: () => this.router.navigate(['/home/add-item'])
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-minus-circle'
            },

          ]
        },
        {
          label: 'Profile',
          icon: 'pi pi-fw pi-user',
          command: () => this.profile()
        },
        {
          label: 'Delete account',
          icon: 'pi pi-fw pi-user-minus',
        }

      ]
    },
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => this.router.navigate(['/home/seller-dashboard'])
    },
    {
      label: 'Quit',
      icon: 'pi pi-fw pi-sign-in',
      command: () => this.signOut()
    }
  ];
  buyerItems = [
    {
      label: 'Account',
      icon: 'pi pi-fw pi-th-large',
      items: [
        {
          label: 'My Orders',
          icon: 'pi pi-fw pi-tags',
        },
        {
          label: 'Favorit',
          icon: 'pi pi-fw pi-heart',
        },
        {
          label: 'Profile',
          icon: 'pi pi-fw pi-user',
          command: () => this.profile()
        },
        {
          label: 'Delete account',
          icon: 'pi pi-fw pi-user-minus',
        }

      ]
    },
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => this.router.navigate(['/home'])
    },
    {
      label: 'Quit',
      icon: 'pi pi-fw pi-sign-in',
      command: () => this.signOut()
    }
  ];

  constructor(public authService: AuthService, public router: Router,
              public buyerService: BuyerService, public sellerService: SellerService) {
    this.getUser();
  }

  ngOnInit(): void {
    this.email = localStorage.getItem(AppSharedConst.EMAIL);
  }

  signOut(): any {
    this.authService.signOut();
  }

  profile(): void {
    this.router.navigate([AppSharedConst.PROFILE_PATH]);
  }

  getUser(): void {

    this.buyerService.getAll()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => {
      console.log(data);
      data.map((x) => {
        if (x.email === this.email) {
          localStorage.setItem(AppSharedConst.USER, JSON.stringify(x));
          localStorage.setItem(AppSharedConst.USER_KEY, x.key);
          this.items = this.buyerItems;
          this.isCartValid = true;
        }
      });
    });

    if (!this.isCartValid) {
      this.sellerService.getAll()
        .snapshotChanges()
        .pipe(
          map(changes =>
            changes.map(c =>
              ({ key: c.payload.key, ...c.payload.val() })
            )
          )
        )
        .subscribe(data => {
        console.log(data);
        data.map((x) => {
          if (x.email === this.email) {
            localStorage.setItem(AppSharedConst.USER, JSON.stringify(x));
            localStorage.setItem(AppSharedConst.USER_KEY, x.key);
            this.items = this.sellerItems;
          }
        });
      });
    }

  }
}
