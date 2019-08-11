import React from 'react'
import styled from 'styled-components'
import moment from 'moment-timezone'

const Wrapper = styled.div`
    background-color: yellow;
`

const Line = styled.div`
    position: absolute;
    width: 10px;
    height: 600px;
    margin-left: 20px;
    background-color: gray;
`
const Arrow = styled.div`
    position: absolute; 
    left: 40px; 
    width: 70px;
    height: 5px;
    background-color: black;
`

class TimeUI extends React.Component {
    constructor(props){
        super(props)
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(prevState => ({
          seconds: prevState.seconds + 1
        }));
        console.log(this.state.seconds)
      }

    componentDidMount() {
        const now = moment()
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
                <Arrow />
                <Line />
            </Wrapper>
        )
    }
}

export default TimeUI