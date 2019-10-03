import React from 'react'
import styled from 'styled-components'
import cut1 from '../../../public/assets/images/WallCuts/cut1.jpg'
import cut2 from '../../../public/assets/images/WallCuts/cut2.jpg'
import test from '../../../public/assets/images/content3/terwijdelines.jpg'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

import { category1 } from '../../helpers/images'
import { category2 } from '../../helpers/images'
import { category3 } from '../../helpers/images'

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
        if (this.props.currentCategory !== prevProps.currentCategory) {
            this.changeContent()
        }
    }

    changeContent() {
        if (this.props.currentCategory && this.props.currentCategory === 1) {
            this.setState({ content: { category1 } })
        } else if (this.props.currentCategory && this.props.currentCategory === 2) {
            this.setState({ content: { category2 } })
        } else {
            console.log(category3)
            this.setState({ content: { category3 } })
        }
    }


    render() {
        console.log(test)
        {
            this.state.content && this.state.content['category' + this.props.currentCategory] && this.state.content['category' + this.props.currentCategory].map((image) => {
                console.log(<Img src={image.src} />)
            })
        }
        return (
            <Wrapper>
                {this.state.content !== null &&
                    <AwesomeSlider >
                        {
                            this.state.content && this.state.content['category' + this.props.currentCategory] && this.state.content['category' + this.props.currentCategory].map((image) => {
                                console.log(require(image.src))
                                return (
                                    <Img src={require(image.src)} />
                                )
                            })
                        }
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