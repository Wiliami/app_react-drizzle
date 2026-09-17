# Stack: Vite + React + Drizzle ORM

Este projeto contém amostra de uma aplicação web usando Drizzle ORM e react para criar a UI.

## Features

### Authentication
- [ ] Deve ser possível autenticar usando email & senha;
- [ ] Deve ser possível recuperar senha usando e-mail;
- [ ] Deve ser possível criar uma conta (e-mail, nome e senha);

### Members
- [ ] Deve ser possível buscar a lista de membros;
- [ ] Deve ser possível atualizar o cargo de um membro;

### Courses
- [ ] Deve ser possível buscar a lista de cursos;
- [ ] Deve ser possível cadastrar um curso;
- [ ] Deve ser possível realizar a matrícula de um curso;


## RBAC
Roles & permissions

### Roles
- Administrator
- Member

### Permissions table

|  | Administrator | Member |
|---|---|---|
| Create member  | 🟩 | ❌ |
| Get members    | 🟩 | ❌ |
| Update member  | 🟩 | ❌ |
| Delete member  | 🟩 | ❌ |


> ✅ = allowed ❌ = not allowed




