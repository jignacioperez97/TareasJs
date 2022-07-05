
//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

alert ('un mensaje')

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write)

document.write ('Hello World')

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

document.write (3+5)

//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

let nombreUsuario = 'Ignacio Perez'
prompt("Hola " + nombreUsuario);


//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

let numero1 = parseInt (prompt ("Ingrese el primer número"))
let numero2 = parseInt (prompt ("Ingrese el segundo número"))
document.write ( "La suma es" + (numero1 + numero2))

// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let numeromayor1 = parseInt (prompt ("Ingrese el primer número"))
let numeromayor2 = parseInt (prompt ("Ingrese el segundo número"))
if (numeromayor1 > numeromayor2) {
    document.write ("El número mayor es " + (numeromayor1))}
else if(numeromayor1 === numeromayor2) {
    document.write ("Ambos números son iguales: " + (numeromayor2))}
else {
    document.write ("El número mayor es " + (numeromayor2))}

// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let nummayor1 = parseInt (prompt ("Ingrese el primer número"))
let nummayor2 = parseInt (prompt ("Ingrese el segundo número"))
let nummayor3 = parseInt (prompt ("Ingrese el tercer número"))
if (nummayor1 >= nummayor2 && nummayor1 >= nummayor3) {
    document.write ("El número mayor es " + (nummayor1))}
else if(nummayor2 >= nummayor3 && nummayor2 >= nummayor1)  {
    document.write ("El número mayor es " + (nummayor2))}
else {
    document.write ("El número mayor es " + (nummayor3))}


// 8.- Escribe un programa que pida un número y diga si es divisible por 2

let numdividir = parseInt (prompt ("Ingresar un número"))

if (numdividir % 2 === 0){
    document.write ("Es divisible en 2")
}
else {
    document.write ("No es divisible en 2")
}


// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = (prompt ("Ingresar una frase"))




// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let numdividir2 = parseInt (prompt ("Ingresar un número para dividirlo"))

if (numdividir2 % 3 || 2 || 5 || 7 === 0){
    document.write ("Es divisible en 2, 3, 5 o 7")
}
else {
    document.write ("No es divisible en 2, 3, 5 o 7")
}



// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let numdividir3 = parseInt (prompt ("Ingrese un número para dividirlo"))

if (numdividir3 % 2 === 0){
    document.write ("Es divisible por 2")
}
else if (numdividir3 % 3 === 0){
    document.write ("Es divisible por 3")
}
else if (numdividir3 % 5 === 0){
    document.write ("Es divisible por 5")
}
else if (numdividir3 % 7 === 0){
    document.write ("Es divisible por 7")
}
else {
    document.write ("No es divisible por 2, 3, 5 o 7")
}
