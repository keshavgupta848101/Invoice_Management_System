import { combineReducers } from "redux";
import invoiceManagerReducer from "./invoice-manager/invoice-manager.reducer";

const reducer = combineReducers({
  invoiceManager: invoiceManagerReducer,
});

export default reducer;
