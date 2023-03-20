import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Form, Overlay, Popover } from "react-bootstrap";
import { useTable, usePagination } from "react-table";
import Stepper from '../components/Stepper'
import Link from "next/link";
import { DatePicker, Space } from 'antd';
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
                  <Link href={"/Bundling"}>
                    <button className="basicDetails">
                      {" "}
                      <Image width={25} height={25} src="/images/Layer_1.svg" />
                      <small>Bundling</small>
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
  const [display, setdisplay] = useState(false)
  const handleClick1 = () => {
      setdisplay(true)
  }
  useEffect(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const [clicked, setclicked] = useState<boolean>(false);
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
  const data = [
    {
      appNo: (
        <>
          {" "}
          <div className="d-flex form-check-checkbox">
            <input
              onClick={checkboxes}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label mx-2" htmlFor="flexCheckDefault">
              456787654
            </label>
          </div>
        </>
      ),

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
      appNo: (
        <>
          {" "}
          <div className="d-flex form-check-checkbox" >
            <input
              onClick={checkboxes}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label mx-2" htmlFor="flexCheckDefault">
              458888123
            </label>
          </div>
        </>
      ),
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
      appNo: (
        <>
          <div className="d-flex form-check-checkbox">
            <input
              onClick={checkboxes}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label mx-2" htmlFor="flexCheckDefault">
              158888334
            </label>
          </div>
        </>
      ),
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
      appNo: (
        <>
          {" "}
          <div className="d-flex form-check-checkbox">
            <input
              onClick={checkboxes}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label mx-2" htmlFor="flexCheckDefault">
              638888123
            </label>
          </div>
        </>
      ),
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
      appNo: (
        <>
          {" "}
          <div className="d-flex form-check-checkbox">
            <input
              onClick={checkboxes}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label mx-2" htmlFor="flexCheckDefault">
              458888123
            </label>
          </div>
        </>
      ),
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
      appNo: (
        <>
          <div className="d-flex form-check-checkbox">
            <input
              onClick={checkboxes}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label mx-2" htmlFor="flexCheckDefault">
              675388123
            </label>
          </div>
        </>
      ),
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
      appNo: (
        <>
          {" "}
          <div className="d-flex form-check-checkbox">
            <input
              onClick={checkboxes}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label mx-2" htmlFor="flexCheckDefault">
              358888123
            </label>
          </div>
        </>
      ),
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
      appNo: (
        <>
          <div className="d-flex form-check-checkbox">
            <input
              onClick={checkboxes}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label mx-2" htmlFor="flexCheckDefault">
              678888123
            </label>
          </div>
        </>
      ),
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

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const handleClose = () => setShow1(false);

  const handleClick = (event) => {};

  const [checked, setchecked] = useState(0);
  function checkboxes() {
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
 <div><Stepper showReason1={true} /></div>
  <Stepper showReason={false} />
    <div className="pageMainWrap innerpage">
      <Head>
        <title>Bundling - CARD</title>
        <meta name="description" content="login" />
        <link rel="icon" href="/igrsfavicon.ico" />
      </Head>

      <div className="mainWrapper">
        <div className="wrapperInner">
          <div className="acknowledgement">
            <h4>Bundling & Digital Sign</h4>
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
                      <Col lg={12} md={12} xs={12} >
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

            <div className="documentsTable pageTableMain pageTableContainer">

                <Row className="mb-4">
                  <Col lg={3} md={4} xs={12}>
                    <div className="pageTableTabs">
                    <button className="activeButton">Accept (30)</button>
                          <button className="button">Ammend (5)</button>
                    </div>
                  </Col>

                  <Col lg={9} md={4} xs={12} className="pageTableSearch">
                    <div className="d-flex justify-content-end">
                      <div className="mx-3">

                          <div
                            className={`input-group md-form form-sm form-1 pl-0`}
                          >
                               <div className="col">





<input type="text" className="justify-content-end float-end search-click" style={{  borderRadius: "5px", borderColor: "#5692B4", height: "40px" }} name="" placeholder="Please search with any of these - CS No / Ack No / App No / Presentant Name" />



{display && ("")



}






</div>


                          </div>

                      </div>

                      <div>
                        <div className="searchFiler">
                          <button className="today">Today</button>

                          <RangePicker />
                        </div>
                      </div>

                      <div>
                        <button
                          className={
                            checked >= 2
                              ? "digital-sign-btn-enable"
                              : "digital-sign-btn"
                          }
                        >
                          Bulk Digital Sign
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>


              <div className="table-responsive">
                  <Table columns={columns} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScanningUpload;
