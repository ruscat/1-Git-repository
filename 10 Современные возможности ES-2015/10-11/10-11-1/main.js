'use strict';
/*

*/
function delay(ms) {
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, ms);
    })
}
delay(1000)
    .then(() => alert("Hello!"), ()=>{alert('error')});