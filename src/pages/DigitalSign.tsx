import { Container, Col, Row, Form, Button } from "react-bootstrap"
import React from "react";
import Head from "next/head";
const DigitalSign = () => {
  return (
    <>
      <div className="pageMainWrap">
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
              <Form.Group>
                <select className="" name="Designation" >
                  <option value="">Designation</option>
                  <option value="10">Chairman</option>
                  <option value="20">AP Registrar Head</option>
                  <option value="30">Document Writer</option>
                </select>
              </Form.Group>
            </div>
            <br></br>
            <div  >
              <button className="bluebuttonclass">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};
export default DigitalSign;

