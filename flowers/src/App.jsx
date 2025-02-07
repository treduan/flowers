import "./App.css";

const Hello = (props) => {
  return (
    <div>
      <p>Hello world, {props.name}, {props.age}</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  return (
  <div className="App-header">
    <header>
      <h1>Reactin alkeet</h1>
    </header>
    <Hello name="Anna" age={b}/>
  </div>
)
}
export default App