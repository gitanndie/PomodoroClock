import React, { Component } from 'react'
export default class Timer extends Component {
    constructor() {
        super();
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0
        };
        this.play = this.play.bind(this); 
        this.decreaseTimer = this.decreaseTimer.bind(this); 
        this.stop = this.stop.bind(this); 
        this.reset = this.reset.bind(this); 
    }
    play() {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onPlayStopTimer(true);
        this.setState({
            intervalId: intervalId
        })
    }
    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                if (this.state.isSession){
                    this.setState({
                    isSession: false
                    });
                    this.props.toggleInterval(this.state.isSession);
                }else {
                    this.setState({
                        isSession: true
                    });
                    this.props.toggleInterval(this.state.isSession);
                }
                } else {
                this.props.updateTimerMinute() 
                this.setState({
                    timerSecond: 59
                }) 
                }
                break;
                default:
                this.setState ((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond -1
                    }
                })
                break;
        }
    }
        stop(){
            clearInterval(this.state.intervalId); 
            this.props.onPlayStopTimer(false);
        }
        reset (){
            this.stop();
            this.props.reset(); 
            this.props.onPlayStopTimer(false);
            this.setState({
            timerSecond: 0
        })
    }
    render() {
        return (
            <div>
                <article className="timer-container">
                    <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
                    <span className="timer">{this.props.timerMinute}</span>
                    <span className="timer">:</span>
                    <span className="timer">{this.state.timerSecond === 0
                        ? "00" : this.state.timerSecond < 10 ? "0" + this.state.timerSecond
                            : this.state.timerSecond}</span>
                </article>
                <article className="timer-actions">
                    <button onClick={this.play}>Empezar</button>
                    <button onClick={this.stop}>Parar</button>
                    <button onClick={this.reset}>Borrar</button> 
                </article>
            </div>
        )
    }
}
