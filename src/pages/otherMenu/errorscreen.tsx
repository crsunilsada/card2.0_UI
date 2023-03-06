import Head from 'next/head';
import React from 'react'
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap';
import Stepper from '../components/Stepper'
const ErrorScreen = () => {
    return (
        <>
        {/* <Stepper /> */}
        <div>
            <div className="pageMainWrap innerpage">
                <Head>
                    <title>Error Screen - CARD</title>
                    <meta name="description" content="login" />
                    <link rel="icon" href="/igrsfavicon.ico" />
                </Head>
                <div className="mainWrapper">
                    <div className="wrapperInner">
                        <div className="acknowledgement">
                            {/* <button className="partyDetails">Party Details</button> */}
                            <button className="active imaging">Aadhar Verification</button>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <Row>
                                <Col >
                                    <div className='p-1'>
                                        <Image className='crops-image'
                                            src={"/images/interneterror.png"}
                                            alt="Picture of the person"
                                            width={634}
                                            height={322}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="justify-content-center my-5">
                                <Col className='errormessage'>
                                    <div className="my-5 crop-image-text my-auto">
                                        <strong className='h5 fw-bold'>Cannot Connect to a Local Network</strong></div>
                                </Col>                                
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default ErrorScreen