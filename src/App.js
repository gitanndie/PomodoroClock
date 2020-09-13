import React from 'react';
import './App.css';
import BreakInterval from './components/BreakInterval';
import SessionLength from './components/SessionLength';
import Timer from './components/Timer';
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay: false
    };
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this); 
    this.onReset = this.onReset.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
  }
  onIncreaseBreakLength () {
    this.setState((prevState) => {
        return{
          breakLength: prevState.breakLength +1
        };
    });
  }
  onDecreaseBreakLength () {
    this.setState((prevState) => {
      return{
        breakLength: prevState.breakLength -1
      }
    })
  }
  onIncreaseSessionLength () {
    this.setState((prevState) => {
      return{
        sessionLength: prevState.sessionLength +1,
        timerMinute:  prevState.sessionLength +1,
      }
    })
  }
  onDecreaseSessionLength () {
    this.setState((prevState) => {
      return{
        sessionLength: prevState.sessionLength -1,
        timerMinute:  prevState.sessionLength -1,
      }
    })
  }
  onUpdateTimerMinute() {
    this.setState((prevState) => {
      return{
        timerMinute: prevState.timerMinute -1
      }
    }
    )
  }
  onToggleInterval(isSession) {
    if (isSession) {
    this.setState({
    timerMinute: this.state.sessionLength
    })
  } else{
    this.setState({
      timerMinute: this.state.breakLength
    })
  }
  }
  onReset () {
    this.setState({
      timerMinute: this.state.sessionLength
    })
  }
  onPlayStopTimer (isPlay){
    this.setState({
    isPlay: isPlay
    }) 
  }
  render () {
    return (
      <main className="App">
        <h2>Pomodoro Clock</h2>
      <section className="interval-length-container"> 
      <BreakInterval
      isPlay={this.state.isPlay}
      breakInterval={this.state.breakLength} 
      increaseBreak={this.onIncreaseBreakLength}
      decreaseBreak={this.onDecreaseBreakLength}/>
        <SessionLength 
        isPlay={this.state.isPlay}
        sessionLength={this.state.sessionLength}
        increaseLength={this.onIncreaseSessionLength}
        decreaseLength={this.onDecreaseSessionLength}/>
      </section>
      <Timer 
      timerMinute={this.state.timerMinute} breakLength={this.state.breakLength} 
      updateTimerMinute={this.onUpdateTimerMinute}
      toggleInterval={this.onToggleInterval}
      reset={this.onReset}
      onPlayStopTimer={this.onPlayStopTimer}/>
      </main>
    );
  }
}
export default App;
