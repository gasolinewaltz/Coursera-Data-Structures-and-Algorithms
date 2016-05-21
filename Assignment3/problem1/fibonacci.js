"use strict";
var input = require('../../handleInput/input');
input()
    .catch(function(){
        process.exit();
    })
    .then(function(data){
        var n = parseInt(data[0], 10);
        console.log(fibonacci(n));
        process.exit();
    });

function fibonacci(n){
    var f = [0, 1];
    if(n<2){
        return f[n];
    }
    for(var i = 2; i<=n; i++){
        f[i] = f[i-1] + f[i-2];
    }
    return f[n];
}