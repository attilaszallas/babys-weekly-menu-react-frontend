
import React, { useState } from 'react';
import './App.css';

function Thursday() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem(){
    console.log(newItem);

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id){
    console.log(id);

    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App bg-pink-200 rounded">
      <h1 className='text-xl text-blue-700 font-bold h-10'>Thursday</h1>

      <input
        type="text"
        placeholder="Add new item ..."
        value={newItem}
        onChange={e=>setNewItem(e.target.value)}
        className='w-32 border-2 rounded'
      />

      <button onClick={()=>addItem()} className='bg-blue-500 text-white font-bold py-1 px-4 rounded'>Add</button>

      <ul>
        {items.map(item =>
          <li key={item.id}>{item.value} <button className='text-red-700' onClick={()=>deleteItem(item.id)}>X</button></li> 
          )}
      </ul>

    </div>
  );
}

export default Thursday;
