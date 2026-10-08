# Stack: Vite + React + Shadcn + Drizzle ORM 

Plataforma de cursos online no estilo marketplace

## Requisitos Funcionais (RFs):
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

## Regras de Negócios (RNs):
- [ ] O instrutor deve criar uma conta de usuário (nome, e-mail e senha);
- [ ] Perfil de instrutor: Ativar a função de instrutor no painel da sua conta e aceitar os termos de uso para criadores;
- [ ] Duração mínima: O curso deve ter pelo menos 30 minutos de conteúdo em vídeo;
- [ ] Número de aulas: Pelo menos 5 aulas individuais publicadas;
- [ ] Qualidade do áudio: O som das gravações deve ser claro e sem ruídos excessivos (teste de áudio inicial);
- [ ] Restrições sobre IA: A plataforma proíbe cursos inteiramente gerados por inteligência artificial ou ferramentas de conversão de texto em áudio (TTS) de baixa qualidade.
- [ ] Título e subtítulo: Precisam descrever com clareza o que o aluno vai aprender.
- [ ] Descrição detalhada: Explicar o conteúdo, objetivos de aprendizado e o público-alvo;
- [ ] Imagem de capa: Uma imagem atrativa e no formato recomendado pela plataforma.

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




