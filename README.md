# DLG | Consultoria Tributária

![Logo DLG](./src/assets/logo.svg)

## 📋 Sobre o Projeto

Este é um site moderno para uma consultoria tributária especializada, desenvolvido com Next.js 15 e Tailwind CSS 4. O projeto oferece uma interface elegante e responsiva, com foco em apresentar os serviços de consultoria tributária e facilitar o contato com potenciais clientes através de um formulário integrado com banco de dados PostgreSQL.

## 🚀 Tecnologias Utilizadas

### Frontend

- [Next.js 15](https://nextjs.org/) - Framework React com renderização do lado do servidor
- [React 19](https://react.dev/) - Biblioteca JavaScript para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Tailwind CSS 4](https://tailwindcss.com/) - Framework CSS utilitário
- [Shadcn UI](https://ui.shadcn.com/) - Componentes de UI reutilizáveis
- [Lucide React](https://lucide.dev/) - Biblioteca de ícones
- [Sonner](https://sonner.emilkowal.ski/) - Biblioteca de notificações toast

### Backend

- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [Prisma ORM](https://www.prisma.io/) - ORM para acesso ao banco de dados
- [Docker](https://www.docker.com/) - Containerização para o banco de dados

## 🗂️ Estrutura do Projeto

```
├── prisma/                # Configuração do Prisma ORM
│   └── schema.prisma     # Schema do banco de dados
├── src/
│   ├── app/              # Diretório principal do Next.js App Router
│   │   ├── globals.css   # Estilos globais da aplicação
│   │   ├── icon.svg      # Ícone do site
│   │   ├── layout.tsx    # Layout principal da aplicação
│   │   └── page.tsx      # Página inicial do site
│   │   └── page/         # Outras páginas do site
│   ├── assets/           # Arquivos estáticos (imagens, SVGs)
│   │   ├── logo.svg      # Logo da empresa
│   │   └── noise.svg     # Textura de fundo
│   ├── components/       # Componentes reutilizáveis
│   │   └── ui/           # Componentes de interface do usuário
│   ├── hooks/            # Hooks personalizados
│   │   └── use-toast.tsx # Hook para gerenciar toasts
│   └── lib/              # Utilitários e funções auxiliares
│       └── utils.ts      # Funções utilitárias
├── docker-compose.yml    # Configuração do Docker para PostgreSQL
├── components.json       # Configuração do Shadcn UI
├── next.config.ts        # Configuração do Next.js
├── package.json          # Dependências e scripts do projeto
├── postcss.config.mjs    # Configuração do PostCSS
├── tailwind.config.js    # Configuração do Tailwind CSS
└── tsconfig.json         # Configuração do TypeScript
```

## 🛠️ Instalação e Configuração

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) (para o banco de dados)

### Passos para Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/luisotaviopilotto/DRP10-PJI310-A2025S1-T001.git
   cd DRP10-PJI310-A2025S1-T001
   ```

2. **Instale as dependências:**

   ```bash
   pnpm install
   ```

3. **Configure o banco de dados:**

   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```
   DATABASE_URL="postgresql://postgres:postgres@localhost:5433/drp10_pji310_a2025s1_t001?schema=public"
   ```

4. **Inicie o banco de dados PostgreSQL com Docker:**

   ```bash
   docker-compose up -d
   ```

   Isso iniciará um container PostgreSQL na porta 5433 com as seguintes credenciais:

   - **Usuário:** postgres
   - **Senha:** postgres
   - **Banco de dados:** drp10_pji310_a2025s1_t001

5. **Execute as migrações do Prisma:**

   ```bash
   npx prisma migrate dev
   ```

6. **Execute o projeto em modo de desenvolvimento:**

   ```bash
   pnpm dev
   ```

   O site estará disponível em [http://localhost:3000](http://localhost:3000).

## 🚀 Comandos Disponíveis

- **Desenvolvimento:**

  ```bash
  pnpm dev
  ```

- **Build para produção:**

  ```bash
  pnpm build
  ```

- **Iniciar em modo de produção:**

  ```bash
  pnpm start
  ```

- **Verificar código com ESLint:**

  ```bash
  pnpm lint
  ```

- **Gerenciar banco de dados:**

  ```bash
  # Gerar cliente Prisma
  npx prisma generate

  # Aplicar migrações
  npx prisma migrate dev

  # Visualizar banco de dados
  npx prisma studio
  ```

## 🌐 Funcionalidades Principais

- **Página Inicial:** Apresentação da empresa e seus serviços de consultoria tributária
- **Seção de Benefícios:** Destaque para os principais benefícios oferecidos
- **Formulário de Contato:** Modal para que potenciais clientes possam entrar em contato
- **Design Responsivo:** Interface adaptável para dispositivos móveis e desktop
- **Integração com Banco de Dados:** Armazenamento de dados de contato no PostgreSQL via Prisma ORM

## 🔧 Personalização

### Estilos e Temas

O projeto utiliza Tailwind CSS para estilização. As principais configurações de estilo podem ser encontradas em:

- `src/app/globals.css` - Estilos globais e variáveis CSS
- `tailwind.config.js` - Configuração do Tailwind CSS
- `components.json` - Configuração do Shadcn UI

### Componentes UI

Os componentes de interface do usuário estão localizados em `src/components/ui/`. Eles são baseados na biblioteca Shadcn UI, que fornece componentes acessíveis e personalizáveis.

### Banco de Dados

O schema do banco de dados está definido em `prisma/schema.prisma`. Para adicionar novos modelos ou modificar os existentes, edite este arquivo e execute as migrações do Prisma.

## 📝 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
