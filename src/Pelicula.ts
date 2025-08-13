export class Pelicula {
  // Atributos privados
  private _titulo: string;
  private _director: string;
  private _duracionMinutos: number;
  private _alquilada: boolean;
  
  // Constructor con un valor por defecto para la duración
  constructor(titulo: string, director: string, duracionMinutos: number = 90) {
    this._titulo = titulo;
    this._director = director;
    this._duracionMinutos = duracionMinutos;//usa el valor por defecto si no se define en la instanciación
    this._alquilada = false;
  }
  
  // Getter para el título
  public get titulo(): string {
    return this._titulo;
  }
  
  // Getter para el director
  public get director(): string {
    return this._director;
  }
  
  // Setter para el estado de alquiler
  public set alquilada(alquilada: boolean) {
    this._alquilada = alquilada;
  }
  
  // Método polimórfico para mostrar detalles
  public mostrarDetalles(): string {
    const estado = this._alquilada ? "Alquilada" : "Disponible";
    return `Película: "${this.titulo}" dirigida por ${this.director}. Duración: ${this._duracionMinutos} minutos. Estado: ${estado}.`;
  }

  // Nuevo método con parámetro opcional con valor por defecto
  public mostrarResumen(formato: "corto" | "completo" = "completo"): string {
    if (formato === "corto") {
      return `"${this.titulo}" (${this._duracionMinutos} min)`;
    }
    return this.mostrarDetalles();
  }
}