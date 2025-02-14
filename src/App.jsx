import { useState, useEffect } from "react";

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
    <div>
      <h1>To-DO APP USING MATERIAL UI</h1>
    </div>
  )
}

export default App
