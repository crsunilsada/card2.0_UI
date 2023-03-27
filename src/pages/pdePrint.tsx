import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Row, Col} from "react-bootstrap";
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
            <th className="text-center">App No.</th>
            <th className="text-center">Ack.No.</th>
            <th className="text-center">CS No.</th>
            <th className="text-center">
            Ack. Year
            </th>
            <th className="text-center">Presenter Name</th>
            <th className="text-center">
              Date
            </th>
            <th className="text-center">Documents Print</th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td  className="text-center" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td className="text-center">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#viewBasicDetails"
                    className="basicDetails"
                  >
                    {" "}
                    <Image   width={20}height={20} src="/images/Print.svg" />
                    <small>Documents </small>
                  </button>
                  <button className="print" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    {" "}
                    <Image width={20} height={20} src="/images/Print.svg" />
                    <small>Check Slip</small>
                  </button>
                  <button className="print" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    {" "}
                    <Image width={20} height={20} src="/images/Print.svg" />
                    <small >Slot Booking</small>
                  </button>
                  <button className="print " data-bs-toggle="modal" data-bs-target="#exampleModal">
                    {" "}
                    <Image width={20} height={20} src="/images/Print.svg" />
                    <small >Acknowledgment</small>
                  </button>
                  <button className="print " data-bs-toggle="modal" data-bs-target="#exampleModal">
                    {" "}
                    <Image width={20} height={20} src="/images/Print.svg" />
                    <small >Form 60/61</small>
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
            <select className="text-center"
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
            <th className="text-center">Ack.No.</th>
            <th className="text-center">CS No.</th>
            <th className="text-center">Presenter Name</th>
            <th className="text-center">
            Date
            </th>
            <th className="extraFont text-center">Documents Print</th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} >
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
            presenterName: " Chandra Sekhar Reddy",
            date:"12-3-2022",
        },
        {
            appNo: "876544567",
            ackNo: "434",
            csNo: "345",
            ackYear: "2023",
            presenterName: " Venkata Raghava Naga Sai Shankara Subrahmanya ",
            date:"03-03-2023",
        },
        {
            appNo: "5678765445",
            ackNo: "231",
            csNo: "126",
            ackYear: "2023",
            presenterName: "Krishna Rao",
            date:"09-01-2023",
        },
        {
            appNo: "876544567",
            ackNo: "897",
            csNo: "104",
            ackYear: "2022",
            presenterName: " Arjun varma",
            date:"145-6-2022",
        },
        {
            appNo: "654456787",
            ackNo: "941",
            csNo: "189",
            ackYear: "2022",
            presenterName: "Harsha vardhan Rao",
            date:"10-8-2022",
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
    <><Stepper/><div className="pageMainWrap innerpage">
      <Head>
        <title>Document Presentation - CARD</title>
        <meta name="description" content="login" />
        <link rel="icon" href="/igrsfavicon.ico" />
      </Head>
      <div className="mainWrapper">
        <div className="otherMenuwrapperInner1">
          <div className="acknowledgement">
            <h4>PDE Print</h4>
          </div>
            <div className="documentsTable pageTableMain pageTableContainer">
                <Row >
                  <Col xxl={2} xl={2} lg={2} md={12} sm={12} >
                  </Col>
                <Col xxl={0} xl={0} lg={0} md={0} sm={0}></Col>
                    <Col xxl={5} xl={5} lg={8} md={10} sm={12} className="float-end my-1">
                      <input
                        type="text"
                        className="justify-content-end float-end search-click"
                        name=""
                        placeholder=" Please search with - CS No / Ack No / App No / Presentant Name"
                      />
                    </Col>
                    <Col xxl={1} xl={1} lg={12} md={9}sm={12} className="my-1 mx-2 px-1">
                        <button className="today">Today</button>
                        </Col>
                        <Col xxl={2} xl={2} lg={4} md={6} sm={12} className="my-1">
                        <RangePicker/>
                        </Col>
                </Row>
                <div className="table-responsive pt-2">
                    <Table columns={columns} data={data} />
                </div>
            </div>
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
