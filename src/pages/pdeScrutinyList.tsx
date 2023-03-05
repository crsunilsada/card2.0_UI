import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Form, Nav, Tab, Tabs, TabContainer } from "react-bootstrap";
import { useTable, usePagination } from "react-table";

function PendingTable({ columns, data }) {
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
              App ID
            </th>
            <th rowSpan={2} className="text-center">
              Presenter Name
            </th>
            <th colSpan={2} className="text-center">
              Nature of Document
            </th>
            <th rowSpan={2} className="text-center">
              Slot time
            </th>
            <th rowSpan={2} className="text-center">
              Regstration Type
            </th>
            <th rowSpan={2} className="text-center">
              Details
            </th>
            <th rowSpan={2} className="text-center">
              Status
            </th>
            <th rowSpan={2} className="extraFont text-center">
              Actions
            </th>
          </tr>
          <tr>
            <th className="text-center smallFont">Maj</th>
            <th className="text-center smallFont">Min</th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()} className="text-center">
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}

{/*
           <td className="text-center">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#viewdetails"
                    className="basicDetails"
                  >
                    <Image
                      width={57}
                      height={57}
                      src="/images/Viewdetails.svg" />
                     <small>View Details</small>
                  </button>
                </td> */}
                {/* <td className="text-ce  nter">New</td> */}
                <td className="text-center">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#acceptdetails"
                    className="basicDetails"
                  >
                    <Image
                      width={18}
                      height={18}
                      src="/images/accept.svg" />
                    <small>Accept</small>
                  </button>

                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#ammenddetails"
                    className="basicDetails"
                  >
                    <Image
                      width={18}
                      height={18}
                      src="/images/ammend.svg" />
                    <small>Ammend</small>
                  </button>

                  <button data-bs-toggle="modal"
                    data-bs-target="#refusedetails"
                    className="basicDetails"
                  >
                    <Image
                      width={18}
                      height={18}
                      src="/images/refuse.svg" />
                    <small>refuse</small>
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
function AcceptTable({ columns, data }) {
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
              App ID
            </th>
            <th rowSpan={2} className="text-center">
              Presenter Name
            </th>
            <th colSpan={2} className="text-center">
              Nature of Document
            </th>
            <th rowSpan={2} className="text-center">
              Slot time
            </th>
            <th rowSpan={2} className="text-center">
              Regstration Type
            </th>
            <th rowSpan={2} className="text-center">
              Details
            </th>
            <th rowSpan={2} className="text-center">
              Status
            </th>
            <th rowSpan={2} className="extraFont text-center">
              Actions
            </th>
          </tr>
          <tr>
            <th className="text-center smallFont">Maj</th>
            <th className="text-center smallFont">Min</th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()} className="text-center">
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                {/* <td className="text-center">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#viewdetails"
                    className="basicDetails"
                  >
                    <Image
                      width={18}
                      height={18}
                      src="/images/Viewdetails.svg" />
                    <small>View Details</small>
                  </button>
                </td> */}
                {/* <td className="text-center">New</td> */}
                <td className="text-center">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#acceptdetails"
                    className="basicDetails"
                  >
                    <Image
                      width={18}
                      height={18}
                      src="/images/accept.svg" />
                    <small>Accept</small>
                  </button>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#ammenddetails"
                    className="basicDetails"
                  >
                    <Image
                      width={18}
                      height={18}
                      src="/images/ammend.svg" />
                    <small>Ammend</small>
                  </button>

                  <button className="print" data-bs-toggle="modal" data-bs-target="#refusedetails">
                    <Image
                      width={18}
                      height={18}
                      src="/images/refuse.svg" />
                    <small>refuse</small>
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
function AmmendTable({ columns, data }) {
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
              Ack No.
            </th>
            <th rowSpan={2} className="text-center">
              CS. No.
            </th>
            <th rowSpan={2} className="text-center">
              App ID
            </th>
            <th rowSpan={2} className="text-center">
              Presenter Name
            </th>
            <th colSpan={2} className="text-center">
              Nature of Document
            </th>
            <th rowSpan={2} className="text-center">
              Slot time
            </th>
            <th rowSpan={2} className="text-center">
              Registration Type
            </th>
            <th rowSpan={2} className="extraFont text-center">
              Details
            </th>
            <th rowSpan={2} className="extraFont text-center">
              Refuse Reason
            </th>
            <th rowSpan={2} className="extraFont text-center">
              Refuse Date & Time by SRO
            </th>
            <th rowSpan={2} className="extraFont text-center">
              Refuse comments
            </th>
          </tr>
          <tr>
            <th className="text-center smallFont">Maj</th>
            <th className="text-center smallFont">Min</th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()} className="text-center">
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                {/* <td className="text-center">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#viewBasicDetails"
                    className="basicDetails"
                  >
                    <Image
                      width={12}
                      height={12}
                      src="/images/accept.svg" />
                    <small>Accept</small>
                  </button>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#viewBasicDetails"
                    className="basicDetails"
                  >
                    <Image
                      width={12}
                      height={12}
                      src="/images/ammend.svg" />
                    <small>Ammend</small>
                  </button>
                  <button className="print" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <Image width={12}
                    height={12}
                    src="/images/refuse.svg"/>
                    <small>refuse</small>
                  </button>
                </td> */}
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
function RefuseTable({ columns, data }) {
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
              Ack No.
            </th>
            <th rowSpan={2} className="text-center">
              CS. No.
            </th>
            <th rowSpan={2} className="text-center">
              App ID
            </th>
            <th rowSpan={2} className="text-center">
              Presenter Name
            </th>
            <th colSpan={2} className="text-center">
              Nature of Document
            </th>
            <th rowSpan={2} className="text-center">
              Slot time
            </th>
            <th rowSpan={2} className="text-center">
              Registration Type
            </th>
            <th rowSpan={2} className="extraFont text-center">
              Details
            </th>
            <th rowSpan={2} className="extraFont text-center">
              Refuse Reason
            </th>
            <th rowSpan={2} className="extraFont text-center">
              Refuse Date & Time by SRO
            </th>
            <th rowSpan={2} className="extraFont text-center">
              Refuse comments
            </th>
          </tr>
          <tr>
            <th className="text-center smallFont">Maj</th>
            <th className="text-center smallFont">Min</th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()} className="text-center">
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                {/* <td className="text-center">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#viewBasicDetails"
                    className="basicDetails"
                  >
                    <Image
                      width={12}
                      height={12}
                      src="/images/accept.svg" />
                    <small>Accept</small>
                  </button>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#viewBasicDetails"
                    className="basicDetails"
                  >
                    <Image
                      width={12}
                      height={12}
                      src="/images/ammend.svg" />
                    <small>Ammend</small>
                  </button>
                  <button className="print" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <Image width={12}
                    height={12}
                    src="/images/refuse.svg"/>
                    <small>refuse</small>
                  </button>
                </td> */}
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


const pdeScrutinyList = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  const pendingcolumns = React.useMemo(
    () => [
      {
        Header: "1",
        columns: [
          {
            Header: "App ID.",
            accessor: "appId",
          },
          {
            Header: "Presenter Name.",
            accessor: "presenterName",
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
            Header: "Slot Time",
            accessor: "slotTime",
          },
          {
            Header: "Registration Type",
            accessor: "registrationType",
          },
          {
            Header: "Details",
            accessor: "details",
          },
          {
            Header: "Status",
            accessor: "status",
          },
        ],
      },
    ],
    []
  );


  const pendingtableData = [
    {
      appId: "456787654",
      presenterName: "Chandra Shekar",
      maj: "Sale",
      min: "Sale Deed",
      slotTime: "10:30am",
      registrationType: "Original1",
      details: "View Details",
      status: "New",
    },
    {
      appId: "456787654",
      presenterName: "Shekar Varma",
      maj: "Sale",
      min: "Sale Deed1",
      slotTime: "12:15pm",
      registrationType: "Anywhere",
      details: "View Details",
      status: "Ammend",
    },
  ]

  const acceptcolumns = React.useMemo(
    () => [
      {
        Header: "1",
        columns: [
          {
            Header: "App ID.",
            accessor: "appId",
          },
          {
            Header: "Presenter Name.",
            accessor: "presenterName",
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
            Header: "Slot Time",
            accessor: "slotTime",
          },
          {
            Header: "Registration Type",
            accessor: "registrationType",
          },

          {
            Header: "Details",
            accessor: "details",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          // {
          //   Header: "Action",
          //   accessor: "",
          // },
        ],
      },
    ],
    []
  );
  const accepttableData = [
    {
      appId: "456787654",
      presenterName: "Chandra Shekar",
      maj: "Sale",
      min: "Sale Deed",
      slotTime: "10:30am",
      registrationType: "Original",
      // details: "View Details",
      status: "New",
    },
    {
      appId: "456787654",
      presenterName: "Shekar Varma",
      maj: "Sale",
      min: "Sale Deed",
      slotTime: "12:15pm",
      registrationType: "Anywhere",
      // details: "View Details",
      status: "Ammend",
    },
  ]
  const ammendcolumns = React.useMemo(
    () => [
      {
        Header: "1",
        columns: [
          {
            Header: "Ack No.",
            accessor: "ackNo",
          },
          {
            Header: "CS. No.",
            accessor: "csNo",
          },
          {
            Header: "App ID",
            accessor: "appId",
          },
          {
            Header: "Presenter Name",
            accessor: "presenterName",
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
            Header: "Slot Time",
            accessor: "slotTime",
          },
          {
            Header: "Registration Type",
            accessor: "registrationType",
          },
          {
            Header: "Details",
            accessor: "details",
          },
          {
            Header: "Ammend Reason",
            accessor: "ammendReason",
          },
          {
            Header: "Ammend Date & Time By SRO",
            accessor: "ammend_datetime_SRO",
          },
          {
            Header: "Ammend Comments",
            accessor: "ammend_comments",
          },
        ],
      },
    ],
    []
  );
  const ammendtableData = [
    {
      ackNo: "345",
      csNo: "212",
      appId: "46576864",
      presenterName: "chandra Shekar",
      maj: "Sale",
      min: "Sale Deed",
      slotTime: "10:30pm",
      registrationType: "original",
      details: "View Details",
      ammendReason: "Wrong Document",
      ammend_datetime_SRO: "02-1-2023 2:30pm",
      ammend_comments: "Comments comes here",
    },
    {
      ackNo: "345",
      csNo: "212",
      appId: "46576864",
      presenterName: "Shekar varma",
      maj: "Sale",
      min: "Sale Deed",
      slotTime: "12:15pm",
      registrationType: "Anywhere",
      details: "View Details",
      ammendReason: "Wrong Document",
      ammend_datetime_SRO: "02-1-2023 2:30pm",
      ammend_comments: "Comments comes here",
    }
  ];
  const refusecolumns = React.useMemo(
    () => [
      {
        Header: "1",
        columns: [
          {
            Header: "Ack No.",
            accessor: "ackNo",
          },
          {
            Header: "CS. No.",
            accessor: "csNo",
          },
          {
            Header: "App ID",
            accessor: "appId",
          },
          {
            Header: "Presenter Name",
            accessor: "presenterName",
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
            Header: "Slot Time",
            accessor: "slotTime",
          },
          {
            Header: "Registration Type",
            accessor: "registrationType",
          },
          {
            Header: "Details",
            accessor: "details",
          },
          {
            Header: "Refuse Reason",
            accessor: "refuseReason",
          },
          {
            Header: "Refuse Date & Time By SRO",
            accessor: "refuse_datetime_SRO",
          },
          {
            Header: "Refuse Comments",
            accessor: "refuse_comments",
          },
        ],
      },
    ],
    []
  );
  const refusetableData = [
    {
      ackNo: "345",
      csNo: "212",
      appId: "46576864",
      presenterName: "chandra Shekar",
      maj: "Sale",
      min: "Sale Deed",
      slotTime: "10:30pm",
      registrationType: "original",
      details: "View Details",
      refuseReason: "Wrong Document",
      refuse_datetime_SRO: "02-1-2023 2:30pm",
      refuse_comments: "Comments comes here",
    },
    {
      ackNo: "345",
      csNo: "212",
      appId: "46576864",
      presenterName: "shekar varma",
      maj: "Sale",
      min: "Sale Deed",
      slotTime: "12:15pm",
      registrationType: "Anywhere",
      details: "View Details",
      refuseReason: "Wrong Document",
      refuse_datetime_SRO: "02-1-2023 2:30pm",
      refuse_comments: "Comments comes here",
    }
  ];
  return (

    <div className="pageMainWrap">
      <Head>
        <title>Document Presentation-CARD</title>
        <meta name="description" content="login" />
        <link rel="icon" href="/igrsfavicon.ico" />
      </Head>

      <div className="mainWrapper">
        <div className="wrapperInner">
          <div className="acknowledgement">
            <h4>PDE Applications Scrutiny</h4>
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
                      aria-label="Search"
                    />
                    <div className={`input-group-prepend`}>
                      <button
                        className={`btn btn-outline-success`}
                        type="submit"
                      >
                        <Image
                          width={30}
                          height={30}
                          src="/images/Search-icon.svg"
                        />
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
              </Col>
            </Row>
            <Row>
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
            </Row>
          </Container>

          <div className="documentsTable pageTableMain pageTableContainer">
            <Tab.Container defaultActiveKey="pending">
              <div className="pageTabsMain">
                <div className="pageTableTabs">
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="pending"><button className="button my-4">Pending (2)</button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="accept"><button className="button my-4">Accept (2)</button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="ammend"><button className="button my-4">Ammend(2)</button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="refuse"><button className="button my-4">Refuse(2)</button></Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <Tab.Content>
                  <Tab.Pane eventKey="pending">
                    <PendingTable columns={pendingcolumns} data={pendingtableData} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="accept">
                    <AcceptTable columns={acceptcolumns} data={accepttableData} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="ammend">
                    <AmmendTable columns={ammendcolumns} data={ammendtableData} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="refuse">
                    <RefuseTable columns={refusecolumns} data={refusetableData} />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>

          <div
            className="modal fade modal-lg"
            id="viewdetails"
            aria-labelledby="viewdetails"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Check List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Document
                      </a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <Image
                      width={20}
                      height={20}
                      src="/images/popup-close.svg"
                    />
                  </button>
                </div>

                <div className="modal-body">
                  <Row>
                    <h1 className="button-icon">
                      SALE DEED
                      <br>
                      </br>
                      This sale deed is made and executed on this 02nd of february,2023 by:
                    </h1>
                    <h6>Mr/Mrs Vudimudi RaviTeja, S/O V.S.V.V.Subba Raju aged about, 35 years,
                      occupation teacher presently residing at plot 181, shapur nagar, jeedimetla
                      rangareddy, Qutubullapur-500055

                      Herein after called the SETTLOR of the first part

                      Mr/Mrs Vudimudi RaviTeja, S/O V.S.V.V.Subba Raju aged about, 35 years,
                      occupation teacher presently residing at plot 181, shapur nagar, jeedimetla
                      rangareddy, Qutubullapur-500055

                      Herein after called the SETTLOR of the first part


                      Mr/Mrs Vudimudi RaviTeja, S/O V.S.V.V.Subba Raju aged about, 35 years,
                      occupation teacher presently residing at plot 181, shapur nagar, jeedimetla
                      rangareddy, Qutubullapur-500055

                      Herein after called the SETTLOR of the first part

                      Mr/Mrs Vudimudi RaviTeja, S/O V.S.V.V.Subba Raju aged about, 35 years,
                      occupation teacher presently residing at plot 181, shapur nagar, jeedimetla
                      rangareddy, Qutubullapur-500055

                      Herein after called the SETTLOR of the first part


                      Mr/Mrs Vudimudi RaviTeja, S/O V.S.V.V.Subba Raju aged about, 35 years,
                      occupation teacher presently residing at plot 181, shapur nagar, jeedimetla
                      rangareddy, Qutubullapur-500055

                      Herein after called the SETTLOR of the first part

                      Mr/Mrs Vudimudi RaviTeja, S/O V.S.V.V.Subba Raju aged about, 35 years,
                      occupation teacher presently residing at plot 181, shapur nagar, jeedimetla
                      rangareddy, Qutubullapur-500055

                      Herein after called the SETTLOR of the first part
                    </h6>
                  </Row>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade modal-md"
            id="acceptdetails"
            aria-labelledby="acceptdetails"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Application No: 456787654
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
                      src="/images/popup-close.svg"
                    />
                  </button>
                </div>
                <div className="modal-body">
                  <Row>
                    <div className="text-center">
                      <Image width={60} height={60} src="/images/Success.svg" />
                    </div>
                  </Row>
                  <Row>
                    <div className="text-center">
                      <div>
                        <Image
                          width={30}
                          height={30}
                          src="/images/accept1.svg"
                        />
                      </div>
                      <h5>Acknowledgement No: 345 &</h5>
                    </div>
                    <div className="text-center">
                      <h5>Check Slip No: 212</h5>
                    </div>
                    <div className="text-center">
                      <h5>Receipt No: 234567</h5>
                    </div>
                    <div className="text-center">
                      <h5>has been generated successfully.</h5>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade modal-md"
            id="ammenddetails"
            aria-labelledby="ammenddetails"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Application List Ammend
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
                      src="/images/popup-close.svg"
                    />
                  </button>
                </div>

                <div className="modal-body">
                  <Row>
                    <select className="form-select form-select-lg mb-3">
                      <option selected>Select Season</option>
                      <option value="1">Season One</option>
                      <option value="2">Season Two</option>
                      <option value="3">Season Three</option>
                    </select>
                  </Row>

                  <Row>
                    <textarea
                      className="form-control"
                      rows={3}
                      id="comment"
                      placeholder="comments"
                    ></textarea>
                  </Row>
                  <br></br>

                  <Row>
                    <div className="d-flex justify-content-center">
                      <button type="button" className="bluebuttonclass">
                        Submit
                      </button>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade modal-md"
            id="refusedetails"
            aria-labelledby="refusedetails"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Application List Refuse
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
                      src="/images/popup-close.svg"
                    />
                  </button>
                </div>

                <div className="modal-body">
                  <Row>
                    <select className="form-select form-select-lg mb-3">
                      <option selected>Select Reason</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </Row>

                  <Row>
                    <textarea
                      className="form-control"
                      rows={5}
                      id="comment"
                      placeholder="comments"
                    ></textarea>
                  </Row>
                  <br></br>

                  <Row>
                    <Col>
                      <div className="d-flex justify-content-center">
                        <button type="button" className="bluebuttonclass">
                          Submit
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pdeScrutinyList;
