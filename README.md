# MyNext Project

> Meu primeiro projeto Next.js - Uma aplicação web moderna construída com Next.js, TypeScript e Prisma

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)

## 📋 Sobre o Projeto

Este é meu primeiro projeto desenvolvido com Next.js, criado para aprender e explorar as funcionalidades do framework. O projeto utiliza as mais modernas tecnologias do ecossistema React e Next.js.

## 🚀 Tecnologias Utilizadas

- **[Next.js 15](https://nextjs.org/)** - Framework React para produção
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Prisma](https://www.prisma.io/)** - ORM moderno para Node.js e TypeScript
- **[Shadcn/ui](https://ui.shadcn.com/)** - Biblioteca de componentes reutilizáveis
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[ESLint](https://eslint.org/)** - Linter para manter a qualidade do código

## 📁 Estrutura do Projeto

```
mynext-project/
├── src/                  # Código fonte da aplicação
│   ├── app/             # App Router (Pages e Layouts)
│   └── ...
├── components/          # Componentes React reutilizáveis
├── lib/                 # Funções utilitárias e configurações
├── prisma/              # Schema e migrations do Prisma
├── public/              # Arquivos estáticos
├── .vscode/             # Configurações do VS Code
├── components.json      # Configuração do Shadcn/ui
└── package.json         # Dependências do projeto
```

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/) ou [bun](https://bun.sh/)
- [Git](https://git-scm.com/)

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/SHAN-ischad/mynext-project.git
```

2. Acesse a pasta do projeto:

```bash
cd mynext-project
```

3. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

4. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto e configure suas variáveis:

```env
DATABASE_URL="sua-url-do-banco-de-dados"
```

5. Execute as migrations do Prisma:

```bash
npx prisma migrate dev
# ou
npx prisma db push
```

## 🎮 Como Executar

### Modo de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Build para Produção

```bash
npm run build
npm start
```

## 📝 Scripts Disponíveis

- `dev` - Inicia o servidor de desenvolvimento
- `build` - Cria a build de produção
- `start` - Inicia o servidor de produção
- `lint` - Executa o ESLint para verificar o código

## 🗄️ Banco de Dados

Este projeto utiliza Prisma como ORM. Para gerenciar o banco de dados:

```bash
# Visualizar o banco de dados no Prisma Studio
npx prisma studio

# Criar uma nova migration
npx prisma migrate dev --name nome_da_migration

# Gerar o Prisma Client
npx prisma generate
```

## 🎨 Componentes UI

O projeto utiliza [Shadcn/ui](https://ui.shadcn.com/) para componentes de interface. Para adicionar novos componentes:

```bash
npx shadcn@latest add [nome-do-componente]
```

## 📚 Recursos de Aprendizado

Durante o desenvolvimento deste projeto, utilizei os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs)
- [Tutorial Interativo do Next.js](https://nextjs.org/learn)
- [Documentação do Prisma](https://www.prisma.io/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Contribuindo

Como este é um projeto de aprendizado, sugestões e feedback são sempre bem-vindos!

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**SHAN-ischad**

- GitHub: [@SHAN-ischad](https://github.com/SHAN-ischad)

---

⭐ Se este projeto te ajudou de alguma forma, considere dar uma estrela!

## 🔗 Links Úteis

- [Deploy no Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
- [Documentação de Deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying)
- [Repositório do Next.js](https://github.com/vercel/next.js)
