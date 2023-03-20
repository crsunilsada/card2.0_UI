import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Row, Col, Table, Tab, Nav, Form } from "react-bootstrap";
import Stepper from '../components/Stepper'
import { useRouter } from 'next/router'
import { redirect } from "next/dist/server/api-utils";
const partyDetailsScroll = () => {
  const [activeTab, setActiveTab] = useState('first');
  const handleNextClick = () => {
    if (activeTab === 'first') {
      setActiveTab('second');
    }
  };
  const [selectedOption, setSelectedOption] = useState("S/o");
  const handleOptionClick = (event) => { setSelectedOption(event.target.textContent); };
  useEffect(() => { require("bootstrap/dist/js/bootstrap.bundle.min.js"); }, []);
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
    <><div><Stepper showReason2={true} /></div>
    <Stepper showReason={true} />
    <div className="pageMainWrap innerpage">
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
                <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                  <div className="tabsList">
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <span>4</span>Executant List
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <span>4</span>Claimant List
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <div className="PropertyScrollBar">
                          <Col lg={4} md={4} xs={12} className="mb-3">
                            <div className="card">
                              <div className="cardHeader d-flex align-items-center justify-content-between">
                                <h5>
                                  <span>Executant</span>
                                </h5>
                                <h4 className="cardBtns">
                                  <button type="button" data-bs-toggle="modal" data-bs-target="#partyDetailsScroll">
                                    <img src="/images/edit-icon.svg" />
                                  </button>
                                </h4>
                              </div>
                              <div className="cardBody cardSpaceBetween">
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
                                  <span>Executant</span>
                                </h5>
                                <h4 className="cardBtns">
                                  <button type="button" data-bs-toggle="modal" data-bs-target="#partyDetailsScroll1">
                                    <img src="/images/edit-icon.svg" />
                                  </button>
                                </h4>
                              </div>
                              <div className="cardBody cardSpaceBetween">
                                <Row>
                                  <Col lg={4} md={7} xs={12}>
                                    <img src="/images/krishna.svg" />
                                  </Col>
                                  <Col lg={8} md={7} xs={12}>
                                    <div className="d-flex align-items-center mb-3">
                                      <h6>
                                        <span>Name</span>Krishna Kanth
                                      </h6>
                                      <h6 className="justify-content-end">
                                        <span>Aadhaar No.</span>XXXXXX1243
                                      </h6>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                      <h6>
                                        <span>Rel & Relation</span>S/o Subbarao...
                                      </h6>
                                      <h6 className="justify-content-end">
                                        <span>PAN / form 60/61</span>DBAGK0721B
                                      </h6>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <h6>
                                        <span>Address</span>Flat 10, Krishnanjali Residency...
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
                                  <span>Executant</span>
                                </h5>
                                <h4 className="cardBtns">
                                  <button data-bs-toggle="modal" data-bs-target="#partyDetailsScroll2">
                                    <img src="/images/edit-icon.svg" />
                                  </button>
                                </h4>
                              </div>
                              <div className="cardBody cardSpaceBetween">
                                <Row>
                                  <Col lg={4} md={7} xs={12}>
                                    <img src="/images/dharmendar.svg" />
                                  </Col>
                                  <Col lg={8} md={7} xs={12}>
                                    <div className="d-flex align-items-center mb-3">
                                      <h6>
                                        <span>Name</span>Dharmendra
                                      </h6>
                                      <h6 className="justify-content-end">
                                        <span>Aadhaar No.</span>XXXXXX7623
                                      </h6>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                      <h6>
                                        <span>Rel & Relation</span>S/o Parthasar...
                                      </h6>
                                      <h6 className="justify-content-end">
                                        <span>PAN / form 60/61</span>ABCKG0123A
                                      </h6>
                                    </div>
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
                          <Col lg={4} md={4} xs={12} className="mb-3">
                            <div className="card">
                              <div className="cardHeader d-flex align-items-center justify-content-between">
                                <h5>
                                  <span>Executant</span>
                                </h5>
                                <h4 className="cardBtns">
                                  <button data-bs-toggle="modal" data-bs-target="#partyDetailsScroll">
                                    <img src="/images/edit-icon.svg" />
                                  </button>
                                </h4>
                              </div>
                              <div className="cardBody cardSpaceBetween">
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
                        </div>
                      </Row>
                      <div className="pageNextBtn">
                        <button onClick={handleNextClick} className="next">
                          Next
                        </button>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                  <Tab.Content>
                    <Tab.Pane eventKey="second">
                      <Row>
                        <div className="PropertyScrollBar">
                          <Col lg={4} md={4} xs={12} className="mb-3">
                            <div className="card">
                              <div className="cardHeader">
                                <h5>
                                  Presentant - <span>Executant</span>
                                </h5>
                              </div>
                              <div className="cardBody cardSpaceBetween">
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
                                  Executant (Raju) - <span>Representative</span>
                                </h5>
                                <h4 className="cardBtns">
                                  <button type="button" data-bs-toggle="modal" data-bs-target="#partyDetailsScroll1">
                                    <img src="/images/edit-icon.svg" />
                                  </button>
                                </h4>
                              </div>
                              <div className="cardBody cardSpaceBetween">
                                <Row>
                                  <Col lg={4} md={7} xs={12}>
                                    <img src="/images/krishna.svg" />
                                  </Col>
                                  <Col lg={8} md={7} xs={12}>
                                    <div className="d-flex align-items-center mb-3">
                                      <h6>
                                        <span>Name</span>Krishna Kanth
                                      </h6>
                                      <h6 className="justify-content-end">
                                        <span>Aadhaar No.</span>XXXXXX1243
                                      </h6>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                      <h6>
                                        <span>Rel & Relation</span>S/o Subbarao...
                                      </h6>
                                      <h6 className="justify-content-end">
                                        <span>PAN / form 60/61</span>DBAGK0721B
                                      </h6>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <h6>
                                        <span>Address</span>Flat 10, Krishnanjali Residency...
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
                                  <button data-bs-toggle="modal" data-bs-target="#partyDetailsScroll2">
                                    <img src="/images/edit-icon.svg" />
                                  </button>
                                </h4>
                              </div>
                              <div className="cardBody cardSpaceBetween">
                                <Row>
                                  <Col lg={4} md={7} xs={12}>
                                    <img src="/images/Dharmendar.svg" />
                                  </Col>
                                  <Col lg={8} md={7} xs={12}>
                                    <div className="d-flex align-items-center mb-3">
                                      <h6>
                                        <span>Name</span>Dharmendra
                                      </h6>
                                      <h6 className="justify-content-end">
                                        <span>Aadhaar No.</span>XXXXXX7689
                                      </h6>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                      <h6>
                                        <span>Rel & Relation</span>S/o Parthasar...
                                      </h6>
                                      <h6 className="justify-content-end">
                                        <span>PAN / form 60/61</span>ABCKG0123A
                                      </h6>
                                    </div>
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
                          <Col lg={4} md={4} xs={12} className="mb-3">
                            <div className="card">
                              <div className="cardHeader d-flex align-items-center justify-content-between">
                                <h5>
                                  <span>Executant</span>
                                </h5>
                                <h4 className="cardBtns">
                                  <button data-bs-toggle="modal" data-bs-target="#partyDetailsScroll">
                                    <img src="/images/edit-icon.svg" />
                                  </button>
                                </h4>
                              </div>
                              <div className="cardBody cardSpaceBetween">
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
                        </div>
                      </Row>
                      <Link href="/Verification">
                      <div className="pageNextBtn">
                        <button className="next"> Save </button>
                      </div>
                      </Link>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="partyDetailsScroll" aria-labelledby="partyDetailsScrollLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="partyDetailsScrollLabel">Edit Party Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <Image width={20} height={20} src="/images/popup-close.svg" />
              </button>
            </div>
            <div className="modal-body">
              <div>
                <Row>
                  <Col lg={9} md={9} xs={89}>
                    <Row>
                      <Col lg={6} md={6} xs={12} className="mb-3">
                        <Form.Select aria-label="Default select example">
                          <option value="10">ID Proof</option>
                          <option value="10">Aadhar card</option>
                          <option value="20">PAN card</option>
                          <option value="30">Voter Id</option>
                        </Form.Select>
                      </Col>
                      <Col lg={6} md={6} xs={12} className="mb-3">
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="ID Number"
                            value="xxxx xxxx 7689"
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
                            value="Sanjay Kumar"
                          />
                          <label htmlFor="floatingInputCustom">
                            Name
                          </label>
                        </Form.Floating>
                      </Col>
                      <Col lg={2} md={2} xs={12} className="mb-3">
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="Age"
                            value="33"
                          />
                          <label htmlFor="floatingInputCustom">
                            Age
                          </label>
                        </Form.Floating>
                      </Col>
                      <Col lg={4} md={4} xs={12} className="mb-3">
                        <div className="input-group">
                          <button className="btn btn-outline-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "#4D4D4D", borderRadius: "12px 0px 0px 12px", borderColor: "#6096BA", backgroundColor: "#F6F9FB" }} >
                            {selectedOption}
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" onClick={handleOptionClick}>S/o</a></li>
                            <li><a className="dropdown-item" onClick={handleOptionClick}>D/o</a></li>
                            <li><a className="dropdown-item" onClick={handleOptionClick}>W/o</a></li>
                          </ul>
                          <Form.Floating>
                            <Form.Control id="floatingInputCustom" type="text" placeholder="Relation Name" value="Krishna..." className="form-control" />
                            <Form.Label htmlFor="floatingInputCustom"> Relation Name </Form.Label>
                          </Form.Floating>
                        </div>
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
                            value="Flat 120, Block C, Anjali Residency.."
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
                            name="phone number"
                            value="+91 632******5"
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
                            value="CBAK0769K"
                          />
                          <label htmlFor="floatingInputCustom">
                            PAN Number/Form 60/61
                          </label>
                        </Form.Floating>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={3} md={3} xs={3}>
                    <div className="partydetails-image-card">
                        <Image height={200} width={260} src="/images/party-executantimg.jpg" alt="Card image" />
                    </div>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col lg={8} md={8} xs={8}>
                  <div className="form-check-checkbox assigningcheckboxes">
                    <input className="form-check-input m-2" type="checkbox" id="defaultCheck1" defaultChecked/>
                    <label className="m-1">
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
                    <button className="next" data-bs-dismiss="modal" aria-label="Close">
                      Done
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="partyDetailsScroll1" aria-labelledby="partyDetailsScrollLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="partyDetailsScrollLabel">Edit Party Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <Image width={20} height={20} src="/images/popup-close.svg" />
              </button>
            </div>
            <div className="modal-body">
              <div>
                <Row>
                  <Col lg={9} md={9} xs={89}>
                    <Row>
                      <Col lg={6} md={6} xs={12} className="mb-3">
                        <Form.Floating>
                          <Form.Select aria-label="Book No" id="floatingInputCustom" placeholder="Book No">
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Select>
                          <Form.Label htmlFor="floatingInputCustom">
                            Id Proof
                          </Form.Label>
                        </Form.Floating>
                      </Col>
                      <Col lg={6} md={6} xs={12} className="mb-3">
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="ID Number"
                            value="xxxx xxxx 1243"
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
                            value="Krishna Kanth"
                          />
                          <label htmlFor="floatingInputCustom">
                            Name
                          </label>
                        </Form.Floating>
                      </Col>
                      <Col lg={2} md={2} xs={12} className="mb-3">
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="Age"
                            value="28"
                          />
                          <label htmlFor="floatingInputCustom">
                            Age
                          </label>
                        </Form.Floating>
                      </Col>
                      <Col lg={4} md={4} xs={12} className="mb-3">
                        <div className="input-group">
                          <button className="btn btn-outline-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "#4D4D4D", borderRadius: "12px 0px 0px 12px", borderColor: "#6096BA", backgroundColor: "#F6F9FB" }} >
                            {selectedOption}
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" onClick={handleOptionClick}>S/o</a></li>
                            <li><a className="dropdown-item" onClick={handleOptionClick}>D/o</a></li>
                            <li><a className="dropdown-item" onClick={handleOptionClick}>W/o</a></li>
                          </ul>
                          <Form.Floating>
                            <Form.Control id="floatingInputCustom" type="text" placeholder="Relation Name" value="Subbarao.." className="form-control" />
                            <Form.Label htmlFor="floatingInputCustom"> Relation Name </Form.Label>
                          </Form.Floating>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} md={12} xs={12} className="mb-3">
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="address"
                            name="address"
                            value="Flat 10, Krishnajali Residency.."
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
                            name="phone number"
                            value="+91 92******24"
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
                            value="DBAGK721B"
                          />
                          <label htmlFor="floatingInputCustom">
                            PAN Number/Form 60/61
                          </label>
                        </Form.Floating>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={3} md={3} xs={3}>
                    <div className="partydetails-image-card">
                      <Image height={220} width={400} src="/images/krishna.svg" alt="Card image" />
                    </div>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col lg={8} md={8} xs={8}>
                  <div className="form-check-checkbox assigningcheckboxes">
                    <input className="form-check-input m-2" type="checkbox" id="defaultCheck1" defaultChecked/>
                    <label className="m-1">
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
                    <button className="next" data-bs-dismiss="modal" aria-label="Close">
                      Done
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="partyDetailsScroll2" aria-labelledby="partyDetailsScrollLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="partyDetailsScrollLabel">Edit Party Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <Image width={20} height={20} src="/images/popup-close.svg" />
              </button>
            </div>
            <div className="modal-body">
              <div>
                <Row>
                  <Col lg={9} md={9} xs={89}>
                    <Row>
                      <Col lg={6} md={6} xs={12} className="mb-3">
                        <Form.Select aria-label="Default select example">
                          <option value="10">ID Proof</option>
                          <option value="10">Aadhar card</option>
                          <option value="20">PAN card</option>
                          <option value="30">Voter Id</option>
                        </Form.Select>
                      </Col>
                      <Col lg={6} md={6} xs={12} className="mb-3">
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="ID Number"
                            value="xxxx xxxx 7623"
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
                            value="Dharmendra"
                          />
                          <label htmlFor="floatingInputCustom">
                            Name
                          </label>
                        </Form.Floating>
                      </Col>
                      <Col lg={2} md={2} xs={12} className="mb-3">
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="Age"
                            value="39"
                          />
                          <label htmlFor="floatingInputCustom">
                            Age
                          </label>
                        </Form.Floating>
                      </Col>
                      <Col lg={4} md={4} xs={12} className="mb-3">
                        <div className="input-group">
                          <button className="btn btn-outline-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "#4D4D4D", borderRadius: "12px 0px 0px 12px", borderColor: "#6096BA", backgroundColor: "#F6F9FB" }} >
                            {selectedOption}
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" onClick={handleOptionClick}>S/o</a></li>
                            <li><a className="dropdown-item" onClick={handleOptionClick}>D/o</a></li>
                            <li><a className="dropdown-item" onClick={handleOptionClick}>W/o</a></li>
                          </ul>
                          <Form.Floating>
                            <Form.Control id="floatingInputCustom" type="text" placeholder="Relation Name" value="parthasar.." className="form-control" />
                            <Form.Label htmlFor="floatingInputCustom"> Relation Name </Form.Label>
                          </Form.Floating>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} md={12} xs={12} className="mb-3">
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="address"
                            name="address"
                            value="FLat 1A/2, Block A, Sanjan Enclave.."
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
                            name="phone number"
                            value="+91 96*******7"
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
                            value="ABCKG0123A"
                          />
                          <label htmlFor="floatingInputCustom">
                            PAN Number/Form 60/61
                          </label>
                        </Form.Floating>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={3} md={3} xs={3}>
                    <div className="partydetails-image-card">
                      <Image height={200} width={350} src="/images/dharmendra.svg" alt="Card image" />
                      </div>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col lg={8} md={8} xs={8}>
                  <div className="form-check-checkbox assigningcheckboxes">
                    <input className="form-check-input m-2" type="checkbox" id="defaultCheck1" defaultChecked/>
                    <label className="m-1">
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
                    <button className="next" data-bs-dismiss="modal" aria-label="Close">
                      Done
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="partyDetailsScroll" aria-labelledby="partyDetailsScrollLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="partyDetailsScrollLabel">Edit Party Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <Image width={20} height={20} src="/images/popup-close.svg" />
              </button>
            </div>
            <div className="modal-body">
              <div>
                <Row>
                  <Col lg={9} md={9} xs={89}>
                    <Row>
                      <Col lg={6} md={6} xs={12} className="mb-3">
                        <Form.Select aria-label="Default select example">
                          <option value="10">ID Proof</option>
                          <option value="10">Aadhar card</option>
                          <option value="20">PAN card</option>
                          <option value="30">Voter Id</option>
                        </Form.Select>
                      </Col>
                      <Col lg={6} md={6} xs={12} className="mb-3">
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="ID Number"
                            value="xxxx xxxx 9437"
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
                            value="Deepika Basu"
                          />
                          <label htmlFor="floatingInputCustom">
                            Name
                          </label>
                        </Form.Floating>
                      </Col>
                      <Col lg={2} md={2} xs={12} className="mb-3">
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="Age"
                            value="25"
                          />
                          <label htmlFor="floatingInputCustom">
                            Age
                          </label>
                        </Form.Floating>
                      </Col>
                      <Col lg={4} md={4} xs={12} className="mb-3">
                        <div className="input-group">
                          <button className="btn btn-outline-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "#4D4D4D", borderRadius: "12px 0px 0px 12px", borderColor: "#6096BA", backgroundColor: "#F6F9FB" }} >
                            {selectedOption}
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" onClick={handleOptionClick}>S/o</a></li>
                            <li><a className="dropdown-item" onClick={handleOptionClick}>D/o</a></li>
                            <li><a className="dropdown-item" onClick={handleOptionClick}>W/o</a></li>
                          </ul>
                          <Form.Floating>
                            <Form.Control id="floatingInputCustom" type="text" placeholder="Relation Name" value="Narayan.." className="form-control" />
                            <Form.Label htmlFor="floatingInputCustom"> Relation Name </Form.Label>
                          </Form.Floating>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} md={12} xs={12} className="mb-3">
                        <Form.Floating>
                          <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="address"
                            name="address"
                            value="FLat 2A, Block D, Anjali Enclave.."
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
                            name="phone number"
                            value="+91 87*******1"
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
                            value="ABLKG0856B"
                          />
                          <label htmlFor="floatingInputCustom">
                            PAN Number/Form 60/61
                          </label>
                        </Form.Floating>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={3} md={3} xs={3}>
                    <div className="partydetails-image-card">
                      <Image height={200} width={340} src="/images/Deepika Basu.svg" alt="Card image" />
                      </div>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col lg={8} md={8} xs={8}>
                  <div className="form-check-checkbox assigningcheckboxes">
                    <input className="form-check-input m-2" type="checkbox" id="defaultCheck1" defaultChecked/>
                    <label className="m-1">
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
                    <button className="next" data-bs-dismiss="modal" aria-label="Close">
                      Done
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default partyDetailsScroll;
