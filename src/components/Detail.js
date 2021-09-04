import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { useSelector } from "react-redux";
import { selectFictions } from "../features/users/movieSlice";


const Detail = (props) => {
    const { id } = useParams();
    const [movies, setDetailData] = useState({});
    
    useEffect(() => {
      db.collection("movie")
        .doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setDetailData(doc.data());
          } else {
            console.log("no such document in firebase 🔥");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }, [id]);
    return (
        <Container>
            <Background>
                <img alt={movies.title} src={movies.backgroundImg} />
            </Background>
            <ImageTitle>
                <img alt={movies.title} src={movies.titleImg} />
            </ImageTitle>


            <Controls>
                <PlayButton>
                    <img src="/img/play-icon-black.png" alt=""/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/img/play-icon-white.png" alt=""/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
            </Controls>
            <SubTitle>{movies.subTitle}</SubTitle>
            <Description>{movies.description}</Description>

        </Container>
    )
}

export default Detail

const Container=styled.div`
    min-height: calc(100vh - 80px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
`
const Background = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.2;
    background-color:#000;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`
const ImageTitle=styled.div`
    height:30vh;
    width:35vh;
    min-height:170px;
    min-width:400px;
    margin:20px 20px 20px 0;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`
const Controls=styled.div`
    display:flex;
    align-items:center;
    padding-left:20px;

`
const PlayButton=styled.button`
    border-radius:10px;
    font-size:14px;
    display:flex;
    align-items:center;
    height:50px;
    background: #fff;
    border:none;
    padding: 0 20px;
    margin-right: 15px;
    letter-spacing: 1.8px;
    cursor:pointer;
    &:hover{
        background: #BFF5FD;
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border: 1px solid #fff;
    color: #fff;
    &:hover{
        background: #333;
    }
`
const AddButton = styled.div`
    background: rgba(0,0,0,0.7);
    border: 1px solid #fff;
    border-radius:50%;
    width:44px;
    height:44px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    span{
        font-size:34px;
    }
    &:hover{
        background: #333;
    }
`
const SubTitle=styled.div`
    color: #ccc;
    margin-top:20px;
    min-height:20px;
    padding-left:20px;

`
const Description=styled.div`
    margin-top:10px;
    max-width:760px;
    color: #ccc;
    font-size: 20px;
    min-height:20px;
    padding-left:20px;
    font-family: Raleway;
`
// const SubTitle=styled.div`

// `
// const SubTitle=styled.div`

// `