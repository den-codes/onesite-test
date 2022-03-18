import React from 'react';
import styled from "styled-components";

import Image from "next/image"
import Image5 from '../public/assets/Image5.png'
import Image6 from '../public/assets/Image6.png'


const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem 2rem;
    min-width: 100%;
    height: 100vh;
    background-color: white;
    position: relative;
`
const LargeBox = styled.div`
    width: 45vw;
    height: fit-content;
`
const MediumBox = styled.div`
    width: 30vw;
    margin-left: 10rem;
    z-index: 3;
`
const TextBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    align-items: flex-start;
    width: 50vh;
`
const List = styled.ul`
    margin: 0;
    list-style: none;
`

const Section3 = () => {
    return (
        <ContentContainer className="container">
            <MediumBox className="box-5">
                <Image src={Image5}/>
                <TextBox className='textbox'>
                    <span>Senders</span>
                    <List className='list'>
                        <li>Mimi</li>
                        <li>United State</li>
                        <li>2021</li>
                    </List>
                </TextBox>
            </MediumBox>
            <LargeBox className="box-6">
                <Image src={Image6}/>
                <TextBox className='textbox'>
                    <span>Senders</span>
                    <List className='list'>
                        <li>Mimi</li>
                        <li>United State</li>
                        <li>2021</li>
                    </List>
                </TextBox>
            </LargeBox>
        </ContentContainer>

    )
}

export default Section3;