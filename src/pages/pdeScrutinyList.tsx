import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Table, Form, Nav, Tab, Tabs } from "react-bootstrap";


const pdeScrutinyList = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const ammendData=[

  ]
  const pendingtableData = [
    {
      appId: "456787654",
      presenterName: "Chandra Shekar",
      maj: "Sale",
      min: "Sale Deed",
      slotTime: "10:30am",
      registrationType: "Original",
      details: "View Details",
      status: "New",
    },
    {
      appId: "456787654",
      presenterName: "Shekar Varma",
      maj: "Sale",
      min: "Sale Deed",
      slotTime: "12:15pm",
      registrationType: "Anywhere",
      details: "View Details",
      status: "Ammend",
    },
  ]
  const accepttableData = [
    {
      appId: "456787654",
      presenterName: "Chandra Shekar",
      maj: "Sale",
      min: "Sale Deed",
      slotTime: "10:30am",
      registrationType: "Original",
      details: "View Details",
      status: "New",
    },
    {
      appId: "456787654",
      presenterName: "Shekar Varma",
      maj: "Sale",
      min: "Sale Deed",
      slotTime: "12:15pm",
      registrationType: "Anywhere",
      details: "View Details",
      status: "Ammend",
    },
  ]
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
      ammendReason: "Wrong Document",
      ammend_datetime_SRO: "02-1-2023 2:30pm",
      ammend_comments: "Comments comes here",
    },
    {
      ackNo: "345",
      csNo: "212",
      appId: "46576864",
      presenterName: "shekar varma",
      maj: "Sale",
      min: "Sale Deed",
      slotTime: "12:15pm",
      registrationType: "original",
      ammendReason: "Wrong Document",
      ammend_datetime_SRO: "02-1-2023 2:30pm",
      ammend_comments: "Comments comes here",
    }
  ];
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
      registrationType: "original",
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
                  <button className="filter">
                    <small>Filters</small>
                    <Image width={20} height={20} src="/images/filter.svg" />
                  </button>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="documentsTable pageTableMain pageTableContainer">

            <Tab.Container defaultActiveKey="pending">
              <div className="pageTabsMain">
                <div className="pageTableTabs">
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="pending"><button className="pending">Pending (10)</button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="accept"><button className="accept">Accept (30)</button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="ammend"><button className="ammend">Ammend(5)</button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="refuse"><button className="refuse">Refuse(2)</button></Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>

                <Tab.Content>
                  <Tab.Pane eventKey="pending">
                    <Table bordered className="tableData listData tableheadBg">
                      <thead>
                        <tr>
                          <th rowSpan={2} className="text-center">
                            App ID
                          </th>
                          <th rowSpan={2} className="text-center">
                            Presenter Name
                          </th>
                          <th colSpan={2} className="extraFont text-center">
                            Nature of Document
                          </th>
                          <th rowSpan={2} className="text-center">
                            Slot Time
                          </th>
                          <th rowSpan={2} className="text-center">
                            Registration Type
                          </th>
                          <th rowSpan={2} className="text-center">
                            Details
                          </th>
                          <th rowSpan={2} className="text-center">
                            Status
                          </th>
                          <th rowSpan={2} className="text-center">
                            Actions
                          </th>
                        </tr>
                        <tr>
                          <th className="text-center smallFont">Maj</th>
                          <th className="text-center smallFont">Min</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pendingtableData.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td className="text-center">{item.appId}</td>
                              <td className="text-center">{item.presenterName}</td>
                              <td className="text-center">{item.maj}</td>
                              <td className="text-center">{item.min}</td>
                              <td className="text-center">{item.slotTime}</td>
                              <td className="text-center">{item.registrationType}</td>
                              <td className="text-center">
                                <button
                                  data-bs-toggle="modal"
                                  data-bs-target="#viewBasicDetails"
                                  className="basicDetails"
                                >
                                  {" "}
                                  <Image
                                    width={20}
                                    height={27}
                                    src="/images/Viewdetails.svg"
                                  />
                                  <small>View Details</small>
                                </button>
                              </td>
                              <td className="text-center">{item.status}</td>
                              <td className="text-center">
                                <button
                                  className="actionAccept"
                                  data-bs-toggle="modal"
                                  data-toggle="popover"
                                  data-bs-target="#viewActionAccept"
                                >
                                  <Image
                                    width={15}
                                    height={15}
                                    src="/images/accept.svg"
                                  />
                                  <small>Accept</small>
                                </button>
                                <button
                                  className="ammend"
                                  data-bs-toggle="modal"
                                  data-bs-target="#viewActionAmmend"
                                >
                                  <Image
                                    width={15}
                                    height={15}
                                    src="/images/ammend.svg"
                                  />
                                  <small>Ammend</small>
                                </button>
                                <button
                                  className="refuse"
                                  data-bs-toggle="modal"
                                  data-bs-target="#viewActionRefuse"
                                >
                                  <Image
                                    width={15}
                                    height={15}
                                    src="/images/refuse.svg"
                                  />
                                  <small>Refuse</small>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                    <div className="text-end">
                      <Image
                        width={500}
                        height={50}
                        src="/images/Pagination.svg"
                      />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="accept">
                    <Table bordered className="tableData listData tableheadBg">
                      <thead>
                        <tr>
                          <th rowSpan={2} className="text-center">
                            App ID
                          </th>
                          <th rowSpan={2} className="text-center">
                            Presenter Name
                          </th>
                          <th colSpan={2} className="extraFont text-center">
                            Nature of Document
                          </th>
                          <th rowSpan={2} className="text-center">
                            Slot Time
                          </th>
                          <th rowSpan={2} className="text-center">
                            Registration Type
                          </th>
                          <th rowSpan={2} className="text-center">
                            Details
                          </th>
                          <th rowSpan={2} className="text-center">
                            Status
                          </th>
                          <th rowSpan={2} className="text-center">
                            Actions
                          </th>
                        </tr>
                        <tr>
                          <th className="text-center smallFont">Maj</th>
                          <th className="text-center smallFont">Min</th>
                        </tr>
                      </thead>
                      <tbody>
                        {accepttableData.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td className="text-center">{item.appId}</td>
                              <td className="text-center">{item.presenterName}</td>
                              <td className="text-center">{item.maj}</td>
                              <td className="text-center">{item.min}</td>
                              <td className="text-center">{item.slotTime}</td>
                              <td className="text-center">{item.registrationType}</td>
                              <td className="text-center">
                                <button
                                  data-bs-toggle="modal"
                                  data-bs-target="#viewBasicDetails"
                                  className="basicDetails"
                                >
                                  {" "}
                                  <Image
                                    width={20}
                                    height={27}
                                    src="/images/Viewdetails.svg"
                                  />
                                  <small>View Details</small>
                                </button>
                              </td>
                              <td className="text-center">{item.status}</td>
                              <td className="text-center">
                                <button
                                  className="actionAccept"
                                  data-bs-toggle="modal"
                                  data-toggle="popover"
                                  data-bs-target="#viewActionAccept"
                                >
                                  <Image
                                    width={15}
                                    height={15}
                                    src="/images/accept.svg"
                                  />
                                  <small>Accept</small>
                                </button>
                                <button
                                  className="ammend"
                                  data-bs-toggle="modal"
                                  data-bs-target="#viewActionAmmend"
                                >
                                  <Image
                                    width={15}
                                    height={15}
                                    src="/images/ammend.svg"
                                  />
                                  <small>Ammend</small>
                                </button>
                                <button
                                  className="refuse"
                                  data-bs-toggle="modal"
                                  data-bs-target="#viewActionRefuse"
                                >
                                  <Image
                                    width={15}
                                    height={15}
                                    src="/images/refuse.svg"
                                  />
                                  <small>Refuse</small>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </Tab.Pane>
                  <Tab.Pane eventKey="ammend">
                    <Table bordered className="tableData listData tableheadBg">
                      <thead>
                        <tr>
                          <th rowSpan={2} className="text-center">
                            Ack No
                          </th>
                          <th rowSpan={2} className="text-center">
                            CS NO
                          </th>
                          <th rowSpan={2} className="extraFont text-center">
                            App ID
                          </th>
                          <th rowSpan={2} className="text-center">
                            Presenter Name
                          </th>
                          <th colSpan={2} className="text-center">
                            Nature of Document
                          </th>
                          <th rowSpan={2} className="text-center">
                            Slot Time
                          </th>
                          <th rowSpan={2} className="text-center">
                            Registration Type
                          </th>
                          <th rowSpan={2} className="text-center">
                            Details
                          </th>
                          <th rowSpan={2} className="text-center">
                            Ammend Reason
                          </th>
                          <th rowSpan={2} className="text-center">
                            Ammend Date & Time by SRO
                          </th>
                          <th rowSpan={2} className="text-center">
                            Ammend Comments
                          </th>
                        </tr>
                        <tr>
                          <th className="text-center smallFont">Maj</th>
                          <th className="text-center smallFont">Min</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ammendtableData.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td className="text-center">{item.ackNo}</td>
                              <td className="text-center">{item.csNo}</td>
                              <td className="text-center">{item.appId}</td>
                              <td className="text-center">{item.presenterName}</td>
                              <td className="text-center">{item.maj}</td>
                              <td className="text-center">{item.min}</td>
                              <td className="text-center">{item.slotTime}</td>
                              <td className="text-center">{item.registrationType}</td>
                              <td className="text-center">
                                <button
                                  data-bs-toggle="modal"
                                  data-bs-target="#viewBasicDetails"
                                  className="basicDetails"
                                >
                                  <Image
                                    width={20}
                                    height={27}
                                    src="/images/Viewdetails.svg"
                                  />
                                  <small>View Details</small>
                                </button>
                              </td>
                              <td className="text-center">{item.ammendReason}</td>
                              <td className="text-center">{item.ammend_datetime_SRO}</td>
                              <td className="text-center">{item.ammend_comments}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                    <div className="text-end">
                      <Image
                        width={500}
                        height={50}
                        src="/images/Pagination.svg"
                      />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="refuse">
                    <Table bordered className="tableData listData tableheadBg">
                      <thead>
                        <tr>
                          <th rowSpan={2} className="text-center">
                            Ack No
                          </th>
                          <th rowSpan={2} className="text-center">
                            CS No
                          </th>
                          <th rowSpan={2} className="extraFont text-center">
                            App ID
                          </th>
                          <th rowSpan={2} className="text-center">
                            Presenter Name
                          </th>
                          <th colSpan={2} className="text-center">
                            Nature of Document
                          </th>
                          <th rowSpan={2} className="text-center">
                            Slot Time
                          </th>
                          <th rowSpan={2} className="text-center">
                            Registration Type
                          </th>
                          <th rowSpan={2} className="text-center">
                            Details
                          </th>
                          <th rowSpan={2} className="text-center">
                            Refuse Reason
                          </th>
                          <th rowSpan={2} className="text-center">
                            Refuse Date & Time By SRO
                          </th>
                          <th rowSpan={2} className="text-center">
                            Refuse Comments
                          </th>
                        </tr>
                        <tr>
                          <th className="text-center smallFont">Maj</th>
                          <th className="text-center smallFont">Min</th>
                        </tr>
                      </thead>
                      <tbody>
                        {refusetableData.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td className="text-center">{item.ackNo}</td>
                              <td className="text-center">{item.csNo}</td>
                              <td className="text-center">{item.appId}</td>
                              <td className="text-center">{item.presenterName}</td>
                              <td className="text-center">{item.maj}</td>
                              <td className="text-center">{item.min}</td>
                              <td className="text-center">{item.slotTime}</td>
                              <td className="text-center">{item.registrationType}</td>

                              <td className="text-center">
                                <button
                                  data-bs-toggle="modal"
                                  data-bs-target="#viewBasicDetails"
                                  className="basicDetails"
                                >

                                  <Image
                                    width={20}
                                    height={27}
                                    src="/images/Viewdetails.svg"
                                  />
                                  <small>View Details</small>
                                </button>
                              </td>
                              <td className="text-center">{item.refuseReason}</td>
                              <td className="text-center">{item.refuse_datetime_SRO}</td>
                              <td className="text-center">{item.refuse_comments}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                    <div className="text-end">
                      <Image
                        width={500}
                        height={50}
                        src="/images/Pagination.svg"
                      />
                    </div>
                  </Tab.Pane>
                </Tab.Content>

              </div>
            </Tab.Container>

          </div>
          <div
            className="modal fade modal-lg"
            id="viewBasicDetails"
            aria-labelledby="viewBasicDetails"
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
            id="viewActionAccept"
            aria-labelledby="viewActionAccept"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Application No: 98765432
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
                          width={35}
                          height={35}
                          src="/images/accept1.svg"
                        />
                      </div>
                      <h5>Acknowledgement No:345 &</h5>
                    </div>
                    <div className="text-center">
                      <h5>Check Slip No:212</h5>
                    </div>
                    <div className="text-center">
                      <h5>Receipt No:234567</h5>
                    </div>
                    <div className="text-center">
                      <h5>has been generated successfully</h5>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade modal-md"
            id="viewActionAmmend"
            aria-labelledby="viewActionAmmend"
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
                    <div className="text-center">
                      <button type="button" className="btn btn-primary">
                        Okay
                      </button>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade modal-md"
            id="viewActionRefuse"
            aria-labelledby="viewActionRefuse"
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
                    <div className="text-center">
                      <button type="button" className="btn btn-primary">
                        Okay
                      </button>
                    </div>
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
