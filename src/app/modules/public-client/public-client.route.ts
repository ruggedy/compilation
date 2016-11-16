import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomepageComponent } from '../../containers/homepage/homepage.component';
import { PublicClientComponent } from './public-client.component';

const routes: Route[] = [
  	{
      path: '',
      component: PublicClientComponent,
      children: [
        {
          path: '',
          component: HomepageComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
