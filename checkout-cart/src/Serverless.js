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


export {generateID, getCartFromDB, updateCartToDB, getAllItemsFromDB};