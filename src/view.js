// Definición de renderItems
export function renderItems(pokemonList) {
  const pokemonListElement = document.getElementById("pokemon-list");
  pokemonListElement.innerHTML = "";

  pokemonList.forEach((pokemon) => {
    const li = document.createElement("li");
    li.setAttribute("itemscope", "true");
    li.setAttribute("itemtype", "http://schema.org/ItemPokemon");
  

    const imageUrl = pokemon.imageUrl
      ? `<img src="${pokemon.imageUrl}" alt="${pokemon.name}" itemprop="imageUrl">`
      : "";
    const name = pokemon.name ? `<h3 itemprop="name">${pokemon.name}</h3>` : "";
    const type = pokemon.type
      ? `<p><strong>ELEMENTO:</strong> ${pokemon.type}</p>`
      : "";
    const generation = pokemon.generation
      ? `<p><strong>GENERACION:</strong> ${pokemon.generation}</p>`
      : "";
    const region = pokemon.region
      ? `<p><strong>REGION:</strong> ${pokemon.region}</p>`
      : "";
    const number = pokemon.number
      ? `<p><strong>NUMERO:</strong> ${pokemon.number}</p>`
      : "";
    const rarity = pokemon.rarity
      ? `<p><strong>RAREZA:</strong> ${pokemon.rarity}</p>`
      : "";
    const shortDescription = pokemon.shortDescription
      ? `<p><strong>PEQUEÑA DESCRIPCION:</strong> ${pokemon.shortDescription}</p>`
      : "";

    li.innerHTML = `
      <div class="pokemon-card"> 
        <div class="card-inner">
          <div class="card-front">
            ${imageUrl}
            ${name}
            ${type}
            ${generation}
            ${region}
            ${number}
            ${rarity}
            ${shortDescription}
            <button class="flip-btn">Leer más</button>
          </div>
          <div class="card-back hidden">
            <p><strong>DESCRIPCION:</strong> ${pokemon.description}</p>
            <p><strong>DEBILIDAD:</strong> ${pokemon.weakness}</p>
            <p><strong>ATAQUE:</strong> ${pokemon.attack}</p>
            <p><strong>DEFENSA:</strong> ${pokemon.defense}</p>
            <p><strong>VELOCIDAD:</strong> ${pokemon.speed}</p>
            <p><strong>DATOS CURIOSOS:</strong></p>
            <p><strong>POKEDEX NUMERO:</strong> ${ pokemon.facts.pokedexNumber}</p>
            <p><strong>HABILIDAD:</strong> ${pokemon.facts.ability}</p>
            <p><strong>COLOR PRINCIPAL:</strong> ${pokemon.facts.primaryColor}</p>
            <button class="flip-btn">Leer menos</button>
          </div>
        </div>
      </div>
    `;

    // Event listener para mostrar detalles al hacer clic en "Leer más"
    const flipBtns = li.querySelectorAll(".flip-btn");
    flipBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const cardInner = btn.closest(".card-inner");
        cardInner.classList.toggle("flip");

        const cardFront = cardInner.querySelector(".card-front");
        const cardBack = cardInner.querySelector(".card-back");

        if (cardInner.classList.contains("flip")) {
          cardBack.classList.remove("hidden");
          cardFront.classList.add("hidden");
        } else {
          cardBack.classList.add("hidden");
          cardFront.classList.remove("hidden");
        }
      });
    });

    pokemonListElement.appendChild(li);
  });

  return pokemonListElement;  // Devuelve el elemento que contiene la lista
}

// Definición de renderFooter
function renderFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>&copy; 2024 Pokémon Company. Todos los derechos reservados.</p>
  `;
  return footer;
}

// Modificación de renderDOM
function renderDOM(pokemonList) {
  const rootElement = document.querySelector('#root');

  const items = renderItems(pokemonList);
  const footer = renderFooter();
  
  if (items instanceof HTMLElement) {
    rootElement.appendChild(items);
  } else {
    throw new Error('Error: renderItems should return an HTMLElement');
  }

  if (footer instanceof HTMLElement) {
    rootElement.appendChild(footer);
  } else {
    throw new Error('Error: renderFooter should return an HTMLElement');
  }
}

// Llamada a renderDOM cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded',() => {
  const pokemonList = [ /* Aquí va tu lista de Pokémon */ ];
  renderDOM(pokemonList);
});
