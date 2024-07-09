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

## 2. RESUMEN

![Vista previa del proyecto](link a tu imagen de vista previa del proyecto)

En este proyecto, desarrollamos una página web para explorar un conjunto de datos creado mediante la inteligencia artificial a través de instrucciones específicas. La estructura de la página se ajustó considerando las necesidades de los usuarios, utilizando
historias de usuario para su adaptación.

La interfaz consta de diversos filtros que permiten refinar, agrupar y organizar el conjunto de datos, presentando un conjunto de tarjetas con información detallada sobre el tema. Además, se incorporó un botón que posibilita "limpiar" cada campo y regresar a la
visualización predeterminada de datos (inicio).

Dado que utilizamos distintos dispositivos en la actualidad, implementamos consultas de medios mediante CSS en la aplicación para asegurar una visualización óptima tanto en dispositivos móviles como en computadoras, facilitando el acceso a la información.

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

## 4. PROTOTIPO DE BAJA Y ALTA FIDELIDAD
Esta aplicación web ha sido construida a partir de dos tipos de prototipos: uno de baja fidelidad y otro de alta fidelidad. Ambos prototipos han sido cuidadosamente diseñados para incorporar requisitos esenciales, garantizando así una plataforma fácil de utilizar
para cualquier usuario.

### Prototipo de baja fidelidad

Se comenzó el diseño con un boceto rápido a mano para la interfaz de usuario. En esta fase, el enfoque se centra en la disposición general de los elementos en la página. Se identificaron los elementos esenciales que se quería incorporar en la interfaz, como las
tarjetas, filtros e información. Este enfoque manual permite experimentar con varias ideas y conceptos antes de avanzar a etapas más detalladas del diseño.

### Prototipo de alta fidelidad

El prototipo de alta fidelidad fue diseñado utilizando la aplicación CANVA. En este proceso, se establecieron elementos clave, como la paleta de colores, el estilo visual y el funcionamiento inicial. Este prototipo de alta fidelidad sirve como una representación
avanzada y detallada de la visión conceptual.

## 5. HISTORIAS DE USUARIO

En el desarrollo de las historias de usuario, se ha seguido un enfoque centrado en el visitante, incorporando una serie de preguntas que consideran las necesidades y expectativas del navegante final. Estas preguntas han sido fundamentales para estructurar un
proceso lógico e intuitivo dentro de la aplicación web.

A partir de las respuestas recopiladas, se ha implementado un plan de trabajo que ha permitido establecer objetivos claros. Este enfoque ha sido esencial para diseñar una serie de prototipos que aborden de manera específica las necesidades planteadas en las
historias de usuario. Este proceso orientado al usuario ha sido clave para asegurar que la aplicación no solo cumpla con los requisitos técnicos, sino que también ofrezca una experiencia satisfactoria y efectiva para el visitante final.

## 6. FUNCIONALIDADES

### Características principales de las Tarjetas Pokémon
Visualización dinámica y atractiva de tarjetas Pokémon en formato semántico <div>.
Resalta nombre, elemento, generación, número, rareza, pequeña descripción, descripción, debilidad, ataque, defensa, velocidad, datos curiosos, habilidad, color principal.
Filtrado y ordenamiento por elementos, debilidad, características, y alfabéticamente.
Interfaz semántica con microdatos (itemscope, itemtype, itemprop).
Estadísticas dinámicas sobre cantidad y tipos de Pokémon.
Controles <select> para filtros y botón de reinicio.
Operaciones acumulativas de filtrado y ordenamiento.
Funcionalidad "Leer más" para revelar información adicional.
Diseño adaptable para móviles, tablets y desktops

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

## 8. PRUEBAS UNITARIAS

A lo largo del proyecto, hemos implementado un total de 10 pruebas unitarias que evalúan el funcionamiento de los filtros de Género, Punto de Vista (POV) y los ordenamientos ascendente y descendente. Estas pruebas unitarias han sido diseñadas para garantizar la
integridad y precisión de estas funcionalidades dentro de la aplicación. Estas pruebas se ejecutan utilizando el comando npm run test.

## 9. DEPLOY

La aplicación se encuentra publicada a través de Github Pages, accesible a todo usuario:

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
  - Tiene una estructura de etiquetas adecuada que facilita la accesibilidad y la comprensión del contenido.

#### CSS

- **Estilo visual coherente**
  - Implementa reglas de estilo que mantienen una apariencia visual coherente y atractiva en toda la aplicación.

#### JavaScript

- **Funcionalidad interactiva**
  - Las funciones implementadas permiten

