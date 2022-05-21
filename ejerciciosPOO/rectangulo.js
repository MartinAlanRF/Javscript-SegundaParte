console.log('Ejemplo de POO');
//Nombre de las clases inician Mayusculas
class Rectangulo{
    // base = 0;
    // altura = 0;

    //metodod default constructor 
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
        // this.area();
        // console.log('Desde el metodo constructor');
    }
    //Metodos es una función dentro de una clase
    area(){
        // console.log('Calculando area');
        return this.base * this.altura;
    }
    //Metodos
    perimetro(){
        return (this.base * 2) + (this.altura * 2)
    }
}

//Instancias
let rectanguloUno = new Rectangulo(5, 7);
document.getElementById("respuesta").innerHTML = rectanguloUno.area();

/* rectanguloUno.altura = 5;
rectanguloUno.base = 7; */
/* 
console.log(rectanguloUno.area());
console.log(rectanguloUno.perimetro());
 */
