import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData, IState } from "../../type";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState: IState = {
  dataComplited: [],
  data: [],
};

const taskSlice = createSlice({
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
  key: "tasks",
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  taskSlice.reducer
);

export const { setData, setAddTasks, setDataComplited } = taskSlice.actions;

export default taskSlice.reducer;
