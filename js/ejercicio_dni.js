// Veremos Montajes de comentarios. Para acostumbrarte a comentar
/*
    DNI buscar letra 
    version 0.1
    Owi
*/

/* 
    -----------------------------
        Variables
    ----------------------------
 */

var dniCompleto =[], resultado, letras =[
    "T",
    "R",
    "W",
    "A",
    "G",
     "M",
     "Y",
     "F",
     "P",
     "D",
     "X",
     "B",
     "N",
     "J",
     "Z",
     "S",
     "Q",
     "V",
     "H",
     "L",
     "C",
     "K",
     "E",
     "T",
];



/* 
    -----------------------------
        Lógica del ejercicio
    ----------------------------
 */


/* -Este caso es bastante bueno para hacer un  "do while" 
// ¿por que? porque quiero primero que haga ciertas acciones antes de pensar en hacer otra
*/
do
    {
        //Preguntar al usuario
            var numeroDni= prompt('Introduce Número DNI: ');
    
        // Operación Matemámtica
            const Resto = numeroDni % 23;

        //Condicional. Limitar al usuario en su respuesta.
        switch(true)
            {
                case numeroDni <0:               // estoy seguro que esta mal
                case numeroDni.length !== 8 :    // No hay ningun numero DNI que no tenga 8 digitos. 
                case numeroDni === "":
                    
                // Pequeño ajuste
                if(numeroDni === "salir")
                    {
                        alert('bye');
                        break;
                    }
                alert('ERROR! Vuelva a intentarlo');
                break;
            // se ha introducido bien por eso pasa a default
                default: 
                    resultado = numeroDni+ letras[Resto];
                    dniCompleto.push(resultado);

            }
    } while(numeroDni!=="salir");  // si alguien quiere salir, que ponga salir. 


//cuando salga quiero ver algo

//Resultado por pantalla
// for of se emplea para estar iterando un array 
    // -
// for if - esta mas indicado en generico y el for of para estas circunstancias.  
for (var dni of dniCompleto)
    {
        document.write(dni+ "<br>");
    }