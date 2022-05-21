const formulario = () => {
    let selectValueFigura = Number(document.getElementById('figurasSelect').value);
    const cuadrado = document.getElementById('cuadrado');
    const rectangulo = document.getElementById('rectangulo');
    const triangulo = document.getElementById('triangulo');
    const circulo = document.getElementById('circulo');
    const paralelogramo = document.getElementById('paralelogramo');

    //Se selecciona de nuevo el primer valor
    if (selectValueFigura === 0) {
        cuadrado.style.display = 'none'; // hide
        rectangulo.style.display = 'none'; // hide
        triangulo.style.display = 'none'; // hide
        circulo.style.display = 'none'//hide
        paralelogramo.style.display = 'none';// hide
    }

    //Cuadrado
    if (selectValueFigura === 1) {
        cuadrado.style.display = ''; // show
        rectangulo.style.display = 'none'; // hide
        triangulo.style.display = 'none'; // hide
        circulo.style.display = 'none';//hide
        paralelogramo.style.display = 'none';// hide
    }
    //Rectangulo
    if (selectValueFigura === 2) {
        cuadrado.style.display = 'none'; // hide
        rectangulo.style.display = ''; // show
        triangulo.style.display = 'none'; // hide
        circulo.style.display = 'none';//hide
        paralelogramo.style.display = 'none';// hide
    }
    //Tríangulo
    if (selectValueFigura === 3) {
        cuadrado.style.display = 'none'; // hide
        rectangulo.style.display = 'none'; // hide
        triangulo.style.display = ''; // show
        circulo.style.display = 'none;'//hide
        paralelogramo.style.display = 'none';// hide
    }
    //Circulo
    if (selectValueFigura === 4) {
        cuadrado.style.display = 'none'; // hide
        rectangulo.style.display = 'none'; // hide
        triangulo.style.display = 'none'; // hide
        circulo.style.display = '';//show
        paralelogramo.style.display = 'none'// hide
    }
    //Circulo
    if (selectValueFigura === 5) {
        cuadrado.style.display = 'none'; // hide
        rectangulo.style.display = 'none'; // hide
        triangulo.style.display = 'none'; // hide
        circulo.style.display = 'none';//hide
        paralelogramo.style.display = '';//show
    }

}

class Cuadrado {
    //metodod default constructor 
    constructor(lado) {
        this.lado = lado;
    }
    //Metodos es una función dentro de una clase
    areaCuadrado() {
        return this.lado * this.lado;
    }
    //Metodos
    perimetroCuadrado() {
        return (this.lado * 4);
    }

}
const areaSquare = () => {
    const cuadradoValue = Number(document.getElementById('cuadroValue').value);
    let calcularCuadrado = new Cuadrado(cuadradoValue);
    document.getElementById("respuesta").innerHTML = calcularCuadrado.areaCuadrado();
}
const perimetroSquare = () => {
    const cuadradoValue = Number(document.getElementById('cuadroValue').value);
    let calcularCuadrado = new Cuadrado(cuadradoValue);
    document.getElementById("respuesta2").innerHTML = calcularCuadrado.perimetroCuadrado();
}
/* Class y metodos rectangulo */
class Rectangulo {
    //metodod default constructor 
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        // this.area();
        // console.log('Desde el metodo constructor');
    }
    //Metodos es una función dentro de una clase
    areaRectangle() {
        // console.log('Calculando area');
        return this.base * this.altura;
    }
    //Metodos
    perimetroRectangulo() {
        return ((this.base * 2) + (this.altura * 2));
    }
}
const areaRectangle = () => {
    const rectanguloValueBase = Number(document.getElementById('rectanguloValueBase').value);
    const rectanguloValueHeight = Number(document.getElementById('rectanguloValueHeight').value);

    let calcularRactangle = new Rectangulo(rectanguloValueBase, rectanguloValueHeight);
    document.getElementById("resultadoRectangulo").innerHTML = calcularRactangle.areaRectangle();
}
const perimetroRectangle = () => {
    const rectanguloValueBase = Number(document.getElementById('rectanguloValueBase').value);
    const rectanguloValueHeight = Number(document.getElementById('rectanguloValueHeight').value);

    let calcularRactangle = new Rectangulo(rectanguloValueBase, rectanguloValueHeight);
    document.getElementById("resultadoRectangulo2").innerHTML = calcularRactangle.perimetroRectangulo();
}

/* Class y metodos triángulo */
const opcionesTriangulo = () => {
    let trianguloSelect = Number(document.getElementById('trianguloSelect').value);
    const areaT = document.getElementById('areaTriangulo');
    const perimetroT = document.getElementById('perimetroTriangulo');

    if (trianguloSelect === 1) {
        perimetroT.style.display = 'none'; // hide
        areaT.style.display = '';

    }

    if (trianguloSelect === 2) {
        perimetroT.style.display = '';
        areaT.style.display = 'none'; // hide
    }
}

class Triangulo {
    constructor(base, altura, lado) {
        this.base = base;
        this.altura = altura;
        this.lado = lado;
    }
    //Metodos
    areaTriangle() {
        return (this.base * this.altura) / 2;
    }
    perimetroTriangle() {
        return (this.lado + this.base + this.altura);
    }
}
const areaTriangulo = () => {
    const triangleValueBase = Number(document.getElementById('baseValue').value);
    const triangleValueAltura = Number(document.getElementById('heightValue').value);

    let calularAreaTriangulo = new Triangulo(triangleValueBase, triangleValueAltura);
    document.getElementById("resultadoTrianguloArea").innerHTML = calularAreaTriangulo.areaTriangle();
}
const perimetroTriangulo = () => {
    const triangleValueLadoOne = Number(document.getElementById('ladoOne').value);
    const triangleValueLadoTwo = Number(document.getElementById('ladoTwo').value);
    const triangleValueLadoThree = Number(document.getElementById('ladoThree').value);

    let calularPerimetroTriangulo = new Triangulo(triangleValueLadoOne, triangleValueLadoTwo, triangleValueLadoThree);
    document.getElementById("resultadoTrianguloPerimetro").innerHTML = calularPerimetroTriangulo.perimetroTriangle();
}

/* Class y metodos rectangulo */
class Circulo {
    constructor(radio, pi) {
        this.radio = radio;
        this.pi = pi;
    }
    //Metodos
    areaCircle() {
        return (this.pi * (this.radio * this.radio));
    }
    perimetroCircle() {
        return (2 * this.pi * this.radio);
    }
}

const areaCirculo = () => {
    const radio = Number(document.getElementById('radio').value);
    const pi = 3.1416;

    let calcularAreaCirculo = new Circulo(radio, pi);
    document.getElementById("resultadoAreaCirculo").innerHTML = calcularAreaCirculo.areaCircle();
}
const perimetroCirculo = () => {
    const radio = Number(document.getElementById('radio').value);
    const pi = 3.1416;

    let calularPerimetroCirculo = new Circulo(radio, pi);
    document.getElementById("resultadoPerimetroCirculo").innerHTML = calularPerimetroCirculo.perimetroCircle();
}

/* Class y metodos paralelogramo */
const opcionesParalelogramo = () => {
    let paralelogramoSelect = Number(document.getElementById('paralelogramoSelect').value);
    const areaParalelogramo = document.getElementById('areaParalelogramo');
    const perimetroParalelogramo = document.getElementById('perimetroParalelogramo');

    if (paralelogramoSelect === 1) {
        areaParalelogramo.style.display = ''; //show
        perimetroParalelogramo.style.display = 'none'; // hide
    }

    if (paralelogramoSelect === 2) {
        areaParalelogramo.style.display = 'none'; // hide
        perimetroParalelogramo.style.display = ''; //show
    }
}

class Paralelogramo {
    //En el caso de cuando se ingresa el lado esta variable la toma el metodo constructor como altura
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    //Metodos
    areaParalelogramo() {
        return (this.base * this.altura);
    }
    perimetroParalelogramo() {
        console.log(this.base, this.altura );
        return ((this.base + this.altura) * 2 );
    }
}

const areaParalelogramo = () => {
    const base = Number(document.getElementById('parelelogramoValueBase').value);
    const altura = Number(document.getElementById('parelelogramoValueHeight').value);

    let calcularAreaParalelogramo = new Paralelogramo(base, altura);
    document.getElementById("resultadoAreaParalelogramo").innerHTML = calcularAreaParalelogramo.areaParalelogramo();
}
const perimetroParalelogramo = () => {
    const base = Number(document.getElementById('parelelogramoValueBaseDos').value);
    const lado = Number(document.getElementById('parelelogramoValueSide').value);
 
    let calularPerimetroParalelogramo = new Paralelogramo(base, lado);
    document.getElementById("resultadoPerimetroParalelogramo").innerHTML = calularPerimetroParalelogramo.perimetroParalelogramo();
}