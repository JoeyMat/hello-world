import React from 'react'
import styled from 'styled-components'
import moment from 'moment-timezone'
import { colors } from '../../constants/colors'

const Wrapper = styled.div`
    position: absolute;
    width: 200px;
    height: 100%;
`

const Line = styled.div`
    position: relative;
    width: 5px;
    height: 100%;
    top: -5%;
    margin-left: 40px;
    background-color: black;
` 

const WhiteLine = styled.div`
    position: relative;
    width: 5px;
    height: 5%;
    top: -5%;
    margin-left: 40px;
    background-color: white;
` 

const Arrow = styled.div`
    position: absolute; 
    left: 5px; 
    width: 70px;
    height: 5px;
    top: calc(${props => props.position ? props.position : 5}% - 2.5px);
    background-color: ${colors.sectionBackground};
    font-size: 0.8rem;
    z-index: 5;
`

const BeginIndicator = styled.p`
    position: absolute;
    top: 5%;
    left: 48px;
`

const EndIndicator = styled.p`
    position: absolute;
    bottom: 5%;
    left: 48px;
`

class TimeUI extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            seconds: 0,
            position: 0,
         };
    }

    tick() {
        this.setState(prevState => ({
          seconds: prevState.seconds + 1,
        }), () => {
            this.setState(prevState => ({
                position: (((this.state.seconds / 864) / 100) * 90),
              }))
        });
        
      }

    componentDidMount() {
        const now = moment().add(1, 'hours')
        const beginDay = moment.utc().startOf('day')
        const elapsedTime = now.diff(beginDay, 'seconds')
        this.setState({
            seconds: elapsedTime
        });
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }

    render() {
        return (
            <Wrapper>
                <Arrow position={this.state.position}>
                    {moment().startOf('day').seconds(this.state.seconds).format('HH:mm')}    
                </Arrow>
                <WhiteLine />
                <BeginIndicator>
                    00:00
                </BeginIndicator>
                <Line />
                <EndIndicator>
                    23:59
                </EndIndicator>
                <WhiteLine />
            </Wrapper>
        )
    }
}

export default TimeUI