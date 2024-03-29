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
    const data = await response.json(); // transforme la reponse en JSON

    var pokemon_name = data.name; // recupere le nom du pokemon
    var pokemon_sprites_back = data.sprites.back_default // recupere le sprite arriere du pokemon
    var pokemon_sprites_front = data.sprites.front_default // recupere le sprite l'avant du pokemon
    p_name.textContent = pokemon_name; // change le contenu par le nom du pokemon actuelle

    // change la source de l'image par le sprite avant et arriere du pokemon actuelle
    image_back.src = pokemon_sprites_back;
    image_front.src = pokemon_sprites_front;

    h3_id.textContent = `# ${index}`; // change le contenu selon l'id du pokemon

    // modifications du CSS
    h3_id.style.textAlign = "center"
    p_name.style.fontWeight = "bold"
    p_name.style.textAlign = "center"
    image_front.style.textAlign = "center"
    image_back.style.textAlign = "center"
    image_back.style.width = "200px"
    image_back.style.height = "200px"
    image_front.style.width = "200px"
    image_front.style.height = "200px"
    div_image.style.display = "flex"
    div_image.style.justifyContent = "center"
    div_image.style.alignItems = "center"
    div_image.style.margin = "auto"
    div_image.style.backgroundColor = "#ED7D30"
    div_image.style.height = "300px"
    div_image.style.width = "500px"
    div_image.style.borderRadius = "30px"
    div_image.style.border = "solid"
    div_image.style.borderColor = "yellow"
    
    // ajout des balise dans le body
    div_image.appendChild(image_front);
    div_image.appendChild(image_back);
    body.appendChild(h3_id);
    body.appendChild(div_image)
    body.appendChild(p_name);
    } catch(err) {
        console.error(err);
    }
}

getPokemon();