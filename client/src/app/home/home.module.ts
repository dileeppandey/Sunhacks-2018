import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { MatToolbarModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatInputModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
