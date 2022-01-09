'use strict';


const rub = document.querySelector('#rub');

const usd = document.querySelector('#usd');

rub.addEventListener('input',()=>{
    const request = new XMLHttpRequest();

request.open('GET','js/current.json');

request.setRequestHeader('Content-type','application/json;charset= utf-8');

request.send();


request.addEventListener('readystatechange',()=>{
    if(request.readyState === 4 && request.status === 200){
        console.log(request.response);
       const data = JSON.parse(request.response);

       usd.value = (+rub.value/data.current.usd).toFixed(4);
       

  
       }else{
           usd.value = "erro";
       }

});





});


