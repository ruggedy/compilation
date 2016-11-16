import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { PostComponent } from './containers/post/post.component';
import { AdminRoutingModule } from './admin.routes';
import { MaterialModule } from '@angular/material';
import { AccordionModule } from 'primeng/primeng';
import { NgSemanticModule } from 'ng-semantic';
import { Ng2PaginationModule } from 'ng2-pagination';

import { AdminComponentsModule } from './components';
import { SelectedPostComponent } from './containers/selected-post/selected-post.component';
import { ViewSelectedPostComponent } from './containers/view-selected-post/view-selected-post.component';
import { AllPostComponent } from './containers/all-post/all-post.component';
import { ViewSelectedComponent } from './containers/view-selected/view-selected.component';
import { SelectedPostViewComponent } from './containers/selected-post-view/selected-post-view.component';
import { QuoteViewComponent } from './containers/quote-view/quote-view.component';


@NgModule({
	imports: [
		CommonModule,
		AdminRoutingModule,
		MaterialModule,
		AdminComponentsModule,
		Ng2PaginationModule
	],
	declarations: [
		AdminComponent,
		PostComponent,
		SelectedPostComponent,
		ViewSelectedPostComponent,
		AllPostComponent,
		ViewSelectedComponent,
		SelectedPostViewComponent,
		QuoteViewComponent,
	],
	providers: [
	]

})

export class AdminModule { }

