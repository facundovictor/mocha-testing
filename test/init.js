var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var jsf = require('json-schema-faker');

// Load schemas
mocks = require('./mocks');

// Run the tests
require('./unit');
