const heartButton=document.getElementById('heartButton');
const heart=document.querySelector('.heart');
var buttons=document.querySelectorAll(".scroll");
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
});
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        var targetId=this.getAttribute("data-target");
        var targetElement=document.getElementById(targetId);
        targetElement.scrollIntoView({behavior:"smooth"}); 
    });
});
window.onscroll=function()
{
    var scrollposition=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
    if(scrollPosition>500)
    {
        scrollButton.style.display="block";
    }
    else
    {
        scrollButton.style.display="none";
    }
};
scrollButton.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};