<p align="center">
  <img src="images/fundo.png" alt="StyleAcademy Banner" width="100%">
</p>

<h1 align="center">StyleAcademy</h1>

<p align="center">
  <strong>Plataforma educacional interativa de moda e estilo</strong>
</p>

<p align="center">
  <a href="https://www.isastyle.site">
    <img src="https://img.shields.io/badge/🌐_Demo-isastyle.site-5c4b3a?style=for-the-badge" alt="Demo">
  </a>
  <img src="https://img.shields.io/badge/Versão-1.0.0-8a6e56?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Licença-MIT-green?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/Status-Ativo-success?style=for-the-badge" alt="Status">
</p>

<p align="center">
  <a href="#-sobre">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-estrutura">Estrutura</a> •
  <a href="#-instalação">Instalação</a> •
  <a href="#-uso">Uso</a> •
  <a href="#-contribuição">Contribuição</a>
</p>

---

## 📖 Sobre

**StyleAcademy** é uma plataforma educacional completa e interativa dedicada ao ensino de moda, estilo e design. O projeto foi desenvolvido como um curso abrangente que aborda desde os fundamentos teóricos da moda até aplicações práticas de styling.

A plataforma oferece conteúdo acadêmico de qualidade, com referências a teóricos renomados como Roland Barthes, Georg Simmel, Erving Goffman e Pierre Bourdieu, combinado com ferramentas interativas para aplicação prática dos conceitos aprendidos.

### Destaques

- 📚 **6 módulos completos** de conteúdo educacional
- 🎨 **Ferramenta de combinação de cores** inteligente
- 📱 **Design responsivo** para todas as telas
- 🚀 **Sem dependências de servidor** - 100% client-side
- 🌐 **Totalmente em português** (pt-BR)

---

## ✨ Funcionalidades

### Módulos Educacionais

| Módulo | Título | Conteúdo |
|--------|--------|----------|
| 0 | **Introdução à Moda** | Conceito de moda, função pragmática vs. simbólica, zeitgeist |
| 1 | **História da Moda** | Moda antiga (Egito, Grécia, Roma), Idade Média, Renascimento |
| 2 | **Moda, Sociedade e Cultura** | Fenômeno social, identidade, semiótica da moda |
| 3 | **Estética e Teoria da Moda** | Fundamentos do design, cor, forma, linha, textura |
| 4 | **Materiais e Têxteis** | Fibras naturais, artificiais e sintéticas |
| 5 | **Princípios de Styling** | Pesquisa de tendências, macrotrends, microtrends |

### Ferramenta de Combinação de Cores

Uma ferramenta interativa que sugere combinações de cores inteligentes baseadas em:

- **Bases neutras** - Combinações seguras e versáteis
- **Cores complementares** - Looks ousados e impactantes
- **Cores análogas** - Looks elegantes e harmônicos
- **Monocromático** - Efeito de alongamento visual
- **Combinações com jeans** - Versatilidade do denim

### Recursos Adicionais

- **Blogs e Portais**: Vogue Brasil, Elle Brasil, FFW, Steal The Look
- **Documentários**: The True Cost, Dior and I, McQueen
- **Museus Virtuais**: Google Arts & Culture, The Met, V&A Museum
- **Glossário**: 20+ termos essenciais da moda

---

## 🛠 Tecnologias

### Frontend

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos customizados com variáveis CSS
- **JavaScript (ES6+)** - Lógica da aplicação

### Bibliotecas & Frameworks

- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Iro.js](https://iro.js.org/)** - Color picker interativo
- **[Google Fonts](https://fonts.google.com/)** - Tipografia (Cormorant Garamond, Poppins)

### Hospedagem

- **GitHub Pages** - Hospedagem estática
- **Domínio customizado** - www.isastyle.site

---

## 📁 Estrutura

```
styleacademy/
├── 📄 index.html              # Página principal
├── 🎨 styles.css              # Estilos customizados
├── ⚡ script.js               # Lógica principal da aplicação
├── 📚 script0.js              # Módulo 0 - Introdução
├── 📚 script1.js              # Módulo 1 - História
├── 📚 script2.js              # Módulo 2 - Sociedade e Cultura
├── 📚 script3.js              # Módulo 3 - Estética
├── 📚 script4.js              # Módulo 4 - Materiais
├── 📚 script5.js              # Módulo 5 - Styling
├── 🌐 CNAME                   # Configuração de domínio
├── 📁 images/                 # Recursos visuais
│   ├── fundo.png              # Imagem do hero
│   ├── modulo0/               # Imagens do módulo 0 (22 arquivos)
│   ├── modulo1/               # Imagens do módulo 1 (15 arquivos)
│   ├── modulo2/               # Imagens do módulo 2 (20 arquivos)
│   ├── modulo3/               # Imagens do módulo 3 (7 arquivos)
│   └── modulo4/               # Imagens do módulo 4 (12 arquivos)
└── 📁 docs/                   # Documentação
    ├── ARCHITECTURE.md        # Arquitetura do projeto
    └── CONTRIBUTING.md        # Guia de contribuição
```

---

## 🚀 Instalação

### Pré-requisitos

Nenhum! O projeto é completamente estático e não requer instalação de dependências.

### Clone o Repositório

```bash
git clone https://github.com/Rhuuuyyyy/styleacademy.git
cd styleacademy
```

### Execute Localmente

**Opção 1: Python**
```bash
python3 -m http.server 8000
# Acesse: http://localhost:8000
```

**Opção 2: Node.js**
```bash
npx http-server
# Acesse: http://localhost:8080
```

**Opção 3: VS Code Live Server**
1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

---

## 💻 Uso

### Navegação

1. **Página Inicial** - Hero com apresentação do curso
2. **Sobre** - Informações sobre a plataforma
3. **Módulos** - Clique para expandir e acessar as aulas
4. **Ferramentas** - Use o combinador de cores
5. **Recursos** - Links para aprofundamento
6. **Glossário** - Consulta rápida de termos

### Ferramenta de Combinação de Cores

1. Selecione a **peça principal** (blusa, camisa, calça, etc.)
2. Escolha a **cor primária** no seletor de cores
3. Selecione a **peça secundária** para combinar
4. Receba **sugestões inteligentes** de combinações

---

## 🎨 Paleta de Cores

O projeto utiliza uma paleta elegante e sofisticada:

| Variável | Cor | Uso |
|----------|-----|-----|
| `--brand-bg` | `#f9f6f3` | Fundo principal |
| `--brand-text` | `#4a4a4a` | Texto principal |
| `--accent-dark` | `#5c4b3a` | Destaque escuro |
| `--accent-light` | `#8a6e56` | Destaque claro |

---

## 🤝 Contribuição

Contribuições são bem-vindas! Consulte o [Guia de Contribuição](docs/CONTRIBUTING.md) para detalhes.

### Como Contribuir

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/NovaFeature`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona NovaFeature'`)
4. **Push** para a branch (`git push origin feature/NovaFeature`)
5. Abra um **Pull Request**

### Áreas para Contribuição

- 📝 Correções de conteúdo
- 🐛 Correções de bugs
- ✨ Novas funcionalidades
- 🌐 Traduções
- 📚 Documentação
- 🎨 Melhorias de design

---

## 📋 Roadmap

- [ ] Otimização de imagens (WebP)
- [ ] Lazy loading para imagens
- [ ] Mode escuro
- [ ] Quiz interativo por módulo
- [ ] Certificado de conclusão
- [ ] PWA (Progressive Web App)
- [ ] Internacionalização (i18n)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido com 💜 por **Rhuuuyyyy**

---

## 🙏 Agradecimentos

- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Iro.js](https://iro.js.org/) - Color picker
- [Google Fonts](https://fonts.google.com/) - Tipografia
- Fontes acadêmicas de teoria da moda

---

<p align="center">
  <sub>Um projeto de amor dedicado ao ensino de moda e estilo ✨</sub>
</p>
