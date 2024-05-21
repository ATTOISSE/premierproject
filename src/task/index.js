import { useState } from 'react';

function Task() {
    const [newTask,setNewTask] = useState('');
    const  [tasks,setTasks] = useState([]);

    const addTask = ()=>{
        if (newTask.trim() != '') {
            setTasks([...tasks,newTask])
            setNewTask('')
        }
    }

 const removeTask = (id)=>{
const updateTasks = [...tasks]
    updateTasks.splice(id,1);
    setTasks(updateTasks)
    }
  return (
    <div className='container col-md-8'>
      <h1>La liste des tâche</h1>
      <input type="text" value={newTask} onChange={(e)=> setNewTask(e.target.value)} className='form-control  mx-2' />
      <button onClick={addTask} className='btn btn-outline-primary mt-3'>Ajouter</button>
      <hr/>
      <ul>
        {
           
            tasks.map((task,index)=>(
                <li key={index}>{task} <button onClick={()=>removeTask(index)}> remove</button> </li>
            ))
        }
      </ul>
    </div>
  );
}

export default Task;
