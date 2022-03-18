import React from 'react';
import Image from "next/image"
import styled from "styled-components";

import Image1 from '../public/assets/Image1.png'
import Image2 from '../public/assets/Image2.png'

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 80vh 2rem 0 2rem;
    min-width: 100%;
`
const LargeBox = styled.div`
    width: 42vw;
    height: fit-content;
    z-index: 2;
`
const MediumBox = styled.div`
    width: 30vw;
    z-index: 1;
`
const TextBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    align-items: flex-start;
    width: 50vh;
    z-index: 2;
`
const List = styled.ul`
    margin: 0;
    list-style: none;
`  
const Section1 = () => {     
    return (
        <ContentContainer className="container">
             <LargeBox className="box-1">
                <Image src={Image1}/>
                <TextBox className='textbox'>
                    <span>Senders</span>
                    <List className='list'>
                        <li>Mimi</li>
                        <li>United State</li>
                        <li>2021</li>
                    </List>
                </TextBox>
            </LargeBox>
            <MediumBox className="box-2">
                <Image src={Image2}/>
                <TextBox className='textbox'>
                    <span>Senders</span>
                    <List className='list'>
                        <li>Mimi</li>
                        <li>United State</li>
                        <li>2021</li>
                    </List>
                </TextBox>
            </MediumBox>
        </ContentContainer>
    )
    
}


export default Section1;