import Image from "next/image";
import { Button, Col, Row, Form, FormControl, ListGroup } from "react-bootstrap";
import LoginBG from '../../../public/images/Login1-BG.png';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import Head from "next/head";
import { Alert } from "react-bootstrap";
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Alert!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex align-items-center flex-column">
                <AiOutlineCloseCircle size={35} color={"red"} />
                <p className="mt-2 text-center">
                    You are trying to access the application from an unauthorized IP Address
                </p>
            </Modal.Body>
        </Modal>
    );
}
const LoginPage = () => {
    const [display, setDisplay] = useState(false);
    const [selectedOption, setSelectedOption] = useState("option4");
    useEffect(() => {
        if (display) {
            setTimeout(() => {
                setDisplay(false);
            }, 1000);
        }
    }, [display]);
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        };
    const [modalShow, setModalShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchEmp, setSearchEmp] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [showSuggestionsEmp, setShowSuggestionsEmp] = useState(false);
    const suggestions1 = ['KRISHNA', 'GUNTUR', 'VIZAG', 'VIJAYAWADA', 'WEST GODAVARI'];
    const suggestions2 = ['5233', '4562', '3453', '2343', '1234'];
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        setShowSuggestions(true);
    };
    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setShowSuggestions(false);
    };
    const handleInputChangeEmp = (event) => {
        setSearchEmp(event.target.value);
        setShowSuggestionsEmp(true);
    };
    const handleSuggestionClickEmp = (suggestion) => {
        setSearchEmp(suggestion);
        setShowSuggestionsEmp(false);
    };
    return (
        <div className="pageMainWrap innerpage">
            <Head>
                <title>Login - CARD</title>
                <meta name="description" content="login" />
                <link rel="icon" href="/igrsfavicon.ico" />
            </Head>
	                {/* <div style={{height: '72px'}}></div> */}
            {/* <div className="m-5"> */}
                <div className="LoginMargin">
                    <div className="LoginPage">
                        <Row className='Login-rightGrd'>
                            <Col lg={7} md={7} xs={7}>
                                <Image src={LoginBG} alt="login-BG" height="732px"/>
                            </Col>
                            <Col lg={5} md={5} xs={5}>
                            {display ? (<Alert variant="success" className="bg-transparent border-0">
                            {/* <img src="/images/loading-icon.svg" />
                            <img src="/images/loading-icon2.svg" /> */}
                                    <div className="d-flex justify-content-center">
                                        <div className="spinner-border " role="status">
                                        </div></div>
                                </Alert>
                                ) : (
                                    <><Row className="my-3">
                                        <Col lg={12} md={12} xs={12}>
                                            <h2>Hi, Welcome Back!</h2>
                                        </Col>
                                    </Row>
                                        <Row className="my-3" style={{ fontSize: "21px" }}>
                                            <Col lg={2} md={2} xs={2}>
                                                {/* <div> */}
                                                <input className="form-check-input" onClick={(e) => { handleOptionChange(e); setDisplay(true); }} checked={selectedOption === "option1"} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />&nbsp;
                                                <label className="form-check-label" >IG</label>
                                                {/* </div> */}
                                            </Col>
                                            <Col lg={2} md={2} xs={2}>
                                                {/* <div> */}
                                                <input className="form-check-input" onClick={(e) => { handleOptionChange(e); setDisplay(true); }} checked={selectedOption === "option2"} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />&nbsp;
                                                <label className="form-check-label" >DIG</label>
                                                {/* </div> */}
                                            </Col>
                                            <Col lg={2} md={2} xs={2}>
                                                {/* <div> */}
                                                <input className="form-check-input" onClick={(e) => { handleOptionChange(e); setDisplay(true); }} checked={selectedOption === "option3"} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />&nbsp;
                                                <label className="form-check-label">DR</label>
                                                {/* </div> */}
                                            </Col>
                                            <Col lg={2} md={2} xs={2}>
                                                {/* <div> */}
                                                <input className="form-check-input"  onClick={(e) => { handleOptionChange(e); setDisplay(true); }} checked={selectedOption === "option4"} type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />&nbsp;
                                                <label className="form-check-label" >SRO</label>
                                                {/* </div> */}
                                            </Col>
                                            <Col lg={3} md={3} xs={3}>
                                                {/* <div> */}
                                                <input className="form-check-input" onClick={(e) => { handleOptionChange(e); setDisplay(true); }} checked={selectedOption === "option5"} type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />&nbsp;
                                                <label className="form-check-label" >Staff</label>
                                                {/* </div> */}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={10} md={10} xs={10}>
                                                <div className="searchBox my-2">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Office/Location"
                                                        value={searchTerm}
                                                        onChange={handleInputChange}
                                                    />
                                                    {showSuggestions && searchTerm.length > 0 && (
                                                        <ul className="list-group">
                                                            {suggestions1
                                                                .filter((suggestion) =>
                                                                    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
                                                                )
                                                                .map((suggestion) => (
                                                                    <li
                                                                        key={suggestion}
                                                                        className="list-group-item"
                                                                        style={{zIndex:"1"}}
                                                                        onClick={() => handleSuggestionClick(suggestion)}
                                                                    >
                                                                        <a>{suggestion}</a>
                                                                    </li>
                                                                ))}
                                                        </ul>
                                                    )}
                                                    <div className="searchBoxIcon">
                                                <Image width={20} height={20}  src='/images/Search-icon.svg' alt="Search" /></div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={10} md={10} xs={10}>
                                                <div className="searchBox my-2">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Employee Id"
                                                        value={searchEmp}
                                                        onChange={handleInputChangeEmp}
                                                    />
                                                    {showSuggestionsEmp && searchEmp.length > 0 && (
                                                        <ul className="list-group">
                                                            {suggestions2
                                                                .filter((suggestion) =>
                                                                    suggestion.toLowerCase().includes(searchEmp.toLowerCase())
                                                                )
                                                                .map((suggestion) => (
                                                                    <li
                                                                        key={suggestion}
                                                                        className="list-group-item"
                                                                        style={{zIndex:"1"}}
                                                                        onClick={() => handleSuggestionClickEmp(suggestion)}
                                                                    >
                                                                        <a>{suggestion}</a>
                                                                    </li>
                                                                ))}
                                                        </ul>
                                                    )}
                                                    <div className="searchBoxIcon">
                                                <Image width={20} height={20} src='/images/Search-icon.svg' alt="Search" /></div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={6} md={6} xs={12}></Col>
                                            <Col lg={4} md={4} xs={12}>
                                                <Link href={"/Login/WelcomePage"}><Button className="loginbuttonclass my-3" onClick={() => setModalShow(true)}>Capture</Button></Link>
                                                <MyVerticallyCenteredModal
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="my-5">
                                            <Col lg={5} md={5} xs={5}></Col>
                                            <Col lg={2} md={2} xs={2}>
                                                <div className="d-flex">
                                                    <Image
                                                        src="/images/Ellipse-55.svg"
                                                        width={18}
                                                        height={18}
                                                        alt="Next-Tab"
                                                    />&nbsp;
                                                    <Image
                                                        src="/images/Ellipse-54.svg"
                                                        width={18}
                                                        height={18}
                                                        alt="Next-Tab"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={5} md={5} xs={5}></Col>
                                        </Row>
                                    </>
                                )}
                            </Col>
                        </Row>
                    </div>
                </div>
            </div >
	    // </div>
    )
}
export default LoginPage;
