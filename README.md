-----

# 🚀 Projeto de Testes de Automação Web com Cypress

Este repositório contém um conjunto de testes End-to-End (E2E) desenvolvidos em **JavaScript** utilizando a ferramenta **Cypress**. Os testes focam na validação do fluxo de autenticação (Login) da aplicação de demonstração **Sauce Demo**.

## 💻 Tecnologias Utilizadas

  * **Cypress:** Framework de testes E2E em JavaScript.
  * **JavaScript:** Linguagem principal dos testes.
  * **Node.js & npm:** Ambiente de execução e gerenciador de pacotes.

## ⚙️ Configuração e Instalação

Para rodar os testes localmente, siga os passos abaixo:

### Pré-requisitos

Preferivel ter o **Node.js** (versão 14 ou superior recomendada) e o **npm** instalados em sua máquina.

### 1\. Clonar o Repositório

```bash
git clone https://github.com/Narbona836/Swag-Labs.git
cd SWAG LABS
```

### 2\. Instalar as Dependências

Dentro da pasta do projeto, execute o comando para instalar o Cypress e todas as dependências necessárias:

```bash
npm install
```

## ▶️ Como Executar os Testes

Existem duas maneiras principais de executar os testes de login: via interface gráfica (para debug) ou via linha de comando (para CI/CD).

### 1\. Execução via Interface Gráfica (Cypress Test Runner)

Use este comando para abrir a interface gráfica do Cypress, onde você pode selecionar e assistir os testes rodarem em tempo real:

```bash
npx cypress open
```

1.  Selecione **E2E Testing**.
2.  Clique no arquivo de teste (`loginPage.cy.js` ou similar).
3.  O Cypress abrirá um navegador para executar e exibir o status de cada teste.

### 2\. Execução via Linha de Comando (Modo Headless)

Use este comando para executar todos os testes no modo "headless" (sem abrir o navegador, mais rápido e ideal para CI/CD):

```bash
npx cypress run
```

-----

## 🧪 Visão Geral dos Testes de Login

O arquivo de teste principal, foca na validação completa do processo de autenticação utilizando os diversos usuários de teste fornecidos pelo Sauce Demo.

| Teste | Descrição | Status Esperado |
| :--- | :--- | :--- |
| **`Deve fazer login com sucesso`** | Valida o login do usuário padrão (`standard_user`). | Sucesso (Redirecionamento para Dashboard) |
| **`Deve exibir mensagem de erro ao inserir credenciais inválidas`** | Testa a tentativa de login com credenciais incorretas. | Falha no Login (Mensagem de erro visível) |
| **`Deve fazer login com usuário com problemas`** | Valida o login do `problem_user` (usuário com falhas visuais). | Sucesso |
| **`Deve fazer login com usuário com desempenho lento`** | Valida o login do `performance_glitch_user` (usuário que simula lentidão). | Sucesso |
| **`Deve fazer login com usuário com erro`** | Valida o login do `error_user`. | Sucesso |
| **`Deve fazer login com usuário visual`** | Valida o login do `visual_user`. | Sucesso |

## 📐 Estrutura do Projeto

Este projeto utiliza um padrão para organizar seletores, o que facilita a manutenção:

  * **`cypress/e2e/loginPage.cy.js`:** Contém a lógica dos cenários de teste de login.
  * **`cypress/fixtures/userSeletoresLoginPage.json`:** Contém os seletores CSS/XPath utilizados nos testes. Isso centraliza os seletores e torna o código mais limpo.

-----

## 🤝 Contribuições

Sinta-se à vontade para contribuir\! Se você tiver sugestões de novos testes, melhorias de código ou correções, por favor:

1.  Faça um **Fork** do projeto.
2.  Crie uma nova **Branch** (`git checkout -b feature/nova-funcionalidade`).
3.  Faça suas alterações e commit (`git commit -m 'feat: adiciona novos testes'`).
4.  Faça o Push para a Branch (`git push origin feature/nova-funcionalidade`).
5.  Abra um **Pull Request**.

-----


## Autor 
Willian Narbona Aquino
## LinkedIn 
https://www.linkedin.com/in/willian-narbona-aquino-065b331b6/
