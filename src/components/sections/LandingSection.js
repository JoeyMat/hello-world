import React from 'react'
import styled from 'styled-components'
import Section from '../Molecules/Section'
import bgImage from '../../../public/assets/images/stoelflat.jpg'
import Header from '../Molecules/Header'

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

class LandingSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Section image={bgImage} darker={true}>
                <Header menuHandler={this.props.children[1]} />
                <CenterContent>
                    <HeaderText>
                        I'll probably like you.
                    </HeaderText>
                </CenterContent>
            </Section>
        )
    }
}

export default LandingSection
