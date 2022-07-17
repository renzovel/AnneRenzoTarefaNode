# Exercícios do projeto de node NodeJS

Fazendo os exercicios de node.
Desenvolvedores: Anne Carine e Renzo Veliz

## Iniciando o projeto

- `npm install`
- `npm run dev`

## Rode as migrações

- Rodando as migrações de banco de dados: `npx sequelize-cli db:migrate`
- Criando registros com seeds: `npx sequelize-cli db:seed:all`

## Como usar?

- Nossa API oferece várias rotas para você usar:

| URL de exemplo |    Metodos   | Descrição   
| ----------------------------- | ------------- | --------    |
| `http://localhost:[PORT]/tasks`      | `GET`    |   Mostra todas as tarefas.  |
| `http://localhost:[PORT]/tasks`      | `POST`   |   Recebe os parâmetros por meio de um formulário JSON. |
| `http://localhost:[PORT]/tasks/[id]` | `GET`    |   Mostra apenas a tarefa que pertence ao id que passamos como parâmetro pela url.  |
| `http://localhost:[PORT]/tasks/[id]` | `PUT`    |   Atualiza uma tarefa. Recebe um parâmetro id da tarefa pela URL e também um formulário com os dados a serem atualizados.    |
| `http://localhost:[PORT]/tasks/[id]` | `DELETE` |   Excluir uma tarefa através do parâmetro id que enviamos pela URL.     |


- Use este JSON de amostra para criar ou atualizar novas tarefas:
```javascript
{
    "description": "Cenoura",
    "done": false
}
```