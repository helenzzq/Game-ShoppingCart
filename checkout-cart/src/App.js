import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import GameList from './GameList'
import Game from './Component/Game';
import Summary from './Component/Summary'

function App () {

  const { products: games } = GameList;
  const [item, setCartItems] = useState([]);
  const deleteItem = (product) => {
    const exist = item.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      removeAll(product)
    } else {
      setCartItems(
        item.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const removeAll = (product) => {
    setCartItems(item.filter((x) => x.id !== product.id));
  }

  const addItem = (product) => {
    const exist = item.find(x => x.id === product.id);
    if (exist) {
      setCartItems(item.map(x => x.id === product.id ? {
        ...exist, qty: exist.qty + 1
      } : x));
    }
    else {
      setCartItems([...item,{...product,qty:1}])
    }
  }


  return ( 
    <div className="App">
      <div className="row">
      <div className="block col-2">
      <h1 className="title">Games</h1>
      <div className="row">
        {games.map((gameItem) => (
          <Game key={gameItem.id} product={gameItem} addItem={addItem}></Game>
        ))}
      </div>
        </div>
        <Summary deleteItem={deleteItem} removeAll={removeAll} addItem={addItem} item = {item}></Summary>
        </div>
    </div>
  );
}
export default App;
