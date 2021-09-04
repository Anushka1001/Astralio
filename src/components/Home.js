import React, {useEffect} from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewer from './Viewer';
import Movies from './Movies';
import Entertainment from './Entertainment';
import Fictions from './Fictions';
import NonFictions from './NonFictions';
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/users/movieSlice";
import { selectUserName } from "../features/users/userSlice";

const Home = (props) => {
        const dispatch = useDispatch();
        const userName = useSelector(selectUserName);
        let entertainments = [];
        let moviess = [];
        let fictionss = [];
        let nonfictionss = [];
      
      //react-hook
        useEffect(() => {
          db.collection("movie").onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => { //loop through every record
                console.log(entertainments);
              switch (doc.data().type) {
                case "entertainment":
                  entertainments = [...entertainments, { id: doc.id, ...doc.data() }];
                  break;
      
                case "movies":
                  moviess = [...moviess, { id: doc.id, ...doc.data() }];
                  break;
      
                case "fictions":
                  fictionss = [...fictionss, { id: doc.id, ...doc.data() }];
                  break;
      
                case "nonfictions":
                  nonfictionss = [...nonfictionss, { id: doc.id, ...doc.data() }];
                  break;
              }
            });
      
            dispatch(
              setMovies({
                entertainment: entertainments,
                movies: moviess,
                fictions: fictionss,
                nonFictions: nonfictionss,
              })
            );
          });
        }, [userName]);



    return (
        <Container>
            <ImgSlider />
            <Viewer/>
            <Entertainment/>
            <Movies />
            <Fictions />
            <NonFictions />
        </Container>
    );
};


const Container=styled.main`
    min-height:calc(100vh - 80px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
    overflow-x:hidden;
    &:before{
        background: url("/img/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position:absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;

export default Home;