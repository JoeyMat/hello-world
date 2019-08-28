import React from "react"
import styled from 'styled-components'
import '../../global.css'
import Menu from '../Molecules/Menu'
import { connect } from 'react-redux'
import LandingSection from '../sections/LandingSection'
import WorkSection from "../sections/WorkSection"
import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'
import { Media } from 'react-breakpoints'
import scrollToComponent from 'react-scroll-to-component';

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
        this.myRef = React.createRef();
    }

    menuHandler = () => {
       this.setState(prevState => ({
           menuOpen: !prevState.menuOpen
       }))
    }

    scrollHandler = (nameSection) => {
       console.log(nameSection)
        scrollToComponent(this.myRef.current, {
            duration: 2000,
            ease: "inOutExpo"
        });
    }

    render(){
        return (
            <Main>
                <Menu />
                <LandingSection scrollHandler={this.scrollHandler} />
                <WorkSection className='work' ref={this.myRef} scrollHandler={this.scrollHandler} />
                <AboutSection />
                <Media>
                    {({ breakpoints, currentBreakpoint }) => {
                        if (breakpoints[currentBreakpoint] < breakpoints.desktop) {
                            return <ContactSection /> 
                        }
                    }}
                </Media>
            </Main>
        )
    }
}

export default connect(null, null)(MainLayout)