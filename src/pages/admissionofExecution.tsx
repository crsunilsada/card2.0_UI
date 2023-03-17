import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Form, Popover, Overlay } from "react-bootstrap";
import { useTable, usePagination } from "react-table";
import Stepper from '../components/Stepper'
import Link from 'next/link';
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
    <div className="tableWithPagination">
      <table
        className="tableData listData tableheadBg table"
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
            <th className="text-center">App No.</th>
            <th className="text-center">Ack.No/ Year</th>
            <th className="text-center">CS No.</th>

            <th className="text-center">Presenter Name</th>
            <th className="text-center">
              No. of <br />
              Schedule
            </th>
            <th className="text-center">
              CS No. & Ack No.
              <br />
              Generated Date & Time
            </th>
            <th className="text-center">
              Book <br />
              Number
            </th>
            <th className="extraFont text-center">Nature of Document</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className="text-center" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td className="text-center">
                  <Link href="/imagingExecutant">
                  <button className="print">
                    {" "}
                    <Image width={25} height={25} src="/images/image-capture.svg" />
                    <small>Image Capture</small>
                  </button>
                  </Link>
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

function TableAmmend({ columns, data }) {

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
        className="tableData listData tableheadBg table"
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
            <th className="text-center">App No.</th>
            <th className="text-center">Ack.No/ Year</th>
            <th className="text-center">CS No.</th>

            <th className="text-center">Presenter Name</th>
            <th className="text-center">
              No. of <br />
              Schedule
            </th>
            <th className="text-center">
              CS No. & Ack No.
              <br />
              Generated Date & Time
            </th>
            <th className="text-center">
              Book <br />
              Number
            </th>
            <th className="extraFont text-center">Nature of Document</th>
            <th className="text-center">Ammend Reason</th>
            <th className="text-center">Ammend Comments</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className="text-center" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
               <td className="text-center d-flex justify-content-around">
               <Link href={"/partyDetailsScroll"}>
               <button

                  >
                    {" "}
                    <Image
                      width={20}
                      height={27}
                      src="/images/party-details.svg" />
                    <small>Party Details</small>
                  </button>
                  </Link>



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


function AdmissionofExecution() {
  const [clicked, setclicked] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState(0);
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
            Header: " Ack.No/ Year",
            accessor: "ackNo",
          },
          {
            Header: "CS No.",
            accessor: "csNo",
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
          {
            Header: "Nature of Document",
            accessor: "min",
          },
        ],
      },

    ],
    []
  );

  const columnsAmmend = React.useMemo(
    () => [
      {
        Header: "1",
        columns: [
          {
            Header: "App No.",
            accessor: "appNo",
          },

          {
            Header: " Ack.No/ Year",
            accessor: "ackNo",
          },
         {
            Header: "CS No.",
            accessor: "csNo",
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
            Header: "No.of schedule",
            accessor: "bookNumber",
          },
          {
            Header: "Nature of Document",
            accessor: "min",
          },
        ],
      },
        {
          Header: "Ammend Reason",
          accessor: "ammendreason",
        },
        {
          Header: "Ammend Comments",
          accessor: "ammendcomments",
        },

    ],
    []
  );



  const data = [
    {
      appNo: "456787654",
      ackNo: "345/2022",
      csNo: "212",

      presenterName: "swapna hanumanthu",
      noofSchedule: "1",
      generateddatetime: "22/11/2022 @ 11: 48 AM",
      bookNumber: "1",
      maj: "Sale",
      min: "Sales Deed",
    },
    {
      appNo: "458888123",
      ackNo: "346/2022",
      csNo: "213",

      presenterName: "sreeja varma",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 08: 00 AM",
      bookNumber: "2",
      maj: "Mortgage",
      min: "Mortgage without position",
    },
    {
      appNo: "656787654",
      ackNo: "347/2022",
      csNo: "213",

      presenterName: "rajesh rao",
      noofSchedule: "1",
      generateddatetime: "22/11/2022 @ 10: 00 AM",
      bookNumber: "1",
      maj: "Gift",
      min: "Gift",
    },
    {
      appNo: "126787654",
      ackNo: "348/2023",
      csNo: "214",

      presenterName: "ravi teja",
      noofSchedule: "2",
      generateddatetime: "22/2/2023 @ 09: 09 AM",
      bookNumber: "2",
      maj: "Gift",
      min: "Gift settlement in favour of others",
    },
    {
      appNo: "346787654",
      ackNo: "349/2023",
      csNo: "215",

      presenterName: "Chandra Sekhar",
      noofSchedule: "1",
      generateddatetime: "20/1/2023 @ 10: 45 AM",
      bookNumber: "1",
      maj: "Partitions",
      min: "Partition among family members",
    },
    {
      appNo: "566787654",
      ackNo: "350/2022",
      csNo: "216",

      presenterName: "Sekhar sastry",
      noofSchedule: "2",
      generateddatetime: "11/10/2022 @ 07: 30 AM",
      bookNumber: "2",
      maj: "Release",
      min: "Release (Co-Parceners)",
    },
    {
      appNo: "796787654",
      ackNo: "351/2022",
      csNo: "217",

      presenterName: "Chandra Sekhar",
      noofSchedule: "1",
      generateddatetime: "22/11/2022 @ 10: 41 AM",
      bookNumber: "1",
      maj: "Release",
      min: "Release (Others)",
    },
    {
      appNo: "916787654",
      ackNo: "352/2023",
      csNo: "218",

      presenterName: "Subbarao mucharla",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 09: 46 AM",
      bookNumber: "2",
      maj: "Release",
      min: "Release (Others)",
    },
  ];

  const dataAmmend = [
    {
      appNo: "456787654",
      ackNo: "345/2022",
      csNo: "212",

      presenterName: "swapna hanumanthu",
      noofSchedule: "1",
      generateddatetime: "22/11/2022 @ 11: 48 AM",
      bookNumber: "1",
      maj: "Sale",
      min: "Sales Deed",
      ammendreason: "Insufficient details",
      ammendcomments: "All details are not given",
    },
    {
      appNo: "916787654",
      ackNo: "352/2023",
      csNo: "218",

      presenterName: "Subbarao mucharla",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 09: 46 AM",
      bookNumber: "2",
      maj: "Mortgage",
      min: "Mortgage without position",
      ammendreason: "Wrong Document",
      ammendcomments: "please send correct documents",
    },
    {
      appNo: "796787654",
      ackNo: "351/2022",
      csNo: "217",

      presenterName: "Chandra Sekhar",
      noofSchedule: "1",
      generateddatetime: "22/11/2022 @ 10: 41 AM",
      bookNumber: "1",
      maj: "Gift",
      min: "Gift",
      ammendreason: "documents are not clear",
      ammendcomments: "please send documents clearly ",
    },
    {
      appNo: "456787654",
      ackNo: "345/2022",
      csNo: "212",

      presenterName: "Sekhar Varma",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "2",
      maj: "Gift",
      min: "Gift settlement in favour of others",
      ammendreason: "Insufficient details",
      ammendcomments: "All details are not given",
    },
    {
      appNo: "566787654",
      ackNo: "350/2022",
      csNo: "216",

      presenterName: "Sekhar sastry",
      noofSchedule: "2",
      generateddatetime: "11/10/2022 @ 07: 30 AM",
      bookNumber: "1",
      maj: "Partitions",
      min: "Partition among family members",
      ammendreason: "Improper documents",
      ammendcomments: "Correct documents are not given",
    },
    {
      appNo: "458888123",
      ackNo: "346/2022",
      csNo: "213",

      presenterName: "sreeja varma",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 08: 00 AM",
      bookNumber: "2",
      maj: "Release",
      min: "Release (Co-Parceners)",
      ammendreason: "Wrong Document",
      ammendcomments: "Incorrect docs are given",
    },
    {
      appNo: "126787654",
      ackNo: "348/2023",
      csNo: "214",

      presenterName: "ravi teja",
      noofSchedule: "2",
      generateddatetime: "22/2/2023 @ 09: 09 AM",
      bookNumber: "1",
      maj: "Release",
      min: "Release (Others)",
      ammendreason: "Incorrect details",
      ammendcomments: "details are wrong",
    },
    {
      appNo: "456787654",
      ackNo: "345/2022",
      csNo: "212",

      presenterName: "Sekhar Varma",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "2",
      maj: "Release",
      min: "Release (Others)",
      ammendreason: "Wrong Document",
      ammendcomments: "wrong documents provided ",
    },
  ];

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const handleClose = () => setShow1(false);

  const handleClick = (event) => {
    setShow1(!show1);
    setTarget(event.target);
  };

  const onClickHandler = () => {
    setclicked(false);
  };
  const onClickHandlerAmmend = () => {
    setclicked(true);
  };

  return (
    <><div><Stepper showReason1={true} /></div>
    <Stepper showReason={false}/>
    <div className="pageMainWrap innerpage">
      <Head>
        <title>Admission of Execution - CARD</title>
        <meta name="description" content="login" />
        <link rel="icon" href="/igrsfavicon.ico" />
      </Head>

      <div className="mainWrapper">
        <div className="wrapperInner">
          <div className="acknowledgement">
            <h4>Admission of Execution</h4>
          </div>
            <div
              className="modal-path modal fade modal-sm"
              id="exampleModals"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog mt-5">
                <div className="modal-content">
                  <div className="modal-body">
                    <Row>
                      <Col lg={12} md={12} xs={12} className="mb-3">
                        <div className="clear-date d-flex justify-content-end p-2">
                          Clear
                        </div>
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="date"
                            placeholder="From Date"
                          />
                          <Form.Label htmlFor="floatingInputCustom">
                            From Date
                          </Form.Label>
                        </Form.Floating>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} md={12} xs={12}>
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="date"
                            placeholder="To Date"
                          />
                          <Form.Label htmlFor="floatingInputCustom">
                            To Date
                          </Form.Label>
                        </Form.Floating>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>

            <div ref={ref}>
              <Overlay
                onHide={handleClose}
                show={show1}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}
              >
                <Popover id="popover-contained">
                  <Popover.Body>
                    <Row>
                      <Col lg={12} md={12} xs={12} className="mb-3">
                        <div className="clear-date d-flex justify-content-end p-2">
                          Clear
                        </div>
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="date"
                            placeholder="From Date"
                          />
                          <Form.Label htmlFor="floatingInputCustom">
                            From Date
                          </Form.Label>
                        </Form.Floating>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} md={12} xs={12}>
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="date"
                            placeholder="To Date"
                          />
                          <Form.Label htmlFor="floatingInputCustom">
                            To Date
                          </Form.Label>
                        </Form.Floating>
                      </Col>
                    </Row>
                  </Popover.Body>
                </Popover>
              </Overlay>
            </div>

            <div className="documentsTable pageTableMain pageTableContainer">

                <Row className="mb-4">
                  <Col lg={6} md={4} xs={12}>
                    <div className="pageTableTabs">
                      {["Accept (30)", "Ammend (5)"].map((o, i) => {
                        return (
                          <button
                            key={o}
                            className={
                              i === activeTab ? "activeButton" : "button"
                            }
                            onClick={() => {
                              if (o == "Accept (30)") {
                                setclicked(false);
                              } else {
                                setclicked(true);
                              }
                              setActiveTab(i);
                            }}
                          >
                            {o}
                          </button>
                        );
                      })}
                    </div>
                  </Col>

                  <Col lg={6} md={4} xs={12} className="pageTableSearch">
                    <div className="d-flex justify-content-end">
                      <div className="mx-3">
                        <form className="md-form">
                          <div
                            className={`input-group md-form form-sm form-1 pl-0`}
                          >
                            <input
                              className={`form-control form-control-sm ml-3 w-75`}
                              type="text"
                              placeholder="Search Here.."
                              aria-label="Search"
                            />
                            <div className={`input-group-prepend`}>
                              <button
                                className={`btn btn-outline-success`}
                                type="submit"
                              >
                                <Image
                                  width={23}
                                  height={23}
                                  src="/images/Search-icon.svg"
                                />
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div>
                        <div className="searchFiler">
                          <button className="today">Today</button>
                          <button
                            className="filter"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModals"
                          >
                            <small>Filters</small>
                            <Image
                              width={20}
                              height={20}
                              src="/images/filter.svg"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="table-responsive">
                  {clicked ? (
                    <TableAmmend columns={columnsAmmend} data={dataAmmend} />
                  ) : (
                    <Table columns={columns} data={data} />
                  )}
                </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdmissionofExecution;
