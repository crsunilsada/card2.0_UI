import React from 'react'
import Head from 'next/head';
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap';
import Stepper from '../components/Stepper'
const CropSign = () => {
  return (
    <><div><Stepper showReason1={true} /></div>
    <Stepper showReason={false} />
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
                      <div className='d-flex justify-content-center align-items-center flex-column'>
                          <Row className="justify-content-md-center">
                               <Col>
                                    <div className='my-5 crop-image-text mx-auto'>
                                        <Image
                                            width={23}
                                            height={23}
                                            src="/images/Crop.svg"
                                            alt='picture'
                                        /> &nbsp;
                                        <u><strong>CROP THE BELOW IMAGE AND PROCEED</strong></u></div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='sign'>
                                        <div className="my-5 py-2 px-1">
                                            <Image
                                                src={"/images/sign.svg"}
                                                alt="Picture of the person"
                                                width={129}
                                                height={59}
                                            /></div>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className='pageNextBtn d-flex'>
                                        <Button className="btn btn-light clear m-2">Retake</Button>
                                        <Button className='next btn btn-light m-2'>Done</Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}

export default CropSign
