# Stack: React + Shadcn UI + Drizzle ORM 

Plataforma de cursos online no estilo marketplace

## Features:
### Authentication
- [ ] Deve ser possível autenticar usando email & senha;
- [ ] Deve ser possível recuperar senha usando e-mail;
- [ ] Deve ser possível criar uma conta (e-mail, nome e senha);

### Instructor
- [ ] Deve ser possível realizar cadastro de Instrutor;
- [ ] Deve ser possível buscar e visualizar lista de instrutores;

### Students
- [ ] Deve ser possível realizar cadastro de estudante;
- [ ] Deve ser possível buscar e visualizar lista de estudantes;

### Courses
- [ ] Deve ser possível realizar cadastro de curso;
- [ ] Deve ser possível buscar e visualizar lista de cursos;
- [ ] Deve ser possível atualizar curso;

### Enrollements
- [ ] Deve ser possível realizar matrícula em cursos pagos ou gratuitos;
- [ ] Deve ser possível buscar e visualizar detalhes de matrícula;
- [ ] Deve ser possível excluir matrícula;
- [ ] Deve ser possível atualizar matrícula;

## Requisitos Não Funcionais (RFs):
- [ ] Utilização da plataforma Vimeo para upload de aulas;
 
## RBAC
Roles & permissions

### Roles
- Administrator
- Instructor
- Student

### Permissions table

|  | Administrator | Student |
|---|---|---|
| Create student  | 🟩 | ❌ |
| Get student     | 🟩 | ❌ |
| Update student  | 🟩 | ❌ |
| Delete student  | 🟩 | ❌ |


> ✅ = allowed ❌ = not allowed




