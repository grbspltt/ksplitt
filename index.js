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
    }, /**
     * Tests whether supplied parameter is a true object
     * @param obj
     * @returns {*|boolean}
     */
    isObject: function isObject(obj) {
        return obj && toString.call(obj) === '[object Object]';
    }, /**
     * Random Password generator. Returns new password in callback. If no callback given, promise returned.
     * @param l {Number} Desired length of returned random password
     * @param cb {Function} Optional
     * @returns {*}
     */
    randomPassword: function(l,cb){
        function _randPass(len){
            var opts = {},
                ret = "";
                opts.length = len || 5; //default length of 5 characters
                opts.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for( var i=0; i < length; i++ )
                ret += opts.chars.charAt(Math.floor(Math.random() * opts.length));
            return ret;
        }
        if(typeof cb === 'function'){
            var text = _randPass(length);
            return cb(text);
        }

        return new Promise(function(resolve){
            resolve(_randPass(length))
        });
    }
};