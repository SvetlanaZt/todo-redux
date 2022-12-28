import { configureStore } from "@reduxjs/toolkit";
import { taskApi } from "../api/api";
import { persistedReducer } from '../slice/slice';
import { persistStore } from 'redux-persist';
import taskSlice from '../slice/slice';

export const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,
    tasks: persistedReducer, taskSlice,
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
