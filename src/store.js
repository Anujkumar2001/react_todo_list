import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./redux/todoSlice.js";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistCongig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistCongig, todoReducer);

const store = configureStore({
  reducer: { todo: persistedReducer },
});

export default store;

let persistor = persistStore(store);
export { persistor };
