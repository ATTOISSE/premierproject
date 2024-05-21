
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './form/index.js';
import List from './list/index.js';
import { useEffect, useState } from 'react';
function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    const init = [
      {
        id : 1,
        nom : 'SYLLAH',
        prenom : 'Mame diarra',
        age : 20
      },
      {
        id : 2,
        nom : 'DIALLO',
        prenom : 'SAIKOU OUMAR',
        age : 22
      }
    ];
    setUsers(init)
  },[])

  const addUser = (user)=>{
    setUsers([...users,{id:users.length+1,...user}])
  }
  const removeUser = (id)=>{
    console.log(id);
    const updateUser = [...users]
    setUsers(updateUser.filter(user=>user.id !=  id))
}
  return (
    <div>
      <List usersList={users} removeUser={removeUser} />
      <Form addUser={addUser} />
    </div>
    
  );
}

export default App;

