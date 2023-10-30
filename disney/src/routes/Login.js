import React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access ot Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the Price of Disney+
            and The Disney bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
        <BgImg></BgImg>
      </Content>
    </Container>
  );
}
const Container = styled.section`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10vw;
  width: 100%;
  height: 100%;
  padding: 80px 40px;
`;
const BgImg = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-reapeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  color: red;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const CTALogoOne = styled.img`
  margin-bottom: 15px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const SignUp = styled.a`
display:flex;
justify-content:center;
font-weight:bold;
padding:16px;
max-width:600px;
background-color:#0063e5;
letter-spacing:1.5px;
color:#f9f9f9;
align-items:center;
width=100%;
font-size:18px;
margin-bottom:12px;
&:hover{
  cursor:pointer;
  background-color:#0483ee;
}
`;

const Description = styled.p`
font-size:11px;
margin:0 0 24px;
line-height:1.5em;
letter-spacing:1.5px;
max-width:600px;
text-align:center;

`;


const CTALogoTwo = styled.img`
  max-width:600px;
  width:100%;
`;
