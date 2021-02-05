const axios = require( "axios");
const { nanoid } = require( "nanoid");
const assert = require('assert').strict;


var CARTS_URL = 'https://szae6kjook.execute-api.ca-central-1.amazonaws.com/default/carts';
var ITEMS_URL = 'https://cbx468lra3.execute-api.ca-central-1.amazonaws.com/default/items';

const testItems = [{count:4, itemId: "_PI0GfYp"},{count: 4, itemId:"5U76ImCT"}];
const testCartId = "test_" + nanoid(10);

testGetAllItemsShouldNotBeEmpty();
testUpdateCartThenGetCartShouldNotBeEmpty();

function testGetAllItemsShouldNotBeEmpty() {
    const url = ITEMS_URL;
    axios.get(url)
    .then(res => {
        assert.ok(res);
        console.log("testGetAllItemsShouldNotBeEmpty", res.statusText)
    })
    .catch(err => {
        console.error("error", err)
        process.exit(1);
    });
}

async function testGetCardShouldNotBeEmpty() {
    const url = CARTS_URL + "?cartId=" + testCartId;
    try {
        const res = await axios.get(url);
        console.log("testGetCardShouldNotBeEmpty", res.statusText);
    } catch(err) {
        throw new Error(err);
    }
}

async function testUpdateCartShouldSuccess() {
    const url = CARTS_URL;
    try {        
        const res = await axios.put(url, {
                        cartId: testCartId,
                        items: testItems
                    });
        console.log("testUpdateCartShouldSuccess", res.statusText);
    } catch(err) {
        console.error("error", err)
        process.exit(1);
    }

}

async function testUpdateCartThenGetCartShouldNotBeEmpty() {
    try {
        await testUpdateCartShouldSuccess();
        await testGetCardShouldNotBeEmpty();
        
        // setTimeout(, 60000);
        // await testGetCardShouldNotBeEmpty();        
    } catch(err) {
        // Eventual consistency, might be getting stale data
        try {
            console.log("Attempting to wait for dynamo to sync");
            setTimeout(testGetCardShouldNotBeEmpty, 20000);
        } catch(errAgain) {
            console.error("error", err);
            process.exit(1);
        }
    };
}