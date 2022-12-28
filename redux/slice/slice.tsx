import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData, IState } from "../../type";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState: IState = {
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
  taskSlice.reducer
);

export const { setData, setAddTasks } = taskSlice.actions;

export default taskSlice.reducer;
