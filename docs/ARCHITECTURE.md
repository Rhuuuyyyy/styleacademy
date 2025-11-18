# Arquitetura do Projeto

Este documento descreve a arquitetura técnica do StyleAcademy.

## Visão Geral

O StyleAcademy é uma aplicação web estática construída com tecnologias frontend modernas. A arquitetura é baseada em módulos JavaScript que contêm todo o conteúdo educacional.

```
┌─────────────────────────────────────────────────────┐
│                    index.html                       │
│              (Estrutura da página)                  │
└─────────────────────┬───────────────────────────────┘
                      │
          ┌───────────┼───────────┐
          │           │           │
          ▼           ▼           ▼
    ┌──────────┐ ┌──────────┐ ┌──────────┐
    │styles.css│ │script.js │ │ CDN Libs │
    │(Estilos) │ │(Lógica)  │ │(Tailwind)│
    └──────────┘ └────┬─────┘ └──────────┘
                      │
        ┌─────────────┼─────────────┐
        │      │      │      │      │
        ▼      ▼      ▼      ▼      ▼
   ┌────────┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐
   │script0 │ │s1│ │s2│ │s3│ │s4│ │s5│
   │(Mod 0) │ │  │ │  │ │  │ │  │ │  │
   └────────┘ └──┘ └──┘ └──┘ └──┘ └──┘
```

---

## Estrutura de Dados

### Módulos

Cada módulo é um objeto JavaScript com a seguinte estrutura:

```javascript
const moduleX = {
    title: 'Título do Módulo',
    topics: [
        {
            title: 'Título do Tópico',
            content: '<h4>Conteúdo HTML...</h4>'
        },
        // ... mais tópicos
    ]
};
```

### Registro de Módulos

Todos os módulos são registrados em um array central no `script.js`:

```javascript
const modules = [module0, module1, module2, module3, module4, module5];
```

---

## Componentes Principais

### 1. Sistema de Acordeão

**Arquivo:** `script.js` (linhas 32-64)

Renderiza os módulos de forma dinâmica com expansão/colapso:

```javascript
function renderModules() {
    const container = document.getElementById('modules-container');
    modules.forEach((module, index) => {
        // Cria estrutura HTML do acordeão
        // Adiciona event listeners para expansão
    });
}
```

### 2. Navegação de Aulas

**Arquivo:** `script.js` (linhas 65-120)

Sistema slide-in para exibição de conteúdo completo:

- Transição suave entre visualizações
- Botão de retorno
- Renderização de conteúdo HTML

### 3. Ferramenta de Combinação de Cores

**Arquivo:** `script.js` (linhas 150-350)

Componentes:

- **Color Picker (Iro.js)** - Seleção visual de cores
- **Algoritmo de Combinação** - Sugere cores complementares
- **Paleta Nomeada** - 15 cores pré-definidas

#### Algoritmos de Cor

```javascript
// Conversão HEX para RGB
function hexToRgb(hex) { ... }

// Conversão RGB para HSL
function rgbToHsl(r, g, b) { ... }

// Cálculo de distância entre cores
function colorDistance(c1, c2) { ... }

// Encontrar cor mais próxima na paleta
function closestNamedColor(hex) { ... }
```

#### Lógica de Combinação

O algoritmo considera:
- Tipo da peça primária
- Tipo da peça secundária
- Harmonia de cores (complementar, análoga, monocromática)
- Regras específicas (jeans, neutros)

---

## Fluxo de Dados

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  Carregamento │ -> │  Renderização │ -> │   Interação   │
│   de Módulos  │    │   Dinâmica    │    │   do Usuário  │
└──────────────┘    └──────────────┘    └──────────────┘
       │                    │                    │
       ▼                    ▼                    ▼
  Importação JS       DOM Manipulation      Event Handlers
  (script0-5.js)      (createElement)       (click, change)
```

---

## Estilos

### CSS Variables

Definidas em `:root` no `styles.css`:

```css
:root {
    --font-primary: 'Poppins', sans-serif;
    --font-secondary: 'Cormorant Garamond', serif;
    --brand-bg: #f9f6f3;
    --brand-text: #4a4a4a;
    --accent-dark: #5c4b3a;
    --accent-light: #8a6e56;
    --brand-gradient: linear-gradient(45deg, var(--accent-light), var(--accent-dark));
}
```

### Tailwind CSS

Utilizado para:
- Layout responsivo (grid, flexbox)
- Espaçamento (padding, margin)
- Tipografia (prose)
- Utilitários (hover, focus)

### CSS Customizado

Utilizado para:
- Animações customizadas
- Transições específicas
- Efeitos visuais (glassmorphism)

---

## Dependências Externas

### CDNs

| Biblioteca | Versão | Uso |
|------------|--------|-----|
| Tailwind CSS | Latest | Framework CSS |
| Iro.js | 5.x | Color picker |
| Google Fonts | - | Tipografia |

### Carregamento

```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=typography"></script>

<!-- Iro.js -->
<script src="https://cdn.jsdelivr.net/npm/@jaames/iro@5"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
```

---

## Performance

### Estratégias Atuais

- **Módulos separados** - Código organizado em arquivos
- **CDNs** - Cache do browser para bibliotecas
- **CSS mínimo** - Estilos customizados enxutos

### Melhorias Sugeridas

1. **Lazy Loading de Imagens**
   ```html
   <img loading="lazy" src="..." alt="...">
   ```

2. **Otimização de Imagens**
   - Converter para WebP
   - Comprimir sem perda de qualidade
   - Servir tamanhos responsivos

3. **Code Splitting**
   - Carregar módulos sob demanda
   - Usar dynamic imports

4. **Minificação**
   - Minificar JS e CSS para produção

---

## Segurança

### Práticas Implementadas

- **Sem dados sensíveis** - Aplicação 100% frontend
- **Sem APIs externas** - Nenhuma chamada de rede
- **CSP compatível** - Apenas CDNs confiáveis

### Recomendações

- Adicionar `integrity` aos scripts CDN
- Implementar Content Security Policy
- Usar HTTPS (já implementado via GitHub Pages)

---

## Testes

### Testes Manuais

Checklist de teste:

- [ ] Navegação entre módulos
- [ ] Expansão/colapso de acordeão
- [ ] Abertura de aulas
- [ ] Ferramenta de cores
- [ ] Responsividade mobile
- [ ] Links externos
- [ ] Glossário

### Testes Automatizados (Sugerido)

```javascript
// Exemplo com Jest
describe('Color Tool', () => {
    test('hexToRgb converts correctly', () => {
        expect(hexToRgb('#ff0000')).toEqual({r: 255, g: 0, b: 0});
    });

    test('closestNamedColor finds match', () => {
        expect(closestNamedColor('#ff0000')).toBe('Vermelho');
    });
});
```

---

## Deployment

### GitHub Pages

1. Push para branch `main`
2. GitHub Actions (automático)
3. Disponível em `username.github.io/styleacademy`
4. Redirecionamento via CNAME para domínio customizado

### Configuração de Domínio

```
# CNAME
www.isastyle.site
```

### DNS

Configurar no provedor de domínio:
- **CNAME**: `www` -> `username.github.io`
- **A Record**: Para apex domain (opcional)

---

## Extensibilidade

### Adicionar Novo Módulo

1. Criar arquivo `script6.js`:
   ```javascript
   const module6 = {
       title: 'Novo Módulo',
       topics: [...]
   };
   ```

2. Importar no `index.html`:
   ```html
   <script src="script6.js"></script>
   ```

3. Adicionar ao array no `script.js`:
   ```javascript
   const modules = [..., module6];
   ```

### Adicionar Nova Ferramenta

1. Criar seção HTML em `index.html`
2. Adicionar estilos em `styles.css`
3. Implementar lógica em `script.js`

---

## Convenções de Código

### JavaScript

- **camelCase** para variáveis e funções
- **PascalCase** para classes
- **UPPER_CASE** para constantes
- Funções pequenas e focadas

### CSS

- **kebab-case** para classes
- Prefixo `--` para variáveis CSS
- Usar variáveis para cores e fontes

### HTML

- Semântico (header, main, section, article)
- Alt text em todas as imagens
- IDs únicos e descritivos

---

## Contato

Para dúvidas sobre a arquitetura, abra uma issue no repositório.
