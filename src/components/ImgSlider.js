import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function ImgSlider() {
    
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true

    }

    return (
        <Carousal {...settings}>
            <Wrap>
                <img src="/img/slider/slider1.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/img/slider/slider2.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/img/slider/slider3.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/img/slider/slider4.png" alt=""/>
            </Wrap>
        </Carousal>
    )
}

export default ImgSlider

const Carousal = styled(Slider)`
    margin-top:10px;
    cursor:pointer;
    ul li button{
        &:before{
            font-size:10px;
            color:#ddd;
            
        }
    }
    li.slick-active button::before {
        color: #fff;
    }
    .slick-list{
        overflow:visible;
    }
    button{
        visibility:hidden;
    }


`
const Wrap=styled.div`
    img{
        width: 100%;
        height:100%;
        border-radius:15px;
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
        border: 2px solid transparent;
        opacity:1;

        &:hover{
            border: 1.5px solid rgba(249,249,249,0.8);
            
        }
    }
`