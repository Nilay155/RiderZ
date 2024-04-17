//show hide function 
let a=document.getElementById('open');
let b=document.getElementById('close');
let c=document.getElementById('list');

function show(){
    a.style.display="none";
    b.style.display="block";
    c.style.display="block";
}
function hide(){
    a.style.display="block";
    b.style.display="none";
    c.style.display="none";
}

//dark mode
let bd=document.querySelector("body");
let sun=document.getElementById("sun");
let moon=document.getElementById("moon");
let div1=document.getElementById("img1")
let div2=document.getElementById("img2")
let div3=document.getElementById("img3")

function dark(){
   
    bd.style.backgroundColor="rgba(0, 0, 0, 0.73)";
    sun.style.display="inline";
    moon.style.display="none"
    bd.style.color="white";
   

}
function light(){
    bd.style.backgroundColor="white";
    sun.style.display="none";
    moon.style.display="inline"
    bd.style.color="black";
}
//slider

const slides=document.querySelectorAll(".slide")
var counter=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`;
    }
)
const gonext=()=>{
    if (counter == slides.length - 1) {
        counter = 0;
        slideimage();
    } else {
        counter++;
        slideimage();
    }
}
const goprev=()=>{
    if (counter == 0) {
        counter = slides.length - 1;
        slideimage();
    } else {
        counter--;
        slideimage();
    }
}

const slideimage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter * 100}%)`
        }
    )
}

//cart function

let y=document.getElementById("sp");
let box2=document.getElementById("sp2");
let box3=document.getElementById("sp3");
let box4=document.getElementById("sp4");
let box5=document.getElementById("sp5");
let box6=document.getElementById("sp6");
let box7=document.getElementById("sp7");
let box8=document.getElementById("sp8");
let g1=0;
let g2=0;
let g3=0;
let g4=0;
let g5=0;
let g6=0;
let g7=0;
let g8=0;
function plus(){
    g1++;
    y.innerHTML=g1;
}
function minus(){
    if(g1!=0){
    g1--;
    y.innerHTML=g1;}
}
function plus2(){
    g2++;
    box2.innerHTML=g2;
}
function minus2(){
    if(g2!=0){
    g2--;
    box2.innerHTML=g2;}
}
function plus3(){
    g3++;
    box3.innerHTML=g3;
}
function minus3(){
    if(g3!=0){
    g3--;
    box3.innerHTML=g3;}
}
function plus4(){
    g4++;
    box4.innerHTML=g4;
}
function minus4(){
    if(g4!=0){
    g4--;
    box4.innerHTML=g4;}
}
function plus5(){
    g5++;
    box5.innerHTML=g5;
}
function minus5(){
    if(g5!=0){
    g5--;
    box5.innerHTML=g5;}
}
function plus6(){
    g6++;
    box6.innerHTML=g6;
}
function minus6(){
    if(g6!=0){
    g6--;
    box6.innerHTML=g6;}
}
function plus7(){
    g7++;
    box7.innerHTML=g7;
}
function minus7(){
    if(g7!=0){
    g7--;
    box7.innerHTML=g7;}
}
function plus8(){
    g8++;
    box8.innerHTML=g8;
}
function minus8(){
    if(g8!=0){
    g8--;
    box8.innerHTML=g8;}
}
