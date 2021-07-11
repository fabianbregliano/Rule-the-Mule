const imgMula = document.getElementById("Mula");
console.log(imgMula);
const imgClickme = document.getElementById("clickme");
console.log(imgClickme);
const start = document.querySelector(".start");
const pregunta1 = document.querySelector(".pregunta1");
const pregunta2 = document.querySelector(".pregunta2");
const imgCharco = document.getElementById("Charco");
console.log(imgCharco);
start.addEventListener("click", function () {
  imgMula.remove();
  imgCharco.remove();
  imgClickme.remove();
  pregunta1.appendChild(imgMula);
  pregunta2.appendChild(imgCharco);
});

function crearQuiz(quiz) {
  const contenedorQuiz = document.createElement("div");
  const nombre = document.createElement("h2");
  const pregunta = document.createElement("p");
  /*const respuesta = document.createElement("h3");*/
  /*const ayuda = document.createElement("h2");*/
  const imagenImg = document.createElement("img");

  nombre.textContent = quiz.nombre;
  pregunta.textContent = quiz.pregunta;
  /*respuesta.textContent = quiz.respuesta;*/
  /*ayuda.textContent = quiz.ayuda;*/
  imagenImg.src = quiz.imagen;

  imagenImg.classList.add("imagen");

  contenedorQuiz.appendChild(nombre);
  contenedorQuiz.appendChild(pregunta);
  /*contenedorQuiz.appendChild(respuesta);*/
  /*contenedorQuiz.appendChild(ayuda);*/
  contenedorQuiz.appendChild(imagenImg);

  contenedorQuiz.classList.add("tarjeta-quiz");

  const mimain = document.getElementsByTagName("main");

  mimain[0].appendChild(contenedorQuiz);
}

const preguntas = [
  {
    id: 1,
    nombre: "pregunta1",
    pregunta: "¿Con que país se asocia este contorno?",
    respuesta: "Brasil",
    ayuda: "Brasilia es su capital",
    imagen:
      "https://us.123rf.com/450wm/fredex8/fredex81706/fredex8170600117/81175999-contorno-del-mapa-de-brasil-con-la-bandera-brasile%C3%B1a-en-blanco-con-sombras-ilustraci%C3%B3n-3d.jpg?ver=6",
  },
  /* {
    id: 2,
    nombre: "pregunta2",
    pregunta: "¿Con que país se asocia este contorno?",
    respuesta: "Argentina",
    ayuda: "Buenos Aires es su capital",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXv_6s3utAAS6QHaPgdQKq7wHJ89LFof3ra9AUlSbVEv4-nUlhoza_upDQrQ2QycCxsh4&usqp=CAU",
  },
  {
    id: 3,
    nombre: "pregunta3",
    pregunta: "¿Con que país se asocia este contorno?",
    respuesta: "Chile",
    ayuda: "Santiago de chile es su capital",
    imagen:
      "https://img2.freepng.es/20180428/zrw/kisspng-flag-of-chile-map-flag-of-mexico-5ae4556d3599f7.9925251615249135172196.jpg",
  },
  {
    id: 4,
    nombre: "pregunta4",
    pregunta: "¿Con que país se asocia este contorno?",
    respuesta: "Uruguay",
    ayuda: "Montevideo es su capital",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKimlTEkgcKwUa9z_TjXmWVC8HrDxPwDT6kQ&usqp=CAU",
  },*/
];

preguntas.map(function (listadepreguntas) {
  crearQuiz(listadepreguntas);
});

/*para realizar la funcion pregunta-respuesta true o false-ayuda-avanzar!!!!!!!!!*/

/*if mula en pregunta1 
 aparece pregunta id:1 === respuesta id:1  false!!
else aparece ayuda Id:1
deberian ser mas ayudas , hasta 3 , si no sabe respuesta no avanza!!
if pregunta id:1  === respuesta id:1 true !!
else mula pasa pregunta2, charco remove de pregunta2, charco a pregunta3*/

/*
map para la funcion boleana
quiz.map(function(pregunta){
  pregunta.addEventListener(function(){
    ayuda.appendchild(ayuda1)
    imgMula.remove();
    imgCharco.remove();
    pregunta1.appendChild(imgMula);
    pregunta2.appendChild(imgCharco);
  });*/


/*const respuesta = document.querySelectorAll("respuesta")
console.log(respuesta);
const ayuda = document.querySelectorAll("ayuda")
console.log(ayuda);

function avanzar(){
  if (respuesta.imput === respuesta.true) {
    imgMula.display = div.pregunta2;
  } else {
    ayuda.display = "none";
    imgMula.remove();
    imgCharco.remove();
    pregunta1.appendChild(imgMula);
    pregunta2.appendChild(imgCharco);
  
  if (respuesta.imput === respuesta.false) {
    imgMula.display = div.pregunta1;
  } else {
    ayuda.display ;
     }),

*/
