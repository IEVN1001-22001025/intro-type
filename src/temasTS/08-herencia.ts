
class Persona3{
    //public apmaterno:string;
    //private aparteno:string;
    protected nombre1: string;
    protected edad: number;
    protected direccion: string;
    constructor( nombre1:string, edad:number, direccion:string){
        this.nombre1=nombre1;
        this.edad=edad;
        this.direccion=direccion;

        
    }
    MostrarPersona(){
        console.log(`Nombre: ${this.nombre1},edad: ${this.edad}, direccion: ${this.direccion}`);
    }
}

class Empelado3 extends Persona3{
    private sueldo: number;
    constructor(nombre1:string,edad:number,direccion:string,sueldo:number){
        super(nombre1,edad,direccion);
        this.sueldo=sueldo;
    }
    mostrarEmpelado(){
        this.MostrarPersona();
        console.log(`Sueldo: ${this.sueldo}`);

    }
}

const empleado3= new Empelado3('Ana',28,'Calle falsa 123', 2000);
empleado3.mostrarEmpelado();