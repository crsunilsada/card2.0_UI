import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/components/header.module.scss";
import { Navbar, NavDropdown, Container, Col, Row, Nav } from "react-bootstrap";

const Header = () => {
  const router = useRouter();
  let headerimage = {};
  let headerclassname = {};
  let loginheaderclass = {};
  let pagesNav = '';

  if (router.pathname === '/' || router.pathname === '/homePage') {
    headerimage = '/images/Landing.png';
    headerclassname = 'mainheader-space';
  }
  else if (router.pathname === '/Login/LoginPage' || router.pathname === '/Login/LoginOtp' || router.pathname === '/Login/WelcomePage'){
    headerimage = '/images/Login.png';
    headerclassname = 'loginheaderspace';
    loginheaderclass = 'headernone';

  }
   else {
    headerimage = '/images/PDE.png';
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
                  <Image width={25} height={20} src="/images/Home.svg" />
                </Nav.Link>
                {/* <Nav.Link
                  className={router.pathname == "/registration" ? "active" : "active"}
                  href="/registration"
                >
                  REGISTRATION

                </Nav.Link> */}


                <nav >
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">


                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Registration </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li className="dropdown-submenu"><a class="dropdown-item dropdown-toggle">Document Registration</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">New Registration</a></li>
                              <li><a className="dropdown-item" href="#">Edit Registration</a></li>

                            </ul>
                          </li>
                          <li><a className="dropdown-item" href="#">View Pahani</a></li>
                          <li><a className="dropdown-item" href="#">View CDMA</a></li>
                          <li><a className="dropdown-item" href="#">Verify Aadhaar</a></li>
                          <li><a className="dropdown-item" href="#">E-KYC</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SRO </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li ><a className="dropdown-item ">Document Registration</a>
                          </li>
                          <li><a className="dropdown-item" href="#">SRO For The Day</a></li>
                          <li><a className="dropdown-item" href="#">Grant Permission</a></li>
                        </ul>
                      </li>

                    </ul>
                  </div>
                </nav>
              </Nav>
            </Navbar.Collapse>
          </div>
          <Image width={25} height={20} src="/images/Notification Icon.svg" />
          {/* <Image width={125} height={30} src="/images/welcome.svg" /><Image width={25} height={10} src="/images/Polygon.svg" /> */}
        </Container>
      </Navbar>
    </header>
    </div>
      <div className={`header-space ${loginheaderclass}`}></div>
      </div></>
  );
};

export default Header;
