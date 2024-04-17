function show(){
    let s='123456abcdefgh!@#$()';
    var ot=" ";
    
    
    for(let i=0;i<5;i++){
         let c=s.length;
         let b=Math.random();
         let a=c*b;
         let f1=Math.floor(a);
          ot+=s.charAt(f1);
    
    }
    let p=document.getElementById("maincaptcha").value=ot;
 
    
    }
    
    function checkvalid(){
          let str1=removeSpaces(document.getElementById("maincaptcha").value);
          let str2=removeSpaces(document.getElementById("check").value);
          if(str2==str1){
                alert("form is  submitted");
                return true;
    
          }
          else{ alert("enter a valid captcha");
    return false;}
    
    }
    function removeSpaces(string){
          return string.split(' ').join('');
        }

let emai=document.getElementById('email').value
let pas=document.getElementById('pass').value
function checkform(){
    if(emai==null || emai==""){
        alert("email cannot be blank");
        return false;

    }
    else{
        alert("form is submitted")
        return true;
    }
}