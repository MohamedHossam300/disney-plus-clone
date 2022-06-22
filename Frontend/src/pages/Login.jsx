import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp>
                Get All There
            </SignUp>
            <Discription>
                Get Premier Access To Raya And The Last Dragon for an additional fee with Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by 1$
            </Discription>
            <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    margin-top: 70px;
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
        content: "";
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        opacity: 0.7;
    }
`

const CTA = styled.div`
    width: 90%;
    max-width: 650px;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
`
    
const CTALogoOne = styled.img`

`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063E5;
    text-transform: uppercase;
    font-weight: bold;
    padding: 17px 0;
    color: #F9F9F9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background-color: #0483EE;
    }
    `

const Discription = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    
`