# ConquisTi Forum 
<br>


Este projeto implementa uma plataforma de perguntas e respostas utilizando Node, Express e MySQL.

<br>

## Interface
<br>


<div align="center">
  <img src="public/img/logo.png" alt="Imagem do Projeto" width="900">
</div>

<br>


## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Status](#status)
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Explicação](#explicação)
- [Como Usar](#como-usar)
- [Autor](#autor)

<br>


## Tecnologias Utilizadas

<br>

<div style="display: flex; flex-direction: row;">
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="public/img/js.png" alt="Logo Linguagem" width="200" height="auto"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="public/img/node.png" alt="Logo Linguagem" width="200" height="auto"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="public/img/mysql.png" alt="Logo Linguagem" width="200" height="auto"/>
  </div>
</div>

<br>


## Status

![Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

<br>


## Descrição

É possivel responder uma pergunta e também ver as outras perguntas que foram relizadas.

<br>


## Funcionalidades

Responder perguntas, consultar respostas e realizar as próprias perguntas.

<div align="center">
  <img src="public/img/logo2.png" alt="Imagem do Projeto" width="900">
</div>

<br>


## Descrição

O ConquisTi Forum é uma plataforma de perguntas e respostas desenvolvida com **Node.js**, **Express** e **MySQL**. Este projeto tem como objetivo fornecer um ambiente onde os usuários podem compartilhar conhecimento, esclarecer dúvidas e participar de discussões sobre temas variados. A interface é intuitiva e permite que os usuários vejam as perguntas, respondam e façam novas perguntas facilmente.

<br>


## Funcionalidades

- **Página Inicial**: Lista todas as perguntas disponíveis no fórum, organizadas em ordem decrescente, mostrando título e uma breve descrição de cada pergunta.
- **Criar Pergunta**: O usuário pode criar uma nova pergunta com um título e uma descrição.
- **Responder Perguntas**: Na página de uma pergunta específica, é possível adicionar respostas. As respostas aparecem organizadas em ordem decrescente.
- **Visualizar Perguntas**: Cada pergunta tem uma página dedicada, onde o usuário pode ver a pergunta em detalhes e visualizar as respostas.
- **Divisões Visuais e Separações**: As seções são separadas por traços para melhorar a navegação visual.

## Explicação

Este projeto utiliza o **Sequelize** como ORM para manipulação de dados no banco de dados MySQL. As principais operações realizadas incluem:

- **CRUD** (Create, Read, Update, Delete): Operações básicas para criar, ler, atualizar e deletar dados no banco de dados.
- **Rotas**: O Express define rotas como `GET` e `POST` para permitir que os usuários naveguem, criem e respondam perguntas.
- **Modelos do Banco de Dados**: O Sequelize é configurado para criar e manipular modelos, como `Pergunta` e `Resposta`, que representam as tabelas do banco de dados.

## Autor

Desenvolvido por Diego Franco
