// https://raw.githubusercontent.com/PokeAPI/sprites/0c328e64c6916ec31f9c9ae3a362b0eb9dca66cb/sprites/pokemon/other/dream-world/${index}.svg



const body = document.querySelector("body"); // recupere le body de la page
const div = document.createElement("div");



const getPokemons = async () => { // defini la variable async
    try {
        const response = await fetch(` https://pokeapi.co/api/v2/pokemon`); // fetch les pokemon (les 20 premier)
        const data = await response.json(); // transforme la reponse du fetch en reponse JSON
        for (let pokemon of data.results) { // parcours le tableau results
            const pokemon_url = pokemon.url;
            console.log(pokemon);
            var arr = pokemon_url.split('/');
            var index = arr[6]; // contient l'index
            var pokemon_img = document.createElement("img"); // créer une balise img
            var pokemon_a = document.createElement("a");
            pokemon_img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/0c328e64c6916ec31f9c9ae3a362b0eb9dca66cb/sprites/pokemon/other/dream-world/${index}.svg` // ajoute le lien de l'image selon l'index
            pokemon_img.style.height = "250px"
            pokemon_img.style.width = "250px"
            pokemon_a.style.height = "250px"
            pokemon_a.style.width = "250px"
            pokemon_img.style.border = "solid"
            pokemon_a.href = `./detail.html?id=${index}`
            pokemon_a.appendChild(pokemon_img) // ajoute l'image au HTML
            div.style.display = "flex"
            div.style.flexWrap = "wrap"
            div.appendChild(pokemon_a)
            body.appendChild(div)
        }
            
    } catch(err){
        console.error(err)
}}

getPokemons()

