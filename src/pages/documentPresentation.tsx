import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Form, Tabs, Tab, Button, Nav } from "react-bootstrap";
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
    <div className="tableWithPagination table-responsive">
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
            <th rowSpan={2}>Presenter Name</th>
            <th rowSpan={2} className="text-center">
              No. of <br />
              Schedule
            </th>
            <th rowSpan={2}>
              CS No. & Ack No.
              <br />
              Generated Date & Time
            </th>
            <th rowSpan={2} className="text-center">
              Book <br />
              Number
            </th>
            <th colSpan={2} className="extraFont text-center">
              Nature of Document
            </th>
            <th rowSpan={2} className="text-center">
              Action
            </th>
          </tr>
          <tr>
            <th className="text-center smallFont">Maj</th>
            <th className="text-center smallFont">Min</th>
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
                    <Image
                      width={20}
                      height={27}
                      src="/images/Basic-Details.svg" />
                    <small>View Basic Details</small>
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
              }}
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

function Tables({ columns, data }) {
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
    <div className="tableWithPagination">
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
            <th rowSpan={2}>Presenter Name</th>
            <th rowSpan={2} className="text-center">
              No. of <br />
              Schedule
            </th>
            <th rowSpan={2}>
              CS No. & Ack No.
              <br />
              Generated Date & Time
            </th>
            <th rowSpan={2} className="text-center">
              Book <br />
              Number
            </th>
            <th colSpan={2} className="extraFont text-center">
              Nature of Document
            </th>
            <th rowSpan={2} className="text-center">
              Ammend Reason
            </th>
            <th rowSpan={2} className="text-center">
              Ammend Comments
            </th>
            <th rowSpan={2} className="text-center">
              Action
            </th>

          </tr>
          <tr>
            <th className="text-center smallFont">Maj</th>
            <th className="text-center smallFont">Min</th>
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
                <td className="text-center d-flex">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#viewBasicDetails"
                    className="basicDetails"
                  >
                    {" "}
                    <Image
                      width={20}
                      height={27}
                      src="/images/basic-details.jpg"
                    />
                    <small>View Basic Details</small>
                  </button>
                  <button className="print">
                    {" "}
                    <Image width={25} height={25} src="/images/sroreview.png" />
                    <small>Submit for SRO Review</small>
                  </button>
                  {/* <Button active variant="primary" className="capture">Submit sro for review</Button> */}
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
              }}
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


function documentPresentation() {
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
            accessor: "noofSchedule",
          },
          {
            Header: "Book Number",
            accessor: "generateddatetime",
          },
          {
            Header: "Ack. No.",
            accessor: "bookNumber",
          },

        ],
      },
      {
        Header: "Nature of Document",
        columns: [
          {
            Header: "Maj",
            accessor: "maj",
          },
          {
            Header: "Min",
            accessor: "min",
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
      noofSchedule: "1",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "1",
      maj: "01",
      min: "01",
      Accept: "Wrong Document",
      Ammend: "Comments come here..."


    },
    {
      appNo: "456787654",
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Sekhar Varma",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "2",
      maj: "02",
      min: "02",
      Accept: "Wrong Document",
      Ammend: "Comments come here..."

    },
    {
      appNo: "456787654",
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Chandra Sekhar",
      noofSchedule: "1",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "1",
      maj: "01",
      min: "01",
      Accept: "Wrong Document",
      Ammend: "Comments come here..."


    },
    {
      appNo: "456787654",
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Sekhar Varma",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "2",
      maj: "02",
      min: "02",
      Accept: "Wrong Document",
      Ammend: "Comments come here..."

    },
    {
      appNo: "456787654",
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Chandra Sekhar",
      noofSchedule: "1",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "1",
      maj: "01",
      min: "01",
      Accept: "Wrong Document",
      Ammend: "Comments come here..."


    },
    {
      appNo: "456787654",
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Sekhar Varma",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "2",
      maj: "02",
      min: "02",
      Accept: "Wrong Document",
      Ammend: "Comments come here..."

    },

  ];

  const ammendcolumns = React.useMemo(
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
            accessor: "noofSchedule",
          },
          {
            Header: "Book Number",
            accessor: "generateddatetime",
          },
          {
            Header: "Ack. No.",
            accessor: "bookNumber",
          },
        ],
      },
      {
        Header: "Nature of Document",
        columns: [
          {
            Header: "Maj",
            accessor: "maj",
          },
          {
            Header: "Min",
            accessor: "min",
          },
        ],
      },
      {
        Header: "Ammend",
        columns: [
          {
            Header: "Ammend Reason",
            accessor: "ammendReason",
          },
          {
            Header: "Ammend Comments",
            accessor: "ammendComments",
          },
        ],
      },
    ],
    []
  );

  const ammendData = [
    {
      appNo: "456787654",
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Chandra Sekhar",
      noofSchedule: "1",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "1",
      maj: "01",
      min: "01",
      ammendReason: "Wrong Document",
      ammendComments: "Comments come here...",
    },
    {
      appNo: "456787654",
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Sekhar Varma",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "2",
      maj: "02",
      min: "02",
      ammendReason: "Wrong Document",
      ammendComments: "Comments come here...",
    },

  ];

  return (
    <><Stepper /><div className="pageMainWrap innerpage">
      <Head>
        <title>Document Presentation - CARD</title>
        <meta name="description" content="login" />
        <link rel="icon" href="/igrsfavicon.ico" />
      </Head>

      <div className="mainWrapper">
        <div className="wrapperInner">
          <div className="acknowledgement">
            <h4>Acknowledgement Generation</h4>
          </div>
          {/* <Container> */}
          {/* <Row className="justify-content-md-center">
            <Col lg={7}></Col>
            <Col lg={5} md={12} xs={12} className="pageTableSearch">
              <div className="d-flex searchbar-ml">
                <form className="md-form">
                  <div className={`input-group md-form form-sm form-1 pl-0`}>
                    <input
                      className={`form-control form-control-sm ml-3 w-75`}
                      type="text"
                      placeholder="Search"
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
                  <button className="filter" data-bs-toggle="modal" data-bs-target="#exampleModals">
                    <small>Filters</small>
                    <Image width={20} height={20} src="/images/filter.svg" />
                  </button>
                </div>
              </div>
            </Col>
          </Row> */}
          <div className="modal-path modal fade modal-md" id="exampleModals" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog mt-5">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Select Date</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <Row>
                    <Col lg={12} md={12} xs={12} className="mb-3">
                      {/* <div className="clear-date d-flex justify-content-end p-2">Clear</div> */}
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="date"
                          placeholder="From Date" />
                        <Form.Label htmlFor="floatingInputCustom">
                          From Date
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
                          placeholder="To Date" />
                        <Form.Label htmlFor="floatingInputCustom">
                          To Date
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                </div>
                <div className="modal-footer justify-content-center">
                  <button type="button" className="btn btn-secondary whitebuttonclass" data-bs-dismiss="modal">Clear</button>
                  <button type="button" className="btn btn-primary bluebuttonclass">Select</button>
                </div>
              </div>
            </div>
          </div>
          {/* </Container> */}
          <div className="documentsTable pageTableMain pageTableContainer">
            <Tab.Container defaultActiveKey="accept">
              <div className="pageTabsMain">
                <div className="pageTableTabs">

                  <Row>
                    <div className="searchConatiner">
                      <Col lg={4}>
                        <div>
                          <Nav variant="pills">
                            <Nav.Item>
                              <Nav.Link eventKey="accept"><button className="button my-4">Accept (5)</button></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ammend"><button className="button my-4">Ammend (5)</button></Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                      </Col>
                      <Col lg={8}>
                        <div className="pageTableSearch text-end mt-3">
                          <div className="d-flex searchbar-ml justify-content-end">
                            <form className="md-form">
                              <div className={`input-group md-form form-sm form-1 pl-0`}>
                                <input
                                  className={`form-control form-control-sm ml-3 w-75`}
                                  type="text"
                                  placeholder="Search"
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
                              <button className="filter" data-bs-toggle="modal" data-bs-target="#exampleModals">
                                <small>Filters</small>
                                <Image width={20} height={20} src="/images/filter.svg" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </div>
                  </Row>
                  <Tab.Content>
                    <Tab.Pane eventKey="accept">
                      <Table columns={columns} data={data} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="ammend">
                      <Tables columns={ammendcolumns} data={ammendData} />
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </div>
            </Tab.Container>
          </div>
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Print</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="text-center  printackno">PDE ACKNOWLEDGEMENT</div>
                  <div className="text-center p-3 m-4 printcheckslip">Chek Slip No.212 By SRO</div>
                  <Container>
                    <Row className="mb-2">
                      <Col lg={6} md={6} xs={12}>
                        Application No
                      </Col>
                      <Col lg={6} md={6} xs={12}>
                        456787654
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col lg={6} md={6} xs={12}>
                        Slot Time
                      </Col>
                      <Col lg={6} md={6} xs={12}>
                        456787654
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col lg={6} md={6} xs={12}>
                        Acknowledgement No
                      </Col>
                      <Col lg={6} md={6} xs={12}>
                        345
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col lg={6} md={6} xs={12}>
                        Date & Time
                      </Col>
                      <Col lg={6} md={6} xs={12}>
                        22/11/2022 10:45 AM
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col lg={6} md={6} xs={12}>
                        Stamp Borne by Documents
                      </Col>
                      <Col lg={6} md={6} xs={12}>
                        Rs. 100
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col lg={6} md={6} xs={12}>
                        Presentation Date
                      </Col>
                      <Col lg={6} md={6} xs={12}>
                        20/10/2022
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col lg={6} md={6} xs={12}>
                        Total No of Sheets
                      </Col>
                      <Col lg={6} md={6} xs={12}>
                        5
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col lg={6} md={6} xs={12}>
                        Nominee
                      </Col>
                      <Col lg={6} md={6} xs={12}>
                        Ch.Jayadev
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col lg={6} md={6} xs={12}>
                        Reg.Type
                      </Col>
                      <Col lg={6} md={6} xs={12}>
                        Anywhere
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col lg={6} md={6} xs={12}>
                        Major
                      </Col>
                      <Col lg={6} md={6} xs={12}>
                        01
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col lg={6} md={6} xs={12}>
                        Minor
                      </Col>
                      <Col lg={6} md={6} xs={12}>
                        01
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col lg={6} md={6} xs={12}>
                        No of Schedule
                      </Col>
                      <Col lg={6} md={6} xs={12}>
                        01
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="modal-footer text-center d-flex justify-content-center">
                  <button type="button" className="btn btn-primary text-center bluebuttonclass">Print</button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade modal-lg align-items-center justify-content-center"
            id="viewBasicDetails"
            aria-labelledby="viewBasicDetails"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    View Basic Details
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
                  <Row>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Presentant Name" value="subbu" readOnly
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Presentant Name
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Nominee Name" value="anusha" readOnly
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Nominee Name
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Nominee Name" value="XXXXXXXXXXX1234"
                          readOnly
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Nominee Aadhar No.
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <h5 className="mt-4 mb-3">Consider Presentant As</h5>
                  <div className="d-flex mb-2">
                    <div className="mb-3">
                      <Form.Check
                        defaultChecked readOnly
                        value="Executant"
                        type="radio"
                        aria-label="Executant"
                        label="Executant" />
                    </div>
                    <div className="mb-3 mx-2">
                      <Form.Check
                        disabled
                        value="Claimant"
                        type="radio"
                        aria-label="Claimant"
                        label="Claimant" />
                    </div>
                    <div className="mb-3 mx-2">
                      <Form.Check
                        disabled
                        value="Representative"
                        type="radio"
                        aria-label="Representative"
                        label="Representative" />
                    </div>
                  </div>

                  <Row>
                    <Col lg={6} md={6} xs={6} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="ID Number" value="Subbu" readOnly />
                        <Form.Label htmlFor="floatingInputCustom">
                          ID Proof
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={6} md={6} xs={6} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="ID Number" value="2524542" readOnly />
                        <Form.Label htmlFor="floatingInputCustom">
                          ID Number
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <Row>

                    <Col lg={6} md={6} xs={6} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Name" value="Subbarao mucharla" readOnly />
                        <Form.Label htmlFor="floatingInputCustom">
                          Name
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={2} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Age" value="39" readOnly />
                        <Form.Label htmlFor="floatingInputCustom">
                          Age
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={4} md={6} xs={12} className="mb-3">
                      <div className="input-group">
                        <button
                          className="btn btn-outline-secondary dropdown-toggle "
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ color: "#4D4D4D", borderRadius: "8px 0px 0px 8px", borderColor: "#6096BA", backgroundColor: "#F6F9FB" }}
                        >
                          S/o
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Option 1</a></li>
                          <li><a className="dropdown-item" href="#">Option 2</a></li>
                          <li><a className="dropdown-item" href="#">Option 3</a></li>
                        </ul>
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="Age"
                            className="form-control"
                            value="Venkateshwar rao" readOnly
                          />
                          <Form.Label htmlFor="floatingInputCustom">
                            Relation Name
                          </Form.Label>
                        </Form.Floating>
                      </div>
                    </Col>

                  </Row>

                  <Row>
                    <Col lg={5} md={5} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Address" value="hdyerabd" readOnly />
                        <Form.Label htmlFor="floatingInputCustom">
                          Address
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={3} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Presentant Date" value="03-03-2023" readOnly />
                        <Form.Label htmlFor="floatingInputCustom">
                          Presentant Date
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Stamp Duty Borne by Document" value="03-03-2023" readOnly />
                        <Form.Label htmlFor="floatingInputCustom">
                          Stamp Duty Borne by Document
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="No of Sheets" value="3" readOnly
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          No of Sheets
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder=" Registration Type" value="3" readOnly
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Registration Type
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Book Type" value="3" readOnly
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Book Type
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <h5 className="mt-4 mb-3">Nature of Document</h5>
                  <Row>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Minor" value="3" readOnly
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Minor
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Major" value="3" readOnly
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Major
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom" readOnly
                          type="text"
                          placeholder="No of Schedules" value="2"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          No of Schedules
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default documentPresentation;
