# Farma Maceió

Site institucional de página única (landing page) da **Farma Maceió**, farmácia localizada no bairro Jacintinho, em Maceió/AL. O foco é levar o visitante a **pedir pelo WhatsApp** e a **encontrar a loja física** (endereço, horário e GPS), com boa performance e SEO local.

## Tecnologias

| Item | Definição |
| --- | --- |
| Framework | [Astro](https://astro.build) (renderização estática, zero JavaScript por padrão) |
| Estilização | [Tailwind CSS](https://tailwindcss.com) |
| Ícones | SVG inline (estilo [Lucide](https://lucide.dev)) |
| Sitemap | `@astrojs/sitemap` |
| Idioma | Português do Brasil (`lang="pt-BR"`) |
| Meta de performance | 95+ no Google Lighthouse (mobile e desktop) |

## Funcionalidades

- Cabeçalho fixo com logo, telefone e botão **Falar no WhatsApp**
- Seção principal (Hero) com chamada para pedido pelo WhatsApp
- Seção de serviços (entrega grátis, teste de glicemia e aferição de pressão)
- Seção de localização com endereço, horários e botão **Como Chegar** (abre o Google Maps)
- Rodapé com dados de identificação da farmácia (CNPJ, farmacêutico responsável, CRF e AFE)
- Página de **Política de Privacidade** (LGPD)
- SEO local: título e descrição, Open Graph, URL canônica e dados estruturados JSON-LD do tipo `Pharmacy`
- `sitemap` e `robots.txt`

## Requisitos

- [Node.js](https://nodejs.org) 18.20+ ou 20+ (confira a versão exigida pela versão do Astro instalada)
- npm, pnpm ou yarn

## Como rodar

```bash
# instalar as dependências
npm install

# servidor de desenvolvimento em http://localhost:4321
npm run dev

# gerar a versão de produção (pasta dist/)
npm run build

# testar o build localmente
npm run preview
```

## Estrutura do projeto

```
Farma-Maceio/
├── public/
│   ├── favicon.png
│   ├── logo.png                  # logo original (usado no JSON-LD)
│   ├── logo-sem-nome.webp        # logo só com o símbolo (cabeçalho)
│   ├── og-image.png              # imagem de pré-visualização (1200×630)
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Location.astro
│   │   └── Footer.astro
│   ├── config/
│   │   └── site.ts               # dados centralizados da farmácia
│   ├── layouts/
│   │   └── Layout.astro          # HTML base, SEO e JSON-LD
│   ├── pages/
│   │   ├── index.astro
│   │   └── politica-de-privacidade.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Personalização

Quase todos os dados do site ficam em **`src/config/site.ts`**, para não repetir informações em vários componentes. Para atualizar, edite esse arquivo:

- nome, domínio (`url`) e telefones (WhatsApp e fixo);
- endereço e detalhes do endereço (rua, bairro, cidade, estado e CEP);
- horários de funcionamento;
- lista de serviços;
- dados legais do rodapé (razão social, CNPJ, farmacêutico responsável, CRF e AFE).

Os links do WhatsApp (`wa.me`) e do Google Maps são gerados a partir desses dados, com o texto já codificado para URL.

### Cores da marca

As cores vêm do logotipo e estão definidas no Tailwind:

| Cor | Hex | Uso |
| --- | --- | --- |
| Vermelho da marca | `#ce0e10` | Botões principais |
| Azul da marca | `#0a4a9a` | Botão secundário, títulos e ícones |
| Escuro | `#0f172a` | Textos e rodapé |
| Claro | `#f8fafc` | Fundos |

## Deploy

O site é estático, então pode ser publicado em Cloudflare Pages, Netlify ou outro serviço de hospedagem estática.

1. Confirme que `site` está definido em `astro.config.mjs` (necessário para o sitemap e as URLs canônicas).
2. Use o comando de build `npm run build` e o diretório de saída `dist`.
3. Configure o domínio e o HTTPS.
4. Rode o Lighthouse em mobile e desktop.

## Checklist antes de publicar

- [ ] Substituir o número do telefone fixo (placeholder em `site.ts`)
- [ ] Preencher CNPJ, razão social, farmacêutico responsável, CRF e AFE
- [ ] Preencher a data e o prazo de retenção na política de privacidade
- [ ] Revisar os textos de serviços com o farmacêutico responsável
- [ ] Conferir o link "Como Chegar" no celular
- [ ] Confirmar que `public/og-image.png` e `public/favicon.png` existem
- [ ] Conferir o domínio em `astro.config.mjs` e `public/robots.txt`
- [ ] Remover qualquer `noindex` temporário usado em testes
- [ ] Rodar o Lighthouse e corrigir pendências

## Conformidade (Brasil)

Pontos para validar com o farmacêutico responsável e/ou assessoria jurídica (isto não é aconselhamento jurídico):

- **Receitas de medicamentos controlados:** a foto da receita enviada por WhatsApp normalmente não substitui a retenção da receita original (Portaria SVS/MS 344/98).
- **Propaganda de medicamentos:** medicamentos que exigem prescrição não podem ser anunciados ao público (RDC 96/2008). Evitar nomes, preços ou promoções de medicamentos tarjados.
- **Serviços farmacêuticos:** aferição de pressão e glicemia seguem a RDC 44/2009. Manter o texto condizente com o que a loja realmente oferece.
- **LGPD:** receitas são dados de saúde (dados sensíveis). A política de privacidade deve refletir a prática real da loja.

## Documentação

A especificação original do projeto está no PDF *Documentação – Farma Maceió (Site Institucional)*, na raiz do repositório.

## Licença

Projeto de uso privado da Farma Maceió. Todos os direitos reservados.