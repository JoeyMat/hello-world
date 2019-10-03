import React from 'react'
import styled from 'styled-components'
import Hamburger from '../atoms/Hamburger';

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    justify-content: flex-end;
`

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Wrapper>
                <Hamburger menuHandler={this.props.menuHandler} />
            </Wrapper>
        )
    }
}

export default Header