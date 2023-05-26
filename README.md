﻿# Project Teceo
## 🚀 Conhecendo o desafio proposto
A empresa Teceo, precisa garantir que o cadastro de loja esteja em correto funcionamento
Você pode acessar aplicação em: https://www.teceo.co/

**Funcionalidade**: Cadastro de loja

Contexto

**Dado** que acesso a página inicial

**E**        Seleciono a opção “*de uma loja*”

**E**        Seleciono a opção “*quero comprar*”

**Cenário**: Teste valida o fluxo de cadastro de loja.

**Dado**       que acesso a página inicial

**Quando**   é informado o cnpj 

**Então**       deve ser validado as informações retornadas da API “validate-cnpj”: Response status = 200,  Tempo mínimo de 195ms, Validar campo companyName do tipo string, Verifica se o campo CNPJ tem 14 caracteres, Verifica se o objeto endereço tem a quantidade correta de registros.

**Importante**
- Os testes devem passar, mesmo executando várias vezes
- Utilize o Mochawesome como Relatório

### 📋 Pré-requisitos
- [Node](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Cypress](https://www.cypress.io/)

### 🔧 Instalação
Após a instalação dos pré-requisitos, para utilizar este projeto, primeiramente deve-se seguir os seguintes passos:

Clonar projeto Git
```
git clone https://github.com/mayconnoetzold/teceo.git
```
## ⚙️ Executando os testes
- Caso desejar executar os testes em modo headless deve-se utilizar o seguinte script:
```
npx cypress run
```
- Para abrir o test runner:
```
npx cypress open
```
## 🛠️ Construído com

* [Cypress](https://www.cypress.io/) - JavaScript End to End Testing Framework

## 📃 Relatório de execução dos testes
Utiliza-se os scripts para geração do relatório de execução dos testes:
```
npm run report:mocha
npm run report:merge
```

## ✒️ Autor
* **QA Tester** - *Desenvolvimento do teste automatizado* - [Maycon Noetzold](https://github.com/mayconnoetzold)
---
