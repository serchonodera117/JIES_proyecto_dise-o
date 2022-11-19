let fristOption = document.getElementById("1");
let secondOption = document.getElementById("2");
let thirdOption = document.getElementById("3");

let fourthOption = document.getElementById("4");
let fifthOption = document.getElementById("5");
let sixthOption = document.getElementById("6");
let seventhOption = document.getElementById("7");
let eighthOption = document.getElementById("8");

let myIframe = document.getElementById("div-iframe-container");


function one(){
 changeBtnColor(1);
 myIframe.src = "./paginas/con_cual.html"
}
function two(){
 changeBtnColor(2);
 myIframe.src = "./paginas/pon_en_su_lugar.html"

}
function three(){
 changeBtnColor(3);
 myIframe.src = "./paginas/escribe.html"

}

function four(){changeBtnColor(4);}
function five(){changeBtnColor(5);}
function six(){changeBtnColor(6);}
function seven(){changeBtnColor(7);}
function eighth(){changeBtnColor(8);}

function changeBtnColor(n){
    fristOption.style.fontWeight= (n==1)?"bold":"normal";
    secondOption.style.fontWeight= (n==2)?"bold":"normal";
    thirdOption.style.fontWeight= (n==3)?"bold":"normal";
    fourthOption.style.fontWeight= (n==4)?"bold":"normal";
    fifthOption.style.fontWeight= (n==5)?"bold":"normal";
    sixthOption.style.fontWeight= (n==6)?"bold":"normal";
    seventhOption.style.fontWeight= (n==7)?"bold":"normal";
    eighthOption.style.fontWeight= (n==8)?"bold":"normal";
}

let menuHamburguesa = document.getElementById("div-body1");
let mostrando=false
function showhidemenu(){
      mostrando = !mostrando
      menuHamburguesa.style.display=(mostrando)?"block":"none";
      console.log("mostrando",mostrando);
}
//-----------------


