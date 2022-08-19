import { useState } from 'react'

const Button = ({onClick, text}) =>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}


const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = ((good - bad)/total)
  const prosent =((good/total)*100)
  return(

    <div>
      <h1>Statistics</h1>

    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>
    <p>Total {total}</p>
    <p>Average {average}</p>
    <p>Prosent {prosent} %</p>
    </div>

  )
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
    <Statistics good={good} neutral={neutral} bad={bad}/>
  
    </div>
  )
}

export default App