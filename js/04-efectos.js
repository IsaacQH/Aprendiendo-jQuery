'use strict'

$(document).ready(function() {                                     //Prepara el documento
    alert("Se accedió correctamente")                              //Alerta que cargó correctamente

//EFECTOS EN JQUERY ************************************************************************************************  

/*  
    $('#ambos').click(function(){
        $('#caja').toggle('fast')                                 //Hace un switch de prender y apagar

        if($(this).text() == "Abrir")                             //Condicional para vambiar texto de boton 
            $(this).text("Cerrar")                                //Cambiar texto a cerrar 
        else{$(this).text( "Abrir")}                              //Cambiar texto a abrir
    }) */

  $('#mostrar').click(function(){                                  //Evento click con boton mostrar
        $(this).hide()                                             //Esconde botón mostrar
        $('#ocultar').show()                                       //Muestra botón ocultar
        //$('#caja').show('slow')                                  //Se hace un show a elemneto caja de forma lenta
        $('#caja').fadeIn('slow', function(){                       //Se hace un show desvanecido lento y hace un callback despues de animar
            console.log("Se mostró la caja")
        })                                 
    })
    $('#ocultar').click(function(){                                //Evento click con boton mostrar
        $(this).hide()                                             //Esconde botón ocultar
        $('#mostrar').show()                                       //Muestra boton mostrar
        //$('#caja').hide('fast')                                  //Se hace un hide a elemneto caja de forma rápida
        $('#caja').fadeOut('slow')                                 //Se hace un hide desvanecido lento
    }) 

//ANIMACIONES EN JQUERY *********************************************************************************************

    $('#animar').click(function(){                                 //Evento click en boton animar
        $('#caja').animate({marginLeft:'500px',
                            fontSize: '50px',
                            height: '110px',
                  },'slow')                                       //Crea una animación al crear un margen de 500px a la izq
                  .animate({
                            borderRadius: '900px',
                            marginTop: '100px'
                  }, 'slow')
                  .animate({
                            marginLeft: '0px',
                            borderRadius: '0px',
                  }, 'slow')
                  .animate({
                            borderRadius: '500px',
                            marginTop: '0px'
                  }, 'slow')

    })


})