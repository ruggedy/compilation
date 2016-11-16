import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';
import { PipesModule } from '../pipes';
import { CarouselModule } from 'primeng/primeng';
import { CarouselComponent } from './carousel/carousel.component';
import { CategoryComponent } from './category/category.component';
import { TagsComponent } from './tags/tags.component';
import { TinyMCEComponent } from './tinymce/tinymce.component';
import { TinyMCEValueAccessor } from './tinymce/tinymce.valueaccessor';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ClipboardDirective } from './image-upload/clipboard.directive';
import { TitleComponent } from './title/title.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostItemListComponent } from './post-item-list/post-item-list.component';
import { Md2AccordionTab } from './accordion/accordiontab';
import { Md2Accordion } from './accordion/accordionpanel';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { PostViewComponent } from './post-view/post-view.component';
import { AdminToolbarComponent } from './toolbar/toolbar.component';
import { QuoteComponent } from './quote/quote.component';
import { FeaturedPostComponent } from './featured-post/featured-post.component'
import { HomePostItemComponent } from './home-post-item/home-post-item.component';
import { HomePostItemListComponent } from './home-post-item-list/home-post-item-list.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { PopularPostItemComponent } from './popular-post-item/popular-post-item.component';
import { PopularPostItemListComponent } from './popular-post-item-list/popular-post-item-list.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LabelCloudComponent } from './label-cloud/label-cloud.component';
import { LabelItemComponent } from './label-item/label-item.component';
import { TimeInfoComponent } from './time-info/time-info.component';
import { BigPanelComponent } from './big-panel/big-panel.component';
import { SimpleCarouselComponent } from './simple-carousel/simple-carousel.component';
import { BigBannerComponent } from './big-banner/big-banner.component';



export const COMPONENTS = [
  CategoryComponent,
  CarouselComponent,
  TagsComponent,
  TinyMCEComponent,
  TinyMCEValueAccessor,
  ImageUploadComponent,
  ClipboardDirective,
  TitleComponent,
  PostItemComponent,
  PostItemListComponent,
  Md2Accordion,
  Md2AccordionTab,
  SidePanelComponent,
  PostViewComponent,
  AdminToolbarComponent,
  QuoteComponent,
  FeaturedPostComponent,
  HomePostItemComponent,
  HomePostItemListComponent,
  SocialLinksComponent,
  PopularPostItemComponent,
  PopularPostItemListComponent,
  SubscribeComponent,
  LabelCloudComponent,
  LabelItemComponent,
  TimeInfoComponent,
  BigPanelComponent,
  SimpleCarouselComponent,
  BigBannerComponent,
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    PipesModule,
    CarouselModule,
    Ng2PaginationModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})

export class ComponentsModule { }
