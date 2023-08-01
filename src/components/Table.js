/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../table.css";
import { connect } from "react-redux";
import { AiOutlineCopy, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {
  copyInvoice,
  deleteInvoiceDetails,
} from "../store/invoice-manager/invoice-manager.actions";

class TableComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { history, data = [] } = this.props;
    console.log(this.props, "table props");
    const NamePlaceHolder = ({ value }) => (
      <span className="table-bg-placeholder">{value}</span>
    );

    return (
      <div className="p-2 mt-2 table-container p-3 ">
        <div className="table-heading">
          <div className="d-flex justify-content-between w-100">
            <div>
              <div className="table-heading-large">Invoice List</div>
              <div className="table-heading-small">Total - 10</div>
            </div>
            <Button variant="dark" onClick={() => history("/invoice-form")}>
              Create New Invoice
            </Button>
          </div>
        </div>
        <Table>
          <thead>
            <tr className="table-head-bg">
              <th>Invoice Number</th>
              <th>Due Date</th>
              <th>Bill To</th>
              <th>Bill From</th>
              <th>Number Of Items</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((eachInvoice, idx) => (
                <tr key={eachInvoice.id}>
                  <td>
                    <NamePlaceHolder value={eachInvoice.id} />
                  </td>
                  <td>{eachInvoice.dateOfIssue}</td>
                  <td>{eachInvoice.billTo}</td>
                  <td>{eachInvoice.billFrom}</td>
                  <td>{eachInvoice.items.length}</td>
                  <td>{eachInvoice.subTotal}</td>
                  {/* <td>Edit Delete Copy Same Template</td> */}
                  <td>
                    <AiOutlineDelete
                      className="pointer"
                      fontSize={"18px"}
                      onClick={() =>
                        this.props.dispatch(
                          deleteInvoiceDetails(eachInvoice.id)
                        )
                      }
                    />
                    <AiOutlineEdit
                      className="pointer"
                      fontSize={"18px"}
                      onClick={() => history(`/invoice-form/${eachInvoice.id}`)}
                    />
                    <AiOutlineCopy
                      fontSize={"18px"}
                      className="pointer"
                      onClick={() => {
                        this.props.dispatch(copyInvoice(idx));
                        history(`/invoice-form/`);
                      }}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    data: store.invoiceManager.data,
  };
};

export default connect(mapStateToProps)((props) => (
  <TableComponent history={useNavigate()} {...props} />
));
