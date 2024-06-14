const pokemonList = document.getElementById('pokemonList')  /*pega list html*/
const maxRecords = 1
const limit = 1
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <div class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <div class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </div>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </div>
    `
}

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItems(offset, limit)


