import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MyformComponent } from '../myform/myform.component';
import { ViewformComponent } from '../viewform/viewform.component';


@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      HomePageRoutingModule,
      ReactiveFormsModule,
   ],
   declarations: [HomePage, MyformComponent, ViewformComponent]
})
export class HomePageModule { }
