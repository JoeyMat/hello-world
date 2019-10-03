import React from 'react'
import styled from 'styled-components'
import Section from '../Molecules/Section'
import bgImage from '../../../public/assets/images/stoelflat.jpg'
import downArrow from '../../../public/assets/images/arrowDown.svg'
import Header from '../Molecules/Header'
import { connect } from 'react-redux'

const CenterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 100%;
`

const HeaderText = styled.h1`
    font-size: 5rem;
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-weight: normal;
    letter-spacing: -5px;
`
const Img = styled.img`
    position:absolute; 
    bottom: 1%;
    padding: 10px;
    align-self: center;
    z-index: 10;
    opacity: 0.8;
    z-index: 32;

    :hover {
        cursor: pointer;
    }
`

class LandingSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Section image={bgImage} darker={true}>
                <Header />
                <CenterContent>
                    <HeaderText>
                        I'll probably like you.
                    </HeaderText>
                    <Img src={downArrow} onClick={() => this.props.scrollHandler("landing")} />
                </CenterContent >
            </Section >
        )
    }
}

const mapStateToProps = state => {
    return {
        menuClicks: state
    }
}


export default connect(mapStateToProps, null)(LandingSection)
