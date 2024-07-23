import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserMenuComponent } from './header/components/user-menu/user-menu.component';

@NgModule({
    declarations: [
        HeaderComponent,
        UserMenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        HeaderComponent,
        UserMenuComponent
    ]
})
export class SharedModule { }