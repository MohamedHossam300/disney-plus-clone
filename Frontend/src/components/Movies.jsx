import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { selectMovies } from '../features/movie/movieSlice'

const Movies = () => {
    const movies = useSelector(selectMovies)

    const [collections] = useState([
        {
            id: "1",
            name: "Recommended for You",
        }
    ])

    return (
        <Container>
            {collections.map(collection => {
                return (
                    <React.Fragment key={collection.id}>
                        <h4> {collection.name} </h4>
                        <Link to="/detail">
                            <Content>
                                {movies.filter(movie => movie.collectionId === collection.id)
                                    .map((movie, index) => {
                                        return (
                                            <Wrap key={index}>
                                                <img src={movie.image} alt={movie.name} />
                                            </Wrap>
                                        )
                                    })}
                            </Content>
                        </Link>
                    </React.Fragment>
                )
            })}
        </Container >
    )
}

export default Movies

const Container = styled.div`
    
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`