import React from "react"
import styled from 'styled-components'
import { colors } from '../../constants/colors'

const Wrapper = styled.div`

`

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: ${props => props.image ? `url(${props.image})` : 'null'};
    background-color: ${props => props.bgcolor ? props.bgcolor : colors.sectionBackground};
    z-index: 2;
    opacity: ${props => props.darker ? 0.5 : 1}
`

export default ({ children, bg, image, darker, bgcolor }) => (
    <Wrapper>
        <Background bg={bg} image={image} bgcolor={bgcolor}>
            {children}
        </Background>
    </Wrapper>
)