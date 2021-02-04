import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import GameList from './GameList'
import Game from './Component/Game';
import Summary from './Component/Summary'
import Banner from './Component/Banner'
import background from './photo/background.jpg'

// class fetch extends Component{
//     componentDidMount(){
//     fetch(API + DEFAULT_QUERY)
//       .then(response => response.json())
//       .then();
//   }
//   componentDidUpdate(props) {
//     //Pass in the quantity of this item in the cart and the item id
//       const {id , num} = props;
//     // submit update to database
//       updateDataBase();
//   }
//     updateDataBase(props) {

//   }

//   function getDataBase() {

//     // Array of items
//     return [];
//   }

// }

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
        <Summary updateCart={updateCart} item={item} addItem={addItem}></Summary>
      </div>
    </div>
  );
}
export default App;
