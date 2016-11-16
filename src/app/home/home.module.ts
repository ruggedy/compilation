import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateSharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { routing } from './home.routes';
import { BlogService, WordPipe, ArrayPipe } from '../shared/index';
import { MaterialModule } from '@angular/material';
import { SharedModule, AccordionModule } from 'primeng/primeng';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { HomeComponentsModule } from './components';
import { SideViewComponent } from './containers/side-view/side-view.component';
import { FooterComponent } from './containers/footer/footer.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		PrivateSharedModule,
		HomeComponentsModule,
		SharedModule,
		routing,
		AccordionModule
	],
	declarations: [
		HomeComponent,
		HomePageComponent,
		SideViewComponent,
		FooterComponent,
	],
	providers: [
	]
})
export class HomeModule { }
