import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { ComponentsModule } from './components';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { RouterStoreModule } from '@ngrx/router-store';

import { RoutingModule } from './app.routes';

import { reducer } from './reducers';
import { HomepageComponent } from './containers/homepage/homepage.component';
import { PublicClientModule } from './modules/public-client/public-client.module';


@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        RoutingModule,
        PublicClientModule,
        HttpModule,
        MaterialModule.forRoot(),
        PublicClientModule,
        ComponentsModule,
        StoreModule.provideStore(reducer),
        RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentStore({
            monitor: useLogMonitor({
                visible: false,
                position: 'right'
            })
        }),
        StoreLogMonitorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
