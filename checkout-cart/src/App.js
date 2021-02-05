import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import GameList from './GameList'
import Game from './Component/Game';
import Summary from './Component/Summary'
import Banner from './Component/Banner'
import background from './photo/background.jpg'
import { nanoid } from 'nanoid';

var LOCAL_STORAGE_KEY_FOR_CARTID = 'csc301-a1-cartId';
var CARTS_URL = 'https://szae6kjook.execute-api.ca-central-1.amazonaws.com/default/carts';
var ITEMS_URL = 'https://cbx468lra3.execute-api.ca-central-1.amazonaws.com/default/items';

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
    cartId = localStorage.getItem(LOCAL_STORAGE_KEY_FOR_CARTID);
    if (!cartId) {
      cartId = generateID();
      localStorage.setItem(LOCAL_STORAGE_KEY_FOR_CARTID, cartId)
    }
    console.log("cartId", cartId);

    const url = CARTS_URL + '?cartId=' + cartId;
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
      cartId = localStorage.getItem(LOCAL_STORAGE_KEY_FOR_CARTID);
      if (!cartId) {
        cartId = generateID();
        localStorage.setItem(LOCAL_STORAGE_KEY_FOR_CARTID, cartId)
      }
      const url = CARTS_URL;
      fetch(url, {
        mode: "cors",
        method: 'PUT',
        body: JSON.stringify({
          cartId: cartId,
          items: items
        })
      })
      .then(res => {
        console.log("updateCartToDB", res.status);
      })
      .catch(err => {
        console.log("updateCartToDB", err);
      });
}

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
    const url = ITEMS_URL;
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

function generateID() {
    return nanoid(8);
}
  


function App() {
  const testItems = [{count:4, itemId: "_PI0GfYp"},{count: 4, itemId:"5U76ImCT"}];
  updateCartToDB(testItems);
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
        <Summary updateCart={updateCart} item={item} addItem={addItem}></Summary>
      </div>
      <div className="foot">About Us/Contact Us/Join Us/
      <br></br>2021 Gamer Galaxy. All Rights Reseved. 
      </div>

    </div>
  );
}
export default App;
