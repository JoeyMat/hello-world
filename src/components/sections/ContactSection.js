import React from 'react'
import styled from 'styled-components'
import Section from '../Molecules/Section'
import bgImage from '../../../public/assets/images/stoelflat.jpg'
import Header from '../Molecules/Header'
import { connect } from 'react-redux'
import ContactForm from '../Molecules/ContactForm'

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

class ContactSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Section image={bgImage} darker={true}>
                <CenterContent>
                    <ContactForm />
                </CenterContent>
            </Section>
        )
    }
}

const mapStateToProps = state => {
    return {
        menuClicks: state
    }
}


export default connect(mapStateToProps, null)(ContactSection)
