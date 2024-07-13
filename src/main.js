import data from "./data/dataset.js";
import { renderItems } from "./view.js";
import {
  filterPokemonByElemental,
  filterPokemonByWeakness,
  filterPokemonByOrder,
  filterPokemonByWord,
  clearFiltersAndSort,
} from "./dataFunctions.js";

// Nueva función para calcular el promedio de velocidad
function calculateAverageSpeed(pokemonList) {
  const totalSpeed = pokemonList
    .map(pokemon => pokemon.speed)
    .reduce((acc, speed) => acc + speed, 0);
  return (totalSpeed / pokemonList.length).toFixed(2);
}

document.addEventListener("DOMContentLoaded", () => {
  function initializeApp() {
    renderItems(data);

    // Calcular y mostrar el promedio de velocidad
    const averageSpeed = calculateAverageSpeed(data);
    document.getElementById("average-speed").textContent = `Promedio de Velocidad: ${averageSpeed}`;
  }

  // Evento de cambio en el filtro de elementos
  function handleElementalChange() {
    const elementalValue = document.querySelector("#elemental").value;
    const elementalPokemon = filterPokemonByElemental(data, elementalValue);
    renderItems(elementalPokemon);

    // Actualizar promedio de velocidad
    const averageSpeed = calculateAverageSpeed(elementalPokemon);
    document.getElementById("average-speed").textContent =` Promedio de Velocidad: ${averageSpeed}`;
  }

  // Evento de cambio en el filtro de debilidad
  function handleWeaknessChange() {
    const weaknessValue = document.querySelector("#weakness").value;
    const weaknessPokemon = filterPokemonByWeakness(data, weaknessValue);
    renderItems(weaknessPokemon);

    // Actualizar promedio de velocidad
    const averageSpeed = calculateAverageSpeed(weaknessPokemon);
    document.getElementById("average-speed").textContent =` Promedio de Velocidad: ${averageSpeed}`;
  }

  // Evento de cambio en la selección de ordenamiento
  function handleOrderChange() {
    const orderValue = document.querySelector("#order").value;
    const orderPokemon = filterPokemonByOrder(data, orderValue);
    renderItems(orderPokemon);

    // Actualizar promedio de velocidad
    const averageSpeed = calculateAverageSpeed(orderPokemon);
    document.getElementById("average-speed").textContent =` Promedio de Velocidad: ${averageSpeed}`;
  }

  // Evento de cambio en la selección de palabra
  function handleWordChange() {
    const wordValue = document.querySelector("#word").value;
    const wordPokemon = filterPokemonByWord(data, wordValue);
    renderItems(wordPokemon); // Aquí puede haber un error tipográfico, debería ser `renderItems` en lugar de `renderPokemonList`
 
    // Actualizar promedio de velocidad
    const averageSpeed = calculateAverageSpeed(wordPokemon);
    document.getElementById("average-speed").textContent =` Promedio de Velocidad: ${averageSpeed}`;
   
  }

  // Evento de clic en el botón de borrar
  function handleClearClick() {
    document.querySelector("#elemental").value = "Todo";
    document.querySelector("#weakness").value = "Todo";
    document.querySelector("#order").value = "Numero";
    document.querySelector("#word").value = "";
    const clearedData = clearFiltersAndSort(data);
    renderItems(clearedData);

    // Actualizar promedio de velocidad
    const averageSpeed = calculateAverageSpeed(clearedData);
    document.getElementById("average-speed").textContent =` Promedio de Velocidad: ${averageSpeed}`;
  }

  // Asignar event listeners
  document
    .querySelector("#elemental")
    .addEventListener("change", handleElementalChange);
  document
    .querySelector("#weakness")
    .addEventListener("change", handleWeaknessChange);
  document
    .querySelector("#order")
    .addEventListener("change", handleOrderChange);
  document.querySelector("#word").addEventListener("change", handleWordChange);
  document.querySelector("#clear").addEventListener("click", handleClearClick);

  // Asignar eventos de hover para mostrar datos curiosos
  const pokemonListElement = document.querySelector("#pokemon-list");
  pokemonListElement.addEventListener("mouseover", function (event) {
    if (event.target.tagName === "LI") {
      const facts = event.target.querySelector(".facts");
      if (facts) {
        facts.style.display = "block";
      }
    }
  });
  pokemonListElement.addEventListener("mouseout", function (event) {
    if (event.target.tagName === "LI") {
      const facts = event.target.querySelector(".facts");
      if (facts) {
        facts.style.display = "none";
      }
      
    }
  });

  // Carga inicial de la aplicación
  initializeApp();
});
