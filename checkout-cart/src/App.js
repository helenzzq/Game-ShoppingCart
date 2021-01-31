import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import GameList from './GameList'
import Game from './Component/Game';
import Summary from './Component/Summary'
import Banner from './Component/Banner'
import background from './photo/background.jpg'
import addItem from './Component/Summary'

function App() {
  const { games } = GameList;
  const [item, updateCart] = useState([]);

  // function componentDidMount(){
  //   fetch(API + DEFAULT_QUERY)
  //     .then(response => response.json())
  //     .then();
  // }
// componentDidUpdate(props) {
//   const 
//   // submit update to database
    // updateDataBase();
// }
  function updateDataBase(props) {
  //Pass in the quantity of this item in the cart and the item id
    const {id , num} = props;
}

// function getDataBase() {

//   // Array of items
//   return [];
// }


  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, }}>

      <div><Banner></Banner></div>
      <div className="container">
        <div className="games">
          <h1 className="title">Hottest Sale</h1>
          <div className="item">
            {games.map((gameItem) => (
              <Game key={gameItem.id} gameItem={gameItem} addItem={addItem}></Game>
            ))}
          </div>
        </div>
        <Summary updateCart={updateCart} item={item}></Summary>
      </div>
    </div>
  );
}
export default App;
