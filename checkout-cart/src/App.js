import React, { useState, useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Item from './Component/Item'

const INIT_ITEMS = [
  {
    text: 'Apple'
  },
  {
    text: 'Banana'
  },
  {
    text: 'Carrot'
  }
]


function ItemForm({ addItem }) {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addItem(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        className="input"
        onChange={(e) => {setValue(e.target.value)}}
      />
        
    </form>
  )
}

function App () {
  const localItems = JSON.parse(localStorage.getItem('items'));
  const [items, setItems] = useState(localItems || INIT_ITEMS);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items])

  const addItem = text => {
    const newItems = [{ text }, ...items];
    setItems(newItems);
  };

  const removeItem = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="app">
      <div className="cart-list">
        <ItemForm addItem={addItem} />
        {
          items.map((v, index) => (
            <Item
              key={v.text} 
              item={v} 
              index={index} 
              removeItem={removeItem}
            />
          ))
        }
      </div>
    </div>
  )
}
export default App;
