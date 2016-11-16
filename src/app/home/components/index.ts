import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Ng2PaginationModule } from 'ng2-pagination';
import { PipesModule } from '../../pipes';
import { CarouselComponent } from './carousel/carousel.component';
import { FeaturedPostComponent } from './featured-post/featured-post.component'
import { HomePostItemComponent } from './home-post-item/home-post-item.component';
import { HomePostItemListComponent } from './home-post-item-list/home-post-item-list.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { PopularPostItemComponent } from './popular-post-item/popular-post-item.component';
import { PopularPostItemListComponent } from './popular-post-item-list/popular-post-item-list.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LabelCloudComponent } from './label-cloud/label-cloud.component';
import { LabelItemComponent } from './label-item/label-item.component';





export const COMPONENTS = [
  CarouselComponent,
  FeaturedPostComponent,
  HomePostItemComponent,
  HomePostItemListComponent,
  SocialLinksComponent,
  PopularPostItemComponent,
  PopularPostItemListComponent,
  SubscribeComponent,
  LabelCloudComponent,
  LabelItemComponent
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    PipesModule,
    Ng2PaginationModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})

export class HomeComponentsModule { }
