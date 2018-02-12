// inicializacion de windows y funcion de splash
$(document).ready(function() {
  $('.food').hide();
  setTimeout(function() {
    $('#foodmap').fadeOut(500);
    $('.food').show();
  }, 2000);
});
// mouseover 
/* $('img').hover(function(){
  $(this).attr('src', 'assets/img/download.jpg');
  });
$('img').mouseover(function() {
  $(this).attr('src','assets/img/chatarra.jpg' )
  });*/
$('.zoom').hover(function() {
  $(this).addClass('transition');
}, function() {
  $(this).removeClass('transition');
});

// función buscador 
$('#myInput').on('keyup', function() {
  var value = $(this).val().toLowerCase();
  $('#myList div').filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
  // funcion restaurante para el modal
  /* $('img').click(function(){
        //CAPTURAN EL atributo de cada data
      var name = $(this).attr("data-name");
      var message = $(this).attr("data-message")
      var address = $(this).attr("data-address");
      var cost = $(this).attr("data-cost");
        //agrega 
        $('.modal-title').append(name);
        $('.message').append(message);
        $('.address').append(address);
        $('.cost').append(cost);
    });*/
  $('img').click(function() {
    // elimina los textos para dar a otro
    $('.modal-title').empty();
    $('.message').empty();
    $('.address').empty();
    $('.cost').empty();
    // captura el atributode cada data
    var name = $(this).attr('data-name');
    console.log(name);
    var message = $(this).attr('data-message');
    var address = $(this).attr('data-address');
    var cost = $(this).attr('data-cost');
    // append=inserta contenido especificado al final de los elementos seleccionados.
    $('.modal-title').append(name);
    $('.message').append(message);
    $('.address').append(address);
    $('.cost').append(cost);
  });
});