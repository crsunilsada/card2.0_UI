import { Col, Row, Form } from "react-bootstrap"
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Stepper from "../components/Stepper";
const DigitalSign = () => {
  return (
    <><div><Stepper showReason1={true} /></div>
      <Stepper showReason={false} />
      <div className="pageMainWrap innerpage">
        <Head>
          <title>Digital Sign - CARD</title>
          <meta name="description" content="login" />
          <link rel="icon" href="/igrsfavicon.ico" />
        </Head>
        <div className="mainWrapper">
          <div className="wrapperInner">
            <div className="acknowledgement">
              <button className="partyDetails">Scanning</button>
              <button className="active imaging">Digital Sign</button>
            </div>
            <div className="pageTableContainer">
              <Row className="pt-7 order_passing ">
                <Row>
                  <Col lg={10} md={10} sm={12}></Col>
                  <Col lg={2} md={2} sm={12}>
                    <h4>Device Mantra</h4></Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={3} md={3} xs={3}></Col>
                  <Col lg={3} md={3} xs={3}>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={3} md={3} xs={3}></Col>
                  <Col lg={3} md={3} xs={3}>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} md={3} sm={12}></Col>
                  <Col lg={3} md={3} sm={12} className="mb-4">
                    <Row>
                      <div className="mb-4 m-0 p-0">
                        <p className="digitalSignHeader">SRO Name</p>
                      </div>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} md={3} sm={12}></Col>
                  <Col lg={3} md={3} sm={12} className="pb-5">
                    <Form.Floating>
                      <Form.Select id="designation" aria-label="Default select example my_option">
                        <option value="0">Please Select</option>
                        <option value="10">Chairman</option>
                        <option value="20">AP Registrar Head</option>
                        <option value="30">Document Writer</option>
                      </Form.Select>
                      <Form.Label for="designation">
                        Designation
                      </Form.Label>
                    </Form.Floating>
                  </Col>
                  <Col lg={1} md={1} sm={12}></Col>
                  <Col lg={1} md={2} sm={12}>
                    <div className="pageNextBtn p-0">
                      <Link href={"/ScanningUpload"}>
                        <button className="bluebuttonclass">Submit</button>
                      </Link>
                    </div>
                  </Col>
                </Row>
                <Col lg={1} md={1} sm={12} ></Col>
              </Row>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};
export default DigitalSign;
