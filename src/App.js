import { useState } from 'react'

const Button = ({onClick, text}) =>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine= ({text, value}) =>{
  return(
    <p>{text} {value}</p>
  )
}

const Statistics = (props) => {

  const total = props.good + props.neutral + props.bad
  const average = ((props.good - props.bad)/total)
  const prosent =((props.good/total)*100)

  if(total >0){
    return(

      <div>
        <StatisticLine text="Good" value ={props.good} />
        <StatisticLine text="Neutral" value ={props.neutral} />
        <StatisticLine text="Bad" value ={props.bad} />
        <StatisticLine text="Total" value ={total} />
        <StatisticLine text="Average" value ={average} />
        <StatisticLine text="Prosent" value ={prosent} />
      </div>
  
    )
  }
  else{
    return(
      <div>
      <h2>No feedback has been given</h2>
    </div>
    )
   
  }

  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increment = (state,setState) =>() => setState(state +1)


  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={increment(good,setGood)} text="Good"/>
      <Button onClick={increment(neutral,setNeutral)} text="Neutral"/>
      <Button onClick={increment(bad,setBad)} text="Bad"/>
      <h2>Stastistics</h2>
    <Statistics good={good} neutral={neutral} bad={bad} />
  
    </div>
  )
}

export default App