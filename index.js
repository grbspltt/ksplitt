/**
 * Created by Kevin on 3/10/2015.
 */
var Promise = require('bluebird');

module.exports = exports = {
/**
 * unSettle function takes the returned array from the bluebird settle method and removes the extra
 * properties _bitField & _settledValue. Returns a promise of an array.
 * @param array
 * @returns {Array}
 */
    unSettle : function(array){
        var b = {},
            c = [];
        return new Promise(function(resolve){
            resolve(processor(array));
        });

        function processor(array){
            for(var i=0;i<array.length;i++){
                b = {};
                for(var prop in array[i]._settledValue){
                    b[prop] = array[i]._settledValue[prop]
                }
                c.push(b);
            }
            return c;
        }
    },
    /**
     * Extends an object with a defaults object, similar to underscore's _.defaults
     * Used for abstracting parameter handling from API methods
     * @param object Configuration object to extend
     * @param defs Object with default values
     * @returns {*|{}} Returns the combined object with default values overwritten with the config object.
     */
    defaults : function defaults(object, defs) {
    var key;
    object = object || {};
    defs = defs || {};
    // Iterate over object non-prototype properties:
    for (key in defs) {
        if (defs.hasOwnProperty(key)) {
            // Replace values with defaults only if undefined (allow empty/zero values):
            if (object[key] == null) object[key] = defs[key];
        }
    }
    return object;
},
    /**
     * Tests whether supplied parameter is a true object
     * @param obj
     * @returns {*|boolean}
     */
    isObject: function isObject(obj) {
        return obj && toString.call(obj) === '[object Object]';
    },
    /**
     *Random password generator. Default length is 5.
     * @param {number} length Length of password
     * @returns {string}
     */
    randomPassword: function(l){
        var length = l || 5, //default length of 5 characters
            text = "",
            possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i < l; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
};