const Header = (props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content =(props) =>{
  return(
    <div>
      <Part part={props.part1}/>
      <Part part={props.part2}/>
      <Part part={props.part3}/>
    </div>
  )
}

const Total =(props) =>{
  return(
    <div>
      <p>Total Hours {props.total} </p>
    </div>
  )
}

const Part = (props) =>{
  return(
    <div>
      <p>
        {props.part.name} with {props.part.exercises} hours
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content
      part1={parts[0]} 
      part2={parts[1]}
      part3={parts[2]}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises }/>
    </div>
  )
}

export default App