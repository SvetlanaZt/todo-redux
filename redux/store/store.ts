import { configureStore } from "@reduxjs/toolkit";
import { tasksApi } from "../api/api";
import { persistedReducer } from '../slice/slice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer,
    task: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(tasksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
