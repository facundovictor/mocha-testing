assert = require('assert');
chai = require("chai");
chaiAsPromised = require("chai-as-promised");
jsf = require('json-schema-faker');

// Load schemas
mocks = require('./mocks');

// Run the tests
require('./unit');
