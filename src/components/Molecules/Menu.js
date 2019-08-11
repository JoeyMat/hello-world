import React from 'react'
import styled from 'styled-components'
import Hamburger from '../atoms/Hamburger';

const MenuWrapper = styled.div`
    position: fixed;
    height: 100vh;
    width: 35%;
    background-color: #222222;
    right: 0;
    ${props => props.menuOpen === true ? 'display: block;': 'display: none;' }
`

const Item = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 2rem;
    font-family: "Times New Roman", Times, serif;
    color: #4a4a4a;

    :hover {
        color: white;
      }
`

const MenuHeader = styled.div`
    height: 8%;
    border-bottom: 1px solid #4a4a4a;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 2rem;
    font-family: "Times New Roman", Times, serif;
    color: #4a4a4a;
`

class Menu extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <MenuWrapper menuOpen={this.props.menuOpen}>
                <MenuHeader>
                <Hamburger menuHandler={this.props.menuHandler}/>
                    Menu
                </MenuHeader>
                <Item>
                    Home
                </Item>
                <Item>
                    Work
                </Item>
                <Item>
                    About
                </Item>
            </MenuWrapper>
        )
    }
}

export default Menu