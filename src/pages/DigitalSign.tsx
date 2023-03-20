import { Container, Col, Row, Form, Button } from "react-bootstrap"
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
            <div className="pageTableContainer mt-3">
              <Row>
                <Col lg={10} md={10} xs={10}></Col>
                <Col lg={2} md={2} xs={2}>
                <h4 >Device Mantra</h4>
                </Col>
              </Row>
	      <Row className="mt-3">
                <Col lg={3} md={3} xs={3}></Col>
                <Col lg={3} md={3} xs={3}>
                
                </Col>
              </Row>
              <Row>
                <Col lg={3} md={3} xs={3}></Col>
                <Col lg={3} md={3} xs={3}>
                <h4 >SRO Name</h4>
                </Col>
              </Row>
	      <Row className="mt-3">
                <Col lg={3} md={3} xs={3}></Col>
                <Col lg={3} md={3} xs={3}>
                
                </Col>
              </Row>
              <Row>
                <Col lg={3} md={3} xs={3}></Col>
                <Col lg={3} md={3} xs={3} className="mt-3">
               	 <Form.Select aria-label="Default select example my_option">
                    <option value="">Designation</option>
                    <option value="10">Chairman</option>
                    <option value="20">AP Registrar Head</option>
                    <option value="30">Document Writer</option>
                  </Form.Select>
                </Col>
                <Col lg={1} md={1} xs={1}></Col>
                <Col lg={1} md={1} xs={1} className="pageNextBtn">
                    <Link href={"/ScanningUpload"}>
                      <button className="next">Submit</button>
                    </Link>
                </Col>
              </Row>

            </div>
          </div>
        </div>
      </div>
    </>

  );
};
export default DigitalSign;

