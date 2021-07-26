
/* Tangram */

var d = document.getElementById("id");
var lienzo = d.getContext("2d");
var ismoving = false;
var plantilla = null ; 

var gato={
    url: "Gato.PNG",
    cargaOK: true
};
var casa={
    url: "Casa.PNG",
    cargaOK: true
};
var corazon={
    url: "corazón.PNG",
    cargaOK: true
};
var estrella={
    url: "Estrella.PNG",
    cargaOK: true
};

gato.imagen = new Image();
gato.imagen.src = gato.url; 

casa.imagen = new Image();
casa.imagen.src = casa.url; 

corazon.imagen = new Image();
corazon.imagen.src = corazon.url; 

estrella.imagen = new Image();
estrella.imagen.src = estrella.url; 

function dibujargato()
{
    lienzo.drawImage(gato.imagen, 800, 10);
}

function dibujarcasa()
{
    lienzo.drawImage(casa.imagen, 800, 10);
}

function dibujarcorazon()
{
    lienzo.drawImage(corazon.imagen, 800, 10);
}

function dibujarestrella()
{
    lienzo.drawImage(estrella.imagen, 800, 10);
}

/* Superclase de figuras.*/

class Figura {
    constructor(alto, ancho,x,y,color,angulo){
        this.alto = alto;
        this.ancho = ancho;
        this.x = x;
        this.y = y;
        this.color = color;
        this.angulo = angulo;
    }
}

/*Clases heredadas*/

class Cuadrado extends Figura{
    draw(){
        lienzo.beginPath();
        lienzo.fillStyle = this.color;
        lienzo.strokeStyle = this.color;
        lienzo.translate(this.x+this.ancho/2, this.y+this.alto/2);
        lienzo.rotate(this.angulo*Math.PI / 180);
        lienzo.moveTo(0,0);
        lienzo.lineTo(this.ancho,0);
        lienzo.lineTo(0+this.ancho,0+this.alto);
        lienzo.lineTo(0,this.alto);
        lienzo.stroke();
        lienzo.fill();
        lienzo.closePath();
        lienzo.setTransform(1,0,0,1,0,0);
    }
}

class Triangulo extends Figura{
    draw() {
        lienzo.beginPath();
        lienzo.fillStyle = this.color;
        lienzo.strokeStyle = this.color;
        lienzo.translate(this.x+this.ancho/2, this.y+this.alto/2);
        lienzo.rotate(this.angulo*Math.PI / 180);
        lienzo.moveTo(0,0);
        lienzo.lineTo(this.ancho,this.alto);
        lienzo.lineTo(0,this.alto);
        lienzo.stroke();
        lienzo.fill();
        lienzo.closePath();
        lienzo.setTransform(1,0,0,1,0,0);
    }
}

class Paralelo extends Figura{
        draw(){
            lienzo.beginPath();
            lienzo.fillStyle = this.color;
            lienzo.strokeStyle = this.color;
            lienzo.translate(this.x+this.ancho/2, this.y+this.alto/2);
            lienzo.rotate(this.angulo*Math.PI / 180);
            lienzo.moveTo(0,0);
            lienzo.lineTo(this.ancho,0);
            lienzo.lineTo((this.ancho)+(this.ancho/1.88),0-this.alto);
            lienzo.lineTo((this.ancho/1.88),0-this.alto);
            lienzo.stroke();
            lienzo.fill();
            lienzo.setTransform(1,0,0,1,0,0);
        }
}

/* Declaración de figuras */

let CuadradoA  = new Cuadrado(75,75,197,90,"#f00",45);
let TrianguloA = new Triangulo(150,150,0,0,"#0f0",315);
let TrianguloB = new Triangulo(150,150,0,213,"#00f",225);
let TrianguloC = new Triangulo(75,75,250,37,"#ff0",45);
let TrianguloD = new Triangulo(75,75,197,198,"#0ff",135);
let TrianguloE = new Triangulo(105,105,129  ,235,"#f0f",270);
let ParaleloA  = new Paralelo(55,100,28,260,"#f50",0);

/* Función que dibuja cada frame.*/

function dibujo(){

    lienzo.clearRect(0,0,1350,535);
    if (plantilla=="gato"){
        dibujargato();
    }
    if (plantilla=="casa"){
        dibujarcasa();
    }
    if (plantilla=="corazon"){
        dibujarcorazon();
    }
    if (plantilla=="estrella"){
        dibujarestrella();
    }
    CuadradoA.draw();
    TrianguloA.draw();
    TrianguloB.draw();
    TrianguloC.draw();
    TrianguloD.draw();
    TrianguloE.draw();
    ParaleloA.draw();
    window.requestAnimationFrame(dibujo);

}

/* Función que recibe los eventos y activa las funciones de movimiento. */
function clicked(e){
    var distanciax = e.offsetX;
    var distanciay = e.offsetY;

    if(distanciax<CuadradoA.x+CuadradoA.ancho+35 && distanciax>CuadradoA.x && distanciay<CuadradoA.y+CuadradoA.alto+80 && distanciay>CuadradoA.y){
        ismoving= true;
        z=1;
    }
    if(distanciax<TrianguloA.x+TrianguloA.ancho && distanciax>TrianguloA.x && distanciay<TrianguloA.y+TrianguloA.alto+80 && distanciay>TrianguloA.y){
        ismoving = true;
        z=2;
    }
    if(distanciax<TrianguloB.x+TrianguloB.ancho && distanciax>TrianguloB.x && distanciay<TrianguloB.y+TrianguloB.alto+80 && distanciay>TrianguloB.y){
        ismoving = true;
        z=3;
    }
    if(distanciax<TrianguloC.x+TrianguloC.ancho && distanciax>TrianguloC.x && distanciay<TrianguloC.y+TrianguloC.alto+80 && distanciay>TrianguloC.y){
        ismoving = true;
        z=4;
    }
    if(distanciax<TrianguloD.x+TrianguloD.ancho && distanciax>TrianguloD.x && distanciay<TrianguloD.y+TrianguloD.alto+80 && distanciay>TrianguloD.y){
        ismoving = true;
        z=5;
    }
    if(distanciax<TrianguloE.x+TrianguloE.ancho && distanciax>TrianguloE.x && distanciay<TrianguloE.y+TrianguloE.alto+80 && distanciay>TrianguloE.y){
        ismoving = true;
        z=6;
    }
    if(distanciax<ParaleloA.x+ParaleloA.ancho +ParaleloA.ancho && distanciax>ParaleloA.x+ParaleloA.ancho/2 && distanciay<ParaleloA.y+ParaleloA.alto*2 && distanciay>ParaleloA.y-ParaleloA.alto){
        ismoving = true;
        z=7;
    }
}

d.addEventListener('mousedown', clicked );
d.addEventListener('mousemove', e => {
    if (ismoving === true) {
        if(z==1){    
            CuadradoA.y  = (e.screenY -(CuadradoA.alto*3));
            CuadradoA.x = (e.screenX - 50);
        }
        if(z==2){    
            TrianguloA.y  = (e.screenY -270);
            TrianguloA.x = (e.screenX - 100);
        }
        if(z==3){    
            TrianguloB.y  = (e.screenY -270);
            TrianguloB.x = (e.screenX - 100);
        }
        if(z==4){    
            TrianguloC.y  = (e.screenY -210);
            TrianguloC.x = (e.screenX - 40);
        }
        if(z==5){    
            TrianguloD.y  = (e.screenY -210);
            TrianguloD.x = (e.screenX - 40);
        }
        if(z==6){    
            TrianguloE.y  = (e.screenY -240);
            TrianguloE.x = (e.screenX - 50);
        }
        if(z==7){    
            ParaleloA.y  = (e.screenY - 200);
            ParaleloA.x = (e.screenX - 60);
        }
    }
});
d.addEventListener('mouseup', e => {
    if (ismoving === true){
      ismoving = false;
    }
});

addEventListener('keydown', keyPresssed);
function keyPresssed(e){
    if (e.keyCode == 39){
        console.log("right arrow");
        angulo=15;
    }
    if (e.keyCode == 37){    
        console.log("left arrow");
        angulo=-15;
    }    
    if(ismoving==true){
        if(z==1){
            CuadradoA.angulo = Math.max(Math.min(CuadradoA.angulo+angulo,360),0);
        }
        if(z==2){
            TrianguloA.angulo = Math.max(Math.min(TrianguloA.angulo+angulo,360),0);
        }
        if(z==3){
            TrianguloB.angulo = Math.max(Math.min(TrianguloB.angulo+angulo,360),0);
        }
        if(z==4){
            TrianguloC.angulo = Math.max(Math.min(TrianguloC.angulo+angulo,360),0);
        }
        if(z==5){
            TrianguloD.angulo = Math.max(Math.min(TrianguloD.angulo+angulo,360),0);
        }
        if(z==6){
            TrianguloE.angulo = Math.max(Math.min(TrianguloE.angulo+angulo,360),0);
        }
        if(z==7){
            ParaleloA.angulo = Math.max(Math.min(ParaleloA.angulo+angulo,360),0);
        }
    }
}

addEventListener('keyup', dibujarplantillas);
function dibujarplantillas(e){
    if (e.keyCode == 97 ){
        plantilla = "gato";
    }
    if (e.keyCode == 98 ){
        plantilla = "casa";
    }
    if (e.keyCode == 99 ){
        plantilla = "corazon";
    }
    if (e.keyCode == 100 ){
        plantilla = "estrella";
    }
    if (e.keyCode == 101 ){
        plantilla = "vacio";
    }
}

dibujo();

