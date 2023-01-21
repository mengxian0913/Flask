var width = screen.width;
const hamburger = document.querySelector('.hamburger');
const container2 = document.querySelector('.container2');
const menu1 = document.querySelector('.menu');
const menuArr = menu1.querySelectorAll('a');
const menu2 = document.querySelector('.menu2');
const menuArr2 = menu2.querySelectorAll('a');

function rm(arr){
    for(let i=0;i<arr.length;i++){
        arr[i].classList.remove('is-active');
    }
}

for(let i=0;i<menuArr.length;i++){
    menuArr[i].addEventListener('click', function(){
        rm(menuArr);
        this.classList.add('is-active');
    });
}

for(let i=0;i<menuArr2.length;i++){
    menuArr2[i].addEventListener('click', function(){
        rm(menuArr2);
        this.classList.add('is-active');
    });
}


/*hamburger*/
hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
    container2.classList.toggle('is-active');
});

/*birthdayCard*/
const containerF = document.querySelector('.containerF');
const birthdayCard = document.querySelector('.birthdayCard');
const matte = document.querySelector('.matte');
const Close = document.querySelector(".close");

let delayInMilliseconds = 500; // second

function show_big(){
    console.log('CLICK!!');

    if(width <= 830){
        setTimeout(function(){
            console.log("Wait 0.5 seconds");
            matte.classList.add('is-active');
            containerF.classList.add('is-active');
            console.log(containerF);
        },delayInMilliseconds);
    }

    else{
        console.log("Wait 3 seconds");
        matte.classList.add('is-active');
        containerF.classList.add('is-active');
        console.log(containerF);
    }
}

function close_big(){
    console.log("CLOSE!");
    matte.classList.remove('is-active');    
    containerF.classList.remove('is-active');
    console.log(containerF);
}

birthdayCard.addEventListener("click", show_big);

Close.addEventListener("click", close_big);
  

/*Slide Window*/

const slide_track = document.querySelector('.slide-track');
const slide = document.querySelector('.slide');

setInterval(function() {
    var track = document.querySelector('.slide-track');
    track.style.transition = 'transform 1s ease-in-out';
    track.style.transform = 'translateX(-25%)';
}, 3000);


/*Loading*/

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".load").style.display = "none";
    document.querySelector(".containerF").style.display = "block";
});