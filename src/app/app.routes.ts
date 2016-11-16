import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './containers/homepage/homepage.component';

const routes: Routes = [
  	{
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
