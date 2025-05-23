# DLG | Consultoria Tributária

![Logo DLG](./src/assets/logo-git.svg)

## 📋 Sobre o Projeto

Este é um site moderno para uma consultoria tributária especializada, desenvolvido com Next.js 15 e Tailwind CSS 4. O projeto oferece uma interface elegante e responsiva, com foco em apresentar os serviços de consultoria tributária e facilitar o contato com potenciais clientes através de um formulário integrado com banco de dados PostgreSQL.

## 🚀 Tecnologias Utilizadas

### Frontend

- [Next.js 15](https://nextjs.org/) - Framework React com renderização do lado do servidor (versão 15.2.4)
- [React 19](https://react.dev/) - Biblioteca JavaScript para construção de interfaces (versão 19.0.0)
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript (versão 5)
- [Tailwind CSS 4](https://tailwindcss.com/) - Framework CSS utilitário (versão 4)
- [Radix UI](https://www.radix-ui.com/) - Componentes de UI acessíveis e sem estilo
- [Lucide React](https://lucide.dev/) - Biblioteca de ícones (versão 0.487.0)
- [Sonner](https://sonner.emilkowal.ski/) - Biblioteca de notificações toast (versão 2.0.3)

### Backend

- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [Prisma ORM](https://www.prisma.io/) - ORM para acesso ao banco de dados (versão 6.6.0)
  - Modelo `Admin` para gerenciamento de usuários administrativos
  - Modelo `Lead` para captura e gestão de leads
- [Docker](https://www.docker.com/) - Containerização para o banco de dados (localhost)
- [Nodemailer](https://nodemailer.com/) - Biblioteca para envio de emails (versão 7.0.3)

## 🗂️ Estrutura do Projeto

```
├── prisma/                # Configuração do Prisma ORM
│   └── schema.prisma     # Schema do banco de dados
├── src/
│   ├── app/              # Diretório principal do Next.js App Router
│   │   ├── api/          # Rotas da API
│   │   │   └── send-email/ # Endpoint para envio de emails
│   │   ├── globals.css   # Estilos globais da aplicação
│   │   ├── icon.svg      # Ícone do site
│   │   ├── layout.tsx    # Layout principal da aplicação
│   │   ├── page.tsx      # Página inicial do site
│   ├── assets/           # Arquivos estáticos (imagens, SVGs)
│   │   ├── logo.svg      # Logo da empresa
│   │   ├── hero-bg.webp  # Imagem de fundo do hero
│   │   ├── services-bg.webp # Imagem de fundo dos serviços
│   │   └── noise.svg     # Textura de fundo
│   ├── components/       # Componentes reutilizáveis
│   │   ├── About.tsx     # Componente sobre a empresa
│   │   ├── Benefits.tsx  # Componente de benefícios
│   │   ├── ContactForm.tsx # Formulário de contato
│   │   ├── Cta.tsx       # Componente de chamada para ação
│   │   ├── Footer.tsx    # Componente de rodapé
│   │   ├── Header.tsx    # Componente de cabeçalho
│   │   ├── Hero.tsx      # Componente de hero
│   │   ├── Services.tsx  # Componente de serviços
│   │   ├── TaxRegimes.tsx # Componente de regimes tributários
│   │   ├── WhatsAppButton.tsx # Botão flutuante do WhatsApp
│   │   └── ui/           # Componentes de interface do usuário
│   │       ├── button.tsx # Componente de botão
│   │       ├── card.tsx  # Componente de card
│   │       ├── dialog.tsx # Componente de diálogo
│   │       ├── modal.tsx # Componente de modal
│   │       ├── sonner.tsx # Componente de notificação sonner
│   │       ├── toast.tsx # Componente de toast
│   │       └── toaster.tsx # Componente de toaster
│   ├── hooks/            # Hooks personalizados
│   │   └── use-toast.tsx # Hook para gerenciar toasts
│   ├── lib/              # Utilitários e funções auxiliares
│   │   └── utils.ts      # Funções utilitárias
│   └── scripts/          # Scripts utilitários
│       └── convert-image.js # Script para conversão de imagens
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

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```
   # Banco de dados
   DATABASE_URL="postgresql://postgres:postgres@localhost:5433/drp10_pji310_a2025s1_t001?schema=public"

   # Configuração do Gmail
   GMAIL_USER="seu-email@gmail.com"
   GMAIL_PASS="sua-senha-de-app"
   ```

   Para configurar o envio de emails:

   1. Ative a autenticação de duas etapas na sua conta Google
   2. Gere uma senha de aplicativo em Configurações > Segurança > Senhas de app
   3. Use essa senha gerada como GMAIL_PASS

4. **Inicie o banco de dados PostgreSQL com Docker:**

   ```bash
   docker-compose up
   ```

   Isso iniciará um container PostgreSQL na porta 5433 com as seguintes credenciais:

   - **Usuário:** postgres
   - **Senha:** postgres
   - **Banco de dados:** drp10_pji310_a2025s1_t001

5. **Execute as migrações do Prisma:**

   ```bash
   pnpx prisma migrate dev
   ```

6. **Execute o projeto em modo de desenvolvimento:**

   ```bash
   pnpm dev
   ```

   O site estará disponível em [http://localhost:3000](http://localhost:3000).

## 📝 Comandos Disponíveis

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
  pnpx prisma generate

  # Aplicar migrações
  pnpx prisma migrate dev

  # Visualizar banco de dados
  pnpx prisma studio
  ```

## 🌐 Funcionalidades Implementadas

- **Página Inicial:** Apresentação da empresa e seus serviços de consultoria tributária
- **Seção Sobre:** Informações detalhadas sobre a empresa e sua missão
- **Seção de Benefícios:** Destaque para os principais benefícios oferecidos
  - Identificação de Créditos Tributários
  - Planejamento Tributário Personalizado
  - Consultoria Fiscal Especializada
- **Seção de Serviços:** Apresentação dos serviços especializados
  - Diagnóstico Tributário Completo
  - Elaboração de Relatórios Técnicos
  - Gestão e Acompanhamento de Processos
  - Compliance Fiscal
- **Seção de Regimes Tributários:** Explicação detalhada sobre
  - Simples Nacional
  - Lucro Presumido
  - Lucro Real
- **Sistema de Contato Integrado:**
  - Formulário de contato com validação
  - Captura e armazenamento de leads no banco de dados
  - Sistema de notificações toast para feedback
  - Email de notificação para a empresa
  - Email de confirmação automático para o cliente
  - Templates de email personalizados e responsivos
- **Botão WhatsApp Flutuante:**
  - Acesso rápido para contato via WhatsApp
  - Modal de confirmação com feedback visual
- **Design Responsivo:**
  - Interface adaptável para dispositivos móveis e desktop
  - Componentes UI acessíveis com Radix UI
  - Estilização moderna com Tailwind CSS
- **Componentes Reutilizáveis:** Utilização de componentes modulares para facilitar a manutenção

## � Personalização

### Estilos e Temas

O projeto utiliza Tailwind CSS para estilização. As principais configurações de estilo podem ser encontradas em:

- `src/app/globals.css` - Estilos globais e variáveis CSS
- `components.json` - Configuração dos componentes UI

### Componentes UI

Os componentes de interface do usuário estão localizados em `src/components/ui/`. Eles são baseados em componentes do Radix UI, que fornece componentes acessíveis e personalizáveis. Os componentes principais da aplicação estão em `src/components/`.

### Banco de Dados

O schema do banco de dados está definido em `prisma/schema.prisma`. O projeto está configurado para usar PostgreSQL via Docker e inclui os seguintes modelos:

- **Admin**: Gerenciamento de usuários administrativos
  - Campos: id, email, password, isActive, createdAt, updatedAt
- **Lead**: Captura e gestão de leads
  - Campos: id, name, email, phone, taxationType, message, source, createdAt, updatedAt

## ⚙️ Configurações do Sistema

O arquivo `src/config/configs.ts` contém as configurações principais do sistema, organizadas em diferentes seções:

### Sobre a Empresa

- **about**: Título, descrição e informações adicionais sobre a empresa
- **company**: Dados da empresa como nome, descrição, endereço e localização
- **contact**: Informações de contato (telefone e email)
- **social**: Links para redes sociais (WhatsApp, LinkedIn, Instagram)

### Serviços e Benefícios

- **benefits**: Configuração dos principais benefícios oferecidos
  - Título e descrição da seção
  - Lista de benefícios com título, descrição e ícone
- **services**: Configuração dos serviços prestados
  - Título e descrição da seção
  - Lista de serviços com título e descrição

### Regimes Tributários

- **taxRegimes**: Configuração dos regimes tributários
  - Título da seção
  - Lista de regimes com título, descrição e detalhes

### Call-to-Action (CTA)

- **cta**: Configuração da seção de chamada para ação
  - Título e descrição
  - Texto do botão e título do modal

### Exemplo de Personalização

```typescript
// src/config/configs.ts
export const systemConfigs = {
  company: {
    name: "Sua Empresa",
    description: "Sua descrição personalizada",
    address: "Seu endereço",
    // ...
  },
  contact: {
    phone: "+55 11 1234-5678",
    email: "contato@suaempresa.com.br",
  },
  // ...
};
```
