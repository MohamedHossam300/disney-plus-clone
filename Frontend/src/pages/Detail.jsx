import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getMovie } from '../movieAPI'

const Detail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState({})

    useEffect(() => {
        getMovie(id).then(movie => {
            setDetail(movie)
        })
      }, [id])

    return (
        <Container>
            <Background>
                <img src={detail.backgroundImage} alt={detail.title} />
            </Background>
            <ImageTitle>
                <img src={detail.titleImage} alt={detail.title} />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src='/icons/play-icon-black.png' alt='playIconBlack' />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src='/icons/play-icon-white.png' alt='playIconBlack' />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/icons/group-icon.png" alt='groupIcon' />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                {detail.subTitle}
            </SubTitle>
            <Description>
                {detail.description}
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 130px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    text-transform: uppercase;
`

const PlayButton = styled.button`
    display: flex;
    border-radius: 4px;
    font-size: 15px;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    
    &:hover {
        background-color: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        height: 40px;
        width: 40px;
        text-align: center;
        font-size: 30px;
        color: white;
        margin-top: 6px;
    }
`

const GroupWatchButton = styled(AddButton)`
    background-color: #000000;

    img {
        width: 100%
    }
`

const SubTitle = styled.div`
    color: rgb(249, 249, 294);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    color: rgb(249, 249, 294);
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    max-width: 500px;
`