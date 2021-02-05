const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const cartsTable = process.env.cartsTable;

exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
    };

    try {
        switch (event.httpMethod) {
            // case 'DELETE':
            //     body = await dynamo.delete(JSON.parse(event.body)).promise();
            //     break;
            case 'GET':
                const data = await dynamo.get({ 
                    TableName: cartsTable,
                    Key: {
                        id: event.queryStringParameters.cartId
                    }
                }).promise();
                body = data.Item.items;
                break;
            // case 'POST':
            //     body = await dynamo.put(JSON.parse(event.body)).promise();
            //     break;
            case 'PUT':
                // body = await dynamo.update(JSON.parse(event.body)).promise();
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
