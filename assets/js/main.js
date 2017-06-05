(function () {
  var contador = 0;
  var $conteo= $("#caracteres"); 

  var cargarPagina = function () {
    
    $("#twitter").submit(agregarToDo);
    $("#message").keyup(validarContenido);
    $("textarea").keypress(cambiarTamaño);

  };

  var agregarToDo = function (e) {
    e.preventDefault();
    
    var $contenedor = $("#posts");
    var $mensajeContenedor = $("#message");
    var $botonAgregar = $("#add-button");
    var $persona= $("#persona");
    var mensaje = $mensajeContenedor.val();
    var persona = $persona.val();
    var date = new Date();
    var hora = date.getHours();
    var minutos =date.getMinutes();
    var segundos = date.getSeconds();
    var $postContenedor = $("<article />", { "class": "jumbotron" });
    var $postCheck = $("<input type='checkbox' />");
    var $postTexto = $("<label />");
    var $postPersona = $("<br><label />");
    var $postFecha = $("<br><span />");
    var $postHora=$(" "+"<span />")
    var identificador = "marcador-" + contador;
    
    
    $postCheck.id = identificador;
    
    $postTexto.attr("for", identificador);
    $postTexto.text(mensaje);
    $postPersona.text("de:" + " " +persona);
    $postFecha.text(date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear(), ', ');
    $postHora.text("  "+hora +':'+ minutos+':'+ segundos);
    $postCheck.click(eliminarToDo);

    
    $postContenedor.append($postCheck);
    $postContenedor.append($postTexto);
    $postContenedor.append($postPersona);
    $postContenedor.append($postFecha);
    $postContenedor.append($postHora);
    $contenedor.prepend($postContenedor);

    
    $mensajeContenedor.val("");
    $persona.val("");
    $conteo.text("140");
    $botonAgregar.attr("disabled", true);

    contador++;
  };

var validarContenido = function () {
    var $addButton = $("#add-button");
    var caracteresMenos =$(this).val().trim().length
    if( caracteresMenos > 0 && caracteresMenos < 140) {
    
      $addButton.removeAttr("disabled");

    } else {
      $addButton.attr("disabled", true);
    }mostrarNumeracion(caracteresMenos);
     
  };


  var eliminarToDo = function () {
    $(this).parent().remove();
  };
  var mostrarNumeracion= function(caracteresMenos){
    
    var contadorInicial= 140;
    var caracteresMenos= caracteresMenos;
    var descontar= contadorInicial-caracteresMenos;
    $conteo.text(descontar);
    cambiarColor(caracteresMenos,$conteo);
  };
  var cambiarColor= function(caracteresMenos, descontar){
    if(caracteresMenos>= 120 && caracteresMenos<130){
      descontar.css("color", "orange");
    }else if(caracteresMenos>= 130 && caracteresMenos<140){
      descontar.css("color", "red");
    }console.log(caracteresMenos);
};
var cambiarTamaño= function(e){
  if(e.which==13){
    if (this.value.split('\n').length!=0) {
        this.rows=this.value.split('\n').length+2
}else{
  this.rows=2
}};
  
}
  
  $(document).ready(cargarPagina);
})();








