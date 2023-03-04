import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Table, Tab, Nav, Form } from "react-bootstrap";
import Header from "../components/Header";
import Accordion from 'react-bootstrap/Accordion';
import Stepper from '../components/Stepper'
import Link from "next/link";
const scanning = () => {
  const tableData = [
    {
      code: "01-TS",
      description: "Stamp Duty",
      amounttoPay: "1000",
      byCFMS: "345",
      byStock: "457",
      byCFMSStock: "978",
      byCash: "123",
      byDD: "123",
    },
    {
      code: "01-TS",
      description: "Stamp Duty",
      amounttoPay: "1000",
      byCFMS: "345",
      byStock: "457",
      byCFMSStock: "978",
      byCash: "123",
      byDD: "123",
    },
    {
      code: "01-TS",
      description: "Stamp Duty",
      amounttoPay: "1000",
      byCFMS: "345",
      byStock: "457",
      byCFMSStock: "978",
      byCash: "123",
      byDD: "123",
    },
    {
      code: "01-TS",
      description: "Stamp Duty",
      amounttoPay: "1000",
      byCFMS: "345",
      byStock: "457",
      byCFMSStock: "978",
      byCash: "123",
      byDD: "123",
    },
  ];
  return (
    <><Stepper /><div className="pageMainWrap innerpage">
      <Head>
        <title>Scanning - CARD</title>
        <meta name="description" content="login" />
        <link rel="icon" href="/igrsfavicon.ico" />
      </Head>

      <div className="mainWrapper">
        <div className="wrapperInner">
          <div className="acknowledgement">
            <button className="active partyDetails">Scanning</button>
            <button className="imaging">Digital Sign</button>
          </div>
          <div className="orginal-document-herf-link-button-over">
            <Row>
              <Col lg={10} md={10} xs={12}></Col>
              <Col lg={2} md={2} xs={12}>
                &nbsp;<button className=" btn orginal-document-herf-link-button">Original Document</button>
              </Col>
            </Row>
          </div>

          <div className="pageTableContainer mt-5">
            <Row className="my-4">
              <Col lg={2} md={3} xs={12} className="mb-3">
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="CS Number"
                  />
                  <Form.Label htmlFor="floatingInputCustom">
                    CS Number
                  </Form.Label>
                </Form.Floating>
              </Col>

              <Col lg={2} md={4} xs={12} className="mb-3">
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Year"
                  />
                  <Form.Label htmlFor="floatingInputCustom">Year</Form.Label>
                </Form.Floating>
              </Col>

              <Col lg={2} md={4} xs={12}>
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Book No."
                  />
                  <Form.Label htmlFor="floatingInputCustom">
                    Book No.
                  </Form.Label>
                </Form.Floating>
              </Col>
              <Col lg={2} md={4} xs={12}>
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Book No."
                  />
                  <Form.Label htmlFor="floatingInputCustom">
                    Document No.
                  </Form.Label>
                </Form.Floating>
              </Col>
            </Row>

            {/* <div className="partyTitle d-flex align-items-baseline">
                <img src="/images/arrow.svg"/>
                <h5 className="mb-4">Party Details</h5>
              </div> */}
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
                                <Nav.Link eventKey="first">
                                  <span>2</span>Executant List
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="second">
                                  <span>12</span>Claimant List
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </div>

                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <Row>
                                <Col lg={4} md={4} xs={12} className="mb-3">
                                  <div className="card">
                                    <div className="cardHeader">
                                      <h5>
                                        Presentant - <span>Executant</span>
                                      </h5>
                                    </div>
                                    <div className="cardBody">
                                      <Row>
                                        <Col lg={4} md={7} xs={12}>
                                          <img src="/images/party-executantimg.jpg" />
                                        </Col>
                                        <Col lg={8} md={7} xs={12}>
                                          <div className="d-flex align-items-center mb-3">
                                            <h6>
                                              <span>Name</span>Sanjay Kumar
                                            </h6>
                                            <h6 className="justify-content-end">
                                              <span>Aadhaar No.</span>XXXXXX7689
                                            </h6>
                                          </div>

                                          <div className="d-flex align-items-center mb-3">
                                            <h6>
                                              <span>Rel & Relation</span>S/o Krishna...
                                            </h6>
                                            <h6 className="justify-content-end">
                                              <span>PAN / form 60/61</span>CBAGK0769K
                                            </h6>
                                          </div>

                                          <div className="d-flex align-items-center">
                                            <h6>
                                              <span>PAN / form 60/61</span>Flat 120,
                                              Block C, Anjali Residency...
                                            </h6>
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </Col>

                                <Col lg={4} md={4} xs={12} className="mb-3">
                                  <div className="card">
                                    <div className="cardHeader d-flex align-items-center justify-content-between">
                                      <h5>
                                        Executant - <span>Representative</span>
                                      </h5>
                                      <h4 className="cardBtns">
                                        <button className="edit">
                                          <img src="/images/edit-icon.svg" />
                                        </button>
                                        <button className="delete">
                                          <img src="/images/delete-icon.svg" />
                                        </button>
                                      </h4>
                                    </div>
                                    <div className="cardBody">
                                      <Row>
                                        <Col lg={4} md={7} xs={12}>
                                          <img src="/images/party-executantimg.jpg" />
                                        </Col>
                                        <Col lg={8} md={7} xs={12}>
                                          <div className="d-flex align-items-center mb-3">
                                            <h6>
                                              <span>Name</span>Sanjay Kumar
                                            </h6>
                                            <h6 className="justify-content-end">
                                              <span>Aadhaar No.</span>XXXXXX7689
                                            </h6>
                                          </div>

                                          <div className="d-flex align-items-center mb-3">
                                            <h6>
                                              <span>Rel & Relation</span>S/o Krishna...
                                            </h6>
                                            <h6 className="justify-content-end">
                                              <span>PAN / form 60/61</span>CBAGK0769K
                                            </h6>
                                          </div>

                                          <div className="d-flex align-items-center">
                                            <h6>
                                              <span>PAN / form 60/61</span>Flat 120,
                                              Block C, Anjali Residency...
                                            </h6>
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </Col>

                                <Col lg={4} md={4} xs={12} className="mb-3">
                                  <div className="card">
                                    <div className="cardHeader d-flex align-items-center justify-content-between">
                                      <h5>
                                        Presentant - <span>Executant</span>
                                      </h5>
                                      <h4 className="cardBtns">
                                        <button className="edit">
                                          <img src="/images/edit-icon.svg" />
                                        </button>
                                        <button className="delete">
                                          <img src="/images/delete-icon.svg" />
                                        </button>
                                      </h4>

                                    </div>
                                    <div className="cardBody">
                                      <Row>
                                        <Col lg={4} md={7} xs={12}>
                                          <img src="/images/party-executantimg.jpg" />
                                        </Col>
                                        <Col lg={8} md={7} xs={12}>
                                          <div className="d-flex align-items-center mb-3">
                                            <h6>
                                              <span>Name</span>Sanjay Kumar
                                            </h6>
                                            <h6 className="justify-content-end">
                                              <span>Aadhaar No.</span>XXXXXX7689
                                            </h6>
                                          </div>

                                          <div className="d-flex align-items-center mb-3">
                                            <h6>
                                              <span>Rel & Relation</span>S/o Krishna...
                                            </h6>
                                            <h6 className="justify-content-end">
                                              <span>PAN / form 60/61</span>CBAGK0769K
                                            </h6>
                                          </div>
                                          <div className="d-flex align-items-center">
                                            <h6>
                                              <span>PAN / form 60/61</span>Flat 120,
                                              Block C, Anjali Residency...
                                            </h6>
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </Col>
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
            <Accordion>
              {/* <div className="partyTitle d-flex align-items-baseline">
                <img src="/images/arrow.svg" />
                <h5 className="mb-4">Property Details</h5>
              </div> */}
              <Accordion.Item eventKey="1">
                <Accordion.Header>Property Details</Accordion.Header>
                <Accordion.Body>
                  <div className="partyDetails propertyDetails mb-3">
                    <div className="executanttantTable">
                      <Row>
                        <Col lg={3} md={6} xs={12} className="mb-3">
                          <div className="card">
                            <div className="cardHeader d-flex align-items-center justify-content-between">
                              <h5>Schedule 1</h5>
                              <h5>Registration Type - Urban</h5>
                            </div>
                            <div className="cardBody">
                              <div className="d-flex align-items-center mb-3">
                                <h6>
                                  <span>SRO Name</span>Ramu
                                </h6>
                                <h6 className="justify-content-end">
                                  <span>Village Name</span>Kankipadu
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

                        <Col lg={3} md={6} xs={12} className="mb-3">
                          <div className="card">
                            <div className="cardHeader d-flex align-items-center justify-content-between">
                              <h5>Schedule 1</h5>
                              <h5>Registration Type - Rural</h5>
                            </div>
                            <div className="cardBody">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <h6>
                                  <span>SRO Name</span>Ramu
                                </h6>
                                <h6 className="justify-content-end">
                                  <span>Village Name</span>Kankipadu
                                </h6>
                              </div>

                              <div className="d-flex align-items-center justify-content-between">
                                <h6>
                                  <span>Survey No.</span>1
                                </h6>
                                <h6>
                                  <span>Sub-Survey No.</span>122A
                                </h6>
                              </div>
                            </div>
                          </div>
                        </Col>

                        <Col lg={3} md={6} xs={12} className="mb-3">
                          <div className="card">
                            <div className="cardHeader d-flex align-items-center justify-content-between">
                              <h5>Schedule 1</h5>
                              <h5>Registration Type - Urban</h5>
                            </div>
                            <div className="cardBody">
                              <div className="d-flex align-items-center mb-3">
                                <h6>
                                  <span>SRO Name</span>Ramu
                                </h6>
                                <h6 className="justify-content-end">
                                  <span>Village Name</span>Kankipadu
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

                        <Col lg={3} md={6} xs={12} className="mb-3">
                          <div className="card">
                            <div className="cardHeader d-flex align-items-center justify-content-between">
                              <h5>Schedule 1</h5>
                              <h5>Registration Type - Rural</h5>
                            </div>
                            <div className="cardBody">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <h6>
                                  <span>SRO Name</span>Ramu
                                </h6>
                                <h6 className="justify-content-end">
                                  <span>Village Name</span>Kankipadu
                                </h6>
                              </div>

                              <div className="d-flex align-items-center justify-content-between">
                                <h6>
                                  <span>Survey No.</span>1
                                </h6>
                                <h6>
                                  <span>Sub-Survey No.</span>122A
                                </h6>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Row className="mt-4">
              <Col lg={4} md={4} xs={12}>
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="No of Sheets" />
                  <Form.Label htmlFor="floatingInputCustom">
                    No of Sheets
                  </Form.Label>
                </Form.Floating>
              </Col>
              <Col lg={2} md={2} xs={12}>
                <div className="">
                  <Link href={"/scanningDocuments"}>
                    <button className="bluebuttonclass">Start Scan</button>
                  </Link>
                </div>
              </Col>
              <Col lg={6} md={6} xs={12}></Col>
            </Row>

          </div>
        </div>
      </div>
    </div></>
  );
};

export default scanning;
