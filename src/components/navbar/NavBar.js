import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import './NavBar.css'

const Link = styled.span`
    padding: 15px;
    font-size: 20px;        
    font-weight: 575;
    color: black;
    &:hover {
        color: #F2681E;
    }
`;

const iconStyle = {
    fontSize: "24px",
    "&:hover": {
        color: "white"
    }
};

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="nav-style" variant="dark" style={{backgroundColor:"#728290"}}>  
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" style={iconStyle} />
            <Navbar.Collapse id="responsive-navbar-nav" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px"           
            }}>
                <Nav>
                    <Nav.Link href="/"><Link>Home</Link></Nav.Link>
                    <Nav.Link href="/switches"><Link>Switches</Link></Nav.Link>                    
                    <Nav.Link href="/mods"><Link>Modifications</Link></Nav.Link>
                    <NavDropdown title={<span className="dropdown-style">Pre-Builts</span>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/price/affordable" style={{fontSize:"16px"}}>Affordable</NavDropdown.Item>
                        <NavDropdown.Item href="/price/midrange" style={{fontSize:"16px"}}>Mid Range</NavDropdown.Item>
                        <NavDropdown.Item href="/price/expensive" style={{fontSize:"16px"}}>Expensive</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}