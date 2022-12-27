import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData, IState } from "../../type";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState: IState = {
  dataComplited: [],
  data: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IData[]>) => {
      state.data = action.payload;
    },
    setAddTasks: (state, action: PayloadAction<IData>) => {
      state.data.unshift(action.payload);
    },
    setDataComplited: (state, action: PayloadAction<IData[]>) => {
      state.dataComplited = action.payload;
    },
    // setRemoveFavourite: (state, action: PayloadAction<string>) => {
    //   state.favourites = state.favourites.filter((f) => f !== action.payload);
    // },
  },
});

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  tasksSlice.reducer
);

export const { setData, setAddTasks, setDataComplited } = tasksSlice.actions;

export default tasksSlice.reducer;
