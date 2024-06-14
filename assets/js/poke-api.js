const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {  //converteu de um modelo api para o nosso
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types  //1 posição array

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
    }

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json()) // transforma em nova lista de promessa de detalhes  em json
    .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit=5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)  //requisiçao lista
    .then((response) => response.json())  //devolve http converte pra json
    .then((jsonBody) => jsonBody.results)  //pega lista
    //.catch((error) => console.error(error))  //mostrar erro no console se houver
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) //converteu lista em lista de novos detalhes 
    .then((detailRequests) => Promise.all(detailRequests))  //com requisiçoes de detalhes, esperamos q terminassem, ja estavam sendo convertidos pra json tb
    .then((pokemonsDetails) => pokemonsDetails)
}

