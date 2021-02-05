/**
 * The code in this file is the latest version we have on lambda.
 * All code here are uploaded for marking purpose only and does 
 * not interact with anything in this repo.
 */


 const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();


exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };

    try {
        switch (event.httpMethod) {
            // case 'DELETE':
            //     body = await dynamo.delete(JSON.parse(event.body)).promise();
            //     break;
            case 'GET':
                const itemsTable = process.env.itemsTable;
                // const data = await dynamo.scan({ TableName: event.queryStringParameters.TableName }).promise();
                const data = await dynamo.scan({ TableName: itemsTable }).promise();
                body = data.Items;
                break;
            // case 'POST':
            //     body = await dynamo.put(JSON.parse(event.body)).promise();
            //     break;
            case 'PUT':
                const cart = event.body;
                // body = await dynamo.update(JSON.parse(event.body)).promise();
                body = cart;
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
