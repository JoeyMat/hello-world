import React from 'react'
import styled from 'styled-components'
import menuImage from '../../../public/assets/images/baseline-menu-24px.svg'

const Img = styled.img`
    float: right;
    padding: 10px;

    :hover {
        cursor: pointer;
    }
`

export default ({ menuHandler }) => (
    <Img src={menuImage} onClick={menuHandler}>
    </Img>
)