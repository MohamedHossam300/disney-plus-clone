import React, { useState } from 'react'
import styled from 'styled-components'

const Header = () => {

  const [menuContents] = useState([
    {
      image: "/icons/home-icon.svg",
      title: "Home"
    },
    {
      image: "/icons/search-icon.svg",
      title: "Search"
    },
    {
      image: "/icons/watchlist-icon.svg",
      title: "WatchList"
    },
    {
      image: "/icons/original-icon.svg",
      title: "Originals"
    },
    {
      image: "/icons/movie-icon.svg",
      title: "Movies"
    },
    {
      image: "/icons/series-icon.svg",
      title: "Series"
    },
  ])

  return (
    <Container>
      <Logo src="/images/logo.svg" alt="logo" />
            <WrapMenu>
              {menuContents.map((menuContent, index) => {
                return (
                  <a key={index}>
                    <img src={menuContent.image} alt={menuContent.title} />
                    <span>{menuContent.title}</span>
                  </a>
                )
              })}
            </WrapMenu>
            <UserImage src='https://yt3.ggpht.com/ytc/AKedOLS0vR63cuTsvtKl1IwsWokuyU-w5kOpuH0SloOhWsL9DEVhcO66Qb9KOLk9P35F=s88-c-k-c0x00ffffff-no-rj-mo' />
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