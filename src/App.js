import { useState } from 'react'

const Total =(props) => {
  return(
    <p> Sum {props.total}</p>
  )
}

const Average = (props) => {
  return(
    <p>Average {props.average}</p>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [badM, setBadM] = useState(0)

  const Minus = () =>{
    setBad(bad + 1)
    setBadM(badM - 1) 
  }

  const totalt = (good + neutral + bad)

  const Positiv =(props) =>{
    return(
      <p>Positive feedback {props.positiv}  %</p>
    )
  }

  return (
    <div>
      <div>
      <h1>Give feedback</h1>
      <button onClick={() =>setGood(good + 1)}>Good</button>
      <button onClick={() =>setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={Minus}>Bad</button>
      </div>

      <div>
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>

        <Total total={totalt}/>
        <Average average={(good+badM)/(totalt)}/>
        <Positiv positiv={(good/totalt)*100} /> 

      </div>
    </div>


  )
}

export default App