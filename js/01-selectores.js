'use strict'
addEventListener("load", () => {

$(document).ready(() => console.log("Se ha cargado la WEB y jQuery..."))       //Revisa que hayan cargado correctamente

//SELECTORES EN JQUERY

//Selector de ID
var rojo = $("#rojo");                                                        //Guarda en variable el parrafo html con id rojo
var amarillo = $("#amarillo")                                                 //Guarda en variable el parrafo html con id amarillo
var verde = $("#verde")                                                       //Guarda en variable el parrafo html con id verde  

rojo.css("background", "red")                                                 //Cambia el fondo a color rojo con css
    .css("color", "white")                                                    //Cambia color de font a blanco con css
amarillo.css("background", "yellow")                                          //Cambia el fondo a color amarillo con css
        .css("color", "green")                                                //Cambia color de font a verde con css
verde.css("background", "green")                                              //Cambia el fondo a color verde con css
     .css("color", "pink")                                                    //Cambia color de font a rosa con css

//Selector de clase 
var zebra = $("#verde")                                                       //Guarda en variable las etiquetas con clase zebra
zebra.css("padding", "5px")                                                   //Le da un borde rayado de 5px a clases zebra

var sinBorde = $(".sin_borde")                                                //Guarda en variable etiquecas con clase sin_borde
sinBorde.click(function() {                                                   //Evento click jQuery con funcion callback 
    console.log("Se ha clickeado parrafo")                                    //Confirma que se ha dado click
    $(this).addClass("zebra")                                                 //Se utiliza this para no renombrar sinBorde, añade clase solido
})

//Selector de etiqueta
var parrafo = $("p").css("cursos", "pointer")                                 //Guardamos en variable parrafo las etiquetas p
                                                                              //Cursor pone la manita cuando se encima el elemento con mouse
parrafo.click(function(){                                                     //Crea el evento click para las etiquetas parrafo
    console.log("Se ha clickeado font")                                       //Imprime que se ha clickeado
    var thiss = $(this)                                                       //Crea variable de acceso a this
    if(thiss.hasClass("grande")){                                             //Revisa que exista la clase grande en thiss
        thiss.removeClass("grande")                                           //Si existe, entonces elimina la clase
    }else{$(thiss).addClass("grande")}                                        //Sino, entonces añade la clase
})

$('p, a').addClass('margen-superior')                                         //Añadiendo clase a dos etiquetas

//Selector de atributos
$('[title="Google"]').css("background-color", "#ccc")                         //Busca el atributo con titulo = Google y pinta el fondo
$('[title="Facebook"]').css("background-color", "blue")                       //Busca el atributo con titulo = Facebook y pinta el fondo
$('[title="Pinterest"]').css("background-color", "red")                       //Busca el atributo con titulo = Pinterest y pinta el fondo


//Find and parent
var busqueda = $("#caja").find(".resaltado")                                  //Usa metodo find para buscar clase resultado en clase caja
//console.log(busqueda)                                                         //Imprime lo encontrado

var busqueda2 = $("#caja .resaltado")                                         //Otra forma de buscar con id + clase
var busqueda3 = $("div .resaltado")                                           //Otra forma de buscar con etiqueta + clase

var busqueda4 = $('.resaltado').parent().parent().find('#caja')
console.log(busqueda4)


})