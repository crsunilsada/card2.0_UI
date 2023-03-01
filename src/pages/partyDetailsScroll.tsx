import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Table, Tab, Nav, Form } from "react-bootstrap";
import Stepper from '../components/Stepper'
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
    <><Stepper /><div className="pageMainWrap innerpage">
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
          <div className="pageTableContainer partyDetailsMain">
            <div className="partyDetails">
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
                                      <span>Address</span>Flat 120,
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
                                <button data-bs-toggle="modal" data-bs-target="#partydetailsscroll" className="basicDetails edit">
                                  <img src="/images/edit-icon.svg" /></button>
                                  //popup//
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
                                          Add New Party Details
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
                                        <div>
                                          <Row>
                                            <Col lg={8} md={8} xs={8}>
                                              <Row>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                  <Form.Select aria-label="Default select example">
                                                    <option value="">ID Proof</option>
                                                    <option value="10">Chairman</option>
                                                    <option value="20">AP Registrar Head</option>
                                                    <option value="30">Document Writer</option>
                                                  </Form.Select>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                  <Form.Floating>
                                                    <Form.Control
                                                      id="floatingInputCustom"
                                                      type="text"
                                                      placeholder="ID Number"
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                      ID Number
                                                    </label>
                                                  </Form.Floating>
                                                </Col>
                                              </Row>
                                              <Row>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                  <Form.Floating>
                                                    <Form.Control
                                                      id="floatingInputCustom"
                                                      type="text"
                                                      placeholder="Name"
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                      Name
                                                    </label>
                                                  </Form.Floating>
                                                </Col>
                                                <Col lg={1} md={1} xs={12} className="mb-3">
                                                  <Form.Floating>
                                                    <Form.Control
                                                      id="floatingInputCustom"
                                                      type="text"
                                                      placeholder="Nominee Name"
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                      Age
                                                    </label>
                                                  </Form.Floating>
                                                </Col>
                                                <Col lg={1} md={1} xs={2} className="mb-3">
                                                  <Form.Select aria-label="Default select example" id="floatingInputCustom">
                                                    <option value="">S/o</option>
                                                    <option value="">S/o</option>
                                                    <option value="">D/o</option>
                                                    <option value="">W/o</option>
                                                  </Form.Select>
                                                </Col>
                                                <Col lg={4} md={4} xs={8} className="mb-3">
                                                  <Form.Floating>
                                                    <Form.Control
                                                      id="floatingInputCustom"
                                                      type="text"
                                                      placeholder="RelationName"
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                      Relation Name
                                                    </label>
                                                  </Form.Floating>
                                                </Col>
                                              </Row>
                                              <Row>
                                                <Col lg={12} md={12} xs={12} className="mb-3">
                                                  <Form.Floating>
                                                    <Form.Control
                                                      id="floatingInputCustom"
                                                      type="text"
                                                      placeholder="Phone Number"
                                                      name="phonenumber"
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                      Address
                                                    </label>
                                                  </Form.Floating>
                                                </Col>
                                              </Row>
                                              <Row>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                  <Form.Floating>
                                                    <Form.Control
                                                      id="floatingInputCustom"
                                                      type="text"
                                                      placeholder="Phone Number"
                                                      name="pannumber"
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                      Phone Number
                                                    </label>
                                                  </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                  <Form.Floating>
                                                    <Form.Control
                                                      id="floatingInputCustom"
                                                      type="text"
                                                      placeholder="PAN Card Number"
                                                      name="pancardnumber"
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                      PAN Number/Form 60/61
                                                    </label>
                                                  </Form.Floating>
                                                </Col>
                                              </Row>
                                            </Col>
                                            <Col lg={2} md={2} xs={2}>
                                              <img src="/images/party-executantimg.jpg" alt="Card image" />
                                            </Col>
                                          </Row>
                                        </div>
                                        <Row>
                                          <Col lg={6} md={6} xs={6}>
                                            <div className="form-check assigningcheckboxes">
                                              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                              <label className="form-check-label" htmlFor="defaultCheck1">
                                                Consider this Claimant/Executant as Representative
                                              </label>
                                            </div>
                                          </Col>
                                        </Row>
                                        <Row>
                                          <Col lg={6} md={6} xs={12} className="mb-3">
                                          </Col>
                                          <Col lg={2} md={2} xs={12} className="mb-3">
                                          </Col>
                                          <Col lg={4} md={4} xs={4} className="mb-3">
                                            <div className="pageNextBtn">
                                              <button className="clear">
                                                Clear
                                              </button>
                                              <button className="next">
                                                Done
                                              </button>
                                            </div>
                                          </Col>
                                        </Row>
                                      </div>
                                    </div>
                                  </div>
                                </div>
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
                                      <span>Address</span>Flat 120,
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
                                Executant
                              </h5>
                              <h4 className="cardBtns">
                                <button data-bs-toggle="modal"
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
                                      <span>Address</span>Flat 120,
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
              <div className="pageNextBtn">
                <button className="clear" data-bs-toggle="modal" data-bs-target="#partydetailsscroll">
                  Add New
                </button>
                <button className="next">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default partyDetailsScroll;
