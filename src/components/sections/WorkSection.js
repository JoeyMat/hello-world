import React from 'react'
import styled from 'styled-components'
import Section from '../Molecules/Section'
import TimeUI from '../Molecules/TimeUI'
import downArrow from '../../../public/assets/images/arrowDown.svg'
import Portfolio from '../Molecules/Portfolio'

const WorkWrapper = styled.div `
    position: relative;
    height: 100%;
    display: flex;
    flex-grow: 1;
    // margin-left: 130px;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    bottom: 1%;
    align-self: center;
    z-index: 5;
    opacity: 0.8;
    background-color:green;

    :hover {
        cursor: pointer;
    }
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
` 

class WorkSection extends React.Component {
    constructor(props) {    
        super(props)

        this.state = {
            category: 1,
        }
        this.changeCategory = this.changeCategory.bind(this)
    }

    changeCategory(currentCategory) {
        if (currentCategory) {
            this.setState({
                category: currentCategory,
              })
        }
    }

    render() {
        return (
            <Section>
                <Wrapper>
                    <TimeUI changeCategory={this.changeCategory} />
                    <WorkWrapper>
                        <Portfolio currentCategory={this.state.category}/>
                        {/* <Img src={downArrow} onClick={() => this.props.scrollHandler("work")} /> */}
                    </WorkWrapper>
                </Wrapper>
            </Section>
        )
    }
}

export default WorkSection
