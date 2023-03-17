import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { Container, Row, Col, Table, Tab, Nav, Form } from "react-bootstrap";
import Stepper from '../components/Stepper'
import Link from "next/link";
const ScanningDocument = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const [display, setDisplay] = React.useState(false);
  const handleDisplay = () => {
    setDisplay(true);
  };
  return (
    <><div><Stepper showReason1={true} /></div>
    <Stepper showReason={false} />
    <div className="pageMainWrap innerpage">
      <Head>
        <title>Scanning Documents - CARD</title>
        <meta name="description" content="login" />
        <link rel="icon" href="/igrsfavicon.ico" />
      </Head>

      <div className="mainWrapper">
        <div className="wrapperInner">
          <div className="acknowledgement">
            <button className="active partyDetails">Scanning</button>
            <button className="imaging">Digital Sign</button>
          </div>

          <div className="pageTableContainer">
            <Row className="mb-4">
              <Col lg={3} md={3} xs={12} className="mb-3">
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="SRO" />
                  <Form.Label htmlFor="floatingInputCustom">SRO</Form.Label>
                </Form.Floating>
              </Col>

              <Col lg={2} md={4} xs={12} className="mb-3">
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Book No" />
                  <Form.Label htmlFor="floatingInputCustom">Book No</Form.Label>
                </Form.Floating>
              </Col>



              <Col lg={2} md={3} xs={12} className="mb-3">
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="R Year" />
                  <Form.Label htmlFor="floatingInputCustom">R Year</Form.Label>
                </Form.Floating>
              </Col>

              <Col lg={3} md={4} xs={12} className="mb-3">
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="R Doc No" />
                  <Form.Label htmlFor="floatingInputCustom">
                    R Doc No
                  </Form.Label>
                </Form.Floating>
              </Col>

              <Col lg={2} md={4} xs={12} className="mb-3">
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
            </Row>
            <div className="boder_down">

              <Row>
                <Col lg={6} md={6} xs={6} className="device_space">
                <h4 className="pt-4">Scanned Pages</h4>
                </Col>
                <Col lg={6} md={6} xs={6} className="pt-3">
                  <div className="form-check-checkbox">
                    <input className="form-check-input m-2" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label " htmlFor="flexCheckDefault">
                      <h2 className="scale">Grey Scale</h2>  </label>
                  </div>
                </Col>
              </Row>
              <Row className="m-4 ">
                <Col lg={5} md={5} xs={12} className="mb-3 document_a">
                  <Row className="mb-4 stable_img">
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc 1.svg"
                      />
                      <Col lg={8} md={8} xs={12} className="text-center">
                        <h6>1</h6>
                      </Col>
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc2.svg"
                      />
                      <Col lg={8} md={8} xs={12} className="text-center">
                        <h6 >2</h6>
                      </Col>
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc3.svg"
                      />
                      <Col lg={8} md={8} xs={12} className="text-center" >
                        <h6 >3</h6>
                      </Col>
                    </Col>
                  </Row>
                  <Row className="mb-4 stable_img">
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc4.svg"
                      />
                      <Col lg={8} md={8} xs={12} className="text-center" >
                        <h6 >4</h6>
                      </Col>
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc 1.svg"
                      />
                      <Col lg={8} md={8} xs={12} className="text-center">
                        <h6 >5</h6>
                      </Col>
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc3.svg"
                      />
                      <Col lg={8} md={8} xs={12} className="text-center">
                        <h6 >6</h6>
                      </Col>
                    </Col>
                  </Row>
                  <Row className="mb-4 stable_img">
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc 1.svg"
                      />
                      <Col lg={8} md={8} xs={12} className="text-center">
                        <h6 >7</h6>
                      </Col>
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc3.svg"
                      />
                      <Col lg={8} md={8} xs={12} className="text-center">
                        <h6 >8</h6>
                      </Col>
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc3.svg"
                      />
                      <Col lg={8} md={8} xs={12} className="text-center" >
                        <h6 >9</h6>
                      </Col>
                    </Col>
                  </Row>
                  <Row className="mb-4 stable_img">
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc4.svg"
                      />
                      <Col lg={8} md={8} xs={12} className="text-center">
                        <h6 >10</h6>
                      </Col>
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc 1.svg"
                      />
                      <Col lg={8} md={8} xs={12} className="text-center">
                        <h6>11</h6>
                      </Col>
                    </Col>
                  </Row>
                </Col>
                <Col>

                </Col>
                <Col lg={6} md={6} xs={12} className="mb-3 document_a">
                  <div className="stage_a">
                  <Image
                    width={725}
                    height={1000}
                    src="/images/stampdoc.svg"
                    onClick={handleDisplay}
                  />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={6} xs={6} className="mb-3">
                </Col >
                <Col lg={6} md={6} xs={6} className="mb-3">
                  <Row className="justyfy_a">

                    <Col lg={1} md={1} xs={12}>

                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-2">
                      <button type="button" className="whitebuttonclass">Rescan this page</button>
                    </Col>
                    <Col lg={3} md={3} xs={12} className="mb-2" >
                      <button type="button" className="whitebuttonclass">Reject</button>

                    </Col>

                    <Col lg={3} md={3} xs={12}>
                      <Link href={"/ScanningUpload"}>
                      {/* data-bs-toggle="modal" data-bs-target="#alert" */}
                        <button className="bluebuttonclass" data-bs-toggle="modal" data-bs-target="#documentscanning">Save</button>
                      </Link>
                    </Col>
                    {/* <div>
                      <Container>
                        <div className="modal" id="alert" aria-labelledby="alertLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered modal-md">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="alertLabel">Alert</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                  <Image width={20} height={20} src="/images/popup-close.svg" />
                                </button>
                              </div>
                              <div className="modal-body">
                                <Container>
                                  <Row className="text-center  ">
                                    <Col lg={12} md={12} xs={12}>
                                      <Image width={40} height={40} src="/images/rejected.svg" />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col className="text-center ">
                                      The page no. 5 you have added  is mismatched.<br />
                                      Please start scanning again.
                                    </Col>
                                  </Row>
                                </Container>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Container>
                    </div> */}
                    <div>
                      <Container>
                        <div className="modal" id="documentscanning" aria-labelledby="alertLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered modal-md">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="alertLabel">Document Scanning</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                  <Image width={20} height={20} src="/images/popup-close.svg" />
                                </button>
                              </div>
                              <div className="modal-body">
                                <Container>
                                  <Row className="text-center  ">
                                    <Col lg={12} md={12} xs={12}>
                                      <Image width={40} height={40} src="/images/Print.svg" />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col className="text-center ">
                                    Scanning Page 02..
                                    </Col>
                                  </Row>
                                </Container>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Container>
                    </div>
                    <Col lg={2} md={2} xs={12}>

                    </Col>
                  </Row>



                </Col>


              </Row>
            </div>
            {/* </div>*/}
          </div>
        </div>
      </div>
    </div></>
  );
};

export default ScanningDocument;
