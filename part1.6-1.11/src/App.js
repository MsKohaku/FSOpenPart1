import React, { useState } from 'react'

// a proper place to define a component

const Statistic = (props) => (
  <>
  <tr>
    <td>{props.text}</td> 
    <td>{props.value}</td> 
    <td>{props.per}</td>
  </tr>
  </>
)


const Statistics = ({good, neutral, bad}) => {
  if ((good + neutral + bad) === 0) {
    return (
      <>
      <p>No feedback given</p>
      </>
    )
  }
    return (
      <>      
      <Statistic text="good" value ={good} />
      <Statistic text="neutral" value ={neutral} />
      <Statistic text="bad" value ={bad} />
      <Statistic text="all" value ={good + neutral + bad} />
      <Statistic text="average" value ={((good - bad)/(good + neutral + bad)).toFixed(1)} />
      <Statistic text="positive" value ={(100*(good)/(good + neutral + bad)).toFixed(1)} per = "%"/>
      </>  
    )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <table>
        <Statistics good={good} neutral ={neutral} bad={bad}/>
      </table>
    </div>
  )
}

export default App