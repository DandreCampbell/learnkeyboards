import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    padding-top: 5%;
    text-align: center;
    font-size: 45px;
    color: #13315C;
    text-decoration: underline 3px;
`;

const Type = styled.h2`
    padding-top: 20px;
    text-align: center;
    font-size: 36px;
    color: #F2681E;
`;

const Details = styled.p`
    width: 65%;
    margin: auto;
    font-size: 20px;
`;

export default function Switches() {
    return (
        <div id="switches">
            <Title>Types of Switches</Title>
            <Type>Linear</Type>
            <Details>
                A linear switch doesn’t have a “bump”. Simply put, the deeper you 
                press down a button, the harder it pushed back against your finger. 
                Think of it as pushing down a spring.
            </Details>
            <Type style={{paddingTop:"35px"}}>Clicky</Type>
            <Details>
                A clicky switch is similar to a tactile switch, except it produces 
                some sort of sound when it activates. This kind of switch can be annoying 
                to some, due to the click being quite loud for fast typers or gamers. 
                Some prefer the “soft click” of the Cherry MX Whites, which still offers 
                a click but is less distinct.
            </Details>
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
        </div>
    )
}
