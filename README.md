# Expo Finance App

> Aplicativo de gestão financeira pessoal de alta performance, desenvolvido com React Native e Expo.

Este projeto foi construído do zero utilizando práticas do mercado mobile em 2026. 

---

## Stack Tecnológica

* **Framework:** [Expo](https://expo.dev/) (Managed Workflow)
* **Roteamento:** [Expo Router](https://expo.github.io/router) (Navegação baseada em arquivos)
* **Linguagem:** TypeScript (Navigation Mode)
* **Estilização:** StyleSheet 

---

## Arquitetura e Estrutura de Pastas

O projeto utiliza o padrão de **Clean Architecture** adaptado para o ecossistema Expo, separando o roteamento da lógica de negócio.

```text
FINANCE-APP/
├── app/                 # Configurações de Rota 
│   ├── (auth)/          # Grupo Público 
│   ├── (app)/           # Grupo Privado 
│   ├── _layout.tsx      # Root Layout & Global Providers
│   └── index.tsx        # Ponto de entrada 
├── src/                 # O Coração da Aplicação
│   ├── components/      # UI Reutilizável 
│   ├── screens/         # Telas reais 
│   ├── services/        # Camada de API 
│   ├── hooks/           # Lógica de estado compartilhada 
├── assets/              # Recursos estáticos 
└── tsconfig.json        # Configurações de Path Aliases
```

---

## Como Iniciar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o ambiente de desenvolvimento:
   ```bash
   npx expo start
   ```
3. Abra o Expo Go:
   Use o Expo Go no seu celular ou um emulador (iOS/Android).

---

## Licença
Copyright © 2026 - Finance App.

Todos os direitos reservados. Uso exclusivo para fins de portfólio e auditoria.
