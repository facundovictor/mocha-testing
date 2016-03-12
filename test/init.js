assert = require('assert');
chai = require("chai");
chaiAsPromised = require("chai-as-promised");
jsf = require('json-schema-faker');
should = require('should');

// Load schemas
mocks = require('./mocks');

// Run the tests
require('./unit');
