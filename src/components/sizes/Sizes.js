import React from 'react';
import '../styles.css';
import './Sizes.css';
import styled from 'styled-components';
import { SizeList } from './SizeItems';

import sixty from './img/sixty.png';
import sixfive from './img/sixfive.png';
import sevenfive from './img/sevenfive.png';
import tkl from './img/tkl.png';
import full from  './img/full.png';

const keyboards = [
    full, tkl, sevenfive, sixfive, sixty
];

const BoardSize = styled.h2`
    font-size: 30px;
    color: #d35b1a;
    text-align: center; 
`;

const Details = styled.p`
    width: 75%;
    margin: auto;
    font-size: 20px;
    padding-top: 15px;
`;

export default function Sizes() {
    return (
        <div id="sizes" className="new-page">
            <h1 className="page-title">Different Sizes</h1>
            {SizeList.map((size, index) => (
                <div style={{paddingBottom:"100px"}}>
                    <BoardSize>{size.name}</BoardSize>
                    <Details>{size.description}</Details>
                    <img src={keyboards[index]} alt={size.alt} width="65%" height="auto" className="img-style" />
                </div>
            ))}
        </div>
    )
}
