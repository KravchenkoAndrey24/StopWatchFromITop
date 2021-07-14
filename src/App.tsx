import React, { useState } from 'react';
import './App.css';
import Tick from './components/Tick';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


type UseStateType = {
  hours: number
  minutes: number
  seconds: number
}

function App() {
  
  const [state, setState] = useState<UseStateType>({hours: 0, minutes: 0, seconds: 0})  
  const [startOrStop, setStartOrStop] = useState<boolean>(false)
  const [wait, setWait] = useState<boolean>(false)



  const onChangeTick = () => {
    setState(prevState => {
      if(prevState.minutes === 4 && prevState.seconds === 4){
        return {...prevState, hours: prevState.hours +1, minutes: 0, seconds: 0}
      }
      if(prevState.seconds === 4){
        return {...prevState, minutes: prevState.minutes+1, seconds: 0}
      } 
      return {...prevState, seconds: prevState.seconds+1}
    })
  }

  const onClickStartOrStopButton = () => {
    if(wait){
      setStartOrStop(!startOrStop)
      setWait(false)
    } else if(startOrStop){
      setStartOrStop(!startOrStop)
      setState({hours: 0, minutes: 0, seconds: 0})
    } else {
      setState({hours: 0, minutes: 0, seconds: 0})
      setStartOrStop(!startOrStop)
    }
    
  }

  const onClickResetButton = () => {
    setState({hours: 0, minutes: 0, seconds: 0})
    setStartOrStop(true)
  }
  const onClickWaitButton = () => {
    setWait(true)
    setStartOrStop(false)
  }


  return (
    <div style={{'textAlign': 'center', 'margin': '20px'}}>
      <Button variant="contained" color="primary" onClick={()=>onClickStartOrStopButton()} style={{'margin': "10px"}}>
        {startOrStop ? 'Stop' : 'Start'}
      </Button>
      <Button variant="contained" color="primary" onClick={()=>onClickWaitButton()} style={{'margin': "10px"}}> 
        Wait
      </Button>
      <Button variant="contained" color="primary" onClick={()=>onClickResetButton()} style={{'margin': "10px"}}>
        Reset
      </Button>
      <Paper style={{'maxWidth': '10%', 'minWidth': '100px', 'margin': '10px auto'}}>
        {startOrStop ? <Tick state={state} setState={onChangeTick}/> : `${get2digitsSring(state.hours)}:${get2digitsSring(state.minutes)}:${get2digitsSring(state.seconds)}`}
      </Paper>
    </div>
  );
}

export default App;


export const get2digitsSring = (num: number) => num < 10 ? '0' + num : num;
