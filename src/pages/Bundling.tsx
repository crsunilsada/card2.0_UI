import { Container, Col, Row, Form, Button } from "react-bootstrap"
import Head from "next/head";
import Stepper from '../components/Stepper'
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
const Bundling = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
    <><div><Stepper showReason1={true} /></div>
    <Stepper showReason={false} />
     <div className="pageMainWrap innerpage">

      <Head>

        <title>Digital Sign - CARD</title>

        <meta name="description" content="login" />

        <link rel="icon" href="/igrsfavicon.ico" />

      </Head>

      <div>

        <div className="mainWrapper">

          <div className="wrapperInner">

            <div className="pageTableContainer">

              <div className="acknowledgement">

                <button className="active imaging">Bundling</button>

                <button className=" partyDetails">Digital Sign</button>

              </div>

              <div>

                <Row>

                  <Col lg={3} md={3} xs={12} className="mb-3">

                    <Form.Floating>

                      <Form.Control

                        id="floatingInputCustom"

                        type="text"

                        placeholder="CS Number" />

                      <label htmlFor="floatingInputCustom">

                        CS Number

                      </label>

                    </Form.Floating>

                  </Col>

                  <Col lg={3} md={3} xs={12} className="mb-3">

                    <Form.Floating>

                      <Form.Control

                        id="floatingInputCustom"

                        type="text"

                        placeholder="CS Number" />

                      <label htmlFor="floatingInputCustom">

                        CS Year

                      </label>

                    </Form.Floating>

                  </Col>

                  <Col lg={3} md={3} xs={12} className="mb-3">

                    <Form.Floating>

                      <Form.Control

                        id="floatingInputCustom"

                        type="text"

                        placeholder="CS Number" />

                      <label htmlFor="floatingInputCustom">

                        Ack No.

                      </label>

                    </Form.Floating>

                  </Col>

                </Row>

                <Row>

                  <Col lg={3} md={3} xs={12} className="mb-3">

                    <Form.Floating>

                      <Form.Control

                        id="floatingInputCustom"

                        type="text"

                        placeholder="CS Number" />

                      <label htmlFor="floatingInputCustom">

                        Ack Year

                      </label>

                    </Form.Floating>

                  </Col>

                  <Col lg={3} md={3} xs={12} className="mb-3">

                    <Form.Floating>

                      <Form.Control

                        id="floatingInputCustom"

                        type="text"

                        placeholder="CS Number" />

                      <label htmlFor="floatingInputCustom">

                        Book No

                      </label>

                    </Form.Floating>

                  </Col>

                  <Col lg={3} md={3} xs={12} className="mb-3">

                    <Form.Floating>

                      <Form.Control

                        id="floatingInputCustom"

                        type="text"

                        placeholder="CS Number" />

                      <label htmlFor="floatingInputCustom">

                        Reg Document No.

                      </label>

                    </Form.Floating>

                  </Col>

                </Row>

                <Row>

                  <Col lg={8} md={8} xs={12} className="mb-3">

                  </Col>

                  <Col lg={4} md={4} xs={12} className="pageNextBtn">

                    <Row>

                      <Col lg={6} md={6} xs={6} className="mb-3">

                        <button type="button" className="next p-2" data-bs-toggle="modal" data-bs-target="#Bundling">StartBundling</button>

                      </Col>

                      <Col lg={1} md={1} xs={6}>

                        <button type="button" className="clear"> Clear</button>

                      </Col>

                    </Row>

                  </Col>

                </Row>

                <div>

                  <Container>

                    <div className="modal" id="Bundling" aria-labelledby="alertLabel" aria-hidden="true">

                      <div className="modal-dialog modal-dialog-centered modal-md">

                        <div className="modal-content">

                          <div className="modal-header">

                            <h5 className="modal-title" id="alertLabel">Bundling </h5>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">

                              <Image width={20} height={20} src="/images/popup-close.svg" />

                            </button>

                          </div>

                          <div className="modal-body">

                            <Container className="">

                              <Row className="text-center">

                                <Image src="/images/Load.svg" width={550} height={32} ></Image>

                              </Row>

                              <Row className="text-center ">

                                <Col lg={12} md={12} xs={12}>

                                  <Image width={300} height={300} src="/images/Bundling1.svg" />

                                </Col>

                              </Row>

                              <Row className="text-center ">

                                <Col lg={12} md={12} xs={12}>

                                  <Image width={300} height={300} src="/images/Bundling.svg" />

                                </Col>

                              </Row>

                              <Row className="text-center">

                                <Col lg={12} md={12} xs={12}  className="text-center">

                                  <button type="button" className="digital-sign-btn" aria-disabled="true" >Save</button>

                                </Col>

                              </Row>

                            </Container>

                          </div>

                        </div>

                      </div>

                    </div>

                  </Container>

                </div>

                <div>

                  <Container>

                    <div className="modal" id="Bundling1" aria-labelledby="alertLabel" aria-hidden="true">

                      <div className="modal-dialog modal-dialog-centered modal-md">

                        <div className="modal-content">

                          <div className="modal-header">

                            <h5 className="modal-title" id="alertLabel">Bundling </h5>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">

                              <Image width={20} height={20} src="/images/popup-close.svg" />

                            </button>

                          </div>

                          <div className="modal-body">

                            <Container>

                              <Row className="text-center">

                                <Col lg={12} md={12} xs={12}>

                                  <Image width={300} height={300} src="/images/Bundling1.svg" />

                                </Col>

                              </Row>

                              <Row className="text-center ">

                                <Col lg={12} md={12} xs={12}>

                                  <Image width={300} height={300} src="/images/Bundling.svg" />

                                </Col>

                              </Row>

                              <Row className="text-center">

                                <Col lg={9} md={9} xs={12}>

                                  <button type="button" className="bluebuttonclass" aria-disabled="true" disabled>Save</button>

                                </Col>

                              </Row>

                            </Container>

                          </div>

                        </div>

                      </div>

                    </div>

                  </Container>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div></>

  );

};

export default Bundling;

