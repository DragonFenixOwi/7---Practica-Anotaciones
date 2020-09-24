/* 
    -------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        VARIABLES
    -------------------------------
*/

/*const 
    aqui let y var son lo mismo porque estamos en el Scope global
    - pero dentro de un bloque "no"
*/
let i=0; 
var i =0;



/*
    Lo ideal seria 
        - Utilizar "var" en el SCOPE GLOBAL
        - y "let" en los bloques entre lleves como "for"
*/



/*
    var - las mas antigua
        - Es la menos estricta, y por eso nos puede llevar a problemas
    let - la siguiente
        - es la mas estricta
        - se considera una variable de corte alcance 
        - cuando nosotros creamos un bloque. ya se un for u otro elemento 
        - un bloque es cualquier elemento entre llaves
    const - la mas distinta de todas
        -
    */

//var 
for (var i=0; i< 10 ; i++)
    {
        document.write(i+"<br>");
    }

document.write(`El ultimo valor de la i es: ${i}`);



//let 
for (let i=0; i< 10 ; i++)
    {
        document.write(i+"<br>");
    }
/*
    reducir el alcance de su variable. por que la i se ha creado dentro del bloque for
    por eso fuera de ese bloque for la i no existe
    por eso no imprime document.write fuera de esas llaves de for.

*/

document.write(`El ultimo valor de la i es: ${i}`);


/*
    ¿cual es mejor usar?
        - segun JavaScript, la idea es reducir el alcance.
        - Pero que una variable tenga un largo alcance es una "Mala practica"
        - Priorizariamos "let", en vez de utilizar "var"
*/




/*
    las constante "const" es igual que "let"
        - tiene corto alcance


*/

/*
CUIDADO
- La constante no se puede asignar otra vez
- no se puede reasignar en ningun momento
*/
const LETRA =1;
LETRA = 2;

//ESTO NO SE PUEDE HACER  es un error
const NUMERO = [1,2,3];
NUMERO = [12,12,33];

//Pero esto si se puede hacer
NUMERO.push(4);






