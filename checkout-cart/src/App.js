import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import GameList from './GameList'
import Game from './Component/Game';
import Summary from './Component/Summary'

function App () {

  const { products: games } = GameList;
  const [ItemInCart, setCartItems] = useState([]);
  const addItem = (product) => {
    const exist = ItemInCart.find(x => x.id === product.id);
    if (exist) {
      setCartItems(ItemInCart.map(x => x.id === product.id ? {
        ...exist, qty: exist.qty + 1
      } : x));
    }
    else {
      setCartItems([...ItemInCart,{...product,qty:1}])
    }
  }
  
  return ( 
    <div className="App">
      <div className="entry">
      <div className="block1">
      <h1>Games</h1>
      <div className="entry">
        {games.map((gameItem) => (
          <Game key={gameItem.id} product={gameItem} addItem={addItem}></Game>
        ))}
      </div>
        </div>
        <Summary addItem={addItem} ItemInCart = {ItemInCart}></Summary>
        </div>
    </div>
  );
}
export default App;
