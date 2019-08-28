import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import menuImage from '../../../public/assets/images/baseline-menu-24px.svg'
import { menuStateHandler } from '../../store/menu/Actions'

const Img = styled.img`
    float: right;
    padding: 10px;

    :hover {
        cursor: pointer;
    }
`
class Hamburger extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
    return (
        <Img src={menuImage} onClick={this.props.menuHandler} />
        )
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        menuHandler: () => { dispatch(menuStateHandler('test')) }
    }
}

export default connect(null, mapDispatchToProps)(Hamburger)
