/**
 * The code in this file is the latest version we have on lambda.
 * All code here are uploaded for marking purpose only and does 
 * not interact with anything in this repo.
 */


const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const cartsTable = process.env.cartsTable;

exports.handler = async (event, context) => {

    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
    };

    try {
        switch (event.httpMethod) {

            case 'GET':
                let data;
                try {
                    data= await dynamo.get({ 
                        TableName: cartsTable,
                        Key: {
                            id: event.queryStringParameters.cartId
                        },
                    }).promise();
                    body = data.Item.items;
                } catch(err) {
                    body = [];
                }
                break;

            case 'PUT':
                const {cartId, items} = JSON.parse(event.body);
                await dynamo.put({
                    TableName: cartsTable,
                    Item: {
                        id: cartId,
                        items: items
                    }
                }, function(err, data) {
                    if (err) {
                        body = err;
                    } else {
                        body = data;
                    }
                });
                break;
            // CORS Preflight request
            case 'OPTIONS':
                body = {};
                break;
            default:
                throw new Error(`Unsupported method "${event.httpMethod}"`);
        }
    } catch (err) {
        statusCode = '400';
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};
