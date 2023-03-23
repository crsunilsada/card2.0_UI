import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Row, Col, Table, Tab, Nav, Form, Accordion, Modal, Button } from "react-bootstrap";
import Stepper from '../components/Stepper'
const Assigning = () => {
  const lastColumn = [(
    <>
      <small>Total</small>
      <h3>2300</h3>
    </>
  ),
  ];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const tableData = [
    {
      code: "01-TS",
      description: "Stamp Duty",
      amounttoPay: "6000",
      byCFMS: "745",
      byStock: "257",
      byCFMSStock: "978",
      byCash: "432",
      byDD: "123",
    },
    {
      code: "02-US",
      description: "Transfer Fee",
      amounttoPay: "1000",
      byCFMS: "999",
      byStock: "457",
      byCFMSStock: "378",
      byCash: "657",
      byDD: "610",
    },
    {
      code: "03-SD",
      description: "Register Fee",
      amounttoPay: "2000",
      byCFMS: "345",
      byStock: "232",
      byCFMSStock: "978",
      byCash: "565",
      byDD: "342",
    },
    {
      code: "04-TS",
      description: "User Charges",
      amounttoPay: "3000",
      byCFMS: "125",
      byStock: "676",
      byCFMSStock: "478",
      byCash: "787",
      byDD: "787",
    },
    {
      code: "",
      description: "",
      amounttoPay: lastColumn,
      byCFMS: lastColumn,
      byStock: lastColumn,
      byCFMSStock: lastColumn,
      byCash: lastColumn,
      byDD: lastColumn,
    },
  ];
  return (
    <><div><Stepper showReason1={true} /></div>
    <Stepper showReason={false}/>
    <div className="pageMainWrap innerpage">
      <Head>
        <title>Assigning - CARD</title>
        <meta name="description" content="login" />
        <link rel="icon" href="/igrsfavicon.ico" />
      </Head>
      <div className="mainWrapper">
        <div className="wrapperInner">
          <div className="acknowledgement">
            <button className="active partyDetails">Assigning</button>
            <button className="imaging">Endorsement</button>
          </div>
          <div className="pageTableContainer mt-4">
            <Row className="mb-4">
              <Col lg={3} md={3} xs={12} className="mb-4">
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="CS Number" />
                  <Form.Label htmlFor="floatingInputCustom">
                    CS Number
                  </Form.Label>
                </Form.Floating>
              </Col>
              <Col lg={3} md={4} xs={12} className="mb-4">
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Year" />
                  <Form.Label htmlFor="floatingInputCustom">Year</Form.Label>
                </Form.Floating>
              </Col>
              <Col lg={3} md={4} xs={12} className="mb-4">
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Book No." />
                  <Form.Label htmlFor="floatingInputCustom">
                    Book No.
                  </Form.Label>
                </Form.Floating>
              </Col>
            </Row>
            <div className="mb-3">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Party Details
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="partyDetails mb-3">
                      <div className="executanttantTable">
                        <Tab.Container defaultActiveKey="first">
                          <div className="tabsList">
                            <Nav variant="pills">
                              <Nav.Item>
                                <Nav.Link eventKey="first" className="tab-link" >
                                  <span>4</span>Executant List
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item >
                                <Nav.Link eventKey="second"  >
                                  <span>4</span>Claimant List
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </div>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <Row>
                                <div className="PropertyScrollBar">
                                  <Col lg={4} md={10}  className="mb-3 ">
                                    <div className="card">
                                      <div className="cardHeader d-flex align-items-center justify-content-between PropertyScrollBar">
                                        <h5>Presentant -
                                          <span> Executant</span>
                                        </h5>
                                        <h4 className="cardBtns">
                                          {/* <button type="button" data-bs-toggle="modal" data-bs-target="#partyDetailsScroll">
                                            <img src="/images/edit-icon.svg" />
                                          </button>
                                          <button className="delete">
                                            <img src="/images/delete-icon.svg" />
                                          </button> */}
                                        </h4>
                                      </div>
                                      <div className="cardBody">
                                        <Row>
                                          <Col lg={4} md={4} xs={12}>
                                            <img src="/images/party-executantimg.jpg" />
                                          </Col>
                                          <Col lg={8} md={8} xs={12}>
                                            <Row>
                                              <div className="d-flex align-items-center mb-3">
                                                <Col lg={6} md={6} xs={6}>
                                                  <h6>
                                                    <span>Name</span>Sanjay Kumar
                                                  </h6>
                                                </Col>
                                                <Col lg={6} md={6} xs={6}>
                                                  <h6 className="justify-content-end">
                                                    <span>Aadhaar No.</span>XXXXXX7689
                                                  </h6>
                                                </Col>
                                              </div>
                                              <div className="d-flex align-items-center mb-3">
                                                <Col lg={6} md={6} xs={6}>
                                                  <h6>
                                                    <span>Rel & Relation</span>S/o Krishna...
                                                  </h6>
                                                </Col>
                                                <Col lg={6} md={6} xs={6}>
                                                  <h6 className="justify-content-end">
                                                    <span>PAN / form 60/61</span>CBAGK0769K
                                                  </h6>
                                                </Col>
                                              </div>
                                            </Row>
                                            <div className="d-flex align-items-center">
                                              <h6>
                                                <span>Address</span>Flat 120,
                                                Block C, Anjali Residency...
                                              </h6>
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg={4} md={10}  className="mb-3 ">
                                    <div className="card">
                                      <div className="cardHeader d-flex align-items-center justify-content-between PropertyScrollBar">
                                        <h5>Executant -
                                          <span> Representative</span>
                                        </h5>
                                        <h4 className="cardBtns">
                                          <button type="button" data-bs-toggle="modal" data-bs-target="#partyDetailsScroll1">
                                            <img src="/images/edit-icon.svg" />
                                          </button>
                                          <button className="delete">
                                            <img src="/images/delete-icon.svg" />
                                          </button>
                                        </h4>
                                      </div>
                                      <div className="cardBody">
                                        <Row>
                                          <Col lg={4} md={4} xs={12}>
                                            <img src="/images/kanth.svg" />
                                          </Col>
                                          <Col lg={8} md={8} xs={12}>
                                            <Row>
                                            <div className="d-flex align-items-center mb-3">
                                            <Col lg={6} md={6} xs={6}>
                                              <h6>
                                                <span>Name</span>krishna Raju
                                              </h6>
                                              </Col>
                                              <Col lg={6} md={6} xs={6}>
                                              <h6 className="justify-content-end">
                                                <span>Aadhaar No.</span>XXXXXX1243
                                              </h6>
                                              </Col>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                            <Col lg={6} md={6} xs={6}>
                                              <h6>
                                                <span>Rel & Relation</span>S/o Subbarao...
                                              </h6>
                                              </Col>
                                              <Col lg={6} md={6} xs={6}>
                                              <h6 className="justify-content-end">
                                                <span>PAN / form 60/61</span>DBAGK0721B
                                              </h6>
                                              </Col>
                                            </div>
                                            </Row>
                                            <div className="d-flex align-items-center">
                                              <h6>
                                                <span>Address</span>Flat 10,Block E, Krisha Residency...
                                              </h6>
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg={4} md={10}  className="mb-3 ">
                                    <div className="card">
                                      <div className="cardHeader d-flex align-items-center justify-content-between ">
                                        <h5>Executant
                                        </h5>
                                        <h4 className="cardBtns">
                                          <button type="button" data-bs-toggle="modal" data-bs-target="#partyDetailsScroll1">
                                            <img src="/images/edit-icon.svg" />
                                          </button>
                                          <button className="delete">
                                            <img src="/images/delete-icon.svg" />
                                          </button>
                                        </h4>
                                      </div>
                                      <div className="cardBody">
                                        <Row>
                                          <Col lg={4} md={4} xs={12}>
                                            <img src="/images/Dharmendar.svg" />
                                          </Col>
                                          <Col lg={8} md={8} xs={12}>
                                            <Row>
                                            <div className="d-flex align-items-center mb-3">
                                            <Col lg={6} md={6} xs={6}>
                                              <h6>
                                                <span>Name</span>Ramakrishna
                                              </h6>
                                              </Col>
                                              <Col lg={6} md={6} xs={6}>
                                              <h6 className="justify-content-end">
                                                <span>Aadhaar No.</span>XXXXXX1243
                                              </h6>
                                              </Col>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                            <Col lg={6} md={6} xs={6}>
                                              <h6>
                                                <span>Rel & Relation</span>S/o Subbarao...
                                              </h6>
                                              </Col>
                                              <Col lg={6} md={6} xs={6}>
                                              <h6 className="justify-content-end">
                                                <span>PAN / form 60/61</span>DBAGK0721B
                                              </h6>
                                              </Col>
                                            </div>
                                            </Row>
                                            <div className="d-flex align-items-center">
                                              <h6>
                                                <span>Address</span>Flat 10,Block A, Ram Residency...
                                              </h6>
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg={4} md={10} className="mb-3 ">
                                    <div className="card">
                                      <div className="cardHeader d-flex align-items-center justify-content-between">
                                        <h5>
                                         Executant
                                        </h5>
                                        <h4 className="cardBtns">
                                          <button data-bs-toggle="modal" data-bs-target="#partyDetailsScroll2">
                                            <img src="/images/edit-icon.svg" />
                                          </button>
                                          <button className="delete">
                                            <img src="/images/delete-icon.svg" />
                                          </button>
                                        </h4>
                                      </div>
                                      <div className="cardBody">
                                        <Row>
                                          <Col lg={4} md={4} xs={12}>
                                            <img src="/images/Dharmendar.svg" />
                                          </Col>
                                          <Col lg={8} md={8} xs={12}>
                                            <Row>
                                            <div className="d-flex align-items-center mb-3">
                                            <Col lg={6} md={6} xs={6}>
                                              <h6>
                                                <span>Name</span>Dharmendra
                                              </h6>
                                              </Col>
                                              <Col lg={6} md={6} xs={6}>
                                              <h6 className="justify-content-end">
                                                <span>Aadhaar No.</span>XXXXXX7623
                                              </h6>
                                              </Col>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                            <Col lg={6} md={6} xs={6}>
                                              <h6>
                                                <span>Rel & Relation</span>S/o Parthasar...
                                              </h6>
                                              </Col>
                                              <Col lg={6} md={6} xs={6}>
                                              <h6 className="justify-content-end">
                                                <span>PAN / form 60/61</span>ABCKG0123A
                                              </h6>
                                              </Col>
                                            </div>
                                            </Row>
                                            <div className="d-flex align-items-center">
                                              <h6>
                                                <span>Address</span>Flat 1A/2,
                                                Block A, Sanjan Enclave...
                                              </h6>
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </div>
                                  </Col>
                                </div>
                              </Row>
                            </Tab.Pane>
                          </Tab.Content>
                          <Tab.Content>
                            <Tab.Pane eventKey="second">
                              <Row>
                                <div className="PropertyScrollBar">
                                  <Col lg={4} md={10}  className="mb-3 ">
                                    <div className="card">
                                      <div className="cardHeader PropertyScrollBar">
                                        <h5>
                                          Presentant - <span>Claimant</span>
                                        </h5>
                                      </div>
                                      <div className="cardBody">
                                        <Row>
                                          <Col lg={4} md={4} xs={12}>
                                            <img src="/images/party-executantimg.jpg" />
                                          </Col>
                                          <Col lg={8} md={8} xs={12}>
                                            <Row>
                                            <div className="d-flex align-items-center mb-3">
                                            <Col lg={6} md={6} xs={6}>
                                              <h6>
                                                <span>Name</span>Sanjay Kumar
                                              </h6>
                                              </Col>
                                              <Col lg={6} md={6} xs={6}>
                                              <h6 className="justify-content-end">
                                                <span>Aadhaar No.</span>XXXXXX7689
                                              </h6>
                                              </Col>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                            <Col lg={6} md={6} xs={6}>
                                              <h6>
                                                <span>Rel & Relation</span>S/o Krishna...
                                              </h6>
                                              </Col>
                                              <Col lg={6} md={6} xs={6}>
                                              <h6 className="justify-content-end">
                                                <span>PAN / form 60/61</span>CBAGK0769K
                                              </h6>
                                              </Col>
                                            </div>
                                            </Row>
                                            <div className="d-flex align-items-center">
                                              <h6>
                                                <span>Address</span>Flat 120,
                                                Block C, Anjali Residency...
                                              </h6>
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg={4} md={10}  className="mb-3 ">
                                    <div className="card">
                                      <div className="cardHeader d-flex align-items-center justify-content-between PropertyScrollBar">
                                        <h5>
                                          Claimant - <span>Representative</span>
                                        </h5>
                                        <h4 className="cardBtns">
                                          <button type="button" data-bs-toggle="modal" data-bs-target="#partyDetailsScroll1">
                                            <img src="/images/edit-icon.svg" />
                                          </button>
                                          <button className="delete">
                                            <img src="/images/delete-icon.svg" />
                                          </button>
                                        </h4>
                                      </div>
                                      <div className="cardBody">
                                        <Row>
                                          <Col lg={4} md={4} xs={12}>
                                            <img src="/images/kanth.svg" />
                                          </Col>
                                          <Col lg={8} md={8} xs={12}>
                                            <Row>
                                            <div className="d-flex align-items-center mb-3">
                                            <Col lg={6} md={6} xs={6}>
                                              <h6>
                                                <span>Name</span>Krishna Kanth
                                              </h6>
                                              </Col>
                                              <Col lg={6} md={6} xs={6}>
                                              <h6 className="justify-content-end">
                                                <span>Aadhaar No.</span>XXXXXX1243
                                              </h6>
                                              </Col>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                            <Col lg={6} md={6} xs={6}>
                                              <h6>
                                                <span>Rel & Relation</span>S/o Subbarao...
                                              </h6>
                                              </Col>
                                              <Col lg={6} md={6} xs={6}>
                                              <h6 className="justify-content-end">
                                                <span>PAN / form 60/61</span>DBAGK0721B
                                              </h6>
                                              </Col>
                                            </div>
                                            </Row>
                                            <div className="d-flex align-items-center">
                                              <h6>
                                                <span>Address</span>Flat 10,Block C, Krisha Residency...
                                              </h6>
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg={4} md={10}  className="mb-3">
                                    <div className="card">
                                      <div className="cardHeader d-flex align-items-center justify-content-between">
                                        <h5>
                                          Claimant
                                        </h5>
                                        <h4 className="cardBtns">
                                          <button data-bs-toggle="modal" data-bs-target="#partyDetailsScroll2">
                                            <img src="/images/edit-icon.svg" />
                                          </button>
                                          <button className="delete">
                                            <img src="/images/delete-icon.svg" />
                                          </button>
                                        </h4>
                                      </div>
                                      <div className="cardBody">
                                        <Row>
                                          <Col lg={4} md={4} xs={12}>
                                            <img src="/images/Dharmendar.svg" />
                                          </Col>
                                          <Col lg={8} md={8} xs={12}>
                                            <Row>
                                            <div className="d-flex align-items-center mb-3">
                                            <Col lg={6} md={6} xs={6}>
                                              <h6>
                                                <span>Name</span>Dharmendra
                                              </h6>
                                              </Col>
                                              <Col lg={6} md={6} xs={6}>
                                              <h6 className="justify-content-end">
                                                <span>Aadhaar No.</span>XXXXXX7689
                                              </h6>
                                              </Col>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                            <Col lg={6} md={6} xs={6}>
                                              <h6>
                                                <span>Rel & Relation</span>S/o Parthasar...
                                              </h6>
                                              </Col>
                                              <Col lg={6} md={6} xs={6}>
                                              <h6 className="justify-content-end">
                                                <span>PAN / form 60/61</span>ABCKG0123A
                                              </h6>
                                              </Col>
                                            </div>
                                            </Row>
                                            <div className="d-flex align-items-center">
                                              <h6>
                                                <span>Address</span>Flat 1A/2,
                                                Block A, Sanjan Enclave...
                                              </h6>
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg={4} md={10}  className="mb-3 ">
                                    <div className="card">
                                      <div className="cardHeader d-flex align-items-center justify-content-between">
                                        <h5>
                                          Claimant
                                        </h5>
                                        <h4 className="cardBtns">
                                          <button data-bs-toggle="modal" data-bs-target="#partyDetailsScroll2">
                                            <img src="/images/edit-icon.svg" />
                                          </button>
                                          <button className="delete">
                                            <img src="/images/delete-icon.svg" />
                                          </button>
                                        </h4>
                                      </div>
                                      <div className="cardBody">
                                        <Row>
                                          <Col lg={4} md={4} xs={12}>
                                            <img src="/images/Dharmendar.svg" />
                                          </Col>
                                          <Col lg={8} md={8} xs={12}>
                                            <Row>
                                            <div className="d-flex align-items-center mb-3">
                                            <Col lg={6} md={6} xs={6}>
                                              <h6>
                                                <span>Name</span>Dharmendra
                                              </h6>
                                              </Col>
                                              <Col lg={6} md={6} xs={6}>
                                              <h6 className="justify-content-end">
                                                <span>Aadhaar No.</span>XXXXXX7689
                                              </h6>
                                              </Col>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                            <Col lg={6} md={6} xs={6}>
                                              <h6>
                                                <span>Rel & Relation</span>S/o Parthasar...
                                              </h6>
                                              </Col>
                                              <Col lg={6} md={6} xs={6}>
                                              <h6 className="justify-content-end">
                                                <span>PAN / form 60/61</span>ABCKG0123A
                                              </h6>
                                              </Col>
                                            </div>
                                            </Row>
                                            <div className="d-flex align-items-center">
                                              <h6>
                                                <span>Address</span>Flat 1A/2,
                                                Block A, Sanjan Enclave...
                                              </h6>
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </div>
                                  </Col>
                                </div>
                              </Row>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="mb-3">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header >
                    Property Details
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="partyDetails propertyDetails">
                      <div className="executanttantTable  ">
                        <Row >
                          <div className="PropertyScrollBar">
                          <Col lg={3} md={6}  className="mb-3">
                            <div className="card">
                              <div className="cardHeader d-flex align-items-center justify-content-between">
                                <h5>Schedule 1</h5>
                                <h5>Registration Type - Urban</h5>
                              </div>
                              <div className="cardBody">
                                <div className="d-flex align-items-center  mb-3 ">
                                  <h6>
                                    <span>SRO Name</span>Ramu
                                  </h6>
                                  <h6 className="justify-content-end  Property-details-text  ">
                                    <span >Village Name</span>Kankipadu
                                  </h6>
                                </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <h6>
                            <span>Ward No.</span>1
                          </h6>
                          <h6 className="justify-content-end">
                            <span>Block No.</span>21
                          </h6>
                          <h6>
                            <span>Door No.</span>122A
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6}  className="mb-3">
                    <div className="card">
                      <div className="cardHeader d-flex align-items-center justify-content-between">
                        <h5>Schedule 1</h5>
                        <h5>Registration Type - Urban</h5>
                      </div>
                      <div className="cardBody">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6>
                            <span>SRO Name</span>Ramu
                          </h6>
                          <h6 className="justify-content-end Property-details-card-text ">
                            <span>Village Name</span>Kankipadu
                          </h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <h6>
                            <span>Survey No.</span>1
                          </h6>
                          <h6 className="justify-content-end ">
                            <span>Sub-Survey No.</span>122A
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6}  className="mb-3">
                            <div className="card">
                              <div className="cardHeader d-flex align-items-center justify-content-between">
                                <h5>Schedule 1</h5>
                                <h5>Registration Type - Urban</h5>
                              </div>
                              <div className="cardBody">
                                <div className="d-flex align-items-center  mb-3 ">
                                  <h6>
                                    <span>SRO Name</span>Ramu
                                  </h6>
                                  <h6 className="justify-content-end Property-details-text">
                                    <span>Village Name</span>Kankipadu
                                  </h6>
                                </div>
                        <div className="d-flex align-items-center justify-content-between ">
                          <h6>
                            <span>Ward No.</span>1
                          </h6>
                          <h6 className="justify-content-end">
                            <span>Block No.</span>21
                          </h6>
                          <h6>
                            <span>Door No.</span>122A
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6}  className="mb-3">
                    <div className="card">
                      <div className="cardHeader d-flex align-items-center justify-content-between">
                        <h5>Schedule 1</h5>
                        <h5>Registration Type - Urban</h5>
                      </div>
                      <div className="cardBody">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6>
                            <span>SRO Name</span>Ramu
                          </h6>
                          <h6 className="justify-content-end  Property-details-card-text">
                            <span>Village Name</span>Kankipadu
                          </h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <h6>
                            <span>Survey No.</span>1
                          </h6>
                          <h6 className="justify-content-end ">
                            <span>Sub-Survey No.</span>122A
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6}  className="mb-3">
                    <div className="card">
                      <div className="cardHeader d-flex align-items-center justify-content-between">
                        <h5>Schedule 1</h5>
                        <h5>Registration Type - Urban</h5>
                      </div>
                      <div className="cardBody">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6>
                            <span>SRO Name</span>Ramu
                          </h6>
                          <h6 className="justify-content-end  Property-details-card-text">
                            <span>Village Name</span>Kankipadu
                          </h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <h6>
                            <span>Survey No.</span>1
                          </h6>
                          <h6 className="justify-content-end ">
                            <span>Sub-Survey No.</span>122A
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Col>
                  </div>
                        </Row>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="mb-3">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Cash Details
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="partyDetails cashRecipient ">
                      <div className="executanttantTable pageTableMain p-0 table-responsive">
                        <Table bordered className="tableData listData tableheadBg ">
                          <thead className="text-center p-3 ">
                            <tr >
                              <th className="p-3">Code</th>
                              <th className="p-3">Description</th>
                              <th className="p-3">
                                Amount to pay <br />
                                by Challan
                              </th>
                              <th className="p-3">By CFMS</th>
                              <th className="p-3">By Stock</th>
                              <th className="p-3">
                                By CFMS + <br />
                                Stock Holding
                              </th>
                              <th className="p-3">By Cash</th>
                              <th className="p-3">By DD</th>
                            </tr>
                          </thead>
                          <tbody className="text-center">
                            {tableData.map((item, index) => {
                              return (
                                <tr key={index}>
                                  <td className="text-center p-3">{item.code}</td>
                                  <td className="text-center p-3">{item.description}</td>
                                  <td className="text-center p-3">{item.amounttoPay}</td>
                                  <td className="text-center p-3">{item.byCFMS}</td>
                                  <td className="text-center p-3">{item.byStock}</td>
                                  <td className="text-center p-3">{item.byCFMSStock}</td>
                                  <td className="text-center p-3">{item.byCash}</td>
                                  <td className="text-center p-3">{item.byDD}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="mb-3">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Link Documents
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="partyDetails linkDocuments mb-3">
                      <div className="executanttantTable">
                        <Row>
                          <div className="PropertyScrollBar">
                          <Col lg={2} md={6} xs={12} className="mb-3">
                            <div className="card">
                              <div className="cardBody">
                                <div className="d-flex align-items-center justify-content-evenly">
                                  <h6>
                                    <span>SRO Code</span>1234
                                  </h6>
                                  <h6>
                                    <span>Book No.</span>1
                                  </h6>
                                </div>
                        <div className="d-flex align-items-center justify-content-evenly">
                          <h6>
                            <span className="Property-details-card-text">Doc No.</span>34543
                          </h6>
                          <h6>
                            <span>Reg Year</span>2021
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={2} md={6} xs={12} className="mb-3">
                    <div className="card">
                      <div className="cardBody">
                        <div className="d-flex align-items-center justify-content-evenly">
                          <h6>
                            <span>SRO Code</span>3242
                          </h6>
                          <h6>
                            <span>Book No.</span>2
                          </h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-evenly">
                          <h6>
                            <span className="Property-details-card-text">Doc No.</span>12345
                          </h6>
                          <h6>
                            <span>Reg Year</span>2022
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={2} md={6} xs={12} className="mb-3">
                    <div className="card">
                      <div className="cardBody">
                        <div className="d-flex align-items-center justify-content-evenly">
                          <h6>
                            <span>SRO Code</span>3223
                          </h6>
                          <h6>
                            <span>Book No.</span>3
                          </h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-evenly ">
                          <h6>
                            <span className="Property-details-card-text">Doc No.</span>23456
                          </h6>
                          <h6>
                            <span>Reg Year</span>2021
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={2} md={6} xs={12} className="mb-3">
                    <div className="card">
                      <div className="cardBody">
                        <div className="d-flex align-items-center justify-content-evenly">
                          <h6>
                            <span>SRO Code</span>8767
                          </h6>
                          <h6>
                            <span>Book No.</span>1
                          </h6>
                        </div>
                                <div className="d-flex align-items-center justify-content-evenly">
                                  <h6>
                                    <span className="Property-details-card-text">Doc No.</span>67894
                                  </h6>
                                  <h6>
                                    <span>Reg Year</span>2023
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col lg={2} md={6} xs={12} className="mb-3">
                    <div className="card">
                      <div className="cardBody">
                        <div className="d-flex align-items-center justify-content-evenly ">
                          <h6>
                            <span>SRO Code</span>2312
                          </h6>
                          <h6>
                            <span>Book No.</span>1
                          </h6>
                        </div>
                                <div className="d-flex align-items-center justify-content-evenly">
                                  <h6>
                                    <span className="Property-details-card-text" >Doc No.</span>43215
                                  </h6>
                                  <h6>
                                    <span>Reg Year</span>2021
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col lg={2} md={6} xs={12} className="mb-3">
                    <div className="card">
                      <div className="cardBody">
                        <div className="d-flex align-items-center justify-content-evenly ">
                          <h6>
                            <span>SRO Code</span>Ramu
                          </h6>
                          <h6>
                            <span>Book No.</span>1
                          </h6>
                        </div>
                                <div className="d-flex align-items-center justify-content-evenly">
                                  <h6>
                                    <span className="Property-details-card-text">Doc No.</span>34543
                                  </h6>
                                  <h6>
                                    <span>Reg Year</span>2021
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </Col>
                          </div>
                        </Row>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="mb-4 d-flex assigningcheckboxes">
              <Form.Check
                defaultChecked
                value="Regular Document Details"
                type="radio"
                aria-label="Regular Document Details"
                label="Regular Document Details"
                name="inlineRadioOptions"
              />
              {/* <Form.Check
                value=" Pending Document Details"
                type="radio"
                aria-label="Pending Document Details"
                label="Pending Document Details"
                name="inlineRadioOptions"
              /> */}
            </div>
            <Row>
              <Col lg={3} md={3} xs={12} className="mb-4">
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Reg. Date"
                  />
                  <Form.Label htmlFor="floatingInputCustom">
                    Reg. Date
                  </Form.Label>
                </Form.Floating>
              </Col>
              <Col lg={3} md={4} xs={12} className="mb-4">
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Regular Doc No." />
                  <Form.Label htmlFor="floatingInputCustom">
                    Regular Doc No.
                  </Form.Label>
                </Form.Floating>
              </Col>
              <Col lg={3} md={4} xs={12}>
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Re Enter Regular Doc No." />
                  <Form.Label htmlFor="floatingInputCustom">
                    Re Enter Regular Doc No.
                  </Form.Label>
                </Form.Floating>
              </Col>
            </Row>
          </div>
          <hr/>
          <div className="pageTableContainer">
            <div className="pageNextBtn">
              <button className="next " onClick={handleShow}>Save</button>
              <Modal show={show} onHide={handleClose} className="modal-path">
                <Modal.Header closeButton>
                  <Modal.Title>Confirmation Message</Modal.Title>
                </Modal.Header>
                <Modal.Body className="justify-content-center text-center">Are you sure, you want to save the data,
                  Data once saved cannot be edited</Modal.Body>
                <Modal.Footer className="justify-content-center ">
                <Link href={"/AssigningVerification"}>
                    <Button className="bluebuttonclass" onClick={handleClose}>
                      Done
                    </Button>
                  </Link>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
};
export default Assigning;
