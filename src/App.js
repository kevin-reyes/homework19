import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Axios from 'axios';

function App() {

  const [input, setInput] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(()=>{
    Axios.get('https://randomuser.me/api/?results=200&nat=us').then(res=>{setFilteredUsers(res.data.results); setUsers(res.data.results)})
  }, [])

const handleFilter = (val)=>{
const filtered = users.filter(user=> user.name.first.toLowerCase().includes(val) || user.name.last.toLowerCase().includes(val) ||
user.email.toLowerCase().includes(val) || user.phone.includes(val))
setFilteredUsers(filtered);
}

  
  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <input className='form-control' placeholder='Search' onChange={(e)=>handleFilter(e.target.value.toLowerCase())}/>
      <Table users={filteredUsers}/>
    </div>
  );
}

export default App;
