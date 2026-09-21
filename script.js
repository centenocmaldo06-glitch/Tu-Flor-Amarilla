const inicio =
    document.getElementById("inicio");

const flor =
    document.getElementById("flor");

const carta =
    document.getElementById("carta");


const comenzar =
    document.getElementById("comenzar");

const abrirMensaje =
    document.getElementById("abrir-mensaje");


/* =========================
   COMENZAR
========================= */

comenzar.addEventListener(
    "click",
    function () {

        inicio.classList.remove(
            "activa"
        );


        setTimeout(
            function () {

                flor.classList.add(
                    "activa"
                );

            },
            700
        );

    }
);


/* =========================
   ABRIR MENSAJE
========================= */

abrirMensaje.addEventListener(
    "click",
    function () {

        flor.classList.remove(
            "activa"
        );


        setTimeout(
            function () {

                carta.classList.add(
                    "activa"
                );

            },
            700
        );

    }
);