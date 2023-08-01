import * as actionTypes from "./invoice-manager.action-types";

export const setInvoiceFetching = () => (dispatch) => {
  dispatch({
    type: actionTypes.SET_INVOICE_BEGINS,
    payload: true,
  });
};

export const invoiceSettingFails = (message) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_INVOICE_FAIL,
    payload: message,
  });
};

export const setInvoiceDetails = (value) => (dispatch) => {
  dispatch(setInvoiceFetching(dispatch));
  try {
    dispatch({
      type: actionTypes.SET_INVOICE_SUCCESS,
      payload: value,
    });
  } catch (err) {
    dispatch(invoiceSettingFails(err));
  }
};

export const editInvoiceDetails = (value) => (dispatch) => {
  dispatch({
    type: actionTypes.EDIT_INVOICE,
    payload: value,
  });
};

export const deleteInvoiceDetails = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_INVOICE,
    payload: id,
  });
};
export const copyInvoice = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.COPY_INVOICE,
    payload: id,
  });
};
