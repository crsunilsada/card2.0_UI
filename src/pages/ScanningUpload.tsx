import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useTable, usePagination } from "react-table";
import Stepper from '../components/Stepper'
import Link from "next/link";
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
                    <td className="text-center" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td className="text-center">
                  <Link href={"/scanning"}>
                  <button className="basicDetails">
                    {" "}
                    <Image width={25} height={25} src="/images/Scanning.svg" />
                    <small>Scanning</small>
                  </button>
                  </Link>
                  <Link href={"/DigitalSign"}>
                  <button className="print">
                    {" "}
                    <Image width={25} height={25} src="/images/DigiSign.svg" />
                    <small>Digital Sign</small>
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

function ScanningUpload() {
  const [clicked, setclicked] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

let appNo=(
<> <div className="d-flex form-check-checkbox">
      <input
        onClick={checkboxes}
        className="form-check-input"
        // checked={checked}
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label
        className="form-check-label"
        htmlFor="flexCheckDefault"
      >
        &nbsp; 456787654
      </label>
    </div></>
)


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

      appNo:appNo,
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Chandra Sekhar",
      noofSchedule: "1",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "1",
      maj: "01",
      min: "01",


    },
    {
      appNo: appNo,
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Sekhar Varma",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "2",
      maj: "02",
      min: "02",
    },
    {
      appNo: appNo,
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Chandra Sekhar",
      noofSchedule: "1",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "1",
      maj: "01",
      min: "01",
    },
    {
      appNo: appNo,
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Sekhar Varma",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "2",
      maj: "02",
      min: "02",
    },
    {
      appNo: appNo,
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Chandra Sekhar",
      noofSchedule: "1",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "1",
      maj: "01",
      min: "01",
    },
    {
      appNo: appNo,
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Sekhar Varma",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "2",
      maj: "02",
      min: "02",
    },
    {
      appNo: appNo,
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Chandra Sekhar",
      noofSchedule: "1",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "1",
      maj: "01",
      min: "01",
    },
    {
      appNo: appNo,
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Sekhar Varma",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "2",
      maj: "02",
      min: "02",
    },
    {
      appNo: appNo,
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Chandra Sekhar",
      noofSchedule: "1",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "1",
      maj: "01",
      min: "01",
    },
    {
      appNo: appNo,
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Sekhar Varma",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "2",
      maj: "02",
      min: "02",
    },
  ];
const [checked, setchecked] = useState(0)
  function checkboxes(){
    var inputs = document.getElementsByTagName("input");
    var inputObj;
  var selectedCount = 0;
    for(var count1 = 0;count1<inputs.length;count1++) {
        inputObj = inputs[count1];
        var type = inputObj.getAttribute("type");
        if (type == 'checkbox' && inputObj.checked) {
            selectedCount++;
        }
        setchecked(selectedCount)
    }
}


return (
  <>
  <Stepper/>
    <div className="pageMainWrap">
      <Head>
        <title>Document Presentation - CARD</title>
        <meta name="description" content="login" />
        <link rel="icon" href="/igrsfavicon.ico" />
      </Head>

      <div className="mainWrapper">
        <div className="wrapperInner">
          <div className="acknowledgement">
            <h4>Scanning & Upload</h4>
          </div>

          <Container>
            <Row className="justify-content-md-center">
              <Col lg={7} md={8} xs={12} className="pageTableSearch">
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
            </div></div>
            </Container>

          <div className="documentsTable pageTableMain pageTableContainer">

              <div className="d-flex justify-content-between mb-3">
                {/* <div className="pageTableTabs">
                  <button onClick={onClickHandler}>Accept (30)</button>
                  <button onClick={onClickHandlerAmmend}>Ammend (5)</button>
                </div> */}

                <div className="pageTableTabs">
                  {["Accept (30)", "Ammend (5)"].map((o, i) => {
                    return(
                    <button
                      key={o}
                      className={i === activeTab ? "activeButton" : "button"}
                      onClick={() => {
                        if (o=="Accept (30)") {

                          setclicked(false);
                        } else {

                          setclicked(true);
                        }
                        setActiveTab(i);
                      }}
                    >
                      {o}
                    </button>
                    )
                  })
                }
                </div>

                <div>
                  <button className={checked>=2 ? "digital-sign-btn-enable" : "digital-sign-btn"} >
                    Bulk Digital Sign
                  </button>
                </div>
              </div>
              <div className="table-responsive">

                  <Table columns={columns} data={data} />

              </div>
            </div>
          </div>
      </div>
    </div></>
  );
}

export default ScanningUpload;
