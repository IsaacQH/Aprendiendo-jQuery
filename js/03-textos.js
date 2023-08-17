'use strict';


//DOM con jQuery

$(document).ready(function(){

    console.log('Se accedió correctamente a jQuery y web');               //Imprime que se ha cargado la web y jQuery

    addLinks()                                                            //Manda a llamar a la función addLinks                 

    $('#addButton')
        .removeAttr('disabled')                                           //Remueve el atributo disable del botón
        .click(function(){                                                //Crea el evento click para etiqueta addButton
            var enlace = $('#enlaces').val()                              //Guarda el valor introducido en input enlace como txt

            $('#menu').append('<li><a href="' + enlace + '"></a></li>')   //Añade a la lista ul una nueva etiqueta a con valor href de enlace 

            $('#enlaces').val('')                                         //Deja en blanco el input
            addLinks()                                                    //Manda a llamar a la función addLiks
        })


    function addLinks(){
        var links = $('a')                                            //Guarda en variable links etiquetas a
        links.each(function(index){                                   //Recorre cada etiqueta a
            console.log($(this))                                      //Imprime las etiquetas a
            var contenido = $(this).attr('href')                      //Guarda el valor de texto de href de cada etiqueta a con attr()
            console.log(contenido)                                    //Imprime cada link como txt
            $(this).text(contenido)                                   //Esto nor permite escribir en cada lista de la etiqueta a el link

            $(this).attr('target','_blank')                           //Añade el atributo target para abrir ventanas nuevas con enlace selec

            
        });
    }
});



