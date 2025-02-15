import { useState, useEffect } from "react";
import classes from './styles.module.css'
import ToDoItem from "./components/todo-item";
import ToDoDetails from "./components/todo-details";

function App() {

  const [toDoList , setToDoList] = useState([]);
  const [loading , setLoading] = useState(false);
  const [errorMsg , setErrorMsg] = useState('');
  const [toDoDetails , setToDoDetails] = useState(null);
  const [openDialoag , setOpenDialog] = useState(false);


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


  async function fetchDetailsOfCurrentToDo(getCurrentToDoId) {
    try{
        const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentToDoId}`)
        const details = await apiResponse.json();
        if(details){
          setToDoDetails(details);
          setOpenDialog(true);
          
        }
        else{
          setToDoDetails(details);
          setOpenDialog(false);
        }
    } catch(error){
      setToDoDetails(null);
      setOpenDialog(false);
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
            return <ToDoItem todo = {toDoItem} fetchDetailsOfCurrentToDo={fetchDetailsOfCurrentToDo}/>
          })
        }
      </div>
      <ToDoDetails openDialog={openDialoag} toDoDetails={toDoDetails} setOpenDialog = {setOpenDialog}/>
    </div>
  )
}

export default App
