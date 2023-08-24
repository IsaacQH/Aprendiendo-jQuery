'use strict'

$(document).ready(function() {
    console.log("DONE!");

//Interacciones JQUERY UI


//Método draggable()
$('.elemento').draggable();                                  //Nos permite arrastrar los elementos por la pagína web    

//Método resizable()
$('.elemento').resizable();                                  //Nos permite redimensionar los elementos por la pagína web       

//Método selectable()
//$('.lista-seleccionable').selectable();                    //Nos permite seleccionar varios elementos en web  ( Sortable o selectable)

//Método sortable()
$('.lista-seleccionable').sortable(function(event,ui){       //Nos permite hacer la lista para ordenar
    console.log("Modificación de lista")});                       

//Método droppable() y draggable()  
$('#enter').draggable();                                     //Nos permite colocar este elemento dentro de un droppable
$('#area').droppable({                                       //Nos permite utilizar elmento como contenedor
    drop: () => console.log("Has soltado algo dentro")       //Parámetro drop que lee al realizar un droppable
});

//EFECTOS

$('#boton').click(function(){
    $('#caja').toggle("scale",2000)                          //Efectos con toggle: fade, explode, blin, slide, etc    en 5s
})

//Tooltip ()
$(document).tooltip()                                        //Cra un acordeon de texto en burbuja de aquellas etiquetas <a> sin ref

//Cuadros de dialogo - Dialog()
$('#popup').click(function() {                               //Evento click para boton popup que despliega dialog
    $('#dialog').dialog()                                    //Despliega un cuadro de dialogo
})

//Calendario
$('#calendario').datepicker()                                 //Crea un calendario de input

//Tabs o Pestañas
$('#pestaña').tabs()

});