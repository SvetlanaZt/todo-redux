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
    setChangeComplitedData: (state, action: PayloadAction<IData>) => {
      state.data = state.data.map((f) =>
        f.id === action.payload.id
          ? {
              ...f,
              completed: !f.completed,
            }
          : f
      );
    },
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

export const { setData, setAddTasks, setChangeComplitedData } =
  taskSlice.actions;
