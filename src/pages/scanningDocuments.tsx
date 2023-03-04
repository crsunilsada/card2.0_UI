import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Container, Row, Col, Table, Tab, Nav, Form } from "react-bootstrap";
import Stepper from '../components/Stepper'
import Link from "next/link";
const ScanningDocument = () => {
  return (
    <><Stepper /><div className="pageMainWrap innerpage">
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

              <Col lg={3} md={4} xs={12} className="mb-3">
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Book No" />
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

              <Col lg={3} md={4} xs={12} className="mb-3">
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

            <div className="wrapperInner">
            <h4 className="p-4">Scanned Pages</h4>

              <Row className="m-4">
                <Col lg={6} md={6} xs={12} className="mb-3">
                  <Row className="mb-4">
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={150}
                        src="/images/doc 1.svg"
                      />
                    </Col>

                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc2.svg"
                      />
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc3.svg"
                      />
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc4.svg"
                      />
                    </Col>

                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={150}
                        src="/images/doc 1.svg"
                      />
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc3.svg"
                      />
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={150}
                        src="/images/doc 1.svg"
                      />
                    </Col>

                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc3.svg"
                      />
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc3.svg"
                      />
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={175}
                        src="/images/doc4.svg"
                      />
                    </Col>

                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Image
                        width={117}
                        height={150}
                        src="/images/doc 1.svg"
                      />
                    </Col>
                  </Row>
                </Col>

                <Col lg={6} md={6} xs={12} className="mb-3">

                <Image
                        width={653}
                        height={850}
                        src="/images/stampdoc.svg"
                      />
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={6} xs={12} className="mb-3 ">
                </Col >
                <Col lg={6} md={6} xs={12} className="mb-3">
                  <Row className="mb-4">
                  <Col lg={2} md={2} xs={12}>

                </Col>
                    <Col lg={3} md={3} xs={12}>
                      <button type="button" className="whitebuttonclass">Rescan this page</button>
                    </Col>
                    <Col lg={3} md={3} xs={12}>
                      <button type="button" className="whitebuttonclass">Reject</button>

                    </Col>
                    <Col lg={3} md={3} xs={12}>
                      <Link href={"/ScanningUpload"}>
                      <button type="button" className="bluebuttonclass">Save</button>
                      </Link>

                    </Col>
                    <Col lg={2} md={2} xs={12}>

                    </Col>
                  </Row>



                </Col>


              </Row>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default ScanningDocument;
