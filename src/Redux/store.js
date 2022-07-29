import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import {hotelsReducer} from './AppReducer/reducer';



import {reducer as AuthReducer} from './AuthReducer/reducer';
const rootReducer=combineReducers({
    auth:AuthReducer,
    hotelsReducer
})
const composeEnhancers =
  typeof window === 'object' &&
  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?   
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))