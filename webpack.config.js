'use strict';

var path = require('path');
var args = require('minimist')(process.argv.slice(2));

var allowedEnvs = ['dev', 'dist'];

var env;
if(args._.length > 0 && args._.indexOf('start') !== -1){
    env = 'start';
}else if(args.env){
    env = args.env;
}else{
    env = 'dev';
}

var configs = {
    base: require(path.join(__dirname, 'cfg/base')),
    dev: require(path.join(__dirname, 'cfg/dev')),
    dist: require(path.join(__dirname, 'cfg/dist'))
}

function getValidEnv(env){
    var isValid = env && env.length > 0 && allowedEnvs.indexOf(env) !== -1;
    return isValid ? env : 'dev';
}

function buildConfig(env){
    var usedEnv = getValidEnv(env);
    return configs[usedEnv];
}

module.exports = buildConfig(env);
