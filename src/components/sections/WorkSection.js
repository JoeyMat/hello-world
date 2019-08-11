import React from 'react'
import styled from 'styled-components'
import Section from '../Molecules/Section'
import TimeUI from '../Molecules/TimeUI'

class WorkSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Section>
                <p>Section 2</p>
                <TimeUI />
            </Section>
        )
    }
}

export default WorkSection
