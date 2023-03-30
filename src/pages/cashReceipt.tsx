import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Stepper from "../components/Stepper";
import Link from "next/link";
import Image from "next/image";
import { useTable, usePagination } from "react-table";
import { Key } from "react-bootstrap-icons";
function Table({ columns, data }) {
  const {
    getTableProps,
    headerGroups,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 7 },
    },
    usePagination
  );
  const [codeList, setcodeList] = useState({0:"Stamp Duty",1:"Transfer Fee",2:"Fee",3:"User Charges"});
  const onChangeHandler = (e, index) => {
    setcodeList({ ...codeList, [index]: e.target.value });
    console.log(codeList)
  };
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
            {/* <th>
              {" "}
              By CFMS + <br /> Stock Holding
            </th> */}
            <th className="text-center p-3">By Cash</th>
            <th className="text-center p-3">By DD</th>
          </tr>
        </thead>
        {/* <tbody {...getTableBodyProps()}>
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
        </tbody> */}
        <tbody>
          {data.map((item, index: number) => {
            return (
              <tr key={index} className="text-center">
                <td>
                <Form.Floating>
                    <Form.Select
                      aria-label="Code"
                      onChange={(e) => onChangeHandler(e, index)}
                    >
                      <option>SELECT</option>
                      {index==0?   <option selected>Stamp Duty</option>: <option>Stamp Duty</option>}
                      {index==1?   <option selected>Transfer Fee</option>: <option>Transfer Fee</option>}
                      {index==2?   <option selected>Fee</option>: <option>Fee</option>}
                      {index==3?   <option selected>User Charges</option>: <option>User Charges</option>}
                      <option>Document Fee</option>
                      <option>Challan Charges</option>
                      <option>DD Charges</option>
                    </Form.Select>
                  </Form.Floating>
                </td>
                <td>{codeList[index]}</td>
                <td>{item.amount}</td>
                <td>{item.ByCFMS}</td>
                <td>{item.bifurcation}</td>
                <td>{item.ByStock}</td>
                <td>{item.CFMSandStock}</td>
                <td>{item.ByCash}</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td>
              <div className=" text-center ">
                <div className="">Total</div>
                <h3>2300</h3>
              </div>
            </td>
            <td>
              <div className=" text-center">
                <div className="">Total</div>
                <h3>1243</h3>
              </div>
            </td>
            <td>
              <div className=" text-center">
                <div className="">Total</div>
                <h3>9876</h3>
              </div>
            </td>
            <td>
              <div className=" text-center">
                <div className="">Total</div>
                <h3>1523</h3>
              </div>
            </td>
            <td>
              <div className=" text-center">
                <div className="">Total</div>
                <h3>8744</h3>
              </div>
            </td>
            <td>
              <div className=" text-center">
                <div className="">Total</div>
                <h3>4633</h3>
              </div>
            </td>
          </tr>
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
          // {
          //   Header: "By CFMS + Stock Holding",
          //   accessor: "CFMSandStock",
          // },
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
  const [codeList, setcodeList] = useState({ code: "" });
  const onChangeHandler = (e) => {
    setcodeList({ code: e.target.value });
  };
  const textFieldFirstColumn = (
    <Form.Floating>
      <Form.Select
        aria-label="Code"
        value={codeList.code}
        onChange={onChangeHandler}
      >
        <option></option>
        <option value="1">Stamp Duty</option>
        <option value="2">Transfer Fee</option>
        <option value="3">Fee</option>
        <option value="4">User Charges</option>
        <option value="4">Document Fee</option>
        <option value="4">Challan Charges</option>
        <option value="4">DD Charges</option>
    </Form.Select>
</Form.Floating>
  );
  let data1 = [
    {
      Code: textFieldFirstColumn,
      Description: <span className="fontweight">Stamp Duty</span>,
      amount: <span className="fontweight">1000</span>,
      ByCFMS: (
        <Row className="justify-content-md-center">
          <Col lg={12} md={12} xs={12} className="pageTableSearch">
            <form className="md-form">
              <div className={`input-group md-form form-sm form-1 pl-0`}>
                <input
                  className={`form-control form-control-sm ml-3 w-50`}
                  type="text"
                  placeholder="Search - By CFMS"
                  aria-label="Search"
                />
                <div className={`input-group-prepend`}>
                  <button className={`btn btn-outline-success`} type="submit">
                    <Image
                      width={23}
                      height={23}
                      src="/images/Search-icon.svg"
                    />
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      ),
      bifurcation: textField,
      ByStock: (
        <Row className="justify-content-md-center">
          <Col lg={12} md={12} xs={12} className="pageTableSearch">
            <form className="md-form">
              <div className={`input-group md-form form-sm form-1 pl-0`}>
                <input
                  className={`form-control form-control-sm ml-3 w-50`}
                  type="text"
                  placeholder="Search - By Stock"
                  aria-label="Search"
                />
                <div className={`input-group-prepend`}>
                  <button className={`btn btn-outline-success`} type="submit">
                    <Image
                      width={23}
                      height={23}
                      src="/images/Search-icon.svg"
                    />
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      ),
      CFMSandStock: textField,
      ByCash: textField,
      ByDD: textField,
    },
    {
      Code: textFieldFirstColumn,
      Description: <span className="fontweight">Transfer Fee</span>,
      amount: <span className="fontweight">1000</span>,
      ByCFMS: (
        <Row className="justify-content-md-center">
          <Col lg={12} md={12} xs={12} className="pageTableSearch">
            <form className="md-form">
              <div className={`input-group md-form form-sm form-1 pl-0`}>
                <input
                  className={`form-control form-control-sm ml-3 w-50`}
                  type="text"
                  placeholder="Search - By CFMS"
                  aria-label="Search"
                />
                <div className={`input-group-prepend`}>
                  <button className={`btn btn-outline-success`} type="submit">
                    <Image
                      width={23}
                      height={23}
                      src="/images/Search-icon.svg"
                    />
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      ),
      bifurcation: textField,
      ByStock: (
        <Row className="justify-content-md-center">
          <Col lg={12} md={12} xs={12} className="pageTableSearch">
            <form className="md-form">
              <div className={`input-group md-form form-sm form-1 pl-0`}>
                <input
                  className={`form-control form-control-sm ml-3 w-50`}
                  type="text"
                  placeholder="Search - By Stock"
                  aria-label="Search"
                />
                <div className={`input-group-prepend`}>
                  <button className={`btn btn-outline-success`} type="submit">
                    <Image
                      width={23}
                      height={23}
                      src="/images/Search-icon.svg"
                    />
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      ),
      CFMSandStock: textField,
      ByCash: textField,
      ByDD: textField,
    },
    {
      Code: textFieldFirstColumn,
      Description: <span className="fontweight">Fee</span>,
      amount: <span className="fontweight">100</span>,
      ByCFMS: (
        <Row className="justify-content-md-center">
          <Col lg={12} md={12} xs={12} className="pageTableSearch">
            <form className="md-form">
              <div className={`input-group md-form form-sm form-1 pl-0`}>
                <input
                  className={`form-control form-control-sm ml-3 w-50`}
                  type="text"
                  placeholder="Search - By CFMS"
                  aria-label="Search"
                />
                <div className={`input-group-prepend`}>
                  <button className={`btn btn-outline-success`} type="submit">
                    <Image
                      width={23}
                      height={23}
                      src="/images/Search-icon.svg"
                    />
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      ),
      bifurcation: textField,
      ByStock: (
        <Row className="justify-content-md-center">
          <Col lg={12} md={12} xs={12} className="pageTableSearch">
            <form className="md-form">
              <div className={`input-group md-form form-sm form-1 pl-0`}>
                <input
                  className={`form-control form-control-sm ml-3 w-50`}
                  type="text"
                  placeholder="Search - By Stock"
                  aria-label="Search"
                />
                <div className={`input-group-prepend`}>
                  <button className={`btn btn-outline-success`} type="submit">
                    <Image
                      width={23}
                      height={23}
                      src="/images/Search-icon.svg"
                    />
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      ),
      CFMSandStock: textField,
      ByCash: textField,
      ByDD: textField,
    },
    {
      Code: textFieldFirstColumn,
      Description: <span className="fontweight">User Charges</span>,
      amount: <span className="fontweight">100</span>,
      ByCFMS: (
        <Row className="justify-content-md-center">
          <Col lg={12} md={12} xs={12} className="pageTableSearch">
            <form className="md-form">
              <div className={`input-group md-form form-sm form-1 pl-0`}>
                <input
                  className={`form-control form-control-sm ml-3 w-50`}
                  type="text"
                  placeholder="Search - By CFMS"
                  aria-label="Search"
                />
                <div className={`input-group-prepend`}>
                  <button className={`btn btn-outline-success`} type="submit">
                    <Image
                      width={23}
                      height={23}
                      src="/images/Search-icon.svg"
                    />
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      ),
      bifurcation: textField,
      ByStock: (
        <Row className="justify-content-md-center">
          <Col lg={12} md={12} xs={12} className="pageTableSearch">
            <form className="md-form">
              <div className={`input-group md-form form-sm form-1 pl-0`}>
                <input
                  className={`form-control form-control-sm ml-3 w-50`}
                  type="text"
                  placeholder="Search - By Stock"
                  aria-label="Search"
                />
                <div className={`input-group-prepend`}>
                  <button className={`btn btn-outline-success`} type="submit">
                    <Image
                      width={23}
                      height={23}
                      src="/images/Search-icon.svg"
                    />
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      ),
      CFMSandStock: textField,
      ByCash: textField,
      ByDD: textField,
    },
    // {
    //   Code:"",
    //   Description: "",
    //   amount: (
    //     <div className="w-75">
    //       <div className="w-75">Total</div>
    //       <h3>2300</h3>
    //     </div>
    //   ),
    //   ByCFMS: (
    //     <div className="w-75">
    //       <div className="w-75">
    //         <span>Total</span>
    //       </div>
    //       <h3>1243</h3>
    //     </div>
    //   ),
    //   bifurcation: (
    //     <div className="w-75">
    //       <div className="w-75">
    //         <span>Total</span>
    //       </div>
    //       <h3>9876</h3>
    //     </div>
    //   ),
    //   ByStock: (
    //     <div className="w-75">
    //       <div className="w-75">
    //         <span>Total</span>
    //       </div>
    //       <h3>1523</h3>
    //     </div>
    //   ),
    //   CFMSandStock: (
    //     <div className="w-75">
    //       <div className="w-75">
    //         <span>Total</span>
    //       </div>
    //       <h3>8744</h3>
    //     </div>
    //   ),
    //   ByCash: (
    //     <div className="w-75">
    //       <div className="w-75">
    //         <span>Total</span>
    //       </div>
    //       <h3>4633</h3>
    //     </div>
    //   ),
    //   ByDD: (
    //     <div className="w-75">
    //       <div className="w-75">
    //         <span>Total</span>
    //       </div>
    //       <h3>2356</h3>
    //     </div>
    //   ),
    // },
  ];
const addedRow=  {
  Code: textFieldFirstColumn,
        Description: <span className="fontweight">Stamp Duty</span>,
        amount: <span className="fontweight">1000</span>,
        ByCFMS: (
          <Row className="justify-content-md-center">
            <Col lg={12} md={12} xs={12} className="pageTableSearch">
              <form className="md-form">
                <div className={`input-group md-form form-sm form-1 pl-0`}>
                  <input
                    className={`form-control form-control-sm ml-3 w-50`}
                    type="text"
                    placeholder="Search - By CFMS"
                    aria-label="Search"
                  />
                  <div className={`input-group-prepend`}>
                    <button className={`btn btn-outline-success`} type="submit">
                      <Image
                        width={23}
                        height={23}
                        src="/images/Search-icon.svg"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        ),
        bifurcation: textField,
        ByStock: (
          <Row className="justify-content-md-center">
            <Col lg={12} md={12} xs={12} className="pageTableSearch">
              <form className="md-form">
                <div className={`input-group md-form form-sm form-1 pl-0`}>
                  <input
                    className={`form-control form-control-sm ml-3 w-50`}
                    type="text"
                    placeholder="Search - By Stock"
                    aria-label="Search"
                  />
                  <div className={`input-group-prepend`}>
                    <button className={`btn btn-outline-success`} type="submit">
                      <Image
                        width={23}
                        height={23}
                        src="/images/Search-icon.svg"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        ),
  CFMSandStock: textField,
  ByCash: textField,
  ByDD:textField
}
  const [data, setTableData] = useState(data1);
  const handleAddRow = () => {
    const lastIndex = data.length ;
    setTableData([
      ...data.slice(0, lastIndex),
      addedRow
    ,
    ]);
  };
  return (
    <div><div><Stepper showReason2={true} /></div>
    <Stepper showReason={true}/>
      <div className="pageMainWrap innerpage">
        <div className="mainWrapper">
          <div className="wrapperInner">
            <div className="acknowledgement">
              <h4>Cash Reciept</h4>
            </div>
            <div>
              <div className="pageTableContainer pageTableMain mt-2">
              <Row className="mb-2">
                <Col lg={3} md={3} xs={4}>
                  <h4 className="mb-1">Basic Details</h4>
                </Col>
                <Col lg={3} md={3} xs={12}></Col>
                <Col lg={4} md={2} xs={12}></Col>
                <Col lg={2} md={5} xs={10}>
                  <div className="digital-sign-btn-enable">
                  &nbsp; &nbsp; &nbsp;   Amount Already Paid &nbsp; {" "}
                    <div className="image-container">
                      <Image width={15} height={15} src="/images/Iicon.svg" />
                      <table className="tableData listData tableheadBg table">
                        <thead>
                          <tr>
                            <th className="text-nowrap">Receipt No</th>
                            <th className="text-nowrap">Receipt Date</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>8896</td>
                            <td className="text-nowrap">26-4-2021</td>
                            <td>2300</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    </div>
                </Col>
              </Row>
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
              <Row className="mb-1">
                <Col lg={3} md={3} xs={12}>
                  <h4 className="mb-1">Cash Receipt </h4>
                </Col>
                <Col lg={3} md={4} xs={12}></Col>
                <Col lg={3} md={3} xs={12}></Col>
                <Col lg={3} md={5} xs={12}>
                <input
                        type="text"
                        className="justify-content-end float-end search-click"
                        name=""
                        placeholder=" Please search with - CFMS"
                      />
                </Col>
              </Row>
              <div className="table-scroll">
                <Table columns={columns} data={data} />
              </div>
              <div className="pageNextBtn mb-4">
                <Button onClick={handleAddRow} className="next">
                  ADD
                </Button>
              </div>
            <hr className="mt-4 mb-2" />
            {/* <div className="pageTableContainer pageTableMain"> */}
              <div className="pageNextBtn ">
                <Button className="clear">Clear</Button>
                <Link href="/verification"><Button className="next">Save</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CashReceipt;
