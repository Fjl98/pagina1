const botones = document.querySelectorAll(".abrir,.cerrar");
const navegacion = document.querySelector("nav");
const efecto = document.querySelectorAll(".efectos");
const boton_efecto = document.querySelector(".contenedor button")

botones.forEach(boton => {
	boton.addEventListener("click", evento => {
		evento.preventDefault();
		navegacion.classList.toggle("desplegar");
	});
});

efecto.forEach(foto => {
	window.addEventListener("scroll", () => {
		foto.classList.add("scale-out-center");
	});
});



	boton_efecto.addEventListener("mouseover", () => {
		boton_efecto.classList.add("jello-horizontal");
	});
