import { Container, Col, Row, Form, Button, Table } from "react-bootstrap"
import Head from "next/head";
import Stepper from '../components/Stepper'
const documentHandover = () => {
    return (
        <><Stepper /><div className="pageMainWrap innerpage">
                <Head>
                    <title>Document Handover - CARD</title>
                    <meta name="description" content="login" />
                    <link rel="icon" href="/igrsfavicon.ico" />
                </Head>
                <div style={{ width: "100%" }}>
                    <div className="mainWrapper">
                        <div className="wrapperInner pageTableMain">
                        <div className="pageTableContainer">
                            <div className="acknowledgement">
                                <button className="active partyDetails">Document Handover</button>
                            </div>
                            <div>
                                <Row>
                                    <Col lg={1} md={1} xs={12} className="mb-3"></Col>
                                    <Col lg={6} md={6} xs={12}>
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="dropdown"
                                                placeholder="Doc No" />
                                            <label htmlFor="floatingInputCustom">
                                                Doc No
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={1} md={1} xs={12} className="mb-3">
                                        <input className="checkbox-over" type="button" value="✓ " style={{ color: "white" }} />
                                    </Col>
                                    <Col>
                                        <input className="checkbox-over" type="button" value="Clear " style={{ color: "white" }} />
                                    </Col>
                                </Row>
                                <hr></hr>
                                <Row>
                                    <Col lg={1} md={1} xs={12} className="mb-3"></Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Book No" />
                                            <label htmlFor="floatingInputCustom">
                                                Book No
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="CS No" />
                                            <label htmlFor="floatingInputCustom">
                                                CS No
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Ack No." />
                                            <label htmlFor="floatingInputCustom">
                                                Ack No.
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Nominee Name" />
                                            <label htmlFor="floatingInputCustom">
                                                Nominee Name
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Regular No" />
                                            <label htmlFor="floatingInputCustom">
                                                Regular No
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                </Row>
                                <hr></hr>
                                <Row> 
				   <Col lg={1} md={1} xs={12}></Col>
                    <p className="text-color" color="red">
		                          Nominee Details
                    </p>
                  </Row>
                  <Row>
                    <Col lg={1} md={1} xs={12}></Col>
                    <p className="Nonimeedetails-over">Nominee Details</p>
                  </Row>
                  {/* <Row>
                    <Col lg={1} md={1} xs={12} className="mb-3"></Col>
                    <Col lg={3} md={3} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="ID Type"
                        />
                        <label htmlFor="floatingInputCustom">ID Type</label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={3} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="ID Number"
                        />
                        <label htmlFor="floatingInputCustom">ID Number</label>
                      </Form.Floating>
                    </Col>
                    <Col lg={2} md={2} xs={12} className="mb-3"></Col>
                    <Col lg={3} md={3} xs={12} className="mb-3"></Col>
                  </Row>
                  <Row>
                    <Col lg={1} md={1} xs={12} className="mb-3"></Col>
                    <Col lg={6} md={6} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Name"
                        />
                        <label htmlFor="floatingInputCustom">Name</label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={3} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Age"
                        />
                        <label htmlFor="floatingInputCustom">Age</label>
                      </Form.Floating>
                    </Col>
                    <Col lg={2} md={2} xs={12} className="mb-3"></Col>
                  </Row>
                  <Row>
                    <Col lg={1} md={1} xs={12} className="mb-3"></Col>
                    <Col lg={6} md={6} xs={12} className="mb-3">
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
                    <Col lg={3} md={3} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Phone Number"
                        />
                        <label htmlFor="floatingInputCustom">
                          Phone Number
                        </label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={3} xs={12} className="mb-3"></Col>
                  </Row> */}
                   <Row>
                    <Col lg={1} md={1} xs={12} className="mb-3"></Col>
                    <Col lg={6} md={6} xs={12}>
                      <Row>
                        <Col lg={4} md={4} xs={12} className="mb-3">
                          <Form.Floating>
                            <Form.Control
                              id="floatingInputCustom"
                              type="text"
                              placeholder="ID Type"
                            />
                            <Form.Label htmlFor="floatingInputCustom">
                              ID Type
                            </Form.Label>
                          </Form.Floating>
                        </Col>
                        <Col lg={4} md={4} xs={12} className="mb-3">
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
                      
                      </Row>
                      <Row>
                        <Col lg={8} md={8} xs={12} className="mb-3">
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
                        <Col lg={4} md={4} xs={12} className="mb-3">
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
                      </Row>
                      
                      <Row>
                        <Col lg={8} md={4} xs={12} className="mb-3">
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

                        <Col lg={4} md={4} xs={12} className="mb-3">
                          <Form.Floating>
                            <Form.Control
                              id="floatingInputCustom"
                              type="text"
                              placeholder="Phone Number"
                            />
                            <Form.Label htmlFor="floatingInputCustom">
                              Phone Number
                            </Form.Label>
                          </Form.Floating>
                        </Col>
                      </Row>
                    </Col>

                    <Col lg={3} md={3} xs={12} className="mb-3">
                      <div className="witness-image-card">
                        <div className="witness-image-box"></div>
                      </div>
                    </Col>
                    <Col lg={2} md={2} xs={12} className="mb-3"></Col>
                  </Row>
                  <hr></hr>
                  <Row>
                    <Col lg={1} md={1} xs={12} className="mb-3"></Col>

                    <p className="text-color">Nominee Thumb Capture</p>
                  </Row>
                  <Row>
                    <Col lg={1} md={1} xs={12} className="mb-3"></Col>
                    <Col lg={8} md={8} xs={12} className="mb-3">
                    <div className="table-responsive">

                  <table className="tableData listData tableheadBg table">
                    <thead>
                      <tr>
                        <th className="text-center">Name</th>
                        <th className="text-center">Thumb impression</th>
                        <th className="text-center">Capture</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sanjay</td>
                        <td className="text-center">
                          <div className="fcheckbox">
                            <Form.Check
                              type={"checkbox"}
                              name="thumbImpression"
                            />
                          </div>
                          <img  height={100} width={100}src={"/images/executant-thumb-impression.svg"} />
                        </td>
                        <td>
                          <button className="capture text-center">Capture</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6} md={6} xs={12} className="mb-3"></Col>
                    <Col lg={2} md={2} xs={12} className="mb-3"></Col>
                    <Col lg={4} md={4} xs={4} className="mb-3">
                      <div className="pageNextBtn">
                      <button className="bluebuttonclass">Save</button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default documentHandover;
