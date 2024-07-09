# PokéData Project Documentation

## Índice

* [1. INTRODUCCIÓN](#1-introducción)
* [2. RESUMEN](#2-resumen)
* [3. PROMPT UTILIZADO](#3-prompt-utilizado)
* [4. PROTOTIPO DE BAJA Y ALTA FIDELIDAD](#4-prototipo-de-baja-y-alta-fidelidad)
* [5. HISTORIAS DE USUARIO](#5-historias-de-usuario)
* [6. FUNCIONALIDADES](#6-funcionalidades)
* [7. CONSIDERACIONES TÉCNICAS](#7-consideraciones-técnicas)
* [8. PRUEBAS UNITARIAS](#8-pruebas-unitarias)
* [9. DEPLOY](#9-deploy)
* [10. CRITERIOS DE ACEPTACIÓN MÍNIMOS DEL PROYECTO](#10-criterios-de-aceptación-mínimos-del-proyecto)
* [11. DESARROLLADOR DEL PROYECTO](#11-desarrollador-del-proyecto)

***

## 1. INTRODUCCIÓN 

En este proyecto, nos sumergimos en el mundo de la inteligencia artificial para generar un conjunto de datos único. La magia se revela a través de una renderización en HTML mediante JavaScript, creando una experiencia visual cautivadora. Este conjunto de datos,
presentado de manera accesible, adopta la forma de tarjetas de información y se presta a una exploración profunda gracias a filtros interactivos y acumulativos.

La interacción del usuario se potencia con herramientas estadísticas que brindan una comprensión más profunda de la información disponible. Cada tarjeta es una ventana a datos precisos, mientras que los filtros, diseñados para ser intuitivos, permiten una
personalización dinámica de la visualización. En este viaje, fusionamos la potencia de la inteligencia artificial con la flexibilidad de la renderización web, ofreciendo una plataforma que no solo informa, sino que también invita a la exploración y
descubrimiento. 

***

## 2. RESUMEN

![Vista previa del proyecto](link a tu imagen de vista previa del proyecto)

En este proyecto, desarrollamos una página web para explorar un conjunto de datos creado mediante la inteligencia artificial a través de instrucciones específicas. La estructura de la página se ajustó considerando las necesidades de los usuarios, utilizando
historias de usuario para su adaptación.

La interfaz consta de diversos filtros que permiten refinar, agrupar y organizar el conjunto de datos, presentando un conjunto de tarjetas con información detallada sobre el tema. Además, se incorporó un botón que posibilita "limpiar" cada campo y regresar a la
visualización predeterminada de datos (inicio).

Dado que utilizamos distintos dispositivos en la actualidad, implementamos consultas de medios mediante CSS en la aplicación para asegurar una visualización óptima tanto en dispositivos móviles como en computadoras, facilitando el acceso a la información.

***

## 3. PROMPT UTILIZADO

En esta ocasión, nos hemos apoyado en la inteligencia artificial para generar nuestra propia base de datos. Decidimos crear una página dedicada a tarjetas de Pokemon.Los datos que solicitamos para construir nuestro
conjunto de datos son los siguientes:

1. ID:
2. Nombre:
3. ELEMENTO:
4. GENERACION:
5. REGION:
6. NUMERO:
7. RAREZA:
8. PEQUEÑA DESCRIPCION:
9. DESCRIPCION:
10. DEBILIDAD:
11. ATAQUE:
12. DEFENSA:
13. VELOCIDAD:
14. DATOS CURIOSOS:
15. NUMERO:
16. HABILIDAD:
17. COLOR PRINCIPAL:

El total de Pokemones en nuestro dataset es de 24.

***

## 4. PROTOTIPO DE BAJA Y ALTA FIDELIDAD
Esta aplicación web ha sido construida a partir de dos tipos de prototipos: uno de baja fidelidad y otro de alta fidelidad. Ambos prototipos han sido cuidadosamente diseñados para incorporar requisitos esenciales, garantizando así una plataforma fácil de utilizar
para cualquier usuario.

### Prototipo de baja fidelidad

Se comenzó el diseño con un boceto rápido a mano para la interfaz de usuario. En esta fase, el enfoque se centra en la disposición general de los elementos en la página. Se identificaron los elementos esenciales que se quería incorporar en la interfaz, como las
tarjetas, filtros e información. Este enfoque manual permite experimentar con varias ideas y conceptos antes de avanzar a etapas más detalladas del diseño.

### Prototipo de alta fidelidad

El prototipo de alta fidelidad fue diseñado utilizando la aplicación CANVA. En este proceso, se establecieron elementos clave, como la paleta de colores, el estilo visual y el funcionamiento inicial. Este prototipo de alta fidelidad sirve como una representación
avanzada y detallada de la visión conceptual.

***

## 5. HISTORIAS DE USUARIO

En el desarrollo de las historias de usuario, se ha seguido un enfoque centrado en el visitante, incorporando una serie de preguntas que consideran las necesidades y expectativas del navegante final. Estas preguntas han sido fundamentales para estructurar un
proceso lógico e intuitivo dentro de la aplicación web.

A partir de las respuestas recopiladas, se ha implementado un plan de trabajo que ha permitido establecer objetivos claros. Este enfoque ha sido esencial para diseñar una serie de prototipos que aborden de manera específica las necesidades planteadas en las
historias de usuario. Este proceso orientado al usuario ha sido clave para asegurar que la aplicación no solo cumpla con los requisitos técnicos, sino que también ofrezca una experiencia satisfactoria y efectiva para el visitante final.

Para consultar las siguientes historias de usuario, puedes entrar a este enlace

***

## 6. FUNCIONALIDADES

### Características principales de las Tarjetas Pokémon

- La aplicación permite al usuario visualizar los elementos de la información mediante una presentación en forma de tarjetas. en una presentación dinámica y atractiva. Cada tarjeta está representada en un formato semántico que facilita la visualización de información clave sobre cada Pokémon.

- Las tarjetas Pokémon están encapsuladas en elementos <div>, estructuradas de manera que cada Pokémon se representa como un elemento individual.

- Las tarjetas resaltan valores asociados a las propiedades de cada Pokémon, incluyendo NOMBRE,ElEMENTO,GENERACION,NUMERO,RAREZA,PEQUEÑA DESCRIPCIN,DESCRIPCION,DEBILIDAD,ATAQUE,DEFENSA,VELOCIDAD,DATOS CURIOSOS,NUMERO,HABILIDAD,COLOR PRINCIPAL

- Los Pokémon pueden ser filtrados y ordenados según varios criterios, como ELEMENTOS,DEBILIDAD,CARACTERISTICAS, ALFABETICAMENTE. Los usuarios pueden seleccionar un tipo específico de Pokémon.

- La interfaz está diseñada con estándares semánticos utilizando microdatos, empleando atributos como itemscope, itemtype e itemprop para estructurar la información de manera clara y accesible.

- La aplicación proporciona estadísticas dinámicas sobre la cantidad de Pokémon disponibles, tipos de Pokémon y otras métricas relevantes.

- Para facilitar la interacción del usuario, se han implementado controles <select> que permiten filtrar Pokémon por ELEMENTOS,DEBILIDAD,CARACTERISTICAS, ALFABETICAMENTE. Además, un botón de reinicio restablece los filtros aplicados y restaura la vista original.

- Las funciones de filtrado y ordenamiento operan de manera acumulativa, permitiendo a los usuarios aplicar múltiples filtros y luego ordenar los resultados según sus preferencias.

- Todas las operaciones, incluyendo filtrado, ordenamiento y reinicio, se realizan dinámicamente a través de JavaScript para una experiencia fluida sin necesidad de recargar la página.
  
- En cada tarjeta de Pokémon, habrá un botón etiquetado como "Leer más". Este botón está diseñado para revelar información adicional sobre el Pokémon cuando se hace clic en él. Por defecto, la información adicional está oculta para mantener la tarjeta limpia y organizada. Al hacer clic en "Leer más", se desliza hacia abajo una sección que muestra detalles como estadísticas adicionales, fortalezas y debilidades del Pokémon. El texto del botón cambia automáticamente a "Leer menos", lo que permite al usuario contraer la sección expandida si ya no desea ver la información adicional.

Esta función facilita a los usuarios explorar más detalles sobre cada Pokémon sin abrumar la vista con demasiada información de una vez.

- La aplicación está diseñada para ser completamente adaptable, asegurando una experiencia de usuario óptima en dispositivos móviles, tablets y desktops.

 Características principales:

- Visualización de datos en forma de tarjetas Pokémon.
- Filtrado por ELEMENTOS,DEBILIDAD,CARACTERISTICAS Y ALFABETICAMENTE..
- Interfaz adaptable para dispositivos móviles y de escritorio.
- Estadísticas dinámicas sobre el conjunto de datos de tarjetas Pokémon.

***

## 7. CONSIDERACIONES TÉCNICAS

La aplicación web está compuesta por varios tipos de archivos, incluyendo aquellos escritos en los lenguajes HTML, JavaScript (JS) y CSS:

- src/index.html
- src/main.js
- dataset.js
- src/dataFunctions.js (incluye la función computeStats(data))
- src/data
- test/dataFunctions.spec.js
- test/data.js
- src/view.js (incluye la función renderItems(data))

***

## 8. PRUEBAS UNITARIAS

A lo largo del proyecto, hemos implementado un total de 10 pruebas unitarias que evalúan el funcionamiento de los filtros de Género, Punto de Vista (POV) y los ordenamientos ascendente y descendente. Estas pruebas unitarias han sido diseñadas para garantizar la
integridad y precisión de estas funcionalidades dentro de la aplicación. Estas pruebas se ejecutan utilizando el comando npm run test.

***

## 9. DEPLOY

La aplicación se encuentra publicada a través de Github Pages, accesible a todo usuario:

***

## 10. CRITERIOS DE ACEPTACIÓN MÍNIMOS DEL PROYECTO

### Criterios de código

La aplicación debió aprobar los siguientes test para considerarse como un buen proyecto a nivel estructural.

- npm run test:oas-html
- npm run test:oas-css
- npm run test:oas-web-api
- npm run test:oas-js
- npm run test:oas-prompting
- npm run test:oas

#### HTML

- **Uso de HTML semántico**
  - Tiene un <header> con <h1>
  - Tiene un <footer>
  - Tiene un <main> con <h2>
  - Todas las etiquetas de controles (inputs y select) tienen <label>
  - <ul> está usado para dibujar la data
  - Los hijos de <li> usan atributos de microdata itemscope e itemprop

#### CSS

- **Uso de selectores de CSS**
  - Uso de selector class para los items <li>
  - Uso de flexbox en sentido row y column
  - Uso de flexbox para el elemento que contiene los items
  - Uso de flexbox para el elemento que contiene los UI inputs

#### Web APIs

- Uso de selectores del DOM
- Manejo de eventos del DOM (listeners, propagación, delegación)
- Manipulación dinámica del DOM

#### JavaScript

- Variables (declaración, asignación, ámbito)
- Uso de condicionales (if-else, switch, operador ternario, lógica booleana)
- Funciones (params, args, return)
- Arrays (arreglos)
- Objetos
- Módulos de ECMAScript (ES Modules)

***

## 11. DESARROLLADOR DEL PROYECTO

Información sobre Las desarrolladoras del proyecto.
Daniela Trejo & Dinah Gomez
| :---: |

