log = console.log

async function getPokemon() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/mewtwo';
    try {

        const result = await fetch(apiUrl).then((result) => result.json())
        const { name, height, weight } = result

        window.picture = result;

        const addImage = function () {
            const pokemonImage = document.getElementById("PokemonPicture")
            pokemonImage.setAttribute("src", picture.sprites.other["official-artwork"].front_default);
        }

        const addDetails = function () {

            nameList = document.createElement("li")
            nameList.innerHTML = ("This Pokemon's name is: " + name);
            Database.appendChild(nameList)

            detailsList = document.createElement("li")
            detailsList.innerHTML = ("This Pokemon's height is: " + height + " and his weight is: " + weight);
            Database.appendChild(detailsList)
        };

        document.getElementById("Pokemon-Button").addEventListener('click', addImage);
        document.getElementById("Pokemon-info").addEventListener('click', addDetails);
    }
    catch (error) { log(error) }

}
getPokemon()




// Two different codes, same outcome......................................................

// const result = await fetch(apiUrl, { method: 'GET' }).then(response => response.json())
// .then(data => log(data))

// const result = await fetch(apiUrl).then((result) => result.json())

// .......................................................................................