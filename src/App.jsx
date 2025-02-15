import { useState, useEffect } from "react";
import classes from './styles.module.css'
import ToDoItem from "./components/todo-item";

function App() {

  const [toDoList , setToDoList] = useState([]);
  const [loading , setLoading] = useState(false);
  const [errorMsg , setErrorMsg] = useState('');
  async function fetchToDoList(){
    try{
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const response = await apiResponse.json();

      if(response?.todos && response?.todos?.length > 0){
        setToDoList(response?.todos);
        setLoading(false);
        setErrorMsg('');
      }
      else{
        setToDoList([]);
        setLoading(false);
        setErrorMsg('');
      }
    } catch(err){
      setToDoList([]);
      setErrorMsg('Error has occured');
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchToDoList();
  } , [])

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>To-DO APP USING MATERIAL UI</h1>
      <div className={classes.toDoListWrapper}>
        {
          toDoList.map((toDoItem) => {
            return <ToDoItem todo = {toDoItem}/>
          })
        }
      </div>
    </div>
  )
}

export default App
