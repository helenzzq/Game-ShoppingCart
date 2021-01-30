import React, { useState, useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import GameList from './GameList'
import Game from './Component/Game';
import Summary from './Component/Summary'
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
  // const localItems = JSON.parse(localStorage.getItem('items'));
  // const [items, setItems] = useState(localItems || INIT_ITEMS);

  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(items));
  // }, [items])

  // const addItem = text => {
  //   const newItems = [{ text }, ...items];
  //   setItems(newItems);
  // };

  // const removeItem = (e, index) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const newItems = [...items];
  //   newItems.splice(index, 1);
  //   setItems(newItems);
  // };
  const { products: games } = GameList;
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <div className="entry">
      <div className="block1">
      <h1>Games</h1>
      <div className="entry">
        {games.map((gameItem) => (
          <Game key={gameItem.id} product={gameItem}></Game>
        ))}
      </div>
        </div>
        <Summary></Summary>
        </div>
    </div>
  );
}
export default App;
