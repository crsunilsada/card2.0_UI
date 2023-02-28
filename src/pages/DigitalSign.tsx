import { Container, Col, Row, Form, Button } from "react-bootstrap"
import React from "react";
import Head from "next/head";
const DigitalSign = () => {
  return (
    <> 
      <div className="pageMainWrap innerpage">
        <Head>
          <title>Digital Sign - CARD</title>
          <meta name="description" content="login" />
          <link rel="icon" href="/igrsfavicon.ico" />
        </Head>
        <div className="mainWrapper">
          <div className="wrapperInner">
            <div className="pageTableContainer">
              <div className="acknowledgement">
                <button className="partyDetails">Scanning</button>
                <button className="active imaging">Digital Sign</button>
              </div>
              <div  >
                <h8 className="devicemantra"> Device Mantra</h8>
              </div>
              <div >
                <p className="digitalSignHeader">
                  SRO Name
                </p>
              </div>
              <br></br>
              <div >
                <Row>
                  <Col lg={6} md={6} xs={12} className="mb-3">

                  </Col>
                  <Col lg={2} md={2} xs={12} className="mb-3">

                  </Col>
                  <Col lg={4} md={4} xs={4} className="mb-3">

                  </Col>
                </Row> <Row>
                  <Col lg={3} md={3} xs={12} className="mb-3">
                    <Form.Select aria-label="Default select example">
                      <option value="">Designation</option>
                      <option value="10">Chairman</option>
                      <option value="20">AP Registrar Head</option>
                      <option value="30">Document Writer</option>
                    </Form.Select>
                  </Col>
                  <Col lg={3} md={3} xs={12} className="mb-3">

                  </Col>
                  <Col lg={6} md={6} xs={12} className="mb-3">

                  </Col>
                </Row>

              </div>
              <br></br>
              <div  >
                <div className="pageNextBtn">
                  <button className="next">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};
export default DigitalSign;

