/*jslint nomen: true, plusplus: false, sloppy: true, white:true*/
/*jshint nomen: false, curly: true, plusplus: false, expr:true, undef:true, newcap:true, latedef:true, camelcase:true  */
/*global module: false, iScroll:false, setTimeout: false, document:false, WebKitCSSMatrix:false, _: false, Backbone: false, backbone: false, $: false, define: false, require: false, console: false, window:false */

var util = require('util');
var AstractError = require('./abstract-error');

// log levels shd correspond to Log Levels listed here https://github.com/visionmedia/log.js
var errorFactory = function (name, logLevel, resCode) {

	var CustomError = function (msg) {
		this.name = name;
		this.logLevel = logLevel;
		this.resCode = resCode;
		CustomError.super_.call(this, msg, this.constructor);
	};

	util.inherits(CustomError, AstractError);
	CustomError.prototype.name = name;
	return CustomError;
};

module.exports = errorFactory;