import { configureStore } from "@reduxjs/toolkit";
import { taskApi } from "../redux/api/api";
import { persistedReducer } from '../redux/slice/slice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,
    tasks: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(taskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
