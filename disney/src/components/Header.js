import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

export default function Header() {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await setUser(user);
        <Navigate to="/" replace={true} />;
      }
    });
  }, [username]);

  const handleAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
          // console.log(userPhoto);
        })
        .catch((e) => console.log(e));
    } else {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState());
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    // console.log(userPhoto);
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
        <img src="/images/logo.svg" alt="imgnot found" />
      </Logo>
      {username ? (
        <>
        {/* {console.log(username)} */}
          <NavMenu>
            <a href="/home" alt="HOME">
              <img src="/images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </a>
            <a href="/search" alt="HOME">
              <img src="/images/search-icon.svg" alt="" />
              <span>SEARCH</span>
            </a>
            <a href="/watchlist" alt="HOME">
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </a>
            <a href="/home" alt="HOME">
              <img src="/images/original-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </a>
            <a href="/home" alt="HOME">
              <img src="/images/movie-icon.svg" alt="" />
              <span>MOVIES</span>
            </a>
            <a href="/home" alt="HOME">
              <img src="/images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt="" />
            <DropDown onClick={handleAuth}>Sign out</DropDown>
          </SignOut>
        </>
      ) : (
        <Login onClick={handleAuth}>LOG IN</Login>
      )}
    </Nav>
  );
}
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  background-color: #090b13;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.div`
  padding: 0;
  width: 80px;
  min-width: 50px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;

  img {
    display: block;
    width: auto;
  }
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  flex-flow: row nowrap;
  height: 100%;
  padding: 0px;
  margin: 0px;
  position: relative;
  margin-left: 25px;
  margin-right: auto;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 30px;
      min-width: 30px;
      width: 30px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 18px;
      letter-spacing: 1.5px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 240, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        opacity: 0;
        position: absolute;
        left: 0px;
        right: 0px;
        transform: scaleX(0);
        transition: all 250ms 0s;
        width: 100%;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 1150px) {
    display: none;
  }
`;
const Login = styled.a`
  letter-spacing: 1.48px;
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  margin-left: 4px;
  font-size: 18px;
  transition: all 0.2s ease 0s;

  &:hover {
    border: 1px solid #ffffff;
    background-color: #f9f9f9;
    color: black;
    opacity: 1;
  }
`;
const DropDown = styled.div`
  position: absolute;
  letter-spacing: 3px;
  top: 48px;
  right: 5px;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151 151, 0.34);
  border-radius: 5px;
  padding: 10px;
  box-shadow: 3px 4px 18px 5px rgb(0 0 0/50%);
  opacity: 0;
  font-size: 14px;
  width: 100px;
`;
const SignOut = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition: 1s;
    }
  }
`;
const UserImg = styled.img`
  width:100%;
  height:100%;
  max-width: 44px;
  border-radius: 50%;
  margin-left: 20px;
  @media (max-width: 550px) {
    width: 38px;
  }
`;
