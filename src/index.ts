import { Libro } from './Libro';
import { Pelicula } from './Pelicula';
import { Revista } from './Revista';

console.log("--- Gestor de Biblioteca para practica de TUP-UTN-P2------------");
console.log("----------------------------------------------------------------");

// Instancias de Libro utilizando las sobrecargas del constructor
// El género será "Desconocido" por defecto
const libro1 = new Libro("Martin Fierro", "José Hernández");
// El género será asignado en la instanciación
const libro2 = new Libro("IT", "Stephen King", "Terror");

// Instancias de Pelicula, una con duración por defecto y otra con duración específica
const pelicula1 = new Pelicula("Interstellar", "Christopher Nolan", 169);
const pelicula2 = new Pelicula("Pulp Fiction", "Quentin Tarantino"); // Duración por defecto (90 min)

// Instancias de Revista utilizando las sobrecargas del constructor
const revista1 = new Revista("Viva"); // Solo título
const revista2 = new Revista("ISO1200", 50); // Título y número
const revista3 = new Revista("Lazer", 20, 2002); // Título, número y año

// Muestra de datos iniciales
console.log("Datos iniciales:");
console.log("------------------------LIBROS----------------------------------");
console.log(libro1.mostrarDetalles());
console.log(libro2.mostrarDetalles());
console.log("------------------------PELÍCULAS--------------------------------");
console.log(pelicula1.mostrarDetalles());
console.log(pelicula2.mostrarDetalles()); // Observa la duración por defecto
console.log("----------------------------------------------------------------");

// Uso de setters para modificar atributos
console.log("Modificando estados y atributos:");
libro1.prestado = true;
libro1.genero = "Novela de caballerías";
pelicula1.alquilada = true;

// Muestra de datos después de la modificación
console.log("------------------------LIBROS----------------------------------");
console.log(libro1.mostrarDetalles());
console.log(libro2.mostrarDetalles());
console.log("------------------------PELÍCULAS--------------------------------");
console.log(pelicula1.mostrarDetalles());
console.log(pelicula2.mostrarDetalles());
console.log("----------------------------------------------------------------");

// Ejemplo de uso del nuevo método con parámetro por defecto
console.log("Mostrando resumenes de Películas:");
console.log(`Resumen completo de Pulp Fiction: ${pelicula2.mostrarResumen()}`);
console.log(`Resumen corto de Interstellar: ${pelicula1.mostrarResumen("corto")}`);

console.log("-----------------REVISTAS-------------------------");
// Instancia con valores inválidos para ver las validaciones
const revistaConValoresInvalidos = new Revista("Playboy", -10, 2026);

// Muestra de datos iniciales
console.log("Datos iniciales de revistas:");
console.log(revista1.mostrarDetalles());
console.log(revista2.mostrarDetalles());
console.log(revista3.mostrarDetalles());
console.log(revistaConValoresInvalidos.mostrarDetalles());
console.log("------------------------------------------");

// Modificando el estado de préstamo
console.log("Modificando estado de la revista:");
revista1.prestada = true;
console.log(revista1.mostrarDetalles());
console.log("Fin de programa");