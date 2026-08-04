# crush-friend

Front e API no mesmo repositório. O `crush-friend-api` foi absorvido aqui via
`git subtree`, com o histórico de commits original preservado.

| pasta | origem | stack |
|---|---|---|
| `web/` | este repositório | React + TypeScript (o `package.json` se chama `my-date`) |
| `api/` | `crush-friend-api` | Node + Express, com Procfile |

O conteúdo que antes ficava na raiz foi para `web/`. O `.github/` continua na raiz,
para que os workflows sigam rodando.

```bash
cd web && yarn && yarn start   # front
cd api && yarn && yarn start   # api
```

> `api/` tem `README.md` e `readme.md` como arquivos distintos — vem assim do repositório
> original. São diferentes no Git (Linux/GitHub), mas colidem em checkout no Windows.
