(function () {
  var contador = 0;

  var cargarPagina = function () {
    
    $("#twitter").submit(agregarToDo);
    
  };

  var agregarToDo = function (e) {
    e.preventDefault();
    
    var $contenedor = $("#posts");
    var $mensajeContenedor = $("#message");
    var $botonAgregar = $("#add-button");
    var mensaje = $mensajeContenedor.val();

    
    var $postContenedor = $("<article />", { "class": "jumbotron" });
    var $postCheck = $("<input type='checkbox' />");
    var $postTexto = $("<label />");

    var identificador = "marcador-" + contador;

    
    $postCheck.id = identificador;
    
    $postTexto.attr("for", identificador);
    $postTexto.text(mensaje);

    $postCheck.click(eliminarToDo);

    
    $postContenedor.append($postCheck);
    $postContenedor.append($postTexto);

    
    $contenedor.prepend($postContenedor);

    
    $mensajeContenedor.val("");
    

    contador++;
  };

  var eliminarToDo = function () {
    $(this).parent().remove();
  };



  
  $(document).ready(cargarPagina);
})();








