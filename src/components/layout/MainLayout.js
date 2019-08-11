import React from "react"
import styled from 'styled-components'
import '../../global.css'
import Menu from '../Molecules/Menu'

const Main = styled.div`
    background-color: red;
    display: flex; 
    flex-direction: column; 
    flex-grow: 1;
`
class MainLayout extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false
        }
    }

    menuHandler = () => {
       this.setState(prevState => ({
           menuOpen: !prevState.menuOpen
       }))
    }

    render(){
        return (
            <Main>
                <Menu menuOpen={this.state.menuOpen} menuHandler={this.menuHandler} />
                {this.props.children && this.props.children.map(child => {
                    return React.cloneElement(child, null, null, this.menuHandler)
                })}
            </Main>
        )
    }
}

export default MainLayout