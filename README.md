# Stack: Vite + React + Shadcn + Drizzle ORM 

Plataforma de cursos online no estilo marketplace

## Requisitos Funcionais (RFs):
### Authentication
- [ ] Deve ser possível autenticar usando email & senha;
- [ ] Deve ser possível recuperar senha usando e-mail;
- [ ] Deve ser possível criar uma conta (e-mail, nome e senha);

### Instructor
- [ ] Deve ser possível realizar cadastro de Professor(a);
- [ ] Deve ser possível buscar a lista de professores;

### Students
- [ ] Deve ser possível realizar cadastro de estudante;
- [ ] Deve ser possível buscar a lista de estudantes;

### Courses
- [ ] Deve ser possível realizar cadastro de curso;
- [ ] Deve ser possível buscar lista de cursos;
- [ ] Deve ser possível realizar matrícula de curso;
- [ ] Deve ser possível atualizar curso;

### Enrollements
- [ ] Deve ser possível realizar matrícula em cursos pagos ou gratuitos;
- [ ] Deve ser possível buscar e visualizar detalhes de matrícula;
- [ ] Deve ser possível excluir matrícula;
- [ ] Deve ser possível atualizar matrícula;

## Regras de Negócios (RNs):
### Cadastro de curso:
#### Requisitos da Conta
  - [ ] O instrutor deve criar uma conta de usuário (nome, e-mail e senha);
  - [ ] Perfil de instrutor: Ativar a função de instrutor no painel da sua conta e aceitar os termos de uso para criadores;

#### Requisitos de Conteúdo e Estrutura
  - [ ] Duração mínima: O curso deve ter pelo menos 30 minutos de conteúdo em vídeo;
  - [ ] Número de aulas: Pelo menos 5 aulas individuais publicadas;
  - [ ] Qualidade do áudio: O som das gravações deve ser claro e sem ruídos excessivos (teste de áudio inicial);
  - [ ] Restrições sobre IA: A plataforma proíbe cursos inteiramente gerados por inteligência artificial ou ferramentas de conversão de texto em áudio (TTS) de baixa qualidade.

#### Informações da Página do Curso
  - [ ] Título e subtítulo: Precisam descrever com clareza o que o aluno vai aprender.

#### Informações da Página do Curso;
  - [ ] Descrição detalhada: Explicar o conteúdo, objetivos de aprendizado e o público-alvo;
  - [ ] Imagem de capa: Uma imagem atrativa e no formato recomendado pela plataforma.

## Requisitos Não Funcionais (RFs):

 


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




