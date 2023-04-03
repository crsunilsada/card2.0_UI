import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
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
            <th className="text-center">
              Accepted
              <br />
              Date & Timestamp
            </th>
            <th className="text-center">Presenter Name</th>
            <th className="text-center">
              No. of <br />
              Schedule
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
                      <Image width={25} height={25} src="/images/AadharEsign.svg" />
                      <small>eSign</small>
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
              Accepted
              <br />
              Date & Timestamp
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
            Header: "CS No. & Ack No. Generated Date & Time",
            accessor: "generateddatetime",
          },
          {
            Header: "presenter name",
            accessor: "presenterName",
          },
          {
            Header: "No of schedule",
            accessor: "noofSchedule",
          },
          {
            Header: "book number",
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
      <Stepper showReason={false} />
      <div className="pageMainWrap innerpage">
        <Head>
          <title>Admission of Execution - CARD</title>
          <meta name="description" content="login" />
          <link rel="icon" href="/igrsfavicon.ico" />
        </Head>
        <div className="mainWrapper">
          <div className="wrapperInner">
            <div className="acknowledgement">
              <h4>eSign</h4>
            </div>
            <div className="documentsTable pageTableMain pageTableContainer">
              <Row >
                <Col xxl={2} xl={2} lg={2} md={12} sm={12} className="pageTableTabs">
                  {["Accept (30)"].map((o, i) => {
                    return (
                      <button
                        key={o}
                        className={i === activeTab ? "activeButton" : "button"}
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
                    )
                  })
                  }
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
                <Col xxl={1} xl={1} lg={12} md={9} sm={12} className="my-1 mx-2 px-1">
                  <button className="today">Today</button>
                </Col>
                <Col xxl={2} xl={2} lg={4} md={6} sm={12} className="my-1">
                  <div className="searchFiler">
                    <RangePicker />
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
