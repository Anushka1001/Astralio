import React from 'react'
import styled from 'styled-components'


function Viewer() {
    return (
        <Container>
            <Wrap>
                <img src="https://firebasestorage.googleapis.com/v0/b/astralio.appspot.com/o/Viewer-earth.png?alt=media&token=008b3081-35ba-47f0-8dd3-247e3d844a1f" alt=""/>
                {/* <video autoPlay={true} loop={true} playsInline={true} >
                    <source src="/videos/earth.mp4" type="video/mp4" />
                </video> */}
            </Wrap>
            <Wrap>
                <img src="https://firebasestorage.googleapis.com/v0/b/astralio.appspot.com/o/Viewer-ss.png?alt=media&token=ea2cfdc2-6477-4812-9f22-3db33c097c8b" alt=""/>
                {/* <video autoPlay={true} loop={true} playsInline={true} >
                    <source src="/videos/galaxy.mp4" type="video/mp4" />
                </video> */}
            </Wrap>
            <Wrap>
                <img src="https://firebasestorage.googleapis.com/v0/b/astralio.appspot.com/o/Viewer-galaxy.png?alt=media&token=8237b619-587e-4fd2-88dc-f5dbf8107aa2" alt=""/>
                {/* <video autoPlay={true} loop={true} playsInline={true} >
                    <source src="/videos/galaxy.mp4" type="video/mp4" />
                </video> */}
            </Wrap>
            <Wrap>
                <img src="https://firebasestorage.googleapis.com/v0/b/astralio.appspot.com/o/Viewer-cosmos.png?alt=media&token=ce0e33da-653d-4269-b570-330f71ada9b8" alt=""/>
                {/* <video autoPlay={true} loop={true} playsInline={true} >
                    <source src="/videos/galaxy.mp4" type="video/mp4" />
                </video> */}
            </Wrap>
            <Wrap>
                <img src="https://firebasestorage.googleapis.com/v0/b/astralio.appspot.com/o/Viewer-facts.png?alt=media&token=00387db9-b936-4ec6-9aca-bf291e51a680" alt=""/>
                {/* <video autoPlay={true} loop={true} playsInline={true} >
                    <source src="/videos/facts.mp4" type="video/mp4" />
                </video> */}
            </Wrap>
            
        </Container>
    )
}

export default Viewer

const Container = styled.div`
    margin-top:20px;
    display:grid;
    grid-gap: 25px;
    paddding: 30px 0 0;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    
`

const Wrap = styled.div`
    border: 2px solid rgba(249, 249, 249, 0.1);
    // background: rgba(219, 239, 249, 0.9);
    border-radius:15px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
    cursor:pointer;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius:15px;
        // max-height:80px;

    }
    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
      }

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.9);
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        video {
            opacity: 1;
        }
    }
`
