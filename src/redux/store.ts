import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import personalDetailsReducer from "./personalDetailSlice";
import bootcampDetailsReducer from "./bootCampSlice";
import { persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  personalDetails: personalDetailsReducer,
  bootcampDetails: bootcampDetailsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
