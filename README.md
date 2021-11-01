# Online_Course-React-Nodejs
## O projeto é uma plataforma de cursos online onde pode ser adicionado módulos e aulas, apenas adminstradores podem fazer isso.

## Requisitos para rodar a aplicação
  * [Docker](https://www.docker.com/)
  * [NodeJS](https://www.nodejs.org)
  
## Dependêcias utilizadas na aplicação
* Front-End
   * Axios
   * Typescript
   * React-Router-Dom
   * React-Icons
   * Styled-Components
  
* Back-End
    * Bcrypt
    * Cors
    * Express
    * Json Web Token 
    * Pg(Postgres) como Banco de Dados
    * Tsyringe
    * Typeorm 
    * Uuid
    * Express Async Errors
    * Typescript

# Como rodar o projeto.
## Depois de ter clonado o repositório.
### Verifique se as portas:
* 8080
* 3000
* 5432
### Estão disponíveis, pois estas portas serão necessárias para rodar a nossa aplicação, depois disso.

* Vá para pasta do projeto, abra a pasta do backend.
* No terminal digite `yarn` ou `npm i`.
* Depois das dependências terminarem de instalar, rode o comando `docker-compose up -d` este comando cria o nosso banco de dados.
* Agora roda o comando `yarn typeorm migration:run` ou `npm run typeorm migration:run` para criar as nossas 'migrations', que criam as tabelas no banco de dados.
* Agora o comando `yarn seed` ou `npm run seed`, para criar o usuáio admin, está é a única forma de criar um admin, então é importante rodar este comando.
* E por último o comando `yarn dev` ou `npm run dev` que roda a nossa aplicação (Backend).


### Agora vamos rodar o Front End.
* Vá para pasta do projeto, e abra a pasta frontend.
* No terminal digite `yarn` ou `npm i`.
* Depois de ter instalado todas as dependências, rode o comando `yarn start` ou `npm start` para rodar o Fron-End.

##😁😁 Agora a aplicação está pronta para ser utilizada.
* O Front-End roda na porta 3000.
* O Back-End na porta 8080.
* E o Banco De Dados 5432.

  
## Funcionalidades
* Módulo
  * Adicionar Módulo
  * Remover Módulo
  * Editar Módulo
  * Listar Módulos
* Aulas
  * Adicionar Aula
  * Remover Aula
  * Editar Aula
  * Listar Aulas dentro do módulo
