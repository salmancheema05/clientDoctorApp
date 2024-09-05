import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginapi } from "./api/userLogin";
import authReducer from "./redux/AuthSlice";
import FavoriteReducer from "./redux/favorite";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchDepartment } from "./api/department";
import { fetchDoctor } from "./api/doctor";
import doctor from "./redux/doctor";
import selectDepartment from "./redux/selectDepartment";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  authReducer: authReducer,
  FavoriteReducer: FavoriteReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: {
    persisted: persistedReducer,
    doctorList: doctor,
    selectDepartment: selectDepartment,
    doctorObject: FavoriteReducer,
    [loginapi.reducerPath]: loginapi.reducer,
    [fetchDepartment.reducerPath]: fetchDepartment.reducer,
    [fetchDoctor.reducerPath]: fetchDoctor.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(loginapi.middleware)
      .concat(fetchDepartment.middleware)
      .concat(fetchDoctor.middleware),
});
const persistor = persistStore(store);
export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
