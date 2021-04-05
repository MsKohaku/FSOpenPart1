import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Winner = ({anecdote, scores}) => {
  if (scores.reduce((a, b) => a + b, 0) > 0){
    const win = scores.indexOf(Math.max(...scores))
    return (
      <>
        <body>{anecdote[win]}</body>
        <body>has {scores[win]} votes</body>
      </>
    )
  } else {
    return (
      <>
      <body>No votes yet.</body>
      </>
    )
  }
  
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const voting = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }
  

  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <body>{anecdotes[selected]}</body>
      <body>has {vote[selected]} votes</body>
      <Button handleClick={voting} text="vote"/>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * 6))} text="next anecdote"/>            
      <h1>Anecdote with the most votes</h1>      
      <Winner anecdote={anecdotes} scores={vote}/>
    </div>
  )
}

export default App