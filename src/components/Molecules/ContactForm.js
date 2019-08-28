import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 2rem;
`

const Title = styled.h1`
    font-size: 2.4rem;
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-weight: normal;
`
class ContactForm extends React.Component {
    
    render(){
        return (
            <Wrapper>
                <Title>
                    Get in touch
                </Title>
            </Wrapper>
        )
    }
}

export default ContactForm 