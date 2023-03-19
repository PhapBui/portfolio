import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import authReducer from 'features/auth/authSlice';
import cartReducer from 'features/cart/cartSlice';
import categoryReducer from 'features/category/categorySlice';
import counterReducer from 'features/counter/counterSlice';
import directoryReducer from 'features/directory/directorySlice';
import productReducer from 'features/product/productSlice';
import { history } from 'utils/history';
import rootSaga from './rootSaga';
//https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/
const rootReducer = combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
  products: productReducer,
  auth: authReducer,
  category: categoryReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

//Persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'cart'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//saga
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const persistor = persistStore(store);
