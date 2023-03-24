import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Form, Overlay, Popover } from "react-bootstrap";
import { useTable, usePagination } from "react-table";
import Stepper from "../components/Stepper";
import Link from "next/link";
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
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
            <th className="text-center p-3">
              App No.
            </th>
            <th  className="text-center">
              Ack.No/ Year
            </th>
            <th  className="text-center">
              CS No.
            </th>

            <th  className="text-center">
              Presenter Name
            </th>

            <th className="extraFont text-center">
              Nature of Document
            </th>
            <th  className="text-center">
            Ammend Reason
            </th>
            <th  className="text-center">
            Ammend Comments
            </th>
            <th  className="text-center">
            Ammend date & time
            </th>
            <th  className="text-center">
            status
            </th>

            <th className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className="text-center" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
                <td className="text-center">

                  <Link href={"/digitalSign"}>
                    <button className="print">
                      {" "}
                      <Image
                        width={37}
                        height={37}
                        src="/images/submitSRO.svg"
                      />
                      <small>Submit for SRO Review</small>
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
            <select className="text-center"
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

function SubmitForSRO() {
  const [clicked, setclicked] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  let appNo = (
    <>
      {" "}
      <div className="d-flex">
        <input
          onClick={checkboxes}
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          456787654
        </label>
      </div>
    </>
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
            Header: "presenterName",
            accessor: "presenterName",
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
      {
        Header: "ammend date and time",
        accessor: "generateddatetime",
      },
      {
        Header: "status",
        accessor: "status",
      },
    ],
    []
  );

  const dataAmmend = [
    {
      appNo: "456787654",
      ackNo: "345/2022",
      csNo: "212",
    status:"submitted",
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
      status:"submitted",
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
      status:"pending",
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
      status:"submitted",
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
      status:"pending",
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
      status:"submitted",
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
      status:"submitted",
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
      status:"pending",
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

  };

  const [checked, setchecked] = useState(0);
  function checkboxes() {
    var inputs = document.getElementsByTagName("input");
    var inputObj;
    var selectedCount = 0;
    for (var count1 = 0; count1 < inputs.length; count1++) {
      inputObj = inputs[count1];
      var type = inputObj.getAttribute("type");
      if (type == "checkbox" && inputObj.checked) {
        selectedCount++;
      }
      setchecked(selectedCount);
    }
  }

  return (
    <>
     <div><Stepper showReason2={true} /></div> <Stepper showReason={true} />
      <div className="pageMainWrap innerpage">
        <Head>
          <title>Document Presentation - CARD</title>
          <meta name="description" content="login" />
          <link rel="icon" href="/igrsfavicon.ico" />
        </Head>

        <div className="mainWrapper">
          <div className="wrapperInner">
            <div className="acknowledgement">
              <h4>Submit for SRO Review</h4>
            </div>

            <div className="modal-path modal fade modal-sm" id="exampleModals" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog mt-5">
              <div className="modal-content">
                <div className="modal-body">
                  <Row>
                    <Col lg={12} md={12} xs={12} className="mb-3">
                      <div className="clear-date d-flex justify-content-end p-2">Clear</div>
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
              </div>
            </div>
          </div>




            <div className="documentsTable pageTableMain pageTableContainer">

                <Row className="mb-4">
                  <Col lg={3} md={4} xs={12}>
                    <div className="pageTableTabs">
                      {["Ammend (8)"].map((o, i) => {
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
                  <Col lg={9} md={4} xs={12} className="pageTableSearch">
                    <div className="d-flex justify-content-end">
                      <div className="mx-3">
                          <div
                            className={`input-group md-form form-sm form-1 pl-0`}
                          >
                            <input type="text" className="justify-content-end float-end search-click" style={{ borderRadius: "5px", borderColor: "#5692B4", height: "40px" }} name="" placeholder=" Please search with - CS No / Ack No / App No / Presentant Name" />
                          </div>
                      </div>
                      <div>
                        <div className="searchFiler">
                          <button className="today">Today</button>
                          <RangePicker />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>



              <div className="table-responsive">
                <Table columns={columnsAmmend} data={dataAmmend} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubmitForSRO;
