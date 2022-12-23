import React from 'react'
import styled from 'styled-components'
import loginBackgroundImg from '../images/login-background.jpg'
import imageOne from '../images/cta-logo-one.png'
import imageTwo from '../images/cta-logo-two.png'

export default function Login() {
  return (
    <Container>
      <BgImage>
        <Content>
          <CTA>
            <CtaOne src={imageOne} />
            <Signup>Get it all here</Signup>
            <DescriptionPara>Fast forward to now - It’s not easy to empathize with a hormonal teenager being raised by a dad dealing with mid-life, and a menopausal mom. Even harder when the teenage son points to classmates with ‘much younger’ parents</DescriptionPara>
            <CtaLogoTwo src={imageTwo} />
          </CTA>
        </Content>
      </BgImage>
    </Container>
  )
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10%;
  position: relative;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url(${loginBackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  background-position: top;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const CtaOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
`;

const Signup = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  max-width: 350px;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover{
    background-color: black;
  }

`;

const DescriptionPara = styled.p`
  font-size: 12px;
  line-height: 1.5;
  margin: 12px 0;
  letter-spacing: 1px;
`;

const CtaLogoTwo = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
`