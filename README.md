<h1 align="center">Cidades Promise</h1>

<p align="center">
  Busca por Cidades utilizando a sigla do Estado, integrado diretamente aos serviços do INEP (Instituto Nacional de Estudos e Pesquisas Educacionais).
</p>


## Features

 * Interface Assíncrono.
 * Atualizado em tempo-real por se conectar diretamente aos serviços do INEP.
 * Sempre retorna a resposta rápida.
 * Possui alta disponibilidade.
 * Sem limites de uso (rate limits) conhecidos.
 * Suporte ao Node.js 


## Como utilizar


### Realizando uma consulta

Basta utilziar a sigla do estado como parametro, por exemplo o estado da Paraíba:

``` js
const cidades = require('cidades-promise');

cidades("pb").then((res) => {
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

async function getCidades (){
    const response = await cidades("pbk")
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

cidades("pbkj").then((res) => {
    console.log(res);
})
    
// {"erro":"Sigla do estado estar incorreta"} 

```

### Quando a Sigla do Estado não é encontrado

``` js
const cidades = require('cidades-promise');

cidades("gg").then((res) => {
    console.log(res);
})
    
// {"erro": "Erro ao buscar cidades"}

```

### Instalação

#### npm

```
$ npm install --save cidades-promise
```

## Autor

| [<img src="https://avatars1.githubusercontent.com/u/34171773?s=460&v=4" width="115><br><sub>@juniorpb</sub>](https://github.com/juniorpb) |
| :---: |