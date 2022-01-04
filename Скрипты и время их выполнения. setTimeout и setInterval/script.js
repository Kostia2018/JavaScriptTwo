'use strict';

 const btn = document.querySelector(".btn");
 const boxx = document.querySelector('.box');

 btn.addEventListener('click',showAnimation);


 function showAnimation() {
       let count = 0 ;

       const tim = setInterval(move,10);


       function move(){

       if(count == 300) {
           clearInterval(tim);
       }else {
        count++;
        boxx.style.top = count + 'px'; 
        boxx.style.left = count +'px';

       }

    }
    


 }




 const dat = new Date();
 console.log(dat.getMonth());
 console.log(new Date().getMonth());