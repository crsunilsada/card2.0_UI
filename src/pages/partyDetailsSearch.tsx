import { Container, Col, Row, Form, Button } from "react-bootstrap"
import Head from "next/head";

const partyDetailsSearch = () => {
    return (
        <div className="pageMainWrap innerpage">
            <Head>
                <title>Party Details Search - CARD</title>
                <meta name="description" content="login" />
                <link rel="icon" href="/igrsfavicon.ico" />
            </Head>
            <div className="mainWrapper">
                <div className="wrapperInner">
                <div className="pageTableContainer">
                    <div className="acknowledgement">
                        <button className="active partyDetails">Party Details Search</button>
                    </div>
                    <Row className="searchacknowledge-full-details" >
                        <Col className="searchacknowledge-full-details-head-color"  >
                            Ack Number
                            <div className="acksearchscreen-number-year-csnumber-data">234</div>
                            {/* <div>33</div> */}
                        </Col>
                        <Col className="searchacknowledge-full-details-head-color">
                            {/* Presentant Name */}
                            Ack Year
                            <div className="acksearchscreen-number-year-csnumber-data">2023</div>
                        </Col>
                        <Col className="searchacknowledge-full-details-head-color">
                            CS Number
                            <div className="acksearchscreen-number-year-csnumber-data">123</div>
                        </Col>
                        <Col className="searchacknowledge-full-details-head-color">
                            {/* Exec Date */}
                            Presentant Name
                            <div className="acksearchscreen-number-year-csnumber-data">Rahul Sharma</div>
                        </Col>
                        <Col className="searchacknowledge-full-details-head-color">
                            Presentant Date
                            <div className="acksearchscreen-number-year-csnumber-data">21-09-2019</div>
                        </Col>
                        <Col className="searchacknowledge-full-details-head-color">
                            Nature of Doc.
                            <div className="acksearchscreen-number-year-csnumber-data">Sale - SaleDeed</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} xs={12} className="mb-3">
                            <Form.Floating>
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="date"
                                    placeholder="Stamp Purchase Date"
                                />
                                <Form.Label htmlFor="floatingInputCustom">
                                    Stamp Purchase Date
                                </Form.Label>
                            </Form.Floating>
                        </Col>
                        <Col lg={6} md={6} xs={12} className="mb-3">
                            <Form.Floating>
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="date"
                                    placeholder="Execution Date"
                                />
                                <Form.Label htmlFor="floatingInputCustom">
                                    Execution Date
                                </Form.Label>
                            </Form.Floating>
                        </Col>

                    </Row>
                    <Row>
                        <Col lg={6} md={6} xs={12} className="mb-3">
                            <Form.Select>
                                    <option value="">Presentant Type</option>
                                    <option value="10">Claimant</option>
                                    <option value="20">Executant</option>
                                    <option value="30">Witness</option>
                            </Form.Select>

                        </Col>
                        <Col lg={6} md={6} xs={12} className="mb-3">

                        </Col>
                    </Row>
                    <Row>
                        <Col lg={9} md={9} xs={12} className="mb-3">

                        </Col>
                        <Col lg={3} md={3} xs={12} className="mb-3">
                            <button className="bluebuttonclass">Next</button>
                        </Col>
                    </Row>
                </div>
                </div>
            </div>
        </div>
    );
};
export default partyDetailsSearch;
