const screen =document.querySelector("#screen");
const button1=document.querySelector(".q1");
let x="";
let y="";
var a=0;
let b=0;
let c=1;
button1.addEventListener("click", function () {
  x+="1";
  b=parseInt(x);
  screen.innerText=x;
});
const button2=document.querySelector(".q2");
button2.addEventListener("click", function () {
  x+="2";
  b=parseInt(x);
  screen.innerText=x;
});
const button3=document.querySelector(".q3");
button3.addEventListener("click", function () {
  x+="3";
  b=parseInt(x);
  screen.innerText=x;
});
const button4=document.querySelector(".q4");
button4.addEventListener("click", function () {
  x+="4";
  b=parseInt(x);
  screen.innerText=x;
});

const button5=document.querySelector(".q5");
button5.addEventListener("click", function () {
  x+="5";
  b=parseInt(x);
  screen.innerText=x;
});

const button6=document.querySelector(".q6");
button6.addEventListener("click", function () {
  x+="6";
  b=parseInt(x);
  screen.innerText=x;
});

const button7=document.querySelector(".q7");
button7.addEventListener("click", function () {
  x+="7";
  b=parseInt(x);
  screen.innerText=x;
});

const button8=document.querySelector(".q8");
button8.addEventListener("click", function () {
  x+="8";
  b=parseInt(x);
  screen.innerText=x;
});

const button9=document.querySelector(".q9");
button9.addEventListener("click", function () {
  x+="9";
  b=parseInt(x);
  screen.innerText=x;
});

const button0=document.querySelector(".zero");
button0.addEventListener("click", function () {
  x+="0";
  b=parseInt(x);
  screen.innerText=x;
});

const oc=document.querySelector(".C");
oc.addEventListener("click", function () {
  x="";
  a=0;
  b=1
  screen.innerText=0;
});

const ob=document.querySelector(".B");
ob.addEventListener("click", function () {
  if(x.length>1){
    screen.innerText=x.substring(0,x.length-1);
    x=x.substring(0,x.length-1);
  }
  else{
    screen.innerText=0;
    x=x.substring(0,x.length-1)
  }
});
//addittion
const op=document.querySelector(".p");
op.addEventListener("click", function () {
  a=b+a;
  y="+";
  x="";
  screen.innerText=0;
});

//subtraction
const os=document.querySelector(".s");
os.addEventListener("click", function () {
  if(a==0){
    a=parseInt(x);
  }
  else{
    a-=parseInt(x);
  }
  x="";
  y="-"
  screen.innerText="0";
});
//multiplication
const om=document.querySelector(".m");
om.addEventListener("click", function () {
  y="*"
  if(a==0){
    a=parseInt(x);
  }
  else{
    a=a*parseInt(x);
  }
  x="";
  screen.innerText="0";
});

//division
const od=document.querySelector(".D");
od.addEventListener("click", function () {
  y="/"
  if(x==0 && a!=0){
    a="Infinity"
  }
  else if(a==0){
    a=parseFloat(x);
  }
  else{
    a/=parseFloat(x);
  }
  x="";
  screen.innerText="0";
});

//equal
const oe=document.querySelector(".e");
oe.addEventListener("click", function () {
  if(y=="+"){
    a+=parseInt(x);
  }
  else if(y=="*"){
    a*=parseInt(x);
  }
  else if(y=="/"){
    if(x==0){
      a="Infinity"
    }
    else{
      a/=parseInt(x);
    }
    
  }
  else if(y=="-"){
    a-=parseInt(x);
  }
  screen.innerText=a;
  x="";
});