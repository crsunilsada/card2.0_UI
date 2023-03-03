import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Table, Tab, Nav, Form } from "react-bootstrap";
import Stepper from '../components/Stepper'
const imagingExecutant = () => {
  const ExecutantData = [
    {
      executantId: "Executant - 999-1",
      name: "Raghav Dayal",
      photo: "/images/executant-img.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      esignSignature: "/images/executant-signature.svg",
      capture: "Re-capture",
    },
    {
      executantId: "Executant - 999-1",
      name: "Raghav Dayal",
      photo: "/images/executant-img.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      esignSignature: "/images/executant-signature.svg",
      capture: "Re-capture",
    },
  ];

  const ClaimantData = [
    {
      executantId: "Executant - 999-1",
      name: "Raghav Dayal",
      photo: "/images/executant-img.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      esignSignature: "/images/executant-signature.svg",
      capture: "Re-capture",
    },
    {
      executantId: "Executant - 999-1",
      name: "Raghav Dayal",
      photo: "/images/executant-img.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      esignSignature: "/images/executant-signature.svg",
      capture: "Re-capture",
    },
  ];

  return (
    <><Stepper /><div className="pageMainWrap innerpage">
      <Head>
        <title>Imaging Executant - CARD</title>
        <meta name="description" content="login" />
        <link rel="icon" href="/igrsfavicon.ico" />
      </Head>

      <div className="mainWrapper">
        <div className="wrapperInner">
          <div className="acknowledgement">
            <button className="partyDetails">Party Details</button>
            <button className="active imaging">Imaging</button>
          </div>

          <Container>
            <Row className="justify-content-md-end"><br/>
              <Col lg={8} md={8} xs={12} className="pageTableSearch">
                <form className="md-form">
                  <div className={`input-group md-form form-sm form-1 pl-0`}>
                    <input
                      className={`form-control form-control-sm ml-3 w-75`}
                      type="text"
                      placeholder="Search Here.."
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
                </form>
              </Col>
            </Row>
          </Container>

          <div className="executanttantTable pageTableMain pageTableContainer mt-4">
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
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <span>2</span>Witness
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <br/>  
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Table bordered className="tableData listData tableheadBg">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th className="text-center">Photo</th>
                        <th className="text-center">Thumb impression</th>
                        <th className="text-center">E Sign Signature</th>
                        <th>Capture</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ExecutantData.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              {item.executantId}
                              <h6>{item.name}</h6>
                            </td>
                            <td className="text-center">
                              <div className="fcheckbox">
                                <Form.Check type={"checkbox"} name="photo" />
                              </div>
                              <img src={item.photo} 
                                className="border border-dark"></img>
                                
                            </td>
                            <td className="text-center">
                              <div className="fcheckbox">
                                <Form.Check
                                  type={"checkbox"}
                                  name="thumbImpression" />
                              </div>
                              <img src={item.thumbImpression} />
                            </td>
                            <td className="text-center">
                              <div className="fcheckbox">
                                <Form.Check
                                  type={"checkbox"}
                                  name="esignSignature" />
                              </div>
                              <img src={item.esignSignature} />
                            </td>
                            <td>
                              <button className="capture">
                                {item.capture}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>

                  <div className="pageNextBtn">
                    <button className="next">Next</button>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Table bordered className="tableData listData tableheadBg">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th className="text-center">Photo</th>
                        <th className="text-center">Thumb impression</th>
                        <th className="text-center">E Sign Signature</th>
                        <th>Capture</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ClaimantData.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              {item.executantId}
                              <h6>{item.name}</h6>
                            </td>
                            <td className="text-center">
                              <div className="fcheckbox">
                                <Form.Check type={"checkbox"} name="photo" />
                              </div>
                              <img src={item.photo}  className="border border-dark" />
                            </td>
                            <td className="text-center">
                              <div className="fcheckbox">
                                <Form.Check
                                  type={"checkbox"}
                                  name="thumbImpression" />
                              </div>
                              <img src={item.thumbImpression} />
                            </td>
                            <td className="text-center">
                              <div className="fcheckbox">
                                <Form.Check
                                  type={"checkbox"}
                                  name="esignSignature" />
                              </div>
                              <img src={item.esignSignature} />
                            </td>
                            <td>
                              <button className="capture">
                                {item.capture}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>

                  <div className="pageNextBtn">
                    <button className="next">Next</button>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="witnessList witness1">
                    <h5 className="mb-4">Witness 1</h5>
                    <Row>
                      <Col lg={9} md={8} xs={12} className="mb-3">
                        <Row>
                          <Col lg={6} md={6} xs={12} className="mb-3">
                            <Form.Floating>
                              <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="ID Proof" />
                              <Form.Label htmlFor="floatingInputCustom">
                                ID Proof
                              </Form.Label>
                            </Form.Floating>
                          </Col>

                          <Col lg={6} md={6} xs={12} className="mb-3">
                            <Form.Floating>
                              <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="ID Number" />
                              <Form.Label htmlFor="floatingInputCustom">
                                ID Number
                              </Form.Label>
                            </Form.Floating>
                          </Col>
                        </Row>

                        <Row>
                          <Col lg={6} md={6} xs={12} className="mb-3">
                            <Form.Floating>
                              <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Name" />
                              <Form.Label htmlFor="floatingInputCustom">
                                Name
                              </Form.Label>
                            </Form.Floating>
                          </Col>

                          <Col lg={6} md={6} xs={12} className="mb-3">
                            <Form.Floating>
                              <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Age" />
                              <Form.Label htmlFor="floatingInputCustom">
                                Age
                              </Form.Label>
                            </Form.Floating>
                          </Col>
                        </Row>

                        <Row>
                          <Col lg={12} md={12} xs={12}>
                            <Form.Floating>
                              <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Name" />
                              <Form.Label htmlFor="floatingInputCustom">
                                Name
                              </Form.Label>
                            </Form.Floating>
                          </Col>
                        </Row>
                      </Col>

                      <Col lg={3} md={4} xs={12} className="mb-3">
                        <div className="emptyBox"></div>
                        <div className="confirmbox">
                          <button>Confrirm</button>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="witnessList witness2">
                    <h5 className="mb-4">Witness 2</h5>
                    <Row>
                      <Col lg={9} md={8} xs={12} className="mb-3">
                        <Row>
                          <Col lg={6} md={6} xs={12} className="mb-3">
                            <Form.Floating>
                              <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="ID Proof" />
                              <Form.Label htmlFor="floatingInputCustom">
                                ID Proof
                              </Form.Label>
                            </Form.Floating>
                          </Col>

                          <Col lg={6} md={6} xs={12} className="mb-3">
                            <Form.Floating>
                              <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="ID Number" />
                              <Form.Label htmlFor="floatingInputCustom">
                                ID Number
                              </Form.Label>
                            </Form.Floating>
                          </Col>
                        </Row>

                        <Row>
                          <Col lg={6} md={6} xs={12} className="mb-3">
                            <Form.Floating>
                              <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Name" />
                              <Form.Label htmlFor="floatingInputCustom">
                                Name
                              </Form.Label>
                            </Form.Floating>
                          </Col>

                          <Col lg={6} md={6} xs={12} className="mb-3">
                            <Form.Floating>
                              <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Age" />
                              <Form.Label htmlFor="floatingInputCustom">
                                Age
                              </Form.Label>
                            </Form.Floating>
                          </Col>
                        </Row>

                        <Row>
                          <Col lg={12} md={12} xs={12}>
                            <Form.Floating>
                              <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Name" />
                              <Form.Label htmlFor="floatingInputCustom">
                                Name
                              </Form.Label>
                            </Form.Floating>
                          </Col>
                        </Row>
                      </Col>

                      <Col lg={3} md={4} xs={12} className="mb-3">
                        <div className="emptyBox"></div>
                        <div className="confirmbox">
                          <button>Confrirm</button>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="pageNextBtn">
                    <button className="clear">Clear</button>
                    <Link href={"/AssigningVerification"}>
                    <button className="next">Next</button>
                    </Link>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default imagingExecutant;
