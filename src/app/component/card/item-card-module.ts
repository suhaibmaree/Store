import {NgModule} from '@angular/core';
import {CardComponent} from './card.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {RippleModule} from 'primeng/ripple';


@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ButtonModule,
        CardModule,
        RatingModule,
        FormsModule,
        RippleModule
    ],
    exports: [
        CardComponent
    ],
    providers: []
})
export class ItemCardModule{

}
