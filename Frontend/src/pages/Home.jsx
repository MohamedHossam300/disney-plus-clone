import React, {  useEffect } from 'react'
import { getAll } from '../movieAPI'
import { useDispatch } from "react-redux"
import { setMovies } from "../features/movie/movieSlice"
import styled from 'styled-components'
import Slides from '../components/Slides'
import Viewers from '../components/Viewers'
import Movies from '../components/Movies'

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAll().then(movie => {
      dispatch(setMovies(movie))
    })
  }, [dispatch])

  return (
    <Container>
      <Slides />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;
    padding-bottom: 40px;

    &:before {
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`