import { legacy_createStore, applyMiddleware,compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer  as ProductsReducer } from './ProductsReducer/reducer'
import { reducer  as SingleProductReducer } from './SingleProductReducer/reducer'
import { AuthReducer } from './AuthReducer/auth.reducer'

const rootReducer = combineReducers({AuthReducer, ProductsReducer, SingleProductReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export { store }