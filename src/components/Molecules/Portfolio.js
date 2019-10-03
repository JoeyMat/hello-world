import React from 'react'
import styled from 'styled-components'
import cut1 from '../../../public/assets/images/WallCuts/cut1.jpg'
import cut2 from '../../../public/assets/images/WallCuts/cut2.jpg'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Wrapper = styled.div`
    width: 70%;
    height: 70%;
    display:flex;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    align-self: center;
    z-index: 5;

    :hover {
        cursor: pointer;
    }
`

// dynamisch maken van AwesomeSlider
// Content regelen in de Portfolio module


class Portfolio extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            content: null
        }

    }

    componentDidUpdate(prevProps) {
        if (this.props.currentCategory !== prevProps.currentCategory)
        {
            this.changeContent()
        }
    }

    changeContent(){
        if (this.props.currentCategory &&  this.props.currentCategory === 1) {
           this.setState({ content: cut1})
        } else {
            this.setState({ content: cut2})
        }
    }

    render() {
        return(
            <Wrapper>
                {this.state.content !== null &&
                    <AwesomeSlider >
                    <div>
                        <Img src={this.state.content} />
                    </div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </AwesomeSlider>
                }
            </Wrapper>
        )
    }
}

export default Portfolio