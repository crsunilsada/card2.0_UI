import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import { useTable, usePagination } from "react-table";
import Stepper from '../components/Stepper'
import Link from "next/link";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
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
            <th className="text-center">
              CS No. & Ack No.
              <br />
              Generated Date & Time
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
                    <td className="text-center"{...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td className="text-center d-flex justify-content-around">
                  <Link href={"/propertyDetails"}>
                    <button className="basicDetails">
                      {" "}
                      <Image
                        width={20}
                        height={27}
                        src="/images/PropertyDetails.svg"
                      />
                      <small>Property Details</small>
                    </button>
                  </Link>
                  <Link href={"/cashReceipt"}>
                    <button >
                      {" "}
                      <Image
                        width={67}
                        height={67}
                        src="/images/Cashreceipt.svg"
                      />
                      {/*   <small>Cash Receipt</small>  */}
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
function Verification() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
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
      ammendreason: "Wrong Document",
      ammendcomments: "wrong documents provided ",
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
      ammendreason: "Incorrect details",
      ammendcomments: "details are wrong",
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
      ammendreason: "Wrong Document",
      ammendcomments: "Incorrect docs are given",
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
      ammendreason: "Improper documents",
      ammendcomments: "Correct documents are not given",
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
      ammendreason: "Insufficient details",
      ammendcomments: "All details are not given",
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
      ammendreason: "documents are not clear",
      ammendcomments: "please send documents clearly ",
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
      ammendreason: "Wrong Document",
      ammendcomments: "please send correct documents",
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
      ammendreason: "Insufficient details",
      ammendcomments: "All details are not given",
    },
  ];
  return (
    <><div><Stepper showReason2={true} /></div>
      <Stepper showReason={true} />
      <div className="pageMainWrap innerpage">
        <Head>
          <title>Verification - CARD</title>
          <meta name="description" content="login" />
          <link rel="icon" href="/igrsfavicon.ico" />
        </Head>
        <div className="mainWrapper">
          <div className="wrapperInner">
            <div className="acknowledgement">
              <h4>Verification</h4>
            </div>
            <div className="documentsTable pageTableMain pageTableContainer">
              <Row >
                <Col xxl={2} xl={2} lg={2} md={12} sm={12} className="pageTableTabs">
                  <button className="activeButton">Ammend (5)</button>
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
                    <div className="searchFiler">
                      <RangePicker />
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="table-responsive">
                <TableAmmend columns={columnsAmmend} data={dataAmmend} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Verification;
