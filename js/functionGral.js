const inputGral = document.querySelectorAll("input");
inputGral.forEach((x) => {
  x.addEventListener("blur", () => validar(x));
});

function validar(caja) {
  const element = caja.name;
  const hermano = caja.nextElementSibling;
  let msj = "";
  let regex = "";
  //hermano.innerHTML='';
  switch (element) {
    case "nombre":
      regex = /^[a-zA-Z\s]{3,20}$/;
      if (caja.value.length <= 3||caja.value=='') {
        msj = "Debe ingresar mas de 3 letras";
      } else if (!regex.test(caja.value)) {
        msj = "Solo puede ingresar letras";
      } else {
        msj = "";
      }

      if (document.getElementById(element + "-error") !== null) {
        spanNuevo = document.getElementById(element + "-error");
        spanNuevo.textContent = msj;
      } else {
        spanNuevo = document.createElement("span");
        spanNuevo.textContent = msj;
        spanNuevo.id = caja.name + "-error";
        caja.parentNode.insertBefore(spanNuevo, caja.nextSibling);
      }
      break;
    case "apellido":
      regex = /^[a-zA-Z\s]{3,20}$/;
      if (caja.value.length <= 3) {
        msj = "Debe ingresar mas de 3 letras";
      } else if (!regex.test(caja.value)) {
        msj = "Solo puede ingresar letras";
      } else {
        msj = "";
      }

      if (document.getElementById(element + "-error") !== null) {
        spanNuevo = document.getElementById(element + "-error");
        spanNuevo.textContent = msj;
      } else {
        spanNuevo = document.createElement("span");
        spanNuevo.textContent = msj;
        spanNuevo.id = caja.name + "-error";
        caja.parentNode.insertBefore(spanNuevo, caja.nextSibling);
      }

      break;
    case "dni":
      const dni = /^\d{8}$/;

      if (!dni.test(caja.value)) {
        if (document.getElementById(caja.name + "-error")) {
          spanNuevo = document.getElementById(caja.name + "-error");
        } else {
          const spanNuevo = document.createElement("span");
          spanNuevo.id = caja.name + "-error";
        }

        spanNuevo.textContent = "Ingrese 8 numeros sin puntos";
        caja.parentNode.insertBefore(spanNuevo, caja.nextSibling);
      } else {
        if (document.getElementById(caja.name + "-error")) {
          document.getElementById(caja.name + "-error").textContent = "";
        }
      }
      break;
    case "email":
        regex = /^[a-zA-Z0-9._+-]+@+[a-zA-Z.-_]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(caja.value)) {
          msj = "Debe ingresar un mail valido";
        } else {
          msj = "";
        }
  
        if (document.getElementById(element + "-error") !== null) {
          spanNuevo = document.getElementById(element + "-error");
          spanNuevo.textContent = msj;
        } else {
          spanNuevo = document.createElement("span");
          spanNuevo.textContent = msj;
          spanNuevo.id = caja.name + "-error";
          caja.parentNode.insertBefore(spanNuevo, caja.nextSibling);
        }
  
      break;
    case "telefono":
      const telefono = /^\d{10}$/;
      if (!telefono.test(caja.value)) {
        spanNuevo = "";
        spanNuevo = document.getElementById(caja.name + "-error");
        spanNuevo.textContent =
          "Ingrese Area sin 0 y numeros sin 15 ni puntos ni guiones";
      } else {
        spanNuevo = document.getElementById(caja.name + "-error");
        spanNuevo.textContent = "";
      }
  }
}
