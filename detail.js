// ./detail.html?id=1

const body = document.querySelector("body");
getPokemon = async () => {
    try {
    // création des balises
    let h3_id = document.createElement("h3");
    let p_name = document.createElement("p")
    let image_back = document.createElement("img");
    let image_front = document.createElement("img");
    let div_image = document.createElement("div");

    // permet de recupere l'id de l'url
    let params = new URLSearchParams(window.location.search);
    let index = params.get("id");
    // recupere les infos du pokemon selon l'id
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const data = await response.json();

    var pokemon_name = data.name; // recupere le nom du pokemon
    var pokemon_sprites_back = data.sprites.back_default // recupere le sprite arriere du pokemon
    var pokemon_sprites_front = data.sprites.front_default // recupere le sprite l'avant du pokemon
    p_name.textContent = pokemon_name;
    console.log(pokemon_name)
    console.log(data)
    image_back.src = pokemon_sprites_back;
    image_front.src = pokemon_sprites_front;
    h3_id.textContent = `# ${index}`;
    h3_id.style.textAlign = "center"
    p_name.style.fontWeight = "bold"
    p_name.style.textAlign = "center"
    image_front.style.textAlign = "center"
    image_back.style.textAlign = "center"
    div_image.style.display = "flex"
    div_image.style.justifyContent = "center"
    div_image.style.height = "200px"
    // ajout des balise dans le body
    
    div_image.appendChild(image_front);
    div_image.appendChild(image_back);
    body.appendChild(h3_id);
    body.appendChild(div_image)
    body.appendChild(p);
    } catch(err) {
        console.error(err);
    }
}


getPokemon();