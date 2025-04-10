# DLG | Consultoria Tributária

![Logo DLG](./src/assets/logo.svg)

## 📋 Sobre o Projeto

Este é um site moderno para uma consultoria tributária especializada, desenvolvido com Next.js e Tailwind CSS. O projeto oferece uma interface elegante e responsiva, com foco em apresentar os serviços de consultoria tributária e facilitar o contato com potenciais clientes.

## 🚀 Tecnologias Utilizadas

- **Frontend:**

  - [Next.js 15](https://nextjs.org/) - Framework React com renderização do lado do servidor
  - [React 19](https://react.dev/) - Biblioteca JavaScript para construção de interfaces
  - [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
  - [Tailwind CSS 4](https://tailwindcss.com/) - Framework CSS utilitário
  - [Shadcn UI](https://ui.shadcn.com/) - Componentes de UI reutilizáveis
  - [Lucide React](https://lucide.dev/) - Biblioteca de ícones

- **Backend:**
  - [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
  - [Docker](https://www.docker.com/) - Containerização para o banco de dados

## 🗂️ Estrutura do Projeto

```
├── src/
│   ├── app/                  # Diretório principal do Next.js App Router
│   │   ├── globals.css       # Estilos globais da aplicação
│   │   ├── icon.svg          # Ícone do site
│   │   ├── layout.tsx        # Layout principal da aplicação
│   │   └── page.tsx          # Página inicial do site
│   ├── assets/               # Arquivos estáticos (imagens, SVGs)
│   │   ├── logo.svg          # Logo da empresa
│   │   └── noise.svg         # Textura de fundo
│   ├── components/           # Componentes reutilizáveis
│   │   └── ui/               # Componentes de interface do usuário
│   │       ├── button.tsx    # Componente de botão
│   │       ├── card.tsx      # Componente de card
│   │       ├── contact-form.tsx # Formulário de contato
│   │       ├── modal.tsx     # Componente de modal/dialog
│   │       ├── toast.tsx     # Componente de notificação toast
│   │       └── toaster.tsx   # Gerenciador de toasts
│   ├── hooks/                # Hooks personalizados
│   │   └── use-toast.tsx     # Hook para gerenciar toasts
│   └── lib/                  # Utilitários e funções auxiliares
│       └── utils.ts          # Funções utilitárias
├── docker-compose.yml        # Configuração do Docker para PostgreSQL
├── components.json           # Configuração do Shadcn UI
├── next.config.ts           # Configuração do Next.js
├── package.json             # Dependências e scripts do projeto
├── postcss.config.mjs       # Configuração do PostCSS
├── tailwind.config.js       # Configuração do Tailwind CSS
└── tsconfig.json            # Configuração do TypeScript
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

3. **Inicie o banco de dados PostgreSQL com Docker:**

   ```bash
   docker-compose up -d
   ```

   Isso iniciará um container PostgreSQL na porta 5433 com as seguintes credenciais:

   - **Usuário:** postgres
   - **Senha:** postgres
   - **Banco de dados:** drp10_pji310_a2025s1_t001

4. **Execute o projeto em modo de desenvolvimento:**

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

## 🌐 Funcionalidades Principais

- **Página Inicial:** Apresentação da empresa e seus serviços de consultoria tributária
- **Seção de Benefícios:** Destaque para os principais benefícios oferecidos
- **Formulário de Contato:** Modal para que potenciais clientes possam entrar em contato
- **Design Responsivo:** Interface adaptável para dispositivos móveis e desktop
- **Integração com Banco de Dados:** Armazenamento de dados de contato no PostgreSQL

## 🔧 Personalização

### Estilos e Temas

O projeto utiliza Tailwind CSS para estilização. As principais configurações de estilo podem ser encontradas em:

- `src/app/globals.css` - Estilos globais e variáveis CSS
- `tailwind.config.js` - Configuração do Tailwind CSS
- `components.json` - Configuração do Shadcn UI

### Componentes UI

Os componentes de interface do usuário estão localizados em `src/components/ui/`. Eles são baseados na biblioteca Shadcn UI, que fornece componentes acessíveis e personalizáveis.

## 📝 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## 👥 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📞 Contato

Para mais informações sobre o projeto, entre em contato através do formulário no site ou pelos canais disponíveis na página de contato.
