import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HomeRoutingModule,
        MatTableModule
    ]
})
export class HomeModule { }