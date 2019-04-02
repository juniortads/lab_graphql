# Lab: GraphQL com Apollo Server

## Projeto: Habilitar o servidor Apollo GraphQL

Esse projeto habilita um servidor Apollo GraphQL e o configura para execução de queries através de GraphQL e os resultados das queries são armazenadas em um servidor de cache Redis. 

## Dependências: 

- apollo-server
- apollo-server-redis
- graphql

## Executando o projeto:

**Passo 1:** Montar a Docker através do Dockerfile

```
docker build -t lab-graphql .
```

**Passo 2:** Executar a Docker

```
docker run lab-graphql
```

**Passo 3:** Acessar a interface gráfica do Apollo GraphQL

```
http://localhost:4000
```

## Estrutura do projeto:

**Dockerfile** - Arquivo que contém as instruções de montagem da imagem da Docker necessária para execução do projeto.

**package.json** - Arquivo de manifesto do projeto

**src/index.js** - Arquivo de execução da aplicação.

**src/schema.js** - Blueprint para todos os dados que serão acessados pelo graphql.