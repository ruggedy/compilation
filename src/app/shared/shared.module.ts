import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/index';
import { PostService, ImageUploadService, BlogService, QuoteService } from './index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent,
    CommonModule, FormsModule, RouterModule]
})
export class PrivateSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PrivateSharedModule,
      providers: [ PostService, ImageUploadService, BlogService, QuoteService]
    };
  }
}
