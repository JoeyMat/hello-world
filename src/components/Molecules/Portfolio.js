import React from 'react'
import styled from 'styled-components'
import cut1 from '../../../public/assets/images/WallCuts/cut1.jpg'
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

class Portfolio extends React.Component {
    render() {
        return(
            <Wrapper>
               <AwesomeSlider >
                   <div>
                   <Img src={cut1} />

                   </div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </AwesomeSlider>
            </Wrapper>
        )
    }
}

export default Portfolio