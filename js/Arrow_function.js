/* 
    ------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        ARROW FUNCTION
    ------------------------------
*/


/*
    - 
    - Nos ahorra bastante tecleo
*/

// No todos los lenguajes puede meter funcioens en la variables
const MAYOR_EDAD = function (persona)
    {
        return persona.edad>= MAYORIA_EDAD_ESPANYA;
    }

/*
    Ahora veremos como modificarlo hacia arrow_function
        -
*/

/*
    ARROW_FUNCTION - FASE 1 
        -¿como sabe el que es una funcion?
            por esa flecha, por eso es arrow
*/
const MAYOR_EDAD = persona => 
    {
        return persona.edad>= MAYORIA_EDAD_ESPANYA;
    }


/*
    ARROW_FUNCTION - FASE 2
*/
const MAYOR_EDAD = persona => 
    {
        return persona.edad>= MAYORIA_EDAD_ESPANYA;
    }

/*
    ARROW_FUNCTION - FASE 3
        -si tenemos un return podemos hacer esto
*/
const MAYOR_EDAD = persona =>  persona.edad >= MAYORIA_EDAD_ESPANYA;


/*
    ARROW_FUNCTION - FASE 4
        -si tenemos un return podemos hacer esto
        - si tenemos un objeto podemos decirle atraves del atributo persona que es entre llaves
*/
const MAYOR_EDAD = ({persona}) =>  edad >= MAYORIA_EDAD_ESPANYA;
