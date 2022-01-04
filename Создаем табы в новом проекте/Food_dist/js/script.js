'use strict';


window.addEventListener('DOMContentLoaded', () => {



    const foodStl = document.querySelector('.tabheader__items');
    const btnStl = document.querySelectorAll('.tabheader__item');
    const tabs = document.querySelectorAll('.tabcontent');


    function hideTabeContent() {
        tabs.forEach(item => {
            item.style.display = 'none';
        });


        btnStl.forEach(btn => {

            btn.classList.remove('tabheader__item_active');

        });


    }

    function schowTab(i = 0) {
        tabs[i].style.display = 'block';
        btnStl[i].classList.add('tabheader__item_active');

    }


    hideTabeContent();
    schowTab();


    foodStl.addEventListener('click', (event) => {
       
        const targ = event.target;


         if(targ.classList.contains('tabheader__item')) {
             
            
            btnStl.forEach((btn,i)=>{
             if(targ == btn) {
               
                hideTabeContent();
                schowTab(i);

             } 

             
             });

         }
         


         });





    




    function getRemainingTim(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date());
         
        const day = Math.floor((t/(1000*60*60*24)) );
        const hour = Math.floor(((t/(1000*60*60))%24));
        const min = Math.floor(((t/(1000*60))%60));
        const sec = Math.floor((t/1000)%60);


    return {
        'total':t,
        'day':day,
        'hour':hour,
        'min':min,
        'sec':sec


    };
}

   function a(b ){
       if(b <10) {
           return '0'+b;
       }else {
         return  b;
       }

   }

function setTime(selector,tim) {


    const timer = document.querySelector(selector);
    const  days = timer.querySelector("#days");
    const  hours = timer.querySelector('#hours');
    const  mins = timer.querySelector('#minutes');
    const  sec = timer.querySelector('#seconds');

          const endT = setInterval(updateClock,1000);
          updateClock();


          function updateClock(){
           
            const t = getRemainingTim(tim);
            
            days.innerHTML = a(t.day);
            hours.innerHTML = a(t.hour);
            mins.innerHTML = a(t.min);
            sec.innerHTML = a(t.sec);

          
            if(t.total<=0){
                clearInterval(endT);
            }


          }
}

const timm = '2022-01-20';
setTime('.timer', timm);


















});