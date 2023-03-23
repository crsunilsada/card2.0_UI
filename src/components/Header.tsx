import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/components/header.module.scss";
import { Navbar, NavDropdown, Container, Col, Row, Nav, Dropdown } from "react-bootstrap";
import banner from 'images/Header1.png'
import Link from "next/link";
const Header = () => {
  const router = useRouter();
  let headerimage = {};
  let headerclassname = {};
  let loginheaderclass = {};
  let pagesNav = '';
  if (router.pathname === '/' || router.pathname === '/Dashboard' ) {
    headerimage = '/images/Login.jpg';
    headerclassname = 'mainheader-space';
  }
  else if (router.pathname === '/Login/LoginPage' || router.pathname === '/Login/LoginOtp' || router.pathname === '/Login/WelcomePage' ){
    headerimage = '/images/Login.jpg';
    headerclassname = 'loginheaderspace';
    loginheaderclass = 'headernone';
  }
   else {
    headerimage = '/images/Landingandpde.png';
    headerclassname = 'header-space';
  }
  if(router.pathname === '/Login/LoginPage' || router.pathname === '/Login/LoginOtp' || router.pathname === '/Login/WelcomePage'){
    pagesNav = 'loginPage'
  }
  return (
    <><div className={`mainHeader ${headerclassname}${pagesNav}`}><div className={`fixed-top ${headerclassname}`}><img src={headerimage} width="100%"></img><header className={styles.header_body}>
      <Navbar className={`navigation bg-primary ${loginheaderclass}`} bg="light" expand="lg">
        <Container className="headerNavContainer">
          <div className="header-main-nav">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="headerNavList navbar-nav">
                <Nav.Link
                  className={router.pathname == "/" ? "active homeMenu" : "homeMenu"}
                  href="/"
                >
                  <Image width={30} height={25} src="/images/Home.svg" />
                </Nav.Link>
                {/* <Nav.Link
                  className={router.pathname == "/registration" ? "active" : "active"}
                  href="/registration"
                >
                  REGISTRATION
                </Nav.Link> */}
                <nav style={{height:"50px"}}>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Registration </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle">CARD - Manual Entry</a></li>
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/admissionofExecution">CARD - PDE</a>
                            {/* <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">CARD - Manual Entry</a></li>
                              <li><a className="dropdown-item" href="/admissionofExecution">CARD - PDE</a></li>
                            </ul> */}
                          </li>
                          {/* <li><a className="dropdown-item" href="#">View Pahani</a></li>
                          <li><a className="dropdown-item" href="#">View CDMA</a></li>
                          <li><a className="dropdown-item" href="#">Verify Aadhaar</a></li>
                          <li><a className="dropdown-item" href="#">E-KYC</a></li> */}
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SRO </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle">CARD - Manual Entry</a></li>
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/pdeScrutinyList">CARD - PDE</a>
                            {/* <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">CARD - Manual Entry</a></li>
                              <li><a className="dropdown-item" href="/pdeScrutinyList">CARD - PDE</a></li>
                            </ul> */}
                          </li>
                          <li><a className="dropdown-item" href="/otherMenu/SRO">SRO For The Day</a></li>
                          <li><a className="dropdown-item" href="/otherMenu/SroEsign">SRO Esign</a></li>
                          {/* <li><a className="dropdown-item" href="#">Grant Permission</a></li> */}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className="d-flex float-end align-items-center " >
          <Image className="mr-5" width={30} height={25} src="/images/Notification Icon.svg" />&nbsp;&nbsp;
          <Image ml-5 width={30} height={25} src="/images/profile-icon.svg" />
          <Dropdown>
            <Dropdown.Toggle  id=""  variant="secondary" style={{ backgroundColor: '#274C77', border:"none" }}>
              Welcome, Praveen
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {/* <Dropdown.Item >View Profile</Dropdown.Item> */}
              <Dropdown.Item ><Link href={"/Login/LoginPage"}>Logout</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>
        </Container>
      </Navbar>
    </header>
    </div>
      <div className={`header-space ${loginheaderclass}`}></div>
      </div></>
  );
};
export default Header;
