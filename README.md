# Desafio React JS para dev Front-end
Desafio para seleção de desenvolvedor front-end ReactJs, com o objetivo de construir uma pagina para exibir dados de servidores de acordo com o modelo fornecido. Como o objetivo era avaliar o dominio da lib, a fidelidade da estilização seguindo o modelo do Figma não era um requisito, no entanto seria considerado um plus.
### [Template do desafio](https://github.com/amongabriel/desafio-react)
### [Meu projeto em live](https://desafio-react-08-21.vercel.app/)

## Criterios avaliados 
  - Dominio da lib ReactJs;
  - Organização e estruturação de código;
  - Semantica do codigo HTML;

## Modelo Figma
Link para o modelo do projeto no Figma:
  - [Modelo](https://www.figma.com/file/c2gEuLeES3d1CSwnljOzNG/Desafio-React-JS-(Copy)?node-id=0%3A1)

## Setup
O [JSON Server](https://github.com/typicode/json-server) foi utilizado para simular uma API com as informações dos servidores. Os comandos 
```bash
# instala as dependencias
yarn
# inicia o servidor 
yarn server
```
A rota ```http://localhost:3333/servers``` lista os servidores salvos no arquivo ```server.json```

## Requisitos do projeto

- Criar e organizar os componentes JSX;
    - Construir um (ou mais) componente JSX para a exibição do Sumário
    - Construir um (ou mais) componente JSX para a exibição da Tabela de servidores
    - Construir uma página que reúna os dois componentes conforme projeto do Figma
- Utilize hooks do React para fazer o controle e estado
- Exibir as informações dos servidores na Datatable;
- Realizar ordenação da tabela pela colunas;
- Sumário e Tabela deverão compartilhar estado via Context API.
- O Sumário deverá apresentar apenas as informações dos servidores selecionados na Tabela