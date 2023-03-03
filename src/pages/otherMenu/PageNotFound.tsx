import React from 'react'
import { Container } from 'react-bootstrap'
import Image from "next/image";
export const PageNotFound = () => {
    return (
        <div>
            <div className="pageMainWrap innerpage">
                <div className="mainWrapper">
                    <div className="wrapperInner">
                        <div className="acknowledgement">
                            <h4>Aadhar Verification</h4>
                        </div>
                        <Container>
                            <div className='text-center mt-5 mb-5'>
                                <Image width={500} height={370} src="/images/404erorr.svg" />
                                <h1 className='error-name'>Page Not Found</h1>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageNotFound