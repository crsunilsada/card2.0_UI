import React, { useEffect } from "react";
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
            <th className="text-center p-3">App No.</th>
            <th className="text-center">Ack.No/ Year</th>
            <th className="text-center">CS No.</th>
            <th className="text-center">Presenter Name</th>
            <th className="extraFont text-center">Nature of Document</th>
            <th className="text-center">Ammend Reason</th>
            <th className="text-center">Ammend Comments</th>
            <th className="text-center">Ammend date & time</th>
            <th className="text-center">status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        {/* <tbody {...getTableBodyProps()}>
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
                    <button className="print">
                      {" "}
                      <Image
                        width={37}
                        height={37}
                        src="/images/submitSRO.svg"
                      />

                      <small>Submit for SRO Review</small>
                    </button>
                </td>

              </tr>
            );
          })}
        </tbody> */}
         <tbody>
          {/* <tr>
            <td> 456787654  </td>
            <td>345/2022</td>
            <td> 212  </td>
            <td> swapna hanumanthu </td>
            <td>  Sales Deed </td>
            <td>Insufficient details </td>
            <td> All details are not given  </td>
            <td> 22/11/2022 @ 11: 48 AM </td>
            <td> submitted  </td>
            <td className="text-center">
                    <button className="print">
                      {" "}
                      <Image
                        width={47}
                        height={47}
                        src="/images/submitSRO.svg"
                      />
                      <small>Submit for SRO Review</small>
                    </button>
                </td>
          </tr> */}
          {/* <tr>
            <td> 916787654  </td>
            <td>352/2023</td>
            <td> 218  </td>
            <td> Subbarao mucharla </td>
            <td>  Mortgage without position</td>
            <td>Wrong Document </td>
            <td> please send correct documents  </td>
            <td> 22/11/2022 @ 09: 46 AM </td>
            <td> submitted  </td>
            <td className="text-center">
            <Link href={"/DigitalSign"}>
                    <button className="print">
                      {" "}
                      <Image
                        width={47}
                        height={47}
                        src="/images/submitSRO.svg"
                      />
                      <small>Submit for SRO Review</small>
                    </button>
                    </Link>
                </td>
          </tr> */}
          <tr>
            <td>796787654 </td>
            <td>351/2022</td>
            <td> 217  </td>
            <td> Chandra Sekhar </td>
            <td>  Gift </td>
            <td>documents are not clear </td>
            <td> please send documents clearly  </td>
            <td> 22/11/2022 @ 10: 41 AM</td>
            <td> pending  </td>
            <td className="text-center ">
                    <button className="print">
                      {" "}
                      <Image
                        width={47}
                        height={47}
                        src="/images/sroriview-disabled.svg"
                      />
                      <small>Submit for SRO Review</small>
                    </button>
                </td>
          </tr>
           <tr>
            <td> 456787654  </td>
            <td>345/2022</td>
            <td> 212  </td>
            <td> Sekhar Varma </td>
            <td>  Gift settlement in favour of others  </td>
            <td>Insufficient details </td>
            <td> All details are not given  </td>
            <td> 22/11/2022 @ 11: 45 AM </td>
            <td> submitted  </td>
            <td className="text-center">
            {/* <Link href={"/DigitalSign"}> */}
                    <button className="print">
                      {" "}
                      <Image
                        width={47}
                        height={47}
                        src="/images/submitSRO.svg"
                      />
                      <small>Submit for SRO Review</small>
                    </button>
                    {/* </Link> */}
                </td>
          </tr>
           <tr>
            <td> 566787654  </td>
            <td>350/2022</td>
            <td> 216  </td>
            <td> Sekhar sastry </td>
            <td>  Partition among family members </td>
            <td>Improper documents </td>
            <td> Correct documents are not given  </td>
            <td> 11/10/2022 @ 07: 30 AM </td>
            <td> pending  </td>
            <td className="text-center">
            <button className="print">
                       {" "}
                      <Image
                        width={47}
                        height={47}
                        src="/images/sroriview-disabled.svg"
                      />
                      <small>Submit for SRO Review</small>
                    </button>
                </td>
          </tr>
          {/* <tr>
            <td> 458888123 </td>
            <td>346/2022</td>
            <td> 213  </td>
            <td> sreeja varma </td>
            <td> Release (Co-Parceners)</td>
            <td>Wrong Document </td>
            <td>Incorrect docs are given  </td>
            <td> 22/11/2022 @ 08: 00 AM </td>
            <td> submitted  </td>
            <td className="text-center">
            <Link href={"/DigitalSign"}>
                    <button className="print">
                    {" "}
                      <Image
                        width={47}
                        height={47}
                        src="/images/submitSRO.svg"
                      />
                      <small>Submit for SRO Review</small>
                    </button>
                    </Link>
                </td>
          </tr> */}
          <tr>
            <td>126787654</td>
            <td>348/2022</td>
            <td> 214  </td>
            <td> ravi teja </td>
            <td>  Release (Others)</td>
            <td>Incorrect details </td>
            <td>details are wrong </td>
            <td> 22/2/2023 @ 09: 09 AM </td>
            <td> submitted  </td>
            <td className="text-center">
            {/* <Link href={"/DigitalSign"}> */}
                    <button className="print">
                    {" "}
                      <Image
                        width={47}
                        height={47}
                        src="/images/submitSRO.svg"
                      />
                      <small>Submit for SRO Review</small>
                    </button>
                    {/* </Link> */}
                </td>
          </tr>
          <tr>
            <td> 456787654  </td>
            <td>345/2022</td>
            <td> 212  </td>
            <td> Sekhar Varma </td>
            <td>  Release (Others) </td>
            <td>Wrong Document </td>
            <td> wrong documents provided </td>
            <td> 22/11/2022 @ 11: 45 AM </td>
            <td> pending  </td>
            <td className="text-center">
                    <button className="print">
                    {" "}
                      <Image
                        width={47}
                        height={47}
                        src="/images/sroriview-disabled.svg"
                      />
                      <small>Submit for SRO Review</small>
                    </button>
                </td>
          </tr>
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
  return (
    <>
     <div><Stepper showReason2={true} /></div> <Stepper showReason={true} />
      <div className="pageMainWrap innerpage">
        <Head>
          <title>Submit For SRO - CARD</title>
          <meta name="description" content="login" />
          <link rel="icon" href="/igrsfavicon.ico" />
        </Head>
        <div className="mainWrapper">
          <div className="wrapperInner">
            <div className="acknowledgement">
              <h4>Submit for SRO Review</h4>
            </div>
            <div className="documentsTable pageTableMain pageTableContainer">
                <Row >
                    <Col xxl={2} xl={2} lg={2} md={12} sm={12}className="pageTableTabs">
                      <button className="activeButton">Ammend (5)</button>
                    </Col>
                    <Col xxl={0} xl={0} lg={0} md={0} sm={0}></Col>
                    <Col xxl={5} xl={5} lg={8} md={10} sm={12}className="float-end my-1">
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
                      <div className="searchFiler">
                        <RangePicker />
                      </div>
                    </Col>
                </Row>
                <div className="table-responsive text-center">
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
