import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import GameList from './GameList'
import Game from './Component/Game';
import Summary from './Component/Summary'

function App() {
  const { products: games } = GameList;
  const [item, updateCart] = useState([]);

  const addItem = (gameItem) => {
    const itemInCart = item.find(k => k.id === gameItem.id);
    if (itemInCart) {
      updateCart(item.map(x => x.id === gameItem.id ? {
        ...itemInCart, num: itemInCart.num + 1
      } : x));
    }
    else {
      updateCart([...item, { ...gameItem, num: 1 }])
    }
  }


  return (
    <div className="App">
      <div className="item">
        <div className="block col-2">
          <h1 className="title">Games</h1>
          <div className="item">
            {games.map((gameItem) => (
              <Game key={gameItem.id} gameItem={gameItem} addItem={addItem}></Game>
            ))}
          </div>
        </div>
        <Summary updateCart={updateCart} addItem={addItem} item={item}></Summary>
      </div>
    </div>
  );
}
export default App;
