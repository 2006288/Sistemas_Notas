window.addEventListener("resize", anchoPagina);

var contenedorInformacion = document.getElementById("contenedorInformacion");

function anchoPagina(){
    var anchoVentana = window.innerWidth;
    if(window.innerWidth > 850){
        let resta = anchoVentana-80;
        let restactiva = anchoVentana-350;
        contenedorInformacion.setAttribute("style",`--normal:${resta}px; --activo:${restactiva}px;`);
    }else{
        contenedorInformacion.setAttribute("style",`--normal:${anchoVentana}px;`);
    }
}

anchoPagina();