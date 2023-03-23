import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Row, Col, Form, Nav, Tab, Tabs, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useTable, usePagination } from "react-table";
import { BsInfoCircle } from "react-icons/bs";
import { DatePicker } from 'antd';
function PendingTable({ columns, data }) {
  const {
    getTableProps,
    headerGroups,
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
                <small>Refuse</small>
              </button>
            </td>
          </tr>
          <tr>
            <td>456787692</td>
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
                <small>Refuse</small>
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
                <small>Refuse</small>
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
                <small>Refuse</small>
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
                <small>Refuse</small>
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
    headerGroups,
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
        Name should be expanded as per ID proof
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
              Ammend comments
            </th>
            <th rowSpan={2} className="extraFont text-center">
              Ammend Date & Time by SRO
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
            <td>
              <div >
                {/* <span className="icon mx-1">Comments come here</span> */}
                <OverlayTrigger
                  placement="bottom"
                  overlay={tooltip}
                // containerPadding={20}
                >
                  <div >
                    Name should be expanded...
                  </div>
                </OverlayTrigger>
              </div>
            </td>
            <td>12/03/2022 @12:00pm</td>
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
            <td>Family member surname should match</td>
            <td>12/03/2022 @12:00pm</td>
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
            <td>Boundary details are missing</td>
            <td>01/07/2022 @11:13am</td>
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
            <td>Address should match in ID proofs</td>
            <td>17/09/2022 @10:15pm</td>
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
            <td>witness signs are mandatory</td>
            <td>25/02/2022 @10:41am</td>
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
              Refuse comments
            </th>
            <th rowSpan={2} className="extraFont text-center">
              Refuse Date & Time by SRO
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()} className="text-center">
          <tr>
            <td>456787521</td>
            <td>34567/2022</td>
            <td>546</td>
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
            <td>Original documents needed for registration</td>
            <td>02/01/2023 12:00pm</td>
          </tr>
          <tr>
            <td>456787564</td>
            <td>43215/2022</td>
            <td>389</td>
            <td>Shekar Varma</td>
            <td>Mortgage with possession</td>
            <td>11:30pm</td>
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
            <td>Parties to be present at the time of registration</td>
            <td>11/05/2023 10:45pm</td>
          </tr>
          <tr>
            <td>456787594</td>
            <td>67894/2022</td>
            <td>367</td>
            <td>Lakshmikanth</td>
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
            <td>Property Tax Receipts</td>
            <td>Tax receipts are mandatory</td>
            <td>30/05/2022 09:15am</td>
          </tr>
          <tr>
            <td>456787534</td>
            <td>97632/2022</td>
            <td>987</td>
            <td>Srinivasulu</td>
            <td>Gift</td>
            <td>02:30pm</td>
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
            <td>Identity of the seller cannot be confirmed</td>
            <td>09/02/2022 07:00pm</td>
          </tr>
          <tr>
            <td>456787543</td>
            <td>14789/2022</td>
            <td>342</td>
            <td>Ramya Lasya</td>
            <td>Partition</td>
            <td>03:45am</td>
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
            <td>Court has put a stay order on the deed</td>
            <td>21/05/2023 09:30am</td>
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
  const [display, setdisplay] = useState(false)
  const handleClick = () => {
    setdisplay(true)
  }
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const { RangePicker } = DatePicker;
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
            accessor: "natureofdocument",
          },
          {
            Header: "Slot Time",
            accessor: "slotTime",
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
      natureofdocument: "Sale deed",
      slotTime: "10:30am",
      details: "View Details",
      status: "New",
    },
    {
      appId: "456787654",
      presenterName: "Shekar Varma",
      natureofdocument: "Mortgage with possesion",
      slotTime: "12:15pm",
      details: "View Details",
      status: "Ammend",
    },
    {
      appId: "456787654",
      presenterName: "Chandra Shekar",
      natureofdocument: "Sale deed",
      slotTime: "10:30am",
      details: "View Details",
      status: "New",
    },
  ]
  const acceptcolumns = React.useMemo(
    () => [
      {
        Header: "1",
        columns: [
          {
            Header: "App ID",
            accessor: "appId",
          },
          {
            Header: "Ack num/Year",
            accessor: "ackNumYear",
          },
          {
            Header: "Cs No",
            accessor: "cs no",
          },
          {
            Header: "Presenter Name.",
            accessor: "presenterName",
          },
          {
            Header: "Nature of Document",
            accessor: "natureofdocument",
          },
          {
            Header: "Slot Time",
            accessor: "slotTime",
          },
          {
            Header: "Details",
            accessor: "details",
          },
          {
            Header: "Accept Date&Time by SRO",
            accessor: "accept date&time by SRO",
          },
        ],
      },
    ],
    []
  );
  const accepttableData = [
    {
      appId: "456787654",
      ackNumYear: "1234",
      csno: "5676",
      presenterName: "Chandra Shekar",
      Natureofdocument: "Sale deed",
      slotTime: "10:30am",
      details: "View Details",
      acceptdatetimebySRO: "22/11/2022 @10:45pm",
    },
    {
      appId: "456787655",
      ackNumYear: "1234",
      csno: "7654",
      presenterName: "Shekar Varma",
      Natureofdocument: "Mortgage with possesion",
      slotTime: "12:15pm",
      details: "View Details",
      acceptdatetimebySRO: "24/11/2022 @12:45pm",
    },
  ]
  const ammendcolumns = React.useMemo(
    () => [
      {
        Header: "1",
        columns: [
          {
            Header: "App ID",
            accessor: "appId",
          },
          {
            Header: "Ack Number/Year",
            accessor: "acknumberyear",
          },
          {
            Header: "CS. No.",
            accessor: "csNo",
          },
          {
            Header: "Presenter Name",
            accessor: "presenterName",
          },
          {
            Header: "Nature of Document",
            accessor: "natureofdocument"
          },
          {
            Header: "Slot Time",
            accessor: "slotTime",
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
      appId: "45678564",
      acknumberyear: "34544/2022",
      csNo: "212",
      presenterName: "chandra Shekar",
      natureofdocument: "Sale Deed",
      slotTime: "10:30pm",
      details: "View Details",
      ammendReason: "Name expansion",
      ammend_datetime_SRO: "02-1-2023 2:30pm",
      ammend_comments: "Name should be expanded as per ID proof",
    },
    {
      appId: "45678622",
      acknumberyear: "12345/2022",
      csNo: "132",
      presenterName: "Shekar varma",
      natureofdocument: "Mortgage with possesion",
      slotTime: "11:00pm",
      details: "View Details",
      ammendReason: "Surname is not matching",
      ammend_datetime_SRO: "22/11/2022 10:45am",
      ammend_comments: "Family member surname should match",
    }
  ];
  const refusecolumns = React.useMemo(
    () => [
      {
        Header: "1",
        columns: [
          {
            Header: "App ID",
            accessor: "appId",
          },
          {
            Header: "Ack Number/Year",
            accessor: "acknumberyear",
          },
          {
            Header: "CS. No.",
            accessor: "csNo",
          },
          {
            Header: "Presenter Name",
            accessor: "presenterName",
          },
          {
            Header: "Nature of Document",
            accessor: "nature of Document"
          },
          {
            Header: "Slot Time",
            accessor: "slotTime",
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
      appId: "46576521",
      acknumberyear: "34567/2022",
      csNo: "546",
      presenterName: "chandra Shekar",
      natureofdocument: "Sale Deed",
      slotTime: "10:30am",
      details: "View Details",
      refuseReason: "Fake Document",
      refuse_datetime_SRO: "02/1/2023 12:00pm",
      refuse_comments: "original documents needed for registration",
    },
    {
      appId: "46576564",
      acknumberyear: "43214/2022",
      csNo: "389",
      presenterName: "shekar varma",
      natureofdocument: "Mortgage with possesion",
      slotTime: "11:30pm",
      details: "View Details",
      refuseReason: "Third party person",
      refuse_datetime_SRO: "11/05/2023 10:45am",
      refuse_comments: "parties should be present at the time of registration",
    }
  ];
  return (
    <div className="pageMainWrap innerpage">
      <Head>
        <title>PDE Scrutiny List - CARD</title>
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
                      <Col lg={4}>
                        <div>
                          <Nav variant="pills">
                            <Nav.Item>
                              <Nav.Link eventKey="pending"><button className="button my-4">Pending (5)</button></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="accept"><button className="button my-4">Accept (5)</button></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ammend"><button className="button my-4">Ammend (5)</button></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="refuse"><button className="button my-4">Refuse (5)</button></Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                      </Col>
                      <Col lg={8}>
                        <div className="pageTableSearch text-end mt-3" >
                          <div className="d-flex searchbar-ml justify-content-end">
                            <div className="mx-3">
                              <div className="col">
                                <input type="text" className="justify-content-end float-end search-click" style={{ borderRadius: "5px", borderColor: "#5692B4", height: "40px" }} name="" placeholder=" Please search with - CS No/Ack No/App No/Presenter Name" />
                                {/* {display && ("")
                                } */}
                              </div>
                            </div>
                            <div className="searchFiler">
                              <button className="today">Today</button>
                              <RangePicker />
                            </div>
                          </div>
                        </div>
                      </Col>
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
                <div className="d-flex align-items-end flex-column py-3">
                  <button
                    type="button"
                    className="btn-close px-4"
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
                <div className="modal-body modalCheckSlip">
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
                    <Tab eventKey="Form 60/61" title="Form 60/61" className="text-center scrollable">
                      <Image
                        width={800}
                        height={500}
                        src="/images/form60.svg"
                      />
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
          <div //accept icon popups modal
            className="modal fade modal-md"
            id="acceptdetails"
            aria-labelledby="acceptdetails"
            aria-hidden="true"
          >
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
                <div className="mx-3 ">
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
                          value="5"
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
                          value=""
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Nominee Aadhar No.
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
                          value=""
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Nominee Name
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-center mt-3">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#generatingdetails"
                      type="button"
                      className="bluebuttonclass">
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
                          placeholder="Nominee Aadhar No"
                          value="XXXXXXXX1234"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Nominee Aadhar No.
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
                          placeholder="Nominee Name"
                          value="Meena"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Nominee Name.
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-center mt-3">
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
                          placeholder="Nominee Aadhar No"
                          value="XXXXXXXX1234"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Nominee Aadhar No.
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
                          placeholder="Nominee Name"
                          value="Meena"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Nominee Name.
                        </Form.Label>
                        <div style={{ color: "red" }}>
                          Aadhar Number is invalid. Please re-enter
                        </div>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-center mt-3">
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
            </div>  */}
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
            id="generatingdetails"
            aria-labelledby="generatingdetails"
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
                      <div>
                        <Image
                          width={80}
                          height={80}
                          src="/images/accept1.svg"
                        />
                      </div>
                      <h5>Acknowledgement No: <strong>345 &</strong></h5>
                    </div>
                    <div className="text-center">
                      <h5>Check Slip No: <strong>212</strong></h5>
                    </div>
                    <div className="text-center">
                      <h5>Receipt No: <strong>234567</strong></h5>
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
                      className="form-control form-select inputcomment"
                      rows={10}
                      id="comment"
                      placeholder="comments(Upto 1000 Characters)"
                    ></textarea>
                  </Row>
                  <Row>
                    <div className="d-flex justify-content-center mt-3">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#slipdetails"
                        type="button"
                        className="bluebuttonclass">
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
          </div>
          <div
            className="modal fade modal-md"
            id="slipdetails"
            aria-labelledby="slipdetails"
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
                      <div>
                        <Image
                          width={80}
                          height={80}
                          src="/images/accept1.svg"
                        />
                      </div>
                      <h5>Acknowledgement No: <strong>345</strong></h5>
                    </div>
                    <div className="text-center">
                      <h5>Check Slip No: <strong>212</strong></h5>
                    </div>
                    <div className="text-center">
                      <h5>has been generated successfully.</h5>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
          </div>
          <div //refuse icon popups modal
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
                      <option value="4">Others</option>
                    </select>
                  </Row>
                  <Row>
                    <textarea
                      className="form-control form-select inputcomment"
                      rows={5}
                      id="comment"
                      placeholder="comments"
                    ></textarea>
                  </Row>
                  <Row>
                    <Col>
                      <div className="d-flex justify-content-center mt-3">
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#checkdetails"
                          type="button"
                          className="bluebuttonclass">
                          Submit
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade modal-md"
            id="checkdetails"
            aria-labelledby="checkdetails"
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
                      <div>
                        <Image
                          width={80}
                          height={80}
                          src="/images/accept1.svg"
                        />
                      </div>
                      <h5>Acknowledgement No: <strong>345</strong></h5>
                    </div>
                    <div className="text-center">
                      <h5>Check Slip No: <strong>212</strong></h5>
                    </div>
                    <div className="text-center">
                      <h5>has been generated successfully.</h5>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: '102px' }}></div>
        </div>
      </div>
    </div>
  );
};
export default pdeScrutinyList;
