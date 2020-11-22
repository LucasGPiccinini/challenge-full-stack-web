# Configuração da aplicação

## Backend

- Configurar o acesso ao banco de dados no arquivo /config/defalut.json;

## Frontend

- Configurar acesso ao beckend no arquivo /client/src/app/config.js;

# Execução da Aplicação

## Partindo da raíz da aplicação

### Backend

- npm i
- node app.js

### Frontend

- cd client
- npm i
- npm run serve

## Primeiro Login

- Após configurada e inicializada a aplicação, forãm adicionados scripts de inicialização que vão rodar para criar as tabelas e inserir o primeiro usuário administrador. Com isso poderá dar antamento a usabilidade.
- User: admin@mail.com.br
- Password: 123

# Decisão da arquitetura utilizada

Embora tenha me baseado na arquitetura MVC, saí um pouco do conseito, pois gosto de manter o código simples e de fácil entendimento, acaba sendo de uma facilidade maior de implementação de uma futura especificação.

# Lista de bibliotecas de terceiros utilizadas

## Backend:

- express;
- cors;
- config -> Para setar e buscar configurações na aplicação;
- md5 -> Para criar token;
- pg -> Para estabelecer conexão com o banco de dados;

## Frontend:

- Vuetifyjs;
- Vue Router -> Para controle das rotas na aplicação;
- Axios -> Para realizar requisições HTTP;
- Balel -> Para compilação do codigo;
- Vuex -> Para cachear dados;

# O que você melhoraria se tivesse mais tempo

- Faria a componentização do front, para reutilização em futuras especificações e implementações;
- Melhoraria os testes;
- Faria um módulo de cursos e turmas, para o sistema ficar mais robusto;

# Quais requisitos obrigatórios que não foram entregues

- Nenhum.
