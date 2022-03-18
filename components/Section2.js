import React from 'react';
import styled from "styled-components";
import Image from "next/image"
import Image3 from '../public/assets/Image3.png'
import Image4 from '../public/assets/Image4.png'


const ContentContainer = styled.div`
    display: flex;
    justify-content: left;
    padding: 10vh 2rem 0 2rem;
    min-width: 100%;
    background-color: white;
`
const MediumBox = styled.div`
    width: 35vw;
    margin:0 0 3rem 6rem;
    z-index: 1;
`
const LargeBox = styled.div`
    width: 35vw;
    margin-right: 6rem;
    z-index: 2;
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

const Section2 = () => {
    return (
        <ContentContainer className="container">
            <LargeBox className="box-3" id="position">
                    <Image src={Image3}/>
                    <TextBox className='textbox'>
                    <span>Senders</span>
                    <List className='list'>
                        <li>Mimi</li>
                        <li>United State</li>
                        <li>2021</li>
                    </List>
                </TextBox>
                </LargeBox>
            <MediumBox className="box-4">
                <Image src={Image4}/>
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

export default Section2;