import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import GameList from './GameList'
import Game from './Component/Game';
import Summary from './Component/Summary'
import Banner from './Component/Banner'
import background from './photo/background.jpg'

function App() {
  const { games } = GameList;
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



// componentDidMount() {
//   // use react set state to add items to local cart
//   this.setState({
//     product: getDataBase()
//   })
// }

// componentDidUpdate(props) {
//   const 
//   // submit update to database
    // updateDataBase();
// }

// function updateDataBase(item) {

// }

// function getDataBase() {

//   // Array of items
//   return [];
// }


  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, }}>

      <div><Banner></Banner></div>
      <div className="container">
        <div className="games">
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
