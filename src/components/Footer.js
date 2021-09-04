import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <Wrap>
                <hr />
                <h4>This is a project website not for commercial use. All rights belong to their respectful owner. No such claims will be entertained in any way possible.</h4>
                <img src="https://firebasestorage.googleapis.com/v0/b/astralio.appspot.com/o/animated_logo.png?alt=media&token=af93afc8-9a33-4e58-a661-8ac776e84442" alt=""/>
            </Wrap>

        </Container>
    )
}

export default Footer

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0 10px;
    background:#090b13;
    align-items:center;
    justify-content:center;
    text-align:center;

`
const Wrap = styled.div`
    margin:10px 40px 20px;
    padding:0 30px;
    img{
        width:100px;
        opacity:0.9;
    }
    h4{
        color:#555;
        letter-spacing:1.43px;
        font-size:13px;
        font-style:italic;
    }
    hr{
        border-color:#444;
    }

`
