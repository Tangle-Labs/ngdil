import{P as o}from"./axios.utils.CBg6898K.js";function l(){let t,n,e;return t=new WebSocket(o),t.onclose=function(r){console.log("Socket is closed. Reconnect will be attempted in 1 second.",r.reason),e=setInterval(function(){console.log("attempting reconnect"),t=new WebSocket(o),n++,!(n<10)&&e&&clearInterval(e)},2e3)},t.onopen=()=>{e=null,e&&clearInterval(e)},t}export{l as c};
