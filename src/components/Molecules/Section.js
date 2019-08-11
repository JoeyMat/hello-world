import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`

`

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: ${props => props.image ? `url(${props.image})` : 'red'};
    z-index: 2;
    opacity: ${props => props.darker ? 0.5: 1}
`

export default ({ children, bg, image, darker }) => (
    <Wrapper>
        <Background bg={bg} image={image}>
            {children}
        </Background>
    </Wrapper>
)