import "./App.css";
import Courses from "./components/CourseInfo";
import Friends from "./components/Friends";
import {useState} from "react";


const App = () => {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  let normalCounter = 0;
  const course1 = {
  id: 1,
    teacher: "Tiina Partanen",
  course: "React",
  classroom: "S2041",
  material: "http://otredu.github.io"} 
  const course2 ={
  id: 2,  
    teacher: "Anna Metsäpelto",
  course: "PHP",
  classroom: "S2041",
  material: "http://treduan.github.io/treduan"} 
  const courses = [course1, course2];
  return (
  <div className="App-header">
    <header>
      <h1>Kurssit</h1>
    </header>
    <Friends />
    <div>
      {show&& <p>Näkyy!</p>}
      <button onClick={()=>setShow(!show)}>{show ? "Hide": "Show"}</button>
    </div>
    <div>
      <p>Counter: {counter}</p>
      <button onClick={()=>setCounter(counter+1)}>Counter</button>
      <p>Normal counter: {normalCounter}</p>
      <button onClick={()=>{normalCounter++; console.log(normalCounter);}}>Normal Counter</button>
    </div>
    <Courses 
      courses={courses}
    />
  </div>
)
}
export default App