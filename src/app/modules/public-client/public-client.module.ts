import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { PublicClientComponent } from './public-client.component';
import { RoutingModule } from './public-client.route';
import { ComponentsModule } from '../../components';
import { HomepageComponent } from '../../containers';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    MaterialModule,
    ComponentsModule
  ],
  declarations: [
    PublicClientComponent,
    HomepageComponent
  ]
})
export class PublicClientModule { }
