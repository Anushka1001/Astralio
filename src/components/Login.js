import React from 'react'
import styled from 'styled-components'
import { auth , provider } from "../firebase";

const Login = (props) => {

    const handleAuth = () => {
        auth.signInWithPopup(provider).then((result) => {
            console.log(result)
        }).catch((error) => {
            alert(error.message);
        });
    };
    return (
        <Container>
            <CTC>
                <Mainlogo src="https://firebasestorage.googleapis.com/v0/b/astralio.appspot.com/o/animated_logo.png?alt=media&token=af93afc8-9a33-4e58-a661-8ac776e84442" alt=""/>
                <br/><Signup onClick={handleAuth}>Join Us</Signup>
                <br/><Description>Get all your curiousity healed at a place. Let's see what world offers more.</Description>
            </CTC>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    &::before{
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        content: "";
        background: url("https://firebasestorage.googleapis.com/v0/b/astralio.appspot.com/o/login-background.png?alt=media&token=e2706706-f06c-4a57-9a16-34df904b9ba9");
        z-index:-1;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
    }
`
const CTC = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 70%;
    display:flex;
    flex-direction: column;
    align-items:center;
`

const Mainlogo = styled.img`
    width:75%;

`
const Signup = styled.a`
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    font-weight: bold;
    padding: 12px 0;
    border-radius:4px;
    text-transform: uppercase;
    text-align:center;
    font-size:20px;
    border: 2px #ddd solid;
    cursor: pointer;
    transition:all 250ms;
    margin: 8px 0 3px 0;
    letter-spacing:5.52px;
    &:hover{
        background: rgba(191, 245, 253,0.15);
        transform:scale(1.01);
    }

`
const Description = styled.p`
    font-size:13px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;

`
// const Container = styled.div`

// `
// const Container = styled.div`

// `