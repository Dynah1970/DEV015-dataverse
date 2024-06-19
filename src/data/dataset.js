
  
   const pokemonData = [  
      {
        "id": "bulbasaur",
        "name":"Bulbasaur",
        "type": ["Planta", "Veneno"],
        "generation": 1,
        "region": "Kanto",
        "number": 1,
        "rarity": "Comun",
        "shortDescription": "Tras nacer, Crece alimentandose durante un tiempo de los nutrientes que contiene el bulbo de su lomo ",
        "description": "Bulbasaur tiene una altura de 0.7m y un peso de 6.9kg, Tiene una Categoria Semilla y una Habilidad de espesura , es de tipo Planta y Veneno , tiene una debilidad de Fuego, Hielo, Psiquico y Volador , tiene varias evoluciones en  las cuales tenemos a Bulbasaur -Ivysaur- Venusaur",
        "weakness": ["Fuego", "Hielo", "Psiquico", "Volador"],
        "attack": 49,
        "defense": 49,
        "speed": 45,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    },
    {
        "id":"charmander",
        "name":"Charmander",
        "type": ["Fuego"],
        "generation": 1,
        "region": "Kanto",
        "number": 4,
        "rarity": "Comun",
        "shortDescription": "La llama de su cola indica su fuerza vital, si esta debil, la llama ardera mas tenue",
        "description": "Charmander tiene una altura de 0.6m y un peso de 8.5kg , Tiene una categoria Lagartija y una habilidad de Mar llamas , es de tipo Fuego y su debilidad  es Agua, Tierra y Roca , tiene varias evoluciones en las cuales tenemos a Charmander- Charmeleon -Charizard ",
        "weakness" :["Agua","Tierra","Roca"],
        "attack": 52,
        "defense": 43,
        "speed": 65,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
    },
    {
        "id": "squirtle",
        "name": "Squirtle",
        "type": ["Agua"],
        "generation": 1,
        "region": "Kanto",
        "number": 7,
        "rarity": "Comun",
        "shortDescription": "Tras nacer, se le hincha  el lomo y se le forma un caparazon. Escupe poderosa espuma por la boca",
        "description": "Squirtle tiene una altura de 0.5m y un peso de 9.0kg , Tiene una categoria Tortugita y una habilidad Torrente , es de tipo Agua y su debilidad  es de Planta y Electrico , tiene varias evoluciones en las cuales tenemos a  Squirtle - Wartortle- Blastoise",
        "weakness":["Agua"],
        "attack": 48,
        "defense": 65,
        "speed": 43,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
    },
    {
        "id":"pikachu",
        "name": "Pikachu",
        "type": ["Electrico"],
        "generation": 1,
        "region": "Kanto",
        "number": 25,
        "rarity": "Comun",
        "shortDescription": "Cuando se enfada, este pokemon descarga la energia que almacena en le interior de las bolsas de las mejillas",
        "description": "Pikachu tiene una altura de 0.4m y un peso de 6.0kg , tiene una categoria Raton y una habilidad elec.estatica, es de tipo electrico y su debilidad es tierra , tiene varias evoluciones en las cuales tenemos Pichu- Pikachu- Raichu",
        "weakness":["Tierra"],
        "attack": 55,
        "defense": 40,
        "speed": 90,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
    },
    {
        "id":"jigglypuff",
        "name": "Jigglypuff",
        "type": ["Normal", "Hada"],
        "generation": 1,
        "region": "Kanto",
        "number": 39,
        "rarity": "Comun",
        "shortDescription": "Cuando le tiemblan sus redondos y adorables ojos , entona una melodia agradable y misteriosa con la que duerme a sus enemigos",
        "description": "Jigglypuff tiene una altura de 0.5m y un peso de 5.5kg , tiene una categoria de globo y una habilidad  gran encanto y tenacidad , es de tipo normal -hada y su debilidad es veneno -acero, tiene varias evoluciones en las cuales tenemos  igglybuff- jigglypuff- wigglytuff",
        "weakness":["Veneno","Acero"],
        "attack": 45,
        "defense": 20,
        "speed": 20,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"
    },
    {
        "id":"meowth",
        "name": "Meowth",
        "type": ["Normal"],
        "generation": 1,
        "region": "Kanto",
        "number": 52,
        "rarity": "Comun",
        "shortDescription": "Durante el dia se deica a dormir de noche, vigila su territorio con un brillo en los ojos ",
        "description": "Meowth tiene una altura de 0.4m y un peso de 4.2kg, tiene una categoria de gato araña y una habilidad recogida y experto , es de tipo normal y su debilidad es lucha, tiene varias evoluciones en las cuales tenemos Meowth- Persian",
        "weakness":["Lucha"],
        "attack": 45,
        "defense": 35,
        "speed": 90,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png"
    },
    {
        "id":"psyduck",
        "name": "Psyduck",
        "type": ["Agua"],
        "generation": 1,
        "region": "Kanto",
        "number": 54,
        "rarity": "Comun",
        "shortDescription": "Padece continuamente dolores de cabeza, cuando son muy fuertes, empieza a usar misteriosos poderes",
        "description": "Psyduck tiene una altura de 0.8m y un peso de 19.6kg , tiene una categoria de pato y una habilidad  humeda y de aclimatacion, es de tipo agua y su debilidad es planta -electrico , tiene varias evoluciones en las cuales tenemos Psyduck-Golduck",
        "weakness":["Planta","Electrico"],
        "attack": 52,
        "defense": 48,
        "speed": 55,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"
      },
      {
          "id":"machop",
          "name": "Machop",
          "type": ["Lucha"],
          "generation": 1,
          "region": "Kanto",
          "number": 66,
          "rarity": "Comun",
          "shortDescription": "Es una masa de musculos y pese a su pequeño tamaño, tiene fuerza de sobra para levantar en brazos a 100 personas ",
          "description": "Machop tiene una altura de 0.8m y un peso de 19.5kg, tiene categoria  super poder y una habilidad agallas e indefenso , es de tipo lucha  y su debilidad volador- psiquico - hada, tiene varias evoluciones en las cuales tenemos Machop- Machoke -Machamp ",
          "weakness":["Volador","Psiquico","Hada"],
          "attack": 80,
          "defense": 50,
          "speed": 35,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png"
      },
      {
          "id":"magnemite",
          "name": "Magnemite",
          "type": ["Electrico", "Acero"],
          "generation": 1,
          "region": "Kanto",
          "number": 81,
          "rarity": "Comun",
          "shortDescription": "Las unidades laterales crean ondas electromagneticas que contrastan la gravedad y la permitenflorecer",
          "description": "Magnemite tiene una altura de 0.3m y un peso de 6.0kg , tiene una categoria iman y una habilidad robustez e iman , es de tipo electrico -acero y su debilidad fuego- lucha - tierra, tiene varias evoluciones en las cuales tenemos Magnemite- Magneton -Magnezone",
          "weakness":["Fuego","Lucha","Tierra"],
          "attack": 35,
          "defense": 70,
          "speed": 45,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png"
      },
      {
          "id":"gengar",
          "name": "Gengar",
          "type": ["Fantasma", "Veneno"],
          "generation": 1,
          "region": "Kanto",
          "number": 94,
          "rarity": "Extraño",
          "shortDescription": "Para quitarle la vida a su presa , se dezlisa en su sombra y espera su oportunidad en silencio",
          "description": "Gengar tiene una altura de 1.5m y un peso de 40.5kg, tiene una categoria sombra y una habilidad cuerpo maldito, es de tipo fantasma -veneno y su debilidad tierra- psiquico- fantasma- siniestro, tiene varias evoluciones en las cuales tenemos Gastly- Haunter- Gengar",
          "weakness":["Tierra","Psiquico","Fantasma","Siniestro"],
          "attack": 65,
          "defense": 60,
          "speed": 110,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"
      },
      {
         "id":"eevee",
          "name": "Eevee",
          "type": ["Normal"],
          "generation": 1,
          "region": "Kanto",
          "number": 133,
          "rarity": "Comun",
          "shortDescription": "Es capaz de evolucionar de muchas maneras para adaptarse sin problemas a cualquier medio ",
          "description": "Eevee tiene una altura de 0.3m y un peso de 6.5kg , tiene una categoria evolucion y una habilidad fuego y adaptable, es de tipo normal y si debilidad lucha , tiene varias evoluciones en las cuales tenemos Eevee-Vaporeon-Jolteon-Flareon-Espeon-Umbreon-Leafeon-Glaceon-Sylveon",
          "weakness":["Lucha"],
          "attack": 55,
          "defense": 50,
          "speed": 55,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"
      },
      {
          "id":"snorlax",
          "name": "Snorlax",
          "type": ["Normal"],
          "generation": 1,
          "region": "Kanto",
          "number": 143,
          "rarity": "Extraño",
          "shortDescription": "Este pokemon es un gloton que lo unico que hace aparte  de comer es dormir , puede ingerir hasta 400 kg de comida en un solo dia ",
          "description": "Snorlax tiene una altura de 2.1m y un peso de 460.0kg, tiene una categoria dormir y una habilidad sebo e inmunidad, es de tipo normal y su debilidad lucha , tiene varias evoluciones en las cuales tenemos Munchlax-Snorlax",
          "weakness":["Lucha"],
          "attack": 110,
          "defense": 65,
          "speed": 30,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
      },
      {
          "id":"dragonite",
          "name": "Dragonite",
          "type": ["Dragon", "Volador"],
          "generation": 1,
          "region": "Kanto",
          "number": 149,
          "rarity": "Extraño",
          "shortDescription": "Dicen que viven en una isla en algun lugar del oceano que solo ellos habitan ",
          "description": "Dragonite tiene una altura de 2.2m y un peso de 210.0kg , tiene una categoria dragon y una habilidad fuerza mental, es de tipo dragon y volador y su debilidad es hielo - roca- dragon- hada , tiene varias evoluciones en las cuales tenemos Dratini- Dragonar-Dragonite",
          "weakness":["Dragon","Volador"],
          "attack": 134,
          "defense": 95,
          "speed": 80,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"
      },
      {  
          "id":"mewtwo",
          "name": "Mewtwo",
          "type": ["Psiquico"],
          "generation": 1,
          "region": "kanto",
          "number": 150,
          "rarity": "Legendario",
          "shortDescription": "Su ADN es casi el mismo que el de mew. Sin emabargo, su tamaño y caracter son muy diferentes",
          "description": "Mewtwo tiene una altura de 2.0m y una peso de 122.0kg, tiene una categoria genetica y una habilidad presion, es de tipo psiquico y su debilidad bicho-fantasma-siniestro, este pokemon NO tiene eveoluciones  ",
          "weakness":["Este Pokemon NO evoluciona"],
          "attack": 110,
          "defense": 90,
          "speed": 130,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
      },
      {
          "id":"new",
          "name": "Mew",
          "type": ["Psiquico"],
          "generation": 1,
          "region": "kanto",
          "number": 151,
          "rarity": "Mitica",
          "shortDescription": "Si se observa a traves  de un miscroscopio puede distinguirse cuan corto , fino y delicado es el pelaje de este pokemon",
          "description": "Mew tiene una altura de 0.4m y un peso de 4.0kg , tiene una categoria niueva especie y una habilidad sincronica, es de tipo psiquico y su debilidad es bicho-fantasma- siniestro, este pokemon NO tiene evoluciones",
          "weakness":["Este Pokemon NO tiene evoluciones"],
          "attack": 100,
          "defense": 100,
          "speed": 100,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"
      },
      {
          "id":"chikorita",
          "name": "Chikorita",
          "type": ["Planta"],
          "generation": 2,
          "region": "Johto",
          "number": 152,
          "rarity": "Comun",
          "shortDescription": "le encanta tomar el sol, usa la hoja que tiene en la cabeza para localizar sitios calidos",
          "description": "Chikorita tiene una altura de 0.9m y un peso de 6.4m , tiene una categoria hoja y una debilidad espesura, es de tipo planta y su debilidad Fuego- Hielo-Veneno-Volador-Bicho, tiene varias evoluciones en las cuales tenemos Chikorita-Bayleef-Maganium",
          "weakness":["Fuego","Hielo","Veneno","Volador","Bicho"],
          "attack": 49,
          "defense": 65,
          "speed": 45,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png"
      },
      {
          "id":"cyndaquil",
          "name": "Cyndaquil",
          "type": ["Fuego"],
          "generation": 2,
          "region": "Johto",
          "number": 155,
          "rarity": "Comun",
          "shortDescription": "Suele estar encorbado . Si se enfada o se asusta lanzara llamas por el lomo",
          "description": "Cyndaquil tiene una altura de 0.5m y un peso de 7.9kg , tiene una categoria de Raton Fuego y una habilidad Mar llamas , es de tipo Fuego y su debilidad es agua- tierra- roca, tiene varias evoluciones en las cuales tenemos Cyndaquil-Quilava-Typhlosion-Typhlosion ",
          "weakness":["Agua","Tierra","Roca"],
          "attack": 52,
          "defense": 43,
          "speed": 65,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png"
      },
      {
          "id":"totodile",
          "name": "Totodile",
          "type": ["Agua"],
          "generation": 2,
          "region": "Johto",
          "number": 158,
          "rarity": "Comun",
          "shortDescription": "Sus desarrolladas y potentes mandibulas pueden triturar cualquier cosa , por lo que hasta su propio entrenador debe andarse con cuidado ",
          "description": "Totodile tiene una altura de 0.6m y un peso de 9.5 kg, tiene una categoria fauces y una habilidad torrente , es de tipo agua y su debilidad es planta- electrico , tiene varias evoluciones en las cuales tenemos Totodile-Croconaw-Feraligatr",
          "weakness":["Planta","Electrico"],
          "attack": 65,
          "defense": 64,
          "speed": 43,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png"
      },
      {
          "id":"togepi",
          "name": "Togepi",
          "type": ["Hada"],
          "generation": 2,
          "region": "Johto",
          "number": 175,
          "rarity": "Comun",
          "shortDescription": "El cascaron parece estar lleno de alegria , dicen que trae buena suerte si se le trata con cariño",
          "description": "Togepi tiene una altura de 0.3m y un peso de 1.5 kg , tiene una categoria de Boladavos y una habilidad dicha - entusiamo , es de tipo hada y su debilidad es veneno- acero, tiene varias evoluciones en las cuales tenemos Togepi- Togetic- Togekiss ",
          "weakness":["Veneno","Acero"],
          "attack": 20,
          "defense": 65,
          "speed": 20,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png"
      },
      {
          "id":"mareep",
          "name": "Mareep",
          "type": ["Electrico"],
          "generation": 2,
          "region": "Johto",
          "number": 179,
          "rarity": "Comun",
          "shortDescription": "Cuando almacena electricidad estatica en su cuerpo, la lana dobla su volumen , quien lo toque recibira una descarga",
          "description": "Mareep tiene una altura de 0.6 m y un peso de 7.8 kg , tiene una categoria luna y una habilidad elc. estatica, es de tipo electrico y su debilidad es tierra ,tiene varias evoluciones en las cuales tenemos Mareep-Flaffy-Amphoros",
          "weakness":["Tierra"],
          "attack": 40,
          "defense": 40,
          "speed": 35,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/179.png"
      },
      {
          "id":"espeon",
          "name": "Espeon",
          "type": ["Psiquico"],
          "generation": 2,
          "region": "Johto",
          "number": 196,
          "rarity": "Extraño",
          "shortDescription": "Al predecir el siguiente movimiento de su rival, los extremos de su cola bifida tiemblan ligeramente ",
          "description": "Espeon tiene una altura de 0.9m y un peso de 26.5kg , tiene una categoria sol y una habilidad sincronica , es de tipo psiquico y su debilidad bicho-fantasma -siniestro , tiene varias evoluciones en las cuales tenemos Eevee-Vaporeon-Jolteon-Flareon-Espeon-Umbreon-Leafon-Glaceon-Sylvean",
          "weakness":["Bicho","Fantasma","Siniestro"],
          "attack": 65,
          "defense": 60,
          "speed": 110,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png"
      },
      {
          "id":"umbreon",
          "name": "Umbreon",
          "type": ["Siniestro"],
          "generation": 2,
          "region": "Johto",
          "number": 197,
          "rarity": "Extraño",
          "shortDescription": "Si se expone el aura de la luna los anillos de su cuerpo relucen y adquieren un poder misterioso ",
          "description": "Umbreon tiene una altura de 1.0m y un peso de 27.0kg, tiene una categoria luz lunar y una habilidad sincronia , es de tipo siniestro y su debilidad es lucha-bicho-hada , tiene varias evoluciones en las cuales tenemos Eevee-Vaporeon-Jolteon-Flareon-Espeon-Umbreon-Leafon-Glaceon-Sylvean",
          "weakness":["Lucha","Bicho","Hada"],
          "attack": 65,
          "defense": 110,
          "speed": 65,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png"
      },
      {
          "id":"murkrow",
          "name": "Murkrow",
          "type": ["Siniestro", "Volada"],
          "generation": 2,
          "region": "Johto",
          "number": 198,
          "rarity": "Comun",
          "shortDescription": "Temido y odiado por muchos , dien que traen la desgracia a todos aquellos que lo ven por la noche",
          "description": "Murkroe tiene una altura de 0.5m y un peso de 2.1 kg , tiene una categoria oscuridad y su habilidad es insominio - afortunado , es de tipo siniestro-volada y su debilidad es electrico -hielo-roca- hada, tiene varias evoluciones en las cuales tenemos Murkrow-Honchkrow ",
          "weakness":["Electrico","Hielo","Roca","Hada"],
          "attack": 85,
          "defense": 42,
          "speed": 91,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/198.png"
      },
      {
          "id":"blissey",
          "name": "Blissey",
          "type": ["Normal"],
          "generation": 2,
          "region": "Johto",
          "number": 242,
          "rarity": "Extraño",
          "shortDescription": "Cualquiera que pruebe un poco de huevo de blissey, se volvera mas amable y agradable con todos",
          "description": "Blissey tine una altura de 1.5m y un peso de 46.8 kg , tiene una categoria feiicidad y una habilidad cura natural-dicha , es de tipo normal y su debilidad es lucha , tiene varias evoluciones en las cuales tenemos Happing-Chansey -Blissey",
          "weakness":["Lucha"],
          "attack": 10,
          "defense": 10,
          "speed": 55,
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/242.png"
      }
  ];
  
  export default pokemonData;


