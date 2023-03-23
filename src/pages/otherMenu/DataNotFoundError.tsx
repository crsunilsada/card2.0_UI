import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from "next/image";

const DataNotFoundError = () => {
    return (
        <div>
            <div className="pageMainWrap innerpage">
                <div className="mainWrapper">
                    <div className="otherMenuwrapperInner1">
                        <div className="acknowledgement">
                            <h4>Aadhar Verification</h4>
                        </div>
                        <Container>

                            <div className='text-center my-5'>

                                <Image width={500} height={300} src="/images/DataNotFound.svg" />
                                <h1 className='error-name'>Data Not Found</h1>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataNotFoundError