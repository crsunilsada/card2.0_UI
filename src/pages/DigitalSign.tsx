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
            <div className="pageTableContainer">
              <div className="acknowledgement">
                <button className="partyDetails">Scanning</button>
                <button className="active imaging">Digital Sign</button>
              </div>
              <Row className="pt-7 order_passing">
                <Col lg={6} md={6} sm={12} className="mb-4">
                  <div className="text_wrap">
                  <div className="mb-4">
                  <p className="digitalSignHeader">SRO Name</p>
                  </div>
                  <Form.Select aria-label="Default select example my_option">
                    <option value="">Designation</option>
                    <option value="10">Chairman</option>
                    <option value="20">AP Registrar Head</option>
                    <option value="30">Document Writer</option>
                  </Form.Select>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>

                  <div className="heading_session">

                  <div className="mb-2">

                    <h4>Device Mantra</h4>

                  </div>

                  <div className="pageNextBtn">

                    <Link href={"/documentHandover"}>

                    <Col lg={3} md={3} sm={12}>

                      <button className="next">Submit</button>

                      </Col>

                    </Link>

                  </div>

                  </div>

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

