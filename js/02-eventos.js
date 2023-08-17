'use strict'                                                               //Modo estricto
addEventListener('load', () => {                                           //Inicia evento load
    $(document).ready(() => console.log('jQuery y Web cargados.'))         //Carga el archivo y revisa que se haya iniciado correctamente


//EVENTOS EN JQUERY


//Eventos MouseOver y MouseOut **********************************************************************************
var caja = $('#caja');                                       //Se guarda variable jQuery de #caja
caja.mouseover(function() {                                  //Evento mouseOver
    $(this).css("background-color", "red")                   //Cambia color caja al tocar con mouse
           .css("cursor", "pointer")                         //Pone un pointer en cursos al tocar caja
           .css("transition", "300ms")                       //Crea una transición de 300 ms
})

caja.mouseout(function() {                                   //Evento mouseOut
    $(this).css("background-color", "green")                 //Cambia color caja al tocar con mouse
})

//Eventos Hover: Nos permite hacer la accion de MouseOver y MouseOut en uno solo ********************************

caja.hover(Borde1,Borde2)

function Borde1(){
    $(this).css("border", '2px dashed white')               //Funcion para poner borde de 3px dashed blanco
}

function Borde2(){                                          //Funcion para poner borde de 3px solido negro
    $(this).css("border", '3px solid black')
}

//Evento click y doble click ********************************************************************************** 

caja.click(function(){                                      //Evento click en elemento caja
    $(this).css('color', 'white')                           //Cambia el color de la letra a blanco
})

caja.dblclick(function(){                                   //Evento double click en elemento caja
    $(this).css('color', 'black')                           //Cambia el color de la letra a blanco
})


//Eventos focus y blur *****************************************************************************************
var forms = $('#nombre')                                     //Guarda el INPUT nombre en una variable
forms.focus(function(){                                      //Empieza el evento focus
    $(this).css('border','5px solid #ccc')                   //Pone un borde alrededor de el input
})

var datos = $('#datos')
forms.blur(function(){                                       //Empieza el evento focus
    $(this).css('border','1px dashed #ccc')                  //Quita el borde alrededor del input 
    datos.text($(this).val()).show()                         //muestra el display en jquery el valor escrito en el input y lo escribe en el div
})


//Eventos mouseup y mousedown **********************************************************************************
datos.mousedown(function(){                                  //Empieza evento mousedown
    $(this).css('border-color','gray')                       //Cambia el color del borde a gris
})

datos.mouseup(function(){                                    //Empieza evento mouseup
    $(this).css('border-color','black')                      //Cambia el color del borde a negro
})

//Evento mousemove **********************************************************************************************
var circulo = $("#coordenadas")
$(document).mousemove(function(){                                //Empieza el evento mousemove en document y lee el movimiento
    $('body').css("cursor", "none")
    circulo.css('left', event.clientX)
           .css('top', event.clientY)
    console.log("x: "+ event.clientX + ", y: " + event.clientY)  //Captura las corrdenadas y las imprime en consola
})



})