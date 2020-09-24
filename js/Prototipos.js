  
/* 
    --------------------------------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        PROTOTIPOS - ECMASCRIPT ANTES Y DESPUES DEL 2015
    --------------------------------------------------------
*/


/*
    ---------------------------------------------------
        PROTOTIPOS - ANTES DEL ECMASCRIPT DE 2015
    ---------------------------------------------------
*/

/*
    PROTOTIPOS
        -JavaScript cambio mucho en poco tiempo. Y provoca cosas un poco desiguales
        - vamos a hablar de antes del ECMAScript de 2015
        - lo importante es que este prototipos sigue navegando por algun lado y hay que saber leerla
*/
/*
    Estructura de una clase (que se llama prototipo en JavaScript)
        - La palabra prototipo no desaparece.
        - Pensar que este lenguaje no empezo asi. 
        -hay lenguajes como python que tuvo un comienzo tan importante que no tiene esa basura interna
*/



/*
    ------------------------------------
        CONSTRUCTOR ( CLASE PERSONA)
    ------------------------------------
*/

/*
    - Cuando creamos un prototipo. La primera letra siempre en mayusculas
*/
function Persona (nombre, apellidos, edad, nacionalidad='Espanyola')
    {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad= edad; 
        this.nacionalidad =nacionalidad;
    }


/*
    ---------------------------------
        INSTANCIA DEL CONSTRUCTOR 
    ---------------------------------
*/


//Instancias del constructor ( Instanciar de Persona)
var diego = new Persona ('Diego', 'Torres');


// jugamos con algo nuevo 
// edad no esta definido y en el prototipo ya le decimos que su nacionalidad es español

function Persona (nombre, apellidos, edad, nacionalidad='Espanyola')
    {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad= edad; 
        this.nacionalidad =nacionalidad;
    }

//Instancias del constructor ( Instanciar de Persona)
//pero resulta que no es español es austraquio
var diego = new Persona ('Diego', 'Torres', 38);






/*
    -------------------------------------
        METODOS (PROTOTIPO DE PERSONA)
    -------------------------------------
*/




//Instancias del constructor ( Instanciar de Persona)
var diego = new Persona ('Diego', 'Torres');


function Persona (nombre, apellidos, edad, nacionalidad='Espanyola')
    {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad= edad; 
        this.nacionalidad =nacionalidad;
    }


//Metodos (prototipo Persona)
// puedo utilizar un arrow function si y no. 
// los arrow function no reconocen  los "this"
// uno de los casos en donde no se puede utilizar arrow
Persona.prototype.saludar = function ()
    {
        //con prototipo ya le decimos que te vamos a insertar este metodo de saludar
        console.log(`Hola me llamo ${this.nombre } ${apellidos}`) ;
    };




//Instancias del constructor ( Instanciar de Persona)

var diego = new Persona ("Diego", "Torres", 38);
var maria = new Persona ("Maria", "Sanchaez", 18);


diego.saludar();






/*
    ¿como heredar esta estructura? 
        -

    */




/******************************************************************************************************************/
/*
    ---------------------------------------------------
        PROTOTIPOS - DESPUES DEL ECMASCRIPT DE 2015
    ---------------------------------------------------
*/


/*
    PROTOTIPOS
        - Despues del ECMAScript de 2015
        - Consiguio una estructura "class" y consiguio tener un metodo y constructor dentro de esa class
        - ¿la otra es valida? 
            -Si, si es valida. 
            - Siguen siendo igual de validas. que las estructuras nuevas.
        - Veremos el potencial que tiene con herencia
            -es mas modular
        - El que dio el masaso es el tema de las "Herencias" en "clases "

        -Las herencias nos ahorra muchisisisimo codigo. 
            
        
*/



/*
    Estructura de una clase (que se llama prototipo en JavaScript)
        - La vamos a llmar clases (pero saber que siempre seran prototipos en el fondo)
*/


/*
    -------------
        CLASE
    -------------
*/

//dentro de la clase persona se genera un constructor
class Persona 
    {
            //constructor
            constructor (nombre, apellidos, edad, nacionalidad='Espanyola',altura)
            {
                this.nombre = nombre;
                this.apellidos = apellidos;
                this.edad= edad; 
                this.nacionalidad =nacionalidad;
                this.altura = altura; 
            }
            
            
            /***** METODO ******/
        
            //Metodos - Imaginar que podemos meter los metodos dentro de persona
                //- los metodos son funciones
            saludar()
            {
                console.log(`Hola me llamo ${this.nombre } ${apellidos}`) ;
            }
     }

/*
    -----------------
        HERENCIA
    -----------------
*/


            //Herencias en clases
                /* -Haremos una herencia llamada desarrollador 
                    -debemos hacer un "super constructor"
                    -Una parte es la del heredado y otra es la propia. Que seria lenguaje
                    
                    - "class ______ extends  '___clase padre__'   "
                    */
class Desarrollador extends Persona
    {
        //constructor        
        constructor (nombre, apellidos, edad, nacionalidad, lenguaje)  // aqui es donde elegimos como pedirla
            {
                super (nombre, apellidos, edad, nacionalidad);
                this.lenguaje = lenguaje;
            }

        // Metodo dentro de desarrollador
        saludarDev()
        {
            console.log(`Hola me llamo ${this.nombre } ${apellidos} y trabajo en el lenguaje ${this.lenguaje}`) ;
        }        


    }

/*
    ------------------
        INSTANCIAR
    ------------------
*/

//Instancias del constructor ( Instanciar de Persona)

var diego = new Persona ("Diego", "Torres", 38);
var maria = new Persona ("Maria", "Sanchaez", 18);

//cuando no tenes nada que apartar, podes poner "undefined"
var ana = new Desarrollador("Anna","Torres",28,undefined,"Python");

/*
    Desarrollador es una clase, para hacer un extends necesitas que desarrolador sea una clases

    otro dato
        - Al imprimir en consola  hereda del padre que la nacionalidad de Anna es "Española"
*/





/*
    Herencia de atributos

    Herencias por metodos 
*/


/*
    - todo esto es una forma de generar objetos
    - las clases son la manera de crear objetos. 
*/
