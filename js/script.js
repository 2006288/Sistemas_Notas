window.addEventListener("resize", anchoPagina);

var contenedorInformacion = document.getElementById("contenedorInformacion");
var menulateral = document.getElementById("sidebar");

function anchoPagina(){
    var anchoVentana = window.innerWidth;
    var altoVentana = window.innerHeight;
    if(window.innerWidth > 850){
        let resta = anchoVentana-86;
        let restactiva = anchoVentana-356;
        contenedorInformacion.setAttribute("style",`--normal:${resta}px; --activo:${restactiva}px; --alto:${altoVentana}px;`);
        menulateral.setAttribute("style",`--alto:${altoVentana}px;`);
    }else{
        contenedorInformacion.setAttribute("style",`--normal:${anchoVentana}px; --alto:${altoVentana}px;`);
        menulateral.setAttribute("style",`--alto:${altoVentana}px; --normal:${anchoVentana}px;`);
    }
}

anchoPagina();