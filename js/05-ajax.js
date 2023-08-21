'use strict'
$(document).ready(function() {

    console.log("DONE!")

    //AJAX EN JQUERY

    //Load
    //$('#datos').load("https://reqres.in/")                          //Accede al URL y coloca el contenido del HTML en caja datos


    //Get: Nos permite hacer un query de los datos

    $.get('https://reqres.in/api/users', {page: 2}, function(response){       //Get con URL en pagína 2 y un parámetro response que regresa array
        console.log(response)                                                 //Imprime array de datos JSON
        response.data.forEach((element, index) => {                           //Método for each de array response accediendo a data
            $('#datos').append("<p>" + element.first_name + "</p>")           //Cada dato del array response imprime el valor de first_name
        });
    })

    //Post: Nos permite agregar datos a un URL
    /*
    var usuario = { name: "Victor Robles", web: "miweb.com.mx"}               //Variable JSON que añadimos al post

    $.post('https://reqres.in/api/users', usuario, function(response){        //Post en url con datos de usuario y callback con array response  
        console.log(response)                                                 //Imprime el array
    })  */

    $('#forms').submit(function(){                                            //Evento submit de forms
        var usuario ={                                                        //Objeto JSON
            name: $('input[name="first_name"]').val(),                        //Captura valor del input con name = name
            web: $('input[name="web"]').val()                                 //Captura valor del input con name = web
        } 

        console.log(usuario)
        
        /*$.post($(this).attr('action'), usuario, function(response){           //Post en url de elemento forms, variable usuarios, callback de arr
        console.log(response)                                                 //Imprime el array
        }).done(() => {alert("Usuario añadido")})  */


    //Método $.ajax

        $.ajax({
            type: "POST",                                                    //Tipo de método
            url: $(this).attr('action'),                                     //URL a usar
            data: usuario,                                                   //Variable a enviar
            beforeSend: function(){console.log("Enviando usuario")},         //Antes de enviar
            success: function(response){console.log(response)},              //Si hubo exito
            error: function(){console.log("Ocurrio un error")},              //Si hay un error
            timeout: 100                                                    //5000 ms
        })

    return false                                                              //Evita redirigir la página
    })
})