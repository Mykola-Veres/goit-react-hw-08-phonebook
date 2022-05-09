// import { configureStore } from '@reduxjs/toolkit';
// import { contactsApi } from "./contactsAPI";
// export const store = configureStore({
//   reducer: {
//     [contactsApi.reducerPath]: contactsApi.reducer,
//   },
//     middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware]
//   });

import { configureStore,
  // combineReducers
} from '@reduxjs/toolkit';
// import {sliceContacts} from "./sliceContacts";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { contactsApi } from "./contactsAPI";
import { authSlice } from "./authUser/authUserReducer";


const authPersistConfig = {
  key: 'authUser',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    authUser: persistReducer(authPersistConfig, authSlice.reducer),
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware]
    },
  }),
  });


export const persistor = persistStore(store);
