import '@ngrx/core/src/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { ActionReducer, combineReducers } from '@ngrx/store';

import { compose } from '@ngrx/core/src/compose';


import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment'


const reducers = {
    posts: {}
};

const developmentReducer = compose(storeFreeze, combineReducers)(reducers)
const productionReducer = combineReducers(reducers);

export const reducer = (state: any, action: any) => {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
};
