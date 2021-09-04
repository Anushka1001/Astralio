import React from 'react'
import styled from 'styled-components'
import TheatersIcon from '@material-ui/icons/Theaters';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import HomeIcon from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';
import { useDispatch , useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth , provider } from "../firebase";
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from "../features/users/userSlice";
import { useEffect } from "react";

const Header = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            setUser(user);
            history.push("/home");
          }
        });
      }, [userName]);

    const handleAuth = () => {
        if (!userName) {
          auth
            .signInWithPopup(provider)
            .then((result) => {
              setUser(result.user);
            })
            .catch((error) => {
              alert(error.message);
            });
        } else if (userName) {
          auth
            .signOut()
            .then(() => {
              dispatch(setSignOutState());
              history.push("/");
            })
            .catch((err) => alert(err.message));
        }
      };
    
      const setUser = (user) => {
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      };


    return (
        <Nav>
                <Logo>
                    <img src="https://firebasestorage.googleapis.com/v0/b/astralio.appspot.com/o/animated_logo.png?alt=media&token=af93afc8-9a33-4e58-a661-8ac776e84442" alt="" onClick={()=> window.open("/", "_self")}/>
                </Logo>

                {!userName ? (
                    <Login onClick={handleAuth}>Login</Login>
                ) : (
                    <>
                <NavMenu>
                    <IconButton onClick={()=> window.open("https://atralio.netlify.app", "_self")} style={{ color: "white", fontSize: 12}} >
                        <HomeIcon/><span>Home</span>
                    </IconButton>
                    <IconButton onClick={()=> window.open("", "_self")} style={{ color: "white", fontSize: 13}}>
                        <TheatersIcon/><span id="movies">Movies</span>
                    </IconButton>
                    <IconButton onClick={()=> window.open("https://factastral.netlify.app", "_blank")} style={{ color: "white", fontSize: 13}}>
                        <LocalLibraryIcon/><span>learn</span>
                    </IconButton>
                </NavMenu>
                
                <SignOut>
            <UserImg src={userPhoto} alt={userName} />
                <DropDown>
                <span onClick={handleAuth}>Sign out</span>
                </DropDown>
            </SignOut>
          </>
                )}
        </Nav>
    );
};

export default Header


const Nav=styled.div`
    display:flex;
    overflow-x:hidden;
    align-items:center;
    justify-content:space-between;
    padding: 0 10px;
    height:80px;
    background:#090b13;
`
const Logo=styled.div`
    float:left;
    cursor:pointer;
    margin:0 20px 0 30px;
    img{
        width:auto;
        height:40px;
    }
`
const NavMenu=styled.div`
    display:flex;
    flex:1;
    align-items:center;
    span{
        font-size:12px;
        text-transform: uppercase;
        letter-spacing:1.42px;
        padding-left: 1px;
        font-weight:600;
        cursor:pointer;
        color:#eeeeee;
        opacity:1;
        position: relative;

        &:after{
            content: "";
            height:2px;
            background:white;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform-origin:left center;
            transform:scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }
    
`

const UserImg=styled.img`
height: 20px;
border-radius:50%;
min-width: 20px;
width: 20px;
z-index: auto;
`
const Login=styled.a`
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`

const DropDown = styled.div`
  position: absolute;
  top: 30px;
  right: 0px;
  left: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 8px;
  font-size: 10px;
  letter-spacing: 2px;
  width: 80px;
  opacity: 0;
`


const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin: 0 20px 0 0;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;