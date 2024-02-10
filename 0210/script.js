const heartButton=document.getElementById('heartButton');
const heart=document.querySelector('.heart');
let isBlack=true;
heartButton.addEventListener('click',function(){
    if(isBlack)
    {
        heart.style.backgroundColor='red';
    }
    else
    {
        heart.style.backgroundColor='black';
    }
    isBlack=!isBlack;
})