import { useEffect, useState } from "react"
import {ToDoprovider} from "./context"
import TodoForm from "./components/ToDoform"
import TodoItem from "./components/ToDoItem"

function App() {

  const[todos,setToDos]=useState([])
  

  const addToDo=(todo)=>{
    setToDos((prev)=>[...prev, {id:Date.now(), ...todo}])
  }

  const updateToDo=(id, todo)=>{
    setToDos((prev)=> prev.map((prevToDo)=> (prevToDo.id === id ? todo : prevToDo)))
  }

  const toggleComplete=(id)=>{
    setToDos((prev)=>prev.map((prevToDo)=> prevToDo.id===id? {...prevToDo, completed: !prevToDo.completed} :prevToDo))
  }


  //create a new array for all the id that is not equal to the given id
  const deleteToDo=(id)=>{
    setToDos((prev)=> prev.filter((todo)=> todo.id!==id))
  }



  useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos") || "[]");

  if (todos.length > 0) {
    setToDos(todos);
  }
}, []);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
   <ToDoprovider value={{todos, addToDo, deleteToDo, updateToDo, toggleComplete }}>
      <h1 className='p-4 bg-yellow-200 text-5xl text-center text-black'> AAO JI AAP HI KA INTEZAR THA</h1>
      <br></br>
      <h1 className='p-4 bg-black text-5xl text-center text-orange-500'> Aaj hm ek to do list bnayenge</h1>

      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((todo)=>(
                    <div key={todo.id} className="w-full">
                      <TodoItem todo={todo}/>
                    </div>
                  )) }
              </div>
          </div>
      </div>
   </ToDoprovider>
  )
}

export default App
