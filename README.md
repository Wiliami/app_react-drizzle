# Stack: Vite + React + Shadcn + Drizzle ORM 

Projeto de uma plataforma de cursos online.

## Features

### Authentication
- [ ] Deve ser possível autenticar usando email & senha;
- [ ] Deve ser possível recuperar senha usando e-mail;
- [ ] Deve ser possível criar uma conta (e-mail, nome e senha);

### Students
- [ ] Deve ser possível buscar a lista de estudantes;

### Courses
- [ ] Deve ser possível buscar a lista de cursos;
- [ ] Deve ser possível cadastrar um curso;
- [ ] Deve ser possível realizar a matrícula em um curso;


## RBAC
Roles & permissions

### Roles
- Administrator
- Student

### Permissions table

|  | Administrator | Student |
|---|---|---|
| Create student  | 🟩 | ❌ |
| Get student     | 🟩 | ❌ |
| Update student  | 🟩 | ❌ |
| Delete student  | 🟩 | ❌ |


> ✅ = allowed ❌ = not allowed




