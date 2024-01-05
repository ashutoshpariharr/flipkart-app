import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducer } from "./reducers/cartReducer";
import {
  getProductDetailsReducer,
  getProductReducer,
} from "./reducers/productReducer";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductReducer,
  getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// // store.js
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import {thunk} from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { getProductReducer, getProductDetailsReducer } from './reducers/productReducer';
// import authReducer from './reducers/productReducer';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = combineReducers({
//   getProducts: getProductReducer,
//   getProductDetails: getProductDetailsReducer,
//   auth: authReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleware = [thunk];

// const store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export const persistor = persistStore(store);

// export default store;
