import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import GameList from './GameList'
import Game from './Component/Game';
import Summary from './Component/Summary'
import Banner from './Component/Banner'
import background from './photo/background.jpg'
import { nanoid } from 'nanoid';

var lsKeyForCartId = 'csc301-a1-cartId';

function generateID() {
  return nanoid(8);
}

/**
 * Return cart from db, an array of items and count,
 * model:
 * [
 *  {
 *   itemId: string,
 *   count: Number
 *  }
 * ]
 */
function getCartFromDB() {
    // Get current cart id
    let cartId;
    cartId = localStorage.getItem(lsKeyForCartId);
    if (!cartId) {
      cartId = generateID();
      localStorage.setItem(lsKeyForCartId, cartId)
    }
    console.log("cartId", cartId);

    const url = 'https://szae6kjook.execute-api.ca-central-1.amazonaws.com/default/carts?cartId=' + cartId;
    fetch(url, {
      mode: "cors",
      method: 'GET',
    })
    .then(res => {
      return res.json();
    })
    .then(cart => {
      // TODO: Put data into games
      console.log("cart", cart);
    })
    .catch(err => {
      console.log("getCartFromDB", err);
    });
    
}

/**
 * Example
    items = [{count:2, itemId: "_PI0GfYp"},{count: 3, itemId:"5U76ImCT"}]
 */
function updateCartToDB(items) {
      // Get current cart id
      let cartId;
      cartId = localStorage.getItem(lsKeyForCartId);
      if (!cartId) {
        cartId = generateID();
        localStorage.setItem(lsKeyForCartId, cartId)
      }
      console.log("cartId", cartId);
  
      const url = 'https://szae6kjook.execute-api.ca-central-1.amazonaws.com/default/carts';
      fetch(url, {
        mode: "cors",
        method: 'PUT',
        body: JSON.stringify({
          cartId: cartId,
          items: items
        })
      })
      .then(res => {
        return res.json();
      })
      .then(cart => {
        // TODO: update user cart
        console.log("update", cart);
      })
      .catch(err => {
        console.log("updateCartToDB", err);
      });
}

// // componentDidMount
// useEffect(getAllItemsFromDB, []);

/**
 * Return array of items from database,
 * follows the following model:
 * [
 *  {
 *   id: string,
 *   image: string,
 *   name: string,
 *   price: Number
 *  }
 * ]
 */
function getAllItemsFromDB() {
    const url = 'https://cbx468lra3.execute-api.ca-central-1.amazonaws.com/default/items';
    fetch(url, {
      mode: "cors",
      method: 'GET',
    })
    .then(res => {
      return res.json();
    })
    .then(items => {
      // TODO: Put data into games
      console.log("items", items);
    })
    .catch(err => {
      console.log("getAllItemErr", err);
    });
}



function App() {
  // const testItems = [{count:2, itemId: "_PI0GfYp"},{count: 3, itemId:"5U76ImCT"}];
  // updateCartToDB(testItems);
  getAllItemsFromDB();
  getCartFromDB();

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
        <Summary updateCart={updateCart} item={item}></Summary>
      </div>
    </div>
  );
}
export default App;
