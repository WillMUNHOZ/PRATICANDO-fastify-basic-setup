# API Básica com Fastify

Esta é uma API básica construída com Fastify, servindo como um ponto de partida para a criação de servidores com este framework.

## Tecnologias Utilizadas

*   **[Fastify](https://www.fastify.io/):** Um framework web de alta performance e baixo overhead para Node.js.
*   **[TypeScript](https://www.typescriptlang.org/):** Um superset de JavaScript que adiciona tipagem estática opcional.
*   **[Zod](https://zod.dev/):** Uma biblioteca de validação de esquemas para TypeScript.
*   **[tsx](https://github.com/esbuild-kit/tsx):** Um executor de TypeScript para Node.js que usa esbuild.

## Como Executar

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o servidor em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```

O servidor estará disponível em `http://localhost:3333`.

## Endpoints

### Usuários

*   **`GET /users`**

    Retorna uma lista de todos os usuários.

    **Exemplo de Resposta:**
    ```json
    [
      {
        "id": "1",
        "name": "John Doe",
        "email": "john.doe@example.com"
      },
      {
        "id": "2",
        "name": "Jane Doe",
        "email": "jane.doe@example.com"
      }
    ]
    ```
