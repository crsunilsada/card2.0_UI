import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Form, Tabs, Tab, Button, Nav, Card } from "react-bootstrap";
import { useTable, usePagination } from "react-table";
import Stepper from '../components/Stepper'
function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
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
    <div className="tableWithPagination table-responsive ">
      <table
        className="tableData listData tableheadBg table text-center"
        {...getTableProps()}
      >
        <thead className="hiddenHead">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <thead>
          <tr>
            <th rowSpan={2} className="text-center">
              App No.
            </th>
            <th rowSpan={2} className="text-center">
              Ack. No.
            </th>
            <th rowSpan={2} className="text-center">
              CS No.
            </th>
            <th rowSpan={2} className="text-center">
              Ack. Year
            </th>
            <th rowSpan={2} className="text-center">Presenter Name</th>
            <th rowSpan={2} className="text-center"> Date </th> 
            <th rowSpan={2} className="text-center"> Documents Print </th>          
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td className="text-center">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#viewBasicDetails"
                    className="basicDetails"
                  >
                    {" "}
                    <Image   width={14}height={14} src="/images/Print.svg" />
                    <small>Documents </small>
                  </button>
                  <button className="print" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    {" "}
                    <Image width={14} height={14} src="/images/Print.svg" />
                    <small>Check Slip</small>
                  </button>
                  <button className="print" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    {" "}
                    <Image width={14} height={14} src="/images/Print.svg" />
                    <small >Slot Booking</small>
                  </button>
                  <button className="print " data-bs-toggle="modal" data-bs-target="#exampleModal">
                    {" "}
                    <Image width={14} height={14} src="/images/Print.svg" />
                    <small >Acknowledgment</small>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="paginationMain">
        <ul className="pagination d-flex align-items-center justify-content-end">
          <li className="PageItems">
            Items per page:{" "}
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              } }
            >
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </li>
          <li className="pagesList">
            <a className="page-link">
              Page {pageIndex + 1} of {pageOptions.length}{" "}
            </a>
          </li>
          <li
            className="paginationPrev pageNav"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <a className="page-link">
              <img src="/images/pagination-prev.jpg" />
            </a>
          </li>
          <li
            className="paginationNext pageNav"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <a className="page-link">
              <img src="/images/pagination-next.jpg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}



function pdePrint() {
    useEffect(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "1",
                columns: [
                    {
                        Header: "App No.",
                        accessor: "appNo",
                    },
                    {
                        Header: "Ack. No.",
                        accessor: "ackNo",
                    },
                    {
                        Header: "CS No.",
                        accessor: "csNo",
                    },
                    {
                        Header: "Ack. Year",
                        accessor: "ackYear",
                    },
                    {
                        Header: "No. of Schedule",
                        accessor: "presenterName",
                    },
                    {
                        Header: "CS No. & Ack No. Generated Date & Time",
                        accessor: "date",
                    },
                   
                ],
            },
            
        ],
        []
    );


    const data = [
        {
            appNo: "456787654",
            ackNo: "345",
            csNo: "212",
            ackYear: "2022",
            presenterName: "Chandra Sekhar",
            date:"12-3-2022",
           
        },
        {
            appNo: "456787654",
            ackNo: "345",
            csNo: "212",
            ackYear: "2022",
            presenterName: "Sekhar Varma",
            date:"12-3-2022",
            
        },

    ];

    

  return (
    <><Stepper/><div className="pageMainWrap innerpage">
      <Head>
        <title>Document Presentation - CARD</title>
        <meta name="description" content="login" />
        <link rel="icon" href="/igrsfavicon.ico" />
      </Head>

      <div className="mainWrapper">
        <div className="wrapperInner">
          <div className="acknowledgement">
            <h4>PDE Print</h4>
          </div>

          <Container>
            <Row className="justify-content-md-center">
              <Col lg={7} md={8} xs={12} className="pageTableSearch">
                <form className="md-form">
                  <div className={`input-group md-form form-sm form-1 pl-0`}>
                    <input
                      className={`form-control form-control-sm ml-3 w-75`}
                      type="text"
                      placeholder="Search Here.."
                      aria-label="Search" />
                    <div className={`input-group-prepend`}>
                      <button
                        className={`btn btn-outline-success`}
                        type="submit"
                      >
                        <Image
                          width={23}
                          height={23}
                          src="/images/Search-icon.svg" />
                      </button>
                    </div>
                  </div>
                </form>

                <div className="searchFiler">
                  <button className="today">Today</button>
                  <button className="filter"  data-bs-toggle="modal" data-bs-target="#exampleModals">
                    <small>Filters</small>
                    <Image width={20} height={20} src="/images/filter.svg" />
                  </button>
                </div>
              </Col>
            </Row>
            <div className="modal fade modal-sm position-absolute" id="exampleModals" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Clear</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <Row>
                      <Col lg={12} md={12} xs={12} className="mb-3">
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="date"
                            placeholder="Start Date" />
                          <Form.Label htmlFor="floatingInputCustom">
                            Start Date
                          </Form.Label>
                        </Form.Floating>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} md={12} xs={12} >
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="date"
                            placeholder="End Date" />
                          <Form.Label htmlFor="floatingInputCustom">
                            End Date
                          </Form.Label>
                        </Form.Floating>
                      </Col>
                    </Row>

                </div>
                <div className="modal-footer text-center d-flex justify-content-center">
                  <button type="button" className="btn btn-primary text-center bluebuttonclass">Save</button>
                </div>
              </div>
            </div>
          </div>
          </Container>

          <Col>
                                    <div className="documentsTable pageTableMain pageTableContainer">
                                        <div className="pageTableTabs">
                                        </div>
                                        <Table columns={columns} data={data} />
                                    </div>
                                </Col>

                    {/* <!-- Modal --> */}
                    

          <div
            className="modal fade modal-xl"
            id="viewBasicDetails"
            aria-labelledby="viewBasicDetails"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Document
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <Image
                      width={20}
                      height={20}
                      src="/images/popup-close.svg" />
                  </button>
                </div>

                                <div className="modal-body">
                                  {/* <Card className="primary "> */}
                                  <div>
                                  <Row>
                      <Col lg={2} md={2} xs={2}></Col>
                       <Col lg={8} md={8} xs={8}>
                      
                 
                  <h4 className="text-center mt-4"><u>SALE DEED</u> </h4>
                  <h6 className="text-center mt-4">This SALE DEED is made and executed on this 02nd day of the february, 2023,by:</h6>
                  <h6 className="mt-4">Mr/Mrs Vudimudi Ravi Teja  S/O V.E.R.subba Raju, aged above 35 years, 
                  occupation:Teacher, presently residing at plot 180 flat 30, shapur nagar IDA Jeedimetla,
                  rangareddi,
                  Qutubullapur 500050</h6>
                   <h6 className="text-center mt-4">Herein after called the SETTLOR of the first part</h6> 
                   <h4 className="text-center"><u>AND</u></h4> 
                   <h6 className="mt-4">Mr/Mrs Chennoju Sreekanth, S/O Chennjou Surya Narayana, aged above 27 years,
                   occupation:Teacher, R/O Venkatapur mandalam,
                   warangal
                   Laxmidevipeta-506345, Presently residing at Venkatapur mandalam,
                   Waranagl,
                   Laxmidevipeta-506345,
                   </h6>
                   <h6 className="text-center mt-4">Herein after called the SETTLEE of the second part</h6> 
                   <h6 className="mt-4">Whereas  the SETTLOR herein is the absolute owner and possessor of Residential Flat no. in 
                   Aparna Apartments situated in Rajahmundry,Rajahmundry acquired by inheritence.</h6>                   
                     <Row className="mt-4">
                      <Col lg={4} md={4} xs={4}></Col>
                      <Col lg={4} md={4} xs={4}>
                      <button type="button" className="bluebuttonclass mb-3">
                        Print
                      </button>
                      </Col>
                      <Col lg={2} md={2} xs={2}></Col>
                      <Col lg={2} md={2} xs={4}><h6 className="pt-4">Signature(s)</h6></Col>

                      </Row>
                      
                  </Col>
                  <Col lg={2} md={2} xs={2}></Col>
                  </Row>
                  </div>
                  {/* </Card> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    );
}

export default pdePrint;
