global.promise = require('bluebird');
global.assert = require('assert');
global.jsf = require('json-schema-faker');
global.sinon = require('sinon');

global.chai = require("chai");
global.chaiAsPromised = require("chai-as-promised");
global.chai.use(global.chaiAsPromised);

global.expect = chai.expect;
global.should = chai.should();
global._ = require('lodash');

// Load controllers
global.controllers = require('./../controllers');

// Load schemas
global.mocks = require('./mocks');

// Run the tests
require('./unit');
