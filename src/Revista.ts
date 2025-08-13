//ESTE EJEMPLO SIRVE PARA ENTENDER COMO SE PUEDEN USAR METODOS PRIVADOS DENTRO DE CONSTRUCTORES
//NO ES UNA PRACTICA NORMAL Y EL MODO STRICT PUEDE MARCAR COMO ERROR NO TENER INICIALIZADOR DE LOS ATRIBUTOS
//PARA ESTO SE DESHABILITO EL MODO STRICT EN tsconfig.json
export class Revista {
  // Atributos privados
  private _titulo: string;
  private _numero: number;
  private _anioPublicacion: number;
  private _prestada: boolean;
  
  // Sobrecarga de constructores
  constructor(titulo: string, numero: number, anioPublicacion: number);
  constructor(titulo: string, numero: number);
  constructor(titulo: string);

  // Implementación del constructor con condicionales y setters privados
  constructor(titulo: string, numero?: number, anioPublicacion?: number) {
    this.setTitulo(titulo);
    this.setPrestada(false);

    if (numero !== undefined) {
      this.setNumero(numero);
    } else {
      this.setNumero(1); // Valor por defecto si no se proporciona
    }

    if (anioPublicacion !== undefined) {
      this.setAnioPublicacion(anioPublicacion);
    } else {
      this.setAnioPublicacion(new Date().getFullYear()); // Año actual por defecto
    }
  }

  // Getters para los atributos
  public get titulo(): string {
    return this._titulo;
  }
  public get numero(): number {
    return this._numero;
  }
  public get anioPublicacion(): number {
    return this._anioPublicacion;
  }
  
  // Setter público para el estado de préstamo
  public set prestada(prestada: boolean) {
    this.setPrestada(prestada);
  }

  // Setters privados con validación
  private setTitulo(titulo: string): void {
    if (titulo.trim().length === 0) {
      throw new Error("El título no puede estar vacío.");
    }
    this._titulo = titulo;
  }
  
  private setNumero(numero: number): void {
    if (numero <= 0) {
      console.warn("Advertencia: El número de revista debe ser mayor que 0. Se establecerá a 1.");
      this._numero = 1;
      return;
    }
    this._numero = numero;
  }

  private setAnioPublicacion(anio: number): void {
    if (anio > new Date().getFullYear()) {
      console.warn("Advertencia: El año de publicación no puede ser en el futuro. Se establecerá al año actual.");
      this._anioPublicacion = new Date().getFullYear();
      return;
    }
    this._anioPublicacion = anio;
  }

  private setPrestada(prestada: boolean): void {
    this._prestada = prestada;
  }

  // Método polimórfico para mostrar detalles
  public mostrarDetalles(): string {
    const estado = this._prestada ? "Prestada" : "Disponible";
    return `Revista: "${this.titulo}", Número: ${this.numero}, Año: ${this.anioPublicacion}. Estado: ${estado}.`;
  }
}