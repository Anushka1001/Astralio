import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectEntertainment } from "../features/users/movieSlice";

const Entertainment = (props) => {
    const movie = useSelector(selectEntertainment);
    return (
        <Container>
            <h4>Entertainment</h4>
            <Content>
            {movie &&
                movie.map((movies, key) => (
                    <Wrap key={key}>
                    {movie.id}
                    <Link to={`/detail/` + movies.id}>
                        <img src={movies.cardImg} alt={movies.title} />
                    </Link>
                    </Wrap>
                ))}

            </Content>
        </Container>
    );
};



const Container=styled.div`
    margin-top:10px;
    padding: 30px 0 46px;

    h4{
        font-size:25px;
        opacity:0.8;

    }
`
const Content=styled.div`
    display:grid;
    grid-gap:15px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    // overflow:visible;
`

const Wrap=styled.div`
    border: 2px solid rgba(249, 249, 249, 0.1);
    border-radius:5px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
    cursor:pointer;
    // overflow:hidden;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        

    }
    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.6);
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        
    }
`

export default Entertainment;