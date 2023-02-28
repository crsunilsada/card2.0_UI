import React from 'react'
import Head from 'next/head';
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap';
import Stepper from '../components/Stepper'
const CropSign = () => {
  return (
    <div>
         <div className="pageMainWrap innerpage">
                <Head>
                    <title>Cropimage - CARD</title>
                    <meta name="description" content="login" />
                    <link rel="icon" href="/igrsfavicon.ico" />
                </Head>
                <div className="mainWrapper">
                    <div className="wrapperInner">
                        <div className="acknowledgement">
                            <button className="partyDetails">Party Details</button>
                            <button className="active imaging">Imaging</button>
                        </div>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col lg={7} md={8} xs={12}>
                                    <div className='crop-image-text mx-auto'>
                                        <Image
                                            width={23}
                                            height={23}
                                            src="/images/Crop.svg"
                                        /> &nbsp;
                                        Crop the below image and Proceed</div>
                                </Col>
                            </Row>
                        </Container>
                        <Container className='mt-5'>
                            <Row>
                                <Col>
                                    <div className='sign'>
                                        <div className="mt-5 p-3">
                                        <Image
                                            src={"/images/sign.svg"}
                                            alt="Picture of the person"
                                            width={159}
                                            height={39}
                                        /></div>
                                    </div>
                                    <div className='btn-image d-flex'>
                                        <div ><Button className="btn btn-light whitebuttonclass m-4">Retake</Button></div> &nbsp;&nbsp;
                                       <div ><Button className='bluebuttonclass btn btn-light m-4'>Done</Button></div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CropSign