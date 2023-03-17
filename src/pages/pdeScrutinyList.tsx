import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Form, Nav, Tab, Table, Tabs, TabContainer, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useTable, usePagination } from "react-table";
import { BsInfoCircle } from "react-icons/bs";

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

  const tooltip = (
    <Tooltip id="tooltip-top">
      <h5>Previous Ammend Reasons</h5>
      <Form.Floating>
        <Form.Control
          id="floatingInputCustom"
          type="text"
          value="Deficit Amount"
        />
      </Form.Floating>
      <h5 className="mt-2">Comments</h5>
      <Form.Floating>
        <Row>
          <Col lg={12} md={12} className="mb-3">
            <textarea
              className="form-control form-select"
              rows={5}
              id="comment"
              placeholder="Characters limit is 1000"
            ></textarea>
          </Col>
        </Row>
      </Form.Floating>
    </Tooltip>

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
            <th rowSpan={2} className="text-center">
              Nature of Document
            </th>
            <th rowSpan={2} className="text-center">
              Slot time
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
        </thead>
        <tbody className="text-center">
          <tr>
            <td>456787654</td>
            <td>Chandra Sekhar</td>
            <td>Sale Deed</td>
            <td>10:30am</td>
            <td className="text-center">
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
            </td>
            <td>New</td>
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
          <tr>
            <td>456787654 </td>
            <td>Sekhar Varma</td>
            <td>Mortgage with possession</td>
            <td>12:15pm</td>
            <td className="text-center">
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
            </td>
            <td>
              <div className="d-flex justify-content-center">
                <span className="icon mx-1">Ammend</span>
                <OverlayTrigger
                  placement="bottom"
                  overlay={tooltip}
                // containerPadding={20}
                >
                  <div>
                    <BsInfoCircle
                      size={19}
                      style={{ color: "#274C77" }} />
                  </div>
                </OverlayTrigger>
              </div>
            </td>
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
          <tr>
            <td>456787642</td>
            <td>Biplob Sharma</td>
            <td>Sale agreement with possession</td>
            <td>09:30am</td>
            <td className="text-center">
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
            </td>
            <td>New</td>
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
          <tr>
            <td>456787631</td>
            <td>Radhamma</td>
            <td>Gift</td>
            <td>01:25pm</td>
            <td className="text-center">
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
            </td>
            <td>
              <div className="d-flex justify-content-center">
                <span className="icon mx-1">Ammend</span>
                <OverlayTrigger
                  placement="bottom"
                  overlay={tooltip}
                // containerPadding={20}
                >
                  <div>
                    <BsInfoCircle
                      size={19}
                      style={{ color: "#274C77" }} />
                  </div>
                </OverlayTrigger>
              </div>
            </td>
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
          <tr>
            <td>456787622</td>
            <td>Lakshmi Kanth</td>
            <td>Partition</td>
            <td>09:00am</td>
            <td className="text-center">
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
            </td>
            <td>New</td>
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
              {[5, 10, 15, 20].map((pageSize) => (
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
          // disabled  ={!canPreviousPage}
          >
            <a className="page-link">
              <img src="/images/pagination-prev.jpg" />
            </a>
          </li>
          <li
            className="paginationNext pageNav"
            onClick={() => nextPage()}
            // disabled={!canNextPage}
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
              Ack num/Year
            </th>
            <th rowSpan={2} className="text-center">
              Cs Number
            </th>
            <th rowSpan={2} className="text-center">
              Presenter Name
            </th>
            <th rowSpan={2} className="text-center">
              Nature of Document
            </th>
            <th rowSpan={2} className="text-center">
              Slot time
            </th>
            <th rowSpan={2} className="text-center">
              Details
            </th>
            <th rowSpan={2} className="text-center">
              Accept Date & Time by SRO
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>456787654 </td>
            <td>12345/2023</td>
            <td>5676</td>
            <td>Chandra Sekhar</td>
            <td>Sale Deed</td>
            <td>10:30am</td>
            <td className="text-center">
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
            </td>
            <td>22/11/2022 @10:45am</td>
          </tr>
          <tr>
            <td>456787655</td>
            <td>52345/2022</td>
            <td>7654</td>
            <td>Sekhar Varma</td>
            <td>Mortgage with possession</td>
            <td>12:15pm</td>
            <td className="text-center">
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
            </td>
            <td>24/11/2022 @12:45pm</td>
          </tr>
          <tr>
            <td>456787642 </td>
            <td>34566/2022</td>
            <td>9876</td>
            <td>Biplob Sharma</td>
            <td>Sale agreement with possession</td>
            <td>09:30am</td>
            <td className="text-center">
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
            </td>
            <td>11/05/2022 @09:45am</td>
          </tr>
          <tr>
            <td>456787631 </td>
            <td>32145/2023</td>
            <td>1456</td>
            <td>Radhamma</td>
            <td>Gift</td>
            <td>1:25pm</td>
            <td className="text-center">
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
            </td>
            <td>01/01/2022 @08:45pm</td>
          </tr>
          <tr>
            <td>456787622</td>
            <td>97654/2022</td>
            <td>7896</td>
            <td>Lakshmi Kanth</td>
            <td>Partition</td>
            <td>09:00am</td>
            <td className="text-center">
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
            </td>
            <td>24/09/2023 @10:45am</td>
          </tr>
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
            // disabled={!canPreviousPage}
          >
            <a className="page-link">
              <img src="/images/pagination-prev.jpg" />
            </a>
          </li>
          <li
            className="paginationNext pageNav"
            onClick={() => nextPage()}
            // disabled={!canNextPage}
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

  const tooltip = (
    <Tooltip id="tooltip-top">
      <Form.Floating>
        <p>Comments with 1000 characters come here when they hover</p>
      </Form.Floating>
    </Tooltip>
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
              Ack Num/Year
            </th>
            <th rowSpan={2} className="text-center">
              CS No
            </th>
            <th rowSpan={2} className="text-center">
              Presenter Name
            </th>
            <th rowSpan={2} className="text-center">
              Nature of Document
            </th>
            <th rowSpan={2} className="text-center">
              Slot time
            </th>
            <th rowSpan={2} className="extraFont text-center">
              Details
            </th>
            <th rowSpan={2} className="extraFont text-center">
              Ammend Reason
            </th>
            <th rowSpan={2} className="extraFont text-center">
              Ammend Date & Time by SRO
            </th>
            <th rowSpan={2} className="extraFont text-center">
              Ammend comments
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()} className="text-center">
          <tr>
            <td>456787564</td>
            <td>34544/2022</td>
            <td>212</td>
            <td>Chandra Shekar</td>
            <td>Sale Deed</td>
            <td>10:30am</td>
            <td className="text-center">
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
            </td>
            <td>Name expansion</td>
            <td>22/11/2022 @10:45am</td>
            <td>
              <div >
                {/* <span className="icon mx-1">Comments come here</span> */}
                <OverlayTrigger
                  placement="bottom"
                  overlay={tooltip}
                // containerPadding={20}
                >
                  <div>
                    Name should be expanded as per ID proof
                  </div>
                </OverlayTrigger>
              </div>
            </td>
          </tr>
          <tr>
            <td>456787622</td>
            <td>12345/2022</td>
            <td>132</td>
            <td>Sekhar Varma</td>
            <td>Mortgage with possession</td>
            <td>11:00am</td>
            <td className="text-center">
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
            </td>
            <td>Surname is not matching</td>
            <td>12/03/2022 @12:00pm</td>
            <td>Family member surname should match</td>
          </tr>
          <tr>
            <td>456787631</td>
            <td>34567/2022</td>
            <td>654</td>
            <td>Rajshekar</td>
            <td>Sale agreement with possession</td>
            <td>09:05am</td>
            <td className="text-center">
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
            </td>
            <td>Documents are not proper</td>
            <td>01/07/2022 @11:13am</td>
            <td>Boundary details are missing</td>
          </tr>
          <tr>
            <td>456787645</td>
            <td>45689/2022</td>
            <td>845</td>
            <td>Malik Verma</td>
            <td>Gift</td>
            <td>12:00pm</td>
            <td className="text-center">
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
            </td>
            <td>Residence proofs wrong</td>
            <td>17/09/2022 @10:15pm</td>
            <td>Address should match in ID proofs</td>
          </tr>
          <tr>
            <td>456787665</td>
            <td>67865/2022</td>
            <td>735</td>
            <td>Ramarao</td>
            <td>Partition</td>
            <td>09:12am</td>
            <td className="text-center">
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
            </td>
            <td>Witness</td>
            <td>25/02/2022 @10:41am</td>
            <td>witness signs are mandatory</td>
          </tr>
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
            // disabled={!canPreviousPage}
          >
            <a className="page-link">
              <img src="/images/pagination-prev.jpg" />
            </a>
          </li>
          <li
            className="paginationNext pageNav"
            onClick={() => nextPage()}
            // disabled={!canNextPage}
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
              App ID
            </th>
            <th rowSpan={2} className="text-center">
              Ack Num/Year
            </th>
            <th rowSpan={2} className="text-center">
              CS No
            </th>
            <th rowSpan={2} className="text-center">
              Presenter Name
            </th>
            <th rowSpan={2} className="text-center">
              Nature of Document
            </th>
            <th rowSpan={2} className="text-center">
              Slot time
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
        </thead>
        <tbody {...getTableBodyProps()} className="text-center">
          <tr>
            <td>456787564</td>
            <td>34567/2022</td>
            <td>212</td>
            <td>Chandra Shekar</td>
            <td>Sale Deed</td>
            <td>10:30am</td>
            <td className="text-center">
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
            </td>
            <td>Fake documents</td>
            <td>02-01-2023 12:00pm</td>
            <td>Original documents needed for registration</td>
          </tr>
          <tr>
            <td>456787564</td>
            <td>43215/2022</td>
            <td>389</td>
            <td>Shekar Varma</td>
            <td>Mortgage with possession</td>
            <td>10:30am</td>
            <td className="text-center">
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
            </td>
            <td>Third party person </td>
            <td>02-01-2023 12:00pm</td>
            <td>Parties to be present at the time of registration</td>
          </tr>
          <tr>
            <td>456787564</td>
            <td>67894/2022</td>
            <td>367</td>
            <td>Lakshmikanth</td>
            <td>Sale agreement with possession</td>
            <td>10:30am</td>
            <td className="text-center">
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
            </td>
            <td>Property Tax Receipts</td>
            <td>02-01-2023 12:00pm</td>
            <td>Tax receipts are mandatory</td>
          </tr>
          <tr>
            <td>456787564</td>
            <td>97632/2022</td>
            <td>987</td>
            <td>Srinivasulu</td>
            <td>Gift</td>
            <td>10:30am</td>
            <td className="text-center">
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
            </td>
            <td>Identity</td>
            <td>02-01-2023 12:00pm</td>
            <td>Identity of the seller cannot be confirmed</td>
          </tr>
          <tr>
            <td>456787564</td>
            <td>14789/2022</td>
            <td>342</td>
            <td>Ramya Lasya</td>
            <td>Partition</td>
            <td>10:30am</td>
            <td className="text-center">
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
            </td>
            <td>Others</td>
            <td>02-01-2023 12:00pm</td>
            <td>Court has put a stay order on the deed</td>
          </tr>
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
            // disabled={!canPreviousPage}
          >
            <a className="page-link">
              <img src="/images/pagination-prev.jpg" />
            </a>
          </li>
          <li
            className="paginationNext pageNav"
            onClick={() => nextPage()}
            // disabled={!canNextPage}
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

          // {
          //   Header: "Details",
          //   accessor: "details",
          // },
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
      details: "View Details",
      status: "New"

    },
    {
      appId: "456787654",
      presenterName: "Shekar Varma",
      maj: "Sale",
      min: "Sale Deed",
      slotTime: "12:15pm",
      registrationType: "Anywhere",
      details: "View Details",
      status: "Ammend"
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

    <div className="pageMainWrap innerpage">
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


          <div className="documentsTable pageTableMain pageTableContainer">
            <Tab.Container defaultActiveKey="pending">
              <div className="pageTabsMain">
                <div className="pageTableTabs">
                  <Row className="tableMarginTop">
                    <div className="searchContainer">
                      <Col lg={5}>
                        <div>
                          <Nav variant="pills">
                            <Nav.Item>
                              <Nav.Link eventKey="pending"><button className="button my-4">Pending (5)</button></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="accept"><button className="button my-4 accpBtn">Accept (5)</button></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ammend"><button className="button my-4 accpBtn">Ammend (5)</button></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="refuse"><button className="button my-4 accpBtn">Refuse (5)</button></Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                      </Col>
                      <Col lg={7}>
                        <div className="pageTableSearch text-end mt-3" >
                          <div className="d-flex searchbar-ml justify-content-end">
                            <div className="mx-3">
                            <form className="md-form">
                              <div className={`input-group md-form form-sm form-1 pl-0`}>
                                <input
                                  className={`form-control form-control-sm wl-50`}
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
                            </form></div>
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
                  <Row>
                    <div className="modal fade modal-md position-absolute" id="exampleModals" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
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
              </div>
            </Tab.Container>
          </div>
          <div
            className="modal fade modal-lg modal-heightt"
            id="viewdetails"
            aria-labelledby="viewdetails"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="d-flex align-items-end flex-column p-4">
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
                  <Tabs
                    defaultActiveKey="Check Slip Report"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                  >
                    <Tab eventKey="Check Slip Report" title="Check Slip Report" className="text-center scrollable">
                      <Image
                        width={500}
                        height={800}
                        src="/images/checkslip.svg"
                      />
                    </Tab>
                    <Tab eventKey="Document Generation" title="Document Generation" className="text-center scrollable">
                      <Image
                        width={800}
                        height={500}
                        src="/images/saledeed.svg"
                      />
                    </Tab>
                    <Tab eventKey="Slot Booking Slip" title="Slot Booking Slip" className="text-center scrollable">
                      <Image
                        width={800}
                        height={1000}
                        src="/images/form60.svg"
                      />
                    </Tab>
                    <Tab eventKey="Acknowledgement Slip" title="Acknowledgement Slip" className="text-center scrollable">
                      <Image
                        width={800}
                        height={500}
                        src="/images/acknowledgement.svg"
                      />
                    </Tab>
                  </Tabs>
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
            {/* <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title" id="exampleModalLabel">Application No: 456787654</h1>
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
                <div style={{ margin: "1rem" }}>
                  Basic Details
                </div>
                <div className="modal-body">
                  <Row>
                    <Col lg={12} md={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="No. Of Sheets/Pages"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          No. Of Sheets/Pages
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} md={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Nominee Name"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Nominee Name
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} md={12} className="mb-2">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Nominee Aadhar No"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Nominee Aadhar No.
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-center">
                    <button type="button" className="bluebuttonclass">
                      ADD
                    </button>
                  </div>
                </div>

              </div>
            </div> */}
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title" id="exampleModalLabel">Application No: 456787654</h1>
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
                <div style={{ margin: "1rem" }}>
                  Basic Details
                </div>
                <div className="modal-body">
                  <Row>
                    <Col lg={12} md={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="No. Of Sheets/Pages"
                          value="12"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          No. Of Sheets/Pages
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} md={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Nominee Name"
                          value="Meena"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Nominee Name
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} md={12} className="mb-2">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Nominee Aadhar No"
                          value="XXXXXXXX1234"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Nominee Aadhar No.
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-center">
                    <button type="button" className="bluebuttonclass">
                      ADD
                    </button>
                  </div>

                </div>

              </div>
            </div>
            {/* <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title" id="exampleModalLabel">Application No: 456787654</h1>
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
                <div style={{ margin: "1rem" }}>
                  Basic Details
                </div>
                <div className="modal-body">
                  <Row>
                    <Col lg={12} md={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="No. Of Sheets/Pages"
                          value="12"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          No. Of Sheets/Pages
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} md={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Nominee Name"
                          value="Meena"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Nominee Name
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} md={12} className="mb-2">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Nominee Aadhar No"
                          value="XXXXXXXX1234"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Nominee Aadhar No.
                        </Form.Label>
                        <div style={{ color: "red" }}>
                          Aadhar Number is invalid. Please re-enter
                        </div>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-center">
                    <button type="button" className="bluebuttonclass">
                      ADD
                    </button>
                  </div>

                </div>

              </div>
            </div> */}
            {/* <div className="modal-dialog">
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
                      <div>
                        <Image
                          width={80}
                          height={80}
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
            </div> */}
            {/* <div className="modal-dialog">
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
                      <div>
                        <Image
                          width={80}
                          height={80}
                          src="/images/accept1.svg"
                        />
                      </div>
                      <h6>For Given</h6>
                      <h6>For Given Acknowledgement No: <strong>345 &</strong></h6>
                    </div>
                    <div className="text-center">
                      <h6>Check Slip No: <strong>212</strong></h6>
                    </div>
                    <div className="text-center">
                      <h6>Receipt No: <strong>123</strong></h6>
                    </div>
                    <div className="text-center">
                      <h6>has been generated and ammend flow accepted successfully</h6>
                    </div>
                  </Row>
                </div>
              </div>
            </div> */}
            {/* <div className="modal-dialog">
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
                      <div>
                        <Image
                          width={80}
                          height={80}
                          src="/images/accept1.svg"
                        />
                      </div>
                      <h6>For Given</h6>
                      <h6>For Given Acknowledgement No: <strong>345 &</strong></h6>
                    </div>
                    <div className="text-center">
                      <h6>Check Slip No: <strong>212</strong></h6>
                    </div>
                    <div className="text-center">
                      <h6>Ammend flow accepted successfully.</h6>
                    </div>
                  </Row>
                </div>
              </div>
            </div> */}
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
                    <select className="form-select form-select form-data mb-3">
                      <option selected>Select Reason</option>
                      <option value="1">Name expansion</option>
                      <option value="2">Surname is not matching</option>
                      <option value="3">Documents are not proper</option>
                      <option value="3">Residence proofs wrong</option>
                      <option value="3">Witness</option>
                    </select>
                  </Row>
                  <Row>
                    <textarea
                      className="form-control form-select"
                      rows={3}
                      id="comment"
                      placeholder="comments(Upto 1000 Characters)"
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
            {/* <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title" id="exampleModalLabel">Application List Ammend</h1>
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
                    <Col lg={12} md={12} className="mb-3">
                      <Form.Floating >
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          value="Reason 1 X  Reason 2 X"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Select Reasons
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} md={12} className="mb-3">
                      <textarea
                        className="form-control form-select"
                        rows={5}
                        id="comment"
                        placeholder="Comments (Upto 1000 Characters)"
                      ></textarea>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-center">
                    <button type="button" className="bluebuttonclass">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="modal-dialog">
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
                      <div>
                        <Image
                          width={80}
                          height={80}
                          src="/images/accept1.svg"
                        />
                      </div>
                      <h6>Acknowledgement No: <strong>345</strong></h6>
                    </div>
                    <div className="text-center">
                      <h6>Check Slip No: <strong>212</strong></h6>
                    </div>
                    <div className="text-center">
                      <h6>has been generated successfully.</h6>
                    </div>
                  </Row>
                </div>
              </div>
            </div> */}
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
                    <select className="form-select form-select form-data mb-3">
                      <option selected>Select Reason</option>
                      <option value="1">Fake Documents</option>
                      <option value="2">Third party Person</option>
                      <option value="3">Property tax receipts</option>
                    </select>
                  </Row>
                  <Row>
                    <textarea
                      className="form-control form-select"
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
