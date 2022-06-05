// import logo from './logo.svg';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import './app.css';
import {Todo} from "./Todo";
import {Todolist} from "./Todolist";

// import {TodoForm} from "./TodoForm"; // if we exports it like exports const fn = ()=> {body of function goes on}

// function List(){

// }
function App() {


  //mai bhi ambani code
  // const [num ,setNum] = useState(0);

  // const [total, setTotal]= useState(4);

  // const add = ()=>{
  //   if (total>0) {setNum(num+1);setTotal(total-1);}
  // }

  // const sub = ()=>{
  //   if(num>0){ setNum(num-1);
  //     if (total<40000) setTotal(total+1);
  //   }
  // };

  // return(
  //   <>
  //   <button onClick={()=>add()}>+</button>
  //   <input type = "text" value={num}></input>
  //   <button onClick={()=> sub()}>-</button>
  //   <h1>total : {total}</h1>
  //   </>
  // );



  // let tempTasks = localStorage.getItem('tasks');
//   console.log(tempTasks);
//   setTasks(JSON.parse(tempTasks));
// }, []);

// useEffect(()=> {
//   let tempTasks = localStorage.getItem('tasks');
// //   console.log(tempTasks);
//   setTasks(JSON.parse(tempTasks));
// });
// useEffect(()=> {
//   let tempTasks = localStorage.getItem('tasks');
//   console.log(tempTasks);
//   setTasks(JSON.parse(tempTasks));
// }, tasks);



  //todo list 


  const [text, setText]= useState("");
  const [taskar, setTasks]= useState([]);

  const taskvaluechange = (v) => setText(v);

  const addTask = ()=>{
    setTasks([...taskar, {id:nanoid(),name:text, status:0}]);
    setText("");
  }
    const deletetask = (id) =>{
      const newarr= taskar.filter(val => id!==val.id);
      setTasks(newarr);
    }
  return (
    <div className="card">
      <div className='ccard'>
          <Todo text = {text} addTask={addTask} taskvaluechange={taskvaluechange}/>
          <Todolist taskar={taskar} deletetask={deletetask}/>
      </div>
    </div>
  );


  
}

export default App;
