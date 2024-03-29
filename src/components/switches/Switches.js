import React from 'react';
import '../styles.css';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import blue2 from './img/blue/blue2.png';
import blue3 from './img/blue/blue3.png';

import brown1 from './img/brown/brown1.png';
import brown2 from './img/brown/brown2.png';
import brown3 from './img/brown/brown3.png';

const blues = [ blue2, blue3, blue2 ];
const browns = [ brown1, brown2, brown3 ];

const Type = styled.h2`
    padding-top: 20px;
    text-align: center;
    font-size: 36px;
    color: #d35b1a;
`;

const Details = styled.p`
    width: 70%;
    margin: auto;
    font-size: 20px;
`;

const centering = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin:"auto"
};

export default function Switches() {
    return (
        <div id="switches" className="new-page">
            <h1 className="page-title">Types of Switches</h1>
            <Type>Linear</Type>
            <Details>
                A linear switch doesn’t have a “bump”. Simply put, the deeper you 
                press down a button, the harder it pushed back against your finger. 
                Think of it as pushing down a spring.
            </Details>
            {/* 
                Telios {md=4}
                Cream {md=4}
                Vintage Black {md=4}
            */}

            <Type style={{paddingTop:"35px"}}>Clicky</Type>
            <Details>
                A clicky switch is similar to a tactile switch, except it produces 
                some sort of sound when it activates. This kind of switch can be annoying 
                to some, due to the click being quite loud for fast typers or gamers. 
                Some prefer the “soft click” of the Cherry MX Whites, which still offers 
                a click but is less distinct.
            </Details>
            <Row style={{width:"85%", display:"flex", margin:"auto", paddingTop:"35px"}}>
                {blues.map((item, index) => (
                    <Col>
                        <img src={blues[index]} alt="Blue Switches" width="200px" height="auto" style={centering} />
                    </Col>
                ))}
            </Row>
            {/* 
                Kailh Box White
                Blue 
                Green
            */}

            <Type style={{paddingTop:"35px"}}>Tactile</Type>
            <Details>
                A tactile switch has a “bump” when it is pressed. When you push a tactile 
                switch, you push with the most force up until you reach the actuation point 
                of the switch (i.e., how hard you have to press the key to register it), after 
                which the switch will depress fully with very little resistance. In theory, 
                this lets the user know exactly when the key has been actuated. Note that the 
                actuation point is never at the bottom of the switch, meaning actuation will 
                always happen before the switch is fully pressed down.
            </Details>
            <Row style={{width:"85%", display:"flex", margin:"auto", paddingTop:"35px"}}>
                {browns.map((item, index) => (
                    <Col>
                        <img src={browns[index]} alt="Brown Switches" width="50%" height="auto" style={centering} />
                    </Col>
                ))}
            </Row>
            {/* 
                ZugGear T1 Tactile Switch
                Drop Halo
                Holy Pandas
            */}
        </div>
    )
}
