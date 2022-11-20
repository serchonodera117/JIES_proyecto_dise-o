let instructions1= document.getElementById("instuctions1")
let game=document.getElementById("game1")

let instructions2= document.getElementById("instructions2")
let game2= document.getElementById("game2")

let instructions3= document.getElementById("instructions3")
let game3=document.getElementById("game3")
function btn_cual(){
       instructions1.style.display="none";
       game.style.display="block";
}
function btn_volver(){
    instructions1.style.display="table";
    game.style.display="none";
};

function btn_arrastrar(){
    instructions2.style.display="none";
    game2.style.display="table";
}
function btn_volver2(){
    instructions2.style.display="block";
    game2.style.display="none";
}

function jugar3(){
    instructions3.style.display="none";
    game3.style.display="table";
}
function volver3(){
    instructions3.style.display="table";
    game3.style.display="none";
}