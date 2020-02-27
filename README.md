<p align="center">
  <img src="https://image.freepik.com/vetores-gratis/mapa-do-brasil_92265-13.jpg" width="400">
</p>

<h1 align="center">Cidades Promise</h1>

<p align="center">
  Busca por cidades utilizando a sigla do Estado ou DDD, integrado diretamente aos serviços do INEP e outras API.
</p>


## Features

 * Interface Assíncrona.
 * Atualizado em tempo-real por se conectar diretamente aos serviços do INEP.
 * Sempre retorna a resposta rápida.
 * Possui alta disponibilidade.
 * Sem limites de uso (rate limits) conhecidos.
 * Suporte ao Node.js 


## Como utilizar


### Realizando uma consulta

Basta utilizar a sigla do estado como parâmetro, por exemplo o estado da Paraíba:

``` js
const cidades = require('cidades-promise');

cidades.getCidadesByEstado("pb").then((res) => {
    console.log(res);
})
    
// [
//   'AGUA BRANCA',
//   'AGUIAR',
//   'ALAGOA GRANDE',
//   'ALAGOA NOVA',
//    ... more items
// ]  

```

Usando async:

``` js
const cidades = require('cidades-promise');

async function getCidades(){
    const response = await cidades.getCidadesByEstado("pb");
    console.log(response);
}
    
// [
//   'AGUA BRANCA',
//   'AGUIAR',
//   'ALAGOA GRANDE',
//   'ALAGOA NOVA',
//    ... more items
// ]  

```

### Quando a Sigla do Estado possui um formato inválido

``` js
const cidades = require('cidades-promise');

cidades.getCidadesByEstado("pbkj").then((res) => {
    console.log(res);
})
    
// {"erro":"Sigla do estado estar incorreta"} 

```

### Quando a Sigla do Estado não é encontrada

``` js
const cidades = require('cidades-promise');

cidades.getCidadesByEstado("gg").then((res) => {
    console.log(res);
})
    
// {"erro": "Erro ao buscar cidades"}

```

### Busca Cidades por DDD

``` js
const cidades = require('cidades-promise');

cidades.getCidadesByDddd(83).then((res) => {
    console.log(res);
})
    
// [
//   'AGUA BRANCA',
//   'AGUIAR',
//   'ALAGOA GRANDE',
//   'ALAGOA NOVA',
//    ... more items
// ]  

```

### Instalação

#### npm

```
$ npm install --save cidades-promise
```

## Autor


| [<img src="https://avatars1.githubusercontent.com/u/34171773?s=460&v=4" width="150"><br><sub>@juniorpb</sub>](https://github.com/juniorpb) |
| :---: |
