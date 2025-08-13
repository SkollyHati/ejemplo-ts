export class Libro {
  // Atributos privados
  private _titulo: string;
  private _autor: string;
  private _genero: string;
  private _prestado: boolean;

  // Sobrecarga de constructores
  constructor(titulo: string, autor: string, genero?: string);
  
  // Implementación del constructor con valor por defecto
  constructor(titulo: string, autor: string, genero: string = "Desconocido") {
    this._titulo = titulo;
    this._autor = autor;
    this._genero = genero; // Usa el valor por defecto si no se proporciona
    this._prestado = false;
  }

  // Getters para los atributos
  public get titulo(): string {
    return this._titulo;
  }

  public get autor(): string {
    return this._autor;
  }

  public get genero(): string {
    return this._genero;
  }

  // Setter para el género
  public set genero(nuevoGenero: string) {
    this._genero = nuevoGenero;
  }

  // Setter para el estado de préstamo
  //En este ejemplo vemos para que se usa el this
  //El parametro y la variable o atributo de clase se llaman igual. 
  //El usar this, nos aclara que se refiere a la variable de la clase y no al parametro
  //El uso de _ antes de cada variable es para evitar esto, no es normal aplicar esto en codigo
  public set prestado(_prestado: boolean) {
    this._prestado = _prestado;
  }

  // Método polimórfico que muestra la información del libro
  public mostrarDetalles(): string {
    const estado = this._prestado ? "Prestado" : "Disponible";
    return `Libro: "${this.titulo}" de ${this.autor}. Género: ${this.genero}. Estado: ${estado}.`;
  }
}