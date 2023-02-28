import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Container, Row, Col, Table, Tab, Nav, Form } from "react-bootstrap";

const ScanningDocument = () => {
  return (
    <div className="pageMainWrap innerpage">
      <Head>
        <title>Assigning - CARD</title>
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
                    placeholder="SRO"
                  />
                  <Form.Label htmlFor="floatingInputCustom">SRO</Form.Label>
                </Form.Floating>
              </Col>

              <Col lg={3} md={4} xs={12} className="mb-3">
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Book No"
                  />
                  <Form.Label htmlFor="floatingInputCustom">Book No</Form.Label>
                </Form.Floating>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col lg={3} md={3} xs={12} className="mb-3">
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="R Year"
                  />
                  <Form.Label htmlFor="floatingInputCustom">R Year</Form.Label>
                </Form.Floating>
              </Col>

              <Col lg={3} md={4} xs={12} className="mb-3">
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="R Doc No"
                  />
                  <Form.Label htmlFor="floatingInputCustom">
                    R Doc No
                  </Form.Label>
                </Form.Floating>
              </Col>

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
            </Row>

            <div className="wrapperInner">
              <h4>Scanned Pages</h4>

              <Row>
                <Col  lg={6} md={6} xs={12} className="mb-3 ">
                  <Row className="mb-4">
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/image1.svg"
                      />
                    </Col>

                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/image2.svg"
                      />
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/image3.svg"
                      />
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/image4.svg"
                      />
                    </Col>

                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/image5.svg"
                      />
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/image6.svg"
                      />
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/image7.svg"
                      />
                    </Col>

                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/image8.svg"
                      />
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/image9.svg"
                      />
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/image10.svg"
                      />
                    </Col>

                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/image11.svg"
                      />
                    </Col>
                  </Row>
                </Col>

                <Col lg={6} md={6} xs={12} className="mb-3">

                <Image
                        width={653}
                        height={879}
                        src="/images/image12.svg"
                      />
                </Col>
              </Row>

              <Row>
                <Col  lg={8} md={8} xs={12} className="mb-3 ">
                </Col>

                <Col  lg={4} md={4} xs={12} className="mb-3 ">

                <Row className="mb-4">
                    <Col lg={6} md={6} xs={12} >
                    <button type="button" className="whitebuttonclass">Rescan this page</button>
                    </Col>

                    <Col lg={3} md={3} xs={12} >
                    <button type="button" className="whitebuttonclass">Reject</button>

                    </Col>
                    <Col lg={3} md={3} xs={12} >
                    <button type="button" className="bluebuttonclass">Save</button>

                    </Col>
                  </Row>



                </Col>


              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanningDocument;
