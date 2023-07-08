# Solar Energy

Uma aplicação protótipo para o gerenciamento de energia chamada
Solar Energy.

- Uma Tela de Login contendo um formulário com campos de email e senha.
- Um menu lateral, contendo as opções
  Dashboard, Unidade Consumidora e Cadastro de energia gerada.
- Uma tela Dashboard contendo 4 cards e um grafico de linha.
- Uma tela de Listagem de unidades (exibida na rota /unidades) contendo uma tabela com as colunas ID, Apelido, Local, Marca e Modelo, além dos botões Editar e Remover.
- Uma tela de cadastro de unidade, contendo um formulário com os campos Apelido, Local, Marca, Modelo e Status (Checkbox) . Ao clicar no botão salvar, chamar o evento de onSubmit e cadastrar unidade na API. Todos os campos do formulário são obrigatórios
- Uma tela de Lançamento de geração mensal contendo um formulário.

## Para acessar o projeto é necessário digitar um dos seguintes e-mail e senha:

      neli@gmail.com  senha: 123
      solar@gmail.com senha: 456
      energy@gmail.com senha: 789

## Definições iniciais do projeto

##Rotas

A aplicação tem seguintes rotas:

/ leva para login
/dashboard
/unidades
/geracoes

## Funcionalidades

exibir,
cadastrar,
editar e
excluir informações cadastro de unidade geradora e cadastro de energia gerada;

## Tecnologias utilizadas:

- React + vite;
- JavaScript, HTML e CSS;
- react-router-dom para rotas;
  -bibliote react chart js
  -biblioteca
  - Git com GitHub;

## Instalação

1. Clone o repositório para sua máquina local.
2. Navegue até o diretório raiz do projeto.
3. Instale as dependências utilizando o comando:
   #### `npm install`.
4. Instale para as rotas:
   #### `npm install react-router-dom`.`
5. Na fase de teste foi utilizado o JSON como simulador de back-end. Se pretende utilizar o server, nicie o servidor JSON utilizando o comando:
   #### `npm run server`.
6. Em outro terminal, inicie o aplicativo React utilizando o comando: `npm start dev`.
