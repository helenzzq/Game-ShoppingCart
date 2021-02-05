import React, { useState, useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Game from './Component/Game';
import Summary from './Component/Summary'
import Banner from './Component/Banner'
import background from './photo/background.jpg'
import { nanoid } from 'nanoid';


var LOCAL_STORAGE_KEY_FOR_CARTID = 'csc301-a1-cartId';
var CARTS_URL = 'https://szae6kjook.execute-api.ca-central-1.amazonaws.com/default/carts';
var ITEMS_URL = 'https://cbx468lra3.execute-api.ca-central-1.amazonaws.com/default/items';

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
// function getCartFromDB() {
//   // Get current cart id
//   let cartId;
//   cartId = localStorage.getItem(LOCAL_STORAGE_KEY_FOR_CARTID);
//   if (!cartId) {
//     cartId = generateID();
//     localStorage.setItem(LOCAL_STORAGE_KEY_FOR_CARTID, cartId)
//   }
//   console.log("cartId", cartId);

//   const url = CARTS_URL+'?cartId=' + cartId;
//   fetch(url, {
//     mode: "cors",
//     method: 'GET',
//   })
//     .then(res => {
//       return res.json();
//     })
//     .then(cart => {
//       console.log("cart", cart);
//     })
//     .catch(err => {
//       console.log("getCartFromDB", err);
//     });

// }

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
  console.log("cartId", cartId);
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

function generateDBCartItem(game, num) {
  const testItems = [{ count:num, itemId: game.id }];
  console.log(testItems);
  return (

    updateCartToDB(testItems)

  );
}


function App() {
  // const testItems = [{count:2, itemId: "_PI0GfYp"},{count: 3, itemId:"5U76ImCT"}];
  // const [dbItem, cartUpdation] = useState([]);
  const [games, setGame] = useState([]);
  const [item, updateCart] = useState([]);


  const SampleComponent = () => {
    useEffect(() => {
      getAllItemsFromDB()
    }, [])
    return (<div>foo</div>)
  }
  SampleComponent()
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
        setGame(items);
        console.log("items", items);
      })
      .catch(err => {
        console.log("getAllItemErr", err);
      });
  }
  const addItem = (gameItem) => {
    const itemInCart = item.find(k => k.id === gameItem.id);
    if (itemInCart) {
      updateCart(item.map(x => x.id === gameItem.id ? {
        ...itemInCart, num: itemInCart.num + 1
      } : x)
      );
      generateDBCartItem(gameItem, itemInCart.num);

    }
    else {
      updateCart([...item, { ...gameItem, num: 1 }])

    }
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, }}>
      <Banner></Banner>
      <div className="container">
        <div className="games">
          <h1 className="title">Hottest Sale</h1>
          <div className="item">
            {games.map((gameItem) => (
              <Game key={gameItem.id} gameItem={gameItem} addItem={addItem}></Game>
            ))}
          </div>
        </div>
        <Summary updateCart={updateCart} item={item} addItem={addItem} updateDB={updateCartToDB}></Summary>
      </div>
      <div className="foot">About Us/Contact Us/Join Us/
      <br></br>2021 Gamer Galaxy. All Rights Reseved.
      </div>

    </div>
  );
}
export default App;
