# Project Blogs Api

- Project to develop API and Database for a blog content production, creating a posts `CRUD`, using `Node.js` and `Sequelize` package.

## Requirements

1. Create migrations for Users, Categories, BlogPosts, and PostCategories entities ✔️
2. Create User model ✔️
3. Create POST endpoint in `/login` ✔️
4. Create POST endpoint in `/user` with JWT token ✔️
5. Create GET endpoint in `/user` ✔️
6. Create GET endpoint in `/user/:id` ✔️
7. Create Category model ✔️
8. Create POST endpoint in `/categories` ✔️
9. Create GET endpoint in `/categories` ✔️ 
10. Create BlogPost model ✔️
11. Create PostCategory Model ✔️
12. Create POST endpoint in `/post` ✔️
13. Create GET endpoint in `/post` ✔️
14. Create GET endpoint in `/post/:id` ✔️
15. Create PUT endpoint in `/post/:id` ✔️

## Bonus Requirements

16. Create DELETE endpoint in `/post/:id` ✔️
17. Create DELETE endpoint in `/user/me` ✔️
18. Create GET endpoint in `/post/search?q=:searchTerm` ✔️
 
## Language and Tools

<a href="https://www.mysql.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="30" height="30"/> </a>
MySQL
</br>
</br>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="30"/> </a>
JavaScript
</br>
</br>
<a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="30" height="30"/> </a>
Node.js

## Get started

<details>
  <summary><strong> With Docker </strong></summary>
  </br>
  👉 Dockerfile and Docker-compose were provided by Trybe
  
  ⚠️ Before you start, you must check if your docker-compose version is 1.29 or higher
  </br>
  
  - Run `node` and `db` by running: 
  ```sh
  $ docker-compose up -d --build
  ```
  
  - Open interactive terminal using:
  ```sh
  $ docker exec -it blogs_api bash
  ```
  
  - Install dependencies, inside the container, with: 
  ```sh
  $ npm install
  ```
</details>

<details>
  <summary><strong> Install it locally </strong></summary>
  </br>
  
  - Open terminal and create a directory in your preferred location:
  ```sh
  $ mkdir <Your directory name here>
  ```
  
  - Access directory then clone the repository:
  ```sh
  $ cd <Your directory name here>
  $ git clone git@github.com:ViniGB/Project-Blogs-Api.git
  ```
  
  - Access the newly created directory:
  ```sh
  $ cd Project-Blogs-Api
  ```
  
  - Install dependencies:
  ```sh
  $ npm install
  ```
</details>

<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
⚠️ IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
