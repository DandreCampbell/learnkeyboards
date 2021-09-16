import React from 'react';
import '../styles.css';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { ModList } from './ModItems';

const firstCol = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
};

const secondCol = {
    display: "flex",
    margin: "auto",
    width: "85%",
    paddingTop: "100px"
};

const Title = styled.h2`
    font-size: 40px;
`;

const Details = styled.p`
    font-size: 24px;
`;

const Benefits = styled.span`
    font-size: 20px;
    margin: auto;
`;

export default function Modifications() {
    return (
        <div id="mods" className="new-page">
            <h1 className="page-title">Modifications</h1>
            {ModList.map(mod => (
                <Row style={{paddingBottom:"50px"}}>
                    <Col md={4} style={firstCol}>
                        <Title>{mod.name}</Title> 
                    </Col>
                    <Col md={8} style={secondCol}>
                        <Details>
                            {mod.description}
                        </Details>
                        <br/>
                        <Benefits>
                            Benefits: "{mod.benefits}"
                        </Benefits>
                    </Col>
                </Row>                
            ))}
        </div>
    )
}
