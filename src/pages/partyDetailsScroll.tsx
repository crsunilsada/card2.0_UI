import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Table, Tab, Nav, Form } from "react-bootstrap";

const partyDetailsScroll = () => {
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
    <div className="pageMainWrap">
      <Head>
        <title>Party Details Scroll - CARD</title>
        <meta name="description" content="login" />
        <link rel="icon" href="/igrsfavicon.ico" />
      </Head>
      <div className="mainWrapper">
        <div className="wrapperInner">
          <div className="acknowledgement">
            <button className="active partyDetails">Party Details</button>
            <button className="imaging">Imaging</button>
          </div>
          {/* <div className="pageTableContainer"> */}
            <div className="partyDetails mb-3">
              <div className="partyTitle">
                <h5 className="mb-4">Party Details</h5>
              </div>
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
                                <button  data-bs-toggle="modal"
                                    data-bs-target="#partydetailsscroll"
                                    className="basicDetails edit">
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
                      </Row>
                      <div
            className="modal fade modal-lg"
            id="partydetailsscroll"
            aria-labelledby="partydetailsscroll"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    View Basic Details
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
                    <Col lg={6} md={6} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Presentant Name"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Presentant Name
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={6} md={6} xs={12} className="mb-3">
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

                  <h5 className="mt-4 mb-3">Consider Presentant As</h5>

                  <div className="mb-4">
                    <Form.Check
                      value="Executant"
                      type="radio"
                      aria-label="Executant"
                      label="Executant"
                    />
                  </div>

                  <Row>
                    <Col lg={12} md={12} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="ID Proof"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          ID Proof
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={3} md={6} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="ID Number"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          ID Number
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={6} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Name"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Name
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={2} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Age"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Age
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={4} md={8} xs={12} className="mb-3">
                      <Form.Control
                        className="so"
                        id="floatingInputCustom"
                        type="text"
                        placeholder="S/o"
                      />
                      <Form.Floating className="relationName">
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Relation Name"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Relation Name
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={5} md={5} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Address"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Address
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={3} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="date"
                          placeholder="Presentant Date"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Presentant Date
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="date"
                          placeholder="Stamp Duty Borne by Document"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Stamp Duty Borne by Document
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="No of Sheets"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          No of Sheets
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Registration Type"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Registration Type
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Book Type"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Book Type
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <h5 className="mt-4 mb-3">Nature of Document</h5>

                  <Row>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Major"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Major
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Minor"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Minor
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="No of Schedules"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          No of Schedules
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>

              </div>
            </div>
          </div>
  );
};

export default partyDetailsScroll;
