

'use strict';


const btn = document.querySelectorAll('button');

const wr = document.querySelector('.btn-block');

btn[0].addEventListener('click',()=>{
    if(!btn[1].classList.contains('blue')) {
        btn[1].classList.add('blue');
    }else {
        btn[1].classList.remove('blue');
    }

});


wr.addEventListener('click',(event) =>{
  

 if( event.target.tagName == "BUTTON"){

    console.log("button");

 }else  console.log('wr');

});

const btn2 = document.createElement('button');

wr.append(btn2);

btn2.classList.add('red');