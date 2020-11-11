import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }


    tick = () => {
        this.setState({ time: new Date() })
    }


    componentDidMount(){
        this.interval = setInterval(this.tick, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }




    render() {
        const hours = this.state.time.getHours()
        const minutes = this.state.time.getMinutes()
        const seconds = this.state.time.getSeconds()
        return (

            <div className='Clock'>
                <h1>Clock</h1>
                <h2 className='time'>Time</h2>
                <p>
                {hours}:{minutes}:{seconds} PDT
                </p>

            
            </div>
            

        )
    }



}




export default Clock;