import React from "react";
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import Stepper from "../components/Stepper";
import Link from "next/link";
import { useTable, usePagination } from "react-table";
function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );

  // Render the UI for your table
  return (
    <div className="tableWithPagination">
      <table
        className="tableData listData tableheadBg table"
        {...getTableProps()}
      >
        <thead className="hiddenHead">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th  {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <thead>
          <tr >
            <th className="text-center p-3">Code</th>
            <th className="text-center p-3">Description</th>
            <th className="text-center p-3">Amount to pay by Challan</th>
            <th className="text-center p-3">By CFMS</th>
            <th className="text-center p-3">Bifurcation/ Allocation</th>
            <th className="text-center p-3">By Stock</th>
            <th>
              {" "}
              By CFMS + <br /> Stock Holding
            </th>
            <th className="text-center p-3">By Cash</th>
            <th className="text-center p-3">By DD</th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className="text-center p-2" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const CashReceipt = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "1",
        columns: [
          {
            Header: "  Code",
            accessor: "Code",
          },
          {
            Header: " Description",
            accessor: "Description",
          },
          {
            Header: " Amount to pay by Challan",
            accessor: "amount",
          },
          {
            Header: " By CFMS",
            accessor: "ByCFMS",
          },
          {
            Header: "Bifurcation/ Allocation",
            accessor: "bifurcation",
          },
          {
            Header: " By Stock",
            accessor: "ByStock",
          },
          {
            Header: "By CFMS + Stock Holding",
            accessor: "CFMSandStock",
          },
          {
            Header: " By Cash",
            accessor: "ByCash",
          },
          {
            Header: " By DD",
            accessor: "ByDD",
          },
        ],
      },
    ],
    []
  );

  const textField = (
    <>
      <Form.Floating>
        <Form.Control id="floatingInputCustom" type="text" />
      </Form.Floating>
    </>
  );
  const textFieldFirstColumn = (
    // <Row >
    <Form.Floating>
      <Form.Control
        className="checkbox-over"
        id="floatingInputCustom"
        type="text"
      />
    </Form.Floating>
    // </Row>
  );

  const lastColumn = (
    <>
      <small >Total</small>
      <h3>2300</h3>
    </>
  );

  const data = [
    {
      Code:textFieldFirstColumn,
      Description: "Stamp Duty",
      amount: "1000",
      ByCFMS: textField,
      bifurcation:textField,
      ByStock: textField,
      CFMSandStock: textField,
      ByCash: textField,
      ByDD: textField,
    },
    {
      Code: textFieldFirstColumn,
      Description: "Transfer Fee",
      amount: "1000",
      ByCFMS: textField,
      bifurcation:textField,
      ByStock: textField,
      CFMSandStock: textField,
      ByCash: textField,
      ByDD: textField,
    },
    {
       Code: textFieldFirstColumn,
      Description: "Register Fee",
      amount: "100",
      ByCFMS: textField,
      bifurcation:textField,
      ByStock: textField,
      CFMSandStock: textField,
      ByCash: textField,
      ByDD: textField,
    },
    {
       Code: textFieldFirstColumn,
      Description: "User Charges",
      amount: "100",
      ByCFMS: textField,
      bifurcation:textField,
      ByStock: textField,
      CFMSandStock: textField,
      ByCash: textField,
      ByDD: textField,

    },
    {
      Code: "",
      Description: "",
      amount: lastColumn,
      ByCFMS: lastColumn,
      bifurcation:lastColumn,
      ByStock: lastColumn,
      CFMSandStock: lastColumn,
      ByCash: lastColumn,
      ByDD: lastColumn,
    },
  ];

  return (
    <div><div><Stepper showReason2={true} /></div>
    <Stepper showReason={true}/>
        {/* <div className="red-strip text-center p-1">REASON: Change Nature of Document  |  COMMENTS: Comments appear here</div> */}
      <div className="pageMainWrap innerpage">
        <div className="mainWrapper">
          <div className="wrapperInner">
            <div className="acknowledgement">
              <h4>Cash Reciept</h4>
            </div>
            <div>
              <div className="pageTableContainer pageTableMain mt-4">
                <h4 className="mb-4">Basic Details</h4>
                <Row className="mb-4">
                  <Col lg={2} md={4} xs={12} className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder=" CS Number"
                      />
                      <Form.Label htmlFor="floatingInputCustom">
                        CS Number
                      </Form.Label>
                    </Form.Floating>
                  </Col>
                  <Col lg={1} md={1} xs={12} className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="Year"
                      />
                      <Form.Label htmlFor="floatingInputCustom">
                        Year
                      </Form.Label>
                    </Form.Floating>
                  </Col>
                  <Col lg={2} md={3} xs={12} className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="Book No."
                      />
                      <Form.Label htmlFor="floatingInputCustom">
                        Book No.
                      </Form.Label>
                    </Form.Floating>
                  </Col>

                  <Col lg={2} md={4} xs={12} className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="Chargeable Value"
                      />
                      <Form.Label htmlFor="floatingInputCustom">
                        Chargeable Value
                      </Form.Label>
                    </Form.Floating>
                  </Col>
                  <Col lg={2} md={4} xs={12} className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder=" Nature of Document"
                      />
                      <Form.Label htmlFor="floatingInputCustom">
                      Nature of Document
                      </Form.Label>
                    </Form.Floating>
                  </Col>
                
                  <Col lg={3} md={4} xs={12} className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="Local Body Name"
                      />
                      <Form.Label htmlFor="floatingInputCustom">
                        Local Body Name
                      </Form.Label>
                    </Form.Floating>
                  </Col>
                </Row>
              </div>
            </div>

            <hr className="mt-3 mb-2" />
            <div className="pageTableContainer pageTableMain mt-2">
              <Row className="mb-5">
                <Col lg={3} md={3} xs={12}>
                  <h4 className="mb-4">Cash Receipt </h4>
                </Col>
                <Col lg={3} md={4} xs={12}></Col>
                <Col lg={3} md={4} xs={12}></Col>
                <Col lg={3} md={3} xs={12}>
                  <Form.Floating>
                    <Form.Control
                      id="floatingInputCustom"
                      type="text"
                      placeholder="By CFMS"
                    />
                    <Form.Label htmlFor="floatingInputCustom">
                      By CFMS
                    </Form.Label>
                  </Form.Floating>
                </Col>
              </Row>
              <div className="table-responsive">
                <Table columns={columns} data={data} />
              </div>
              <div className="pageNextBtn mb-4">
                <Button className="next">ADD</Button>
              </div>
              </div>
              <hr className="mt-4 mb-2" />
            <div className="pageTableContainer pageTableMain">
              <div className="pageNextBtn ">
                <Button className="clear">Clear</Button>
                <Button className="next">Save</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashReceipt;
