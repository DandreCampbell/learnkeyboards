import React from 'react';
import '../styles.css';
import './Sizes.css';
import styled from 'styled-components';

import sixty from './img/sixty.png';
import sixfive from './img/sixfive.png';
import sevenfive from './img/sevenfive.png';
import tkl from './img/tkl.png';
import full from  './img/full.png';

const BoardSize = styled.h2`
    font-size: 30px;
    color: #d35b1a;
    text-align: center;
    padding-top: 100px;    
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
            <BoardSize style={{paddingTop:"50px"}} >Full Size Keyboard - 100%</BoardSize>
            <Details>
                This is the most common keyboard size used. Usually have about 104 keys. Includes
                number pad, functions keys, arrows keys, and navigation keys.
            </Details>
            <img src={full} alt="Full Size Keyboard" width="65%" height="auto" className="img-style" />
            <BoardSize>Tenkeyless Keyboard - 80%</BoardSize>
            <Details>
                Might be the next most popular after the full size. imilar to the full size keyboard 
                but does include the num pad or navigation keys. Can be just as efficient with this size 
                while also a little more mouse room.
            </Details>
            <img src={tkl} alt="Tenkeyless Keyboard" width="65%" height="auto" className="img-style" />
            <BoardSize>75% Keyboard</BoardSize>
            <Details>
                This size is similar to the Tenkeyless Keyboard but removes the space between keys
                to make it more compact. You'll enjoy this size if you want all the benefits of a TKL
                but also value having more mouse room.
            </Details>
            <img src={sevenfive} alt="75% Keyboard" width="65%" height="auto" className="img-style" />
            <BoardSize>65% Keyboard</BoardSize>
            <Details>
                The 65% is the like the 75% but doesn't include the row of function keys. You can still 
                use the function keys by using the "FN" key + the mapped key. More common for gamers who
                are looking for as much mouse room as possible but would still like to keep
                their arrow keys.
            </Details>
            <img src={sixfive} alt="65% Keyboard" width="65%" height="auto" className="img-style" />
            <BoardSize>60% Keyboard</BoardSize>
            <Details>
                Very closely resembles the 65% but does away with the arrow keys. You will need to study
                the mapped keys to get all the functionality of this keyboard size.
            </Details>
            <img src={sixty} alt="65% Keyboard" width="67%" height="auto" className="img-style" />
        </div>
    )
}
