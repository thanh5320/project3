import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import userReducer from './reducers/userReducer';

const reducer = combineReducers({
    userReducer,
  });

const persistConfig = {
  key: 'root',
  storage: storage,
  //whitelist: ['bookmarks']
};



const rootReducer = persistReducer(persistConfig, reducer);

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
