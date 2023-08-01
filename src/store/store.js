import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./root-reducer";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const storeObj = {};
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["invoiceManager"], // Saving this reducer here to not loose data during refresh
};

export default function setup() {
  const logger = createLogger({ collapsed: true });
  let middleWareArray = [];
  middleWareArray = [...middleWareArray, thunk, logger];
  const persistedReducer = persistReducer(persistConfig, reducer);
  const Store = createStore(
    persistedReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleWareArray))
  );
  const persistor = persistStore(Store, null, () => {});
  storeObj.store = Store;
  return { persistor, Store };
}
