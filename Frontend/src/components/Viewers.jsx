import React, { useState } from 'react'
import styled from 'styled-components'

const Viewers = () => {
    const [viewers] = useState([
        {
            image: "/images/viewers-disney.png",
            video: "/videos/1564674844-disney.mp4",
            name: "Disney",
        },
        {
            image: "/images/viewers-pixar.png",
            video: "/videos/1564676714-pixar.mp4",
            name: "Pixar",
        },
        {
            image: "/images/viewers-marvel.png",
            video: "/videos/1564676115-marvel.mp4",
            name: "Marvel",
        },
        {
            image: "/images/viewers-starwars.png",
            video: "/videos/1608229455-star-wars.mp4",
            name: "Starwars",
        },
        {
            image: "/images/viewers-national.png",
            video: "/videos/1564676296-national-geographic.mp4",
            name: "National Geographic",
        },
    ])

    return (
        <Container>
            {viewers.map((viewer, index) => {
                return (
                    <Wrap key={index}>
                        <img src={viewer.image} alt={viewer.name} />
                        <video autoPlay loop playsInline>
                            <source src={viewer.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Wrap>
                )
            })
            }
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0 26px;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    position: relative;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    cursor: pointer;
    border: 3px solid rgba(249, 249,249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 2;
    }

    video {
        top: 0;
        border-radius: 6.5px;
        position: absolute;
        display: none;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249,249, 0.8);

        video {
            display: block;
        }
    }
`