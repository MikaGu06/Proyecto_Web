function calcular() {
  let monto = parseFloat(document.getElementById("monto").value);
  let tasa = parseFloat(document.getElementById("tasa").value) / 100;
  let plazo = parseInt(document.getElementById("plazo").value);

  if (!monto || !tasa || !plazo) {
    document.getElementById("resultado").innerText = "Complete todos los campos.";
    return;
  }

  let cuota = monto * (tasa / 12) /
              (1 - Math.pow(1 + (tasa / 12), -plazo));

  document.getElementById("resultado").innerText =
    "Cuota estimada mensual: $" + cuota.toFixed(2);
}

document.getElementById("formContacto").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Mensaje enviado correctamente.");
});

const propiedades = [
  {
    titulo: "Casa Moderna en Equipetrol",
    precio: 120000,
    ubicacion: "Santa Cruz",
    tipo: "Casa",
    imagen: "img/casa.jpg",
    descripcion: "Casa moderna con 3 dormitorios, piscina y garaje doble."
  },
  {
    titulo: "Terreno en Urubó",
    precio: 80000,
    ubicacion: "Urubó",
    tipo: "Terreno",
    imagen: "img/terreno.jpg",
    descripcion: "Terreno amplio ideal para construcción residencial."
  },
  {
    titulo: "Departamento en Centro",
    precio: 95000,
    ubicacion: "Centro",
    tipo: "Departamento",
    imagen: "img/departamento.jpg",
    descripcion: "Departamento moderno cerca de bancos y comercios."
  }
];

function mostrarPropiedades(lista) {
  const contenedor = document.getElementById("lista-propiedades");
  contenedor.innerHTML = "";

  lista.forEach((propiedad, index) => {
    contenedor.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${propiedad.imagen}" class="card-img-top">
          <div class="card-body">
            <h5>${propiedad.titulo}</h5>
            <p>
              <strong>Ubicación:</strong> ${propiedad.ubicacion}<br>
              <strong>Tipo:</strong> ${propiedad.tipo}
            </p>
            <h6 class="text-primary">$${propiedad.precio.toLocaleString()}</h6>
            <button class="btn btn-outline-primary w-100 mt-2"
              onclick="verDetalles(${index})">
              Ver detalles
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

function verDetalles(index) {
  const propiedad = propiedades[index];

  document.getElementById("contenidoModal").innerHTML = `
    <img src="${propiedad.imagen}" class="img-fluid mb-3">
    <h4>${propiedad.titulo}</h4>
    <p>${propiedad.descripcion}</p>
    <p><strong>Precio:</strong> $${propiedad.precio.toLocaleString()}</p>
  `;

  let modal = new bootstrap.Modal(document.getElementById('modalPropiedad'));
  modal.show();
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarPropiedades(propiedades);
});

document.getElementById("filtroTipo").addEventListener("change", function() {
  let tipo = this.value;

  if (tipo === "Todos") {
    mostrarPropiedades(propiedades);
  } else {
    let filtradas = propiedades.filter(p => p.tipo === tipo);
    mostrarPropiedades(filtradas);
  }
});

const secciones = document.querySelectorAll(".seccion");

window.addEventListener("scroll", () => {
  secciones.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".mi-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});