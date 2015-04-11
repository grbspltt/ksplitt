KSPLITT

Just a simple toolbelt for my projects. Use if you think you know what it does.

Usage: 
`var ks = require('ksplitt');

Methods:
unSettle: unSettle function takes the returned array from the bluebird settle method and removes the extra
          properties _bitField & _settledValue. Returns a promise of an array.
          @param array
          @returns {Array}
          
defaults: Extends an object with a defaults object, similar to underscore's _.defaults
          Used for abstracting parameter handling from API methods
          @param object Configuration object to extend
          @param defs Object with default values
          @returns {*|{}} Returns the combined object with default values overwritten with the config object.
          
    
isObject: Tests whether supplied parameter is a true object
          @param obj
          @returns {*|boolean}
          
randomPassword: Random password generator. Default length is 5.
                @param {Number} Desired length Length of password
                @returns {string}
     