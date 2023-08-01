import * as actionTypes from "./invoice-manager.action-types";

class state {
  data = [];
  isLoading = false;
  isError = false;
  isCopy = false;
  selectedIndex = null;
}

const initialState = new state();

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

const invoiceManagerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_INVOICE_BEGINS:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.SET_INVOICE_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case actionTypes.SET_INVOICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCopy: false,
        data: getUniqueListBy([...state.data, payload], "id"),
      };
    case actionTypes.EDIT_INVOICE:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCopy: false,
        data: getUniqueListBy(
          state.data.map((val) =>
            val.id === payload.id ? { ...payload } : val
          ),
          "id"
        ),
      };
    case actionTypes.DELETE_INVOICE:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCopy: false,
        data: state.data.filter((val) => val.id !== payload),
      };
    case actionTypes.COPY_INVOICE:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCopy: true,
        selectedIndex: payload,
      };
    default:
      return state;
  }
};

export default invoiceManagerReducer;
