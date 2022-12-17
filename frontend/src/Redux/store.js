import { legacy_createStore, applyMiddleware,compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer  as ProductsReducer } from './ProductsReducer/reducer'
import { reducer  as SingleProductReducer } from './SingleProductReducer/reducer'


const rooReducer = combineReducers({ProductsReducer, SingleProductReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rooReducer, composeEnhancers(applyMiddleware(thunk)))

export { store }