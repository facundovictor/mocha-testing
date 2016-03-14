global.assert = require('assert');
global.chai = require("chai");
global.chaiAsPromised = require("chai-as-promised");
global.jsf = require('json-schema-faker');
global.should = require('should');

// Load schemas
global.mocks = require('./mocks');

// Run the tests
require('./unit');
