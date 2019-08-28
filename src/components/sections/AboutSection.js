import React from 'react'
import styled from 'styled-components'
import Section from '../Molecules/Section'
import { Media } from 'react-breakpoints'
import ContactForm from '../Molecules/ContactForm'

import bgImage from '../../../public/assets/images/terwijdelines.jpg'

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
`
const ContentWrapperMobile = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
`

const LeftContent = styled.div`
    flex-basis: 50%;
    flex-shrink: 0;
    text-align: center;
    display: flex;
    row-direction: column;
    justify-content: center;
    align-items: center;
`

const RightContent = styled.div`
    flex-basis: 50%;
    flex-shrink: 0;
    text-align: center;
    display: flex;
    row-direction: column;
    justify-content: center;
    align-items: center;
`

const HeaderText = styled.h1`
    font-size: 5rem;
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-weight: normal;
`

const HeaderTextMobile = styled.h1`
    font-size: 2.4rem;
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-weight: normal;
`

const CenterWrapper = styled.div`
    padding: 8rem;
`

const CenterWrapperMobile = styled.div`
    padding: 2rem;
`

const AboutText = styled.p`
    text-align: justify;
    text-justify: inter-word;
    font-size: 1.7rem;
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-weight: normal;
    letter-spacing: 5px;
    line-height: 2.5rem;
    height: 100%;
`

const AboutTextMobile = styled.p`
    text-align: justify;
    text-justify: inter-word;
    font-size: 1.2rem;
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-weight: normal;
    line-height: 1.7rem;
`

class AboutSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const settings = {
            dots: true,
            slidesToShow: 3,
            centerMode: true,
          };

        return (
            <Section image={bgImage} darker={true}>
                <Media>
                {({ breakpoints, currentBreakpoint }) => {
                    if (breakpoints[currentBreakpoint] >= breakpoints.desktop) {
                        return (
                            <ContentWrapper>
                                <LeftContent>
                                    <CenterWrapper>
                                        <HeaderText>
                                            So who am I?
                                        </HeaderText>
                                        <AboutText>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </AboutText>
                                    </CenterWrapper>
                                </LeftContent>
                                <RightContent>
                                    <CenterWrapper>
                                        <ContactForm />
                                    </CenterWrapper>
                                </RightContent>
                            </ContentWrapper>)
                    } else {
                        return (
                            <ContentWrapperMobile>
                                <CenterWrapperMobile>
                                    <HeaderTextMobile>
                                        So who am I?
                                    </HeaderTextMobile>
                                    <AboutTextMobile>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </AboutTextMobile>
                                </CenterWrapperMobile>
                            </ContentWrapperMobile>
                        )  
                    }
                }}
                </Media>
            </Section>
        )
    }
}

export default AboutSection
