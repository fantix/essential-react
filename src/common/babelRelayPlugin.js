var babelRelayPlugin = require('babel-relay-plugin');
var introspectionQuery = require('graphql/utilities').introspectionQuery;
var request = require('sync-request');

var url = 'http://localhost:5000/graphql';

var response = request('POST', url, {
    qs: {
        query: introspectionQuery
    }
});

var schema = JSON.parse(response.body.toString('utf-8'));

module.exports = babelRelayPlugin(schema.data, {
    abortOnError: true
});
