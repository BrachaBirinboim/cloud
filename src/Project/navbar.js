import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutComponent from "./aboutComponent";
import logo_a from "./pictures/logo_a.png"
import logo_b from "./pictures/logo_b.png"

import Shop from "./shop"
import CartDetails from "./cartDetails";
import GoToPayment from "./goToPayment";
import bbb from "./pictures/bbb.png";
import good from "./pictures/good.png"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';

// import NavDropdown from 'react-bootstrap/NavDropdown';



export default function Navbar() {
    return (
        <>
         

            <center>
                <img id="logo" src={bbb}></img>
                <br></br>
                <br></br>

            {/* <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="/aboutComponent">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/shop">Home</Nav.Link>
                                {/* <Nav.Link href="#link">Link</Nav.Link> 
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar> */}


            <button type="button" class="btn btn-outline-info"><Link to="/aboutComponent">אודות</Link></button>

            <button  type="button" class="btn btn-outline-info"><Link to="/shop">חנות</Link></button>

            <button type="button" class="btn btn-outline-info"><Link to="/cartDetails">עגלה</Link></button>
            <br></br>
                <br></br>
            <Routes>
                <Route path="/shop" element={<Shop></Shop>} />
                <Route path="/cartDetails" element={<CartDetails></CartDetails>} />
                <Route path="/aboutComponent" element={<AboutComponent></AboutComponent>} />
                <Route path="/goToPayment" element={<GoToPayment></GoToPayment>} />
                {/* <Route path="/about" element={<About></About>} /> */}
            </Routes>
            <footer><img id="ftr" src={good}></img></footer>
            </center>
        </>
    )
}
