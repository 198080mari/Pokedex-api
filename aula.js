Requisição HTTP

URL: https://pokeapi.co/api/v2/pokemon?type=grass&name=i  //pesquisa
${IP}/${path = caminho de identificação do recurso}

Request Method: GET | POST | PUT | DELETE

https://pokeapi.co/api/v2/pokemon?offset=20&limit=20  //paginação, numero da pagin e qtde

/*Request Headers, Response Headers
Configuração
q=1  //prioridade 100%
q=0.9
q=0.8...*/

Request Headers
    content-type: application/json

Request Body {   //GET não tem body na requisição, só resposta
    "1": "Teste"
} 
STATUS CODE: 200

Response Headers
Response  Body


fetch(url)  /*fetch usa get*/ 
.then((response) => response.json())  /*arrow é função*/  /*transforma response em promessa do body convertido em json*/
.then((jsonBody) => console.log(jsonBody))  /*recebe body convertido e printa*/
.catch((error) => console.error(error))

/*.finally(function() {
    console.log('Requisição concluída!')
})

/*try {

} catch (error) {

} finalliy {

}*/





