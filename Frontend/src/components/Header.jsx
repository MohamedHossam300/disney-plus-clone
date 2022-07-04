import React, { useState } from 'react'
import styled from 'styled-components'
import { selectUserEmail, selectUserPassword } from "../features/user/userSlice"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

const Header = () => {
  const userEmail = useSelector(selectUserEmail)
  const userPassword = useSelector(selectUserPassword)

  const [menuContents] = useState([
    {
      image: "/icons/home-icon.svg",
      title: "Home",
      router: "/"
    },
    {
      image: "/icons/search-icon.svg",
      title: "Search",
      router: null
    },
    {
      image: "/icons/watchlist-icon.svg",
      title: "WatchList",
      router: null
    },
    {
      image: "/icons/original-icon.svg",
      title: "Originals",
      router: null
    },
    {
      image: "/icons/movie-icon.svg",
      title: "Movies",
      router: null
    },
    {
      image: "/icons/series-icon.svg",
      title: "Series",
      router: null
    },
  ])

  return (
    <Container>
      <Logo src="/images/logo.svg" alt="logo" />
      {!userEmail ? (
        <LoginContainer>
            <Link to="/signin">
              <Login>Login</Login>
            </Link>
        </LoginContainer>
        ) :
      <>
        <WrapMenu>
          {menuContents.map((menuContent, index) => {
            return (
              <a key={index} href={menuContent.router}>
                <img src={menuContent.image} alt={menuContent.title} />
                <span>{menuContent.title}</span>
              </a>
            )
          })}
        </WrapMenu>
        <UserImage src='https://yt3.ggpht.com/ytc/AKedOLS0vR63cuTsvtKl1IwsWokuyU-w5kOpuH0SloOhWsL9DEVhcO66Qb9KOLk9P35F=s88-c-k-c0x00ffffff-no-rj-mo' />
      </>
            }
    </Container>
  )
}

export default Header

const Container = styled.div`
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    height: 70px;
    background: #090B13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    z-index: 10;
`

const Logo = styled.img`
  width: 80px;
`

const WrapMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: #FFFFFF;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }

      &:hover:after {
          transform: scaleX(1);
      }
    }
  }
`

const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`

const Login = styled.div`
  border: 1px solid #F9F9F9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #F9F9F9;
    color: #000000;
    border-color: transparent;
  }
`

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`