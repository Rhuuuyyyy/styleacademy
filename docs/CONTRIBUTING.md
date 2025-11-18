# Guia de Contribuição

Obrigado pelo interesse em contribuir com o StyleAcademy! Este documento fornece diretrizes para contribuir com o projeto.

## Código de Conduta

Ao contribuir, você concorda em manter um ambiente respeitoso e inclusivo. Seja gentil e construtivo em todas as interações.

---

## Como Contribuir

### Reportando Bugs

1. **Verifique issues existentes** para evitar duplicatas
2. **Crie uma nova issue** com:
   - Descrição clara do problema
   - Passos para reproduzir
   - Comportamento esperado vs. atual
   - Screenshots (se aplicável)
   - Navegador e sistema operacional

### Sugerindo Melhorias

1. **Abra uma issue** com a tag `enhancement`
2. Descreva:
   - O problema que a melhoria resolve
   - Sua solução proposta
   - Alternativas consideradas

### Contribuindo com Código

#### Setup do Ambiente

1. **Fork** o repositório
2. **Clone** seu fork:
   ```bash
   git clone https://github.com/seu-usuario/styleacademy.git
   cd styleacademy
   ```
3. **Crie uma branch**:
   ```bash
   git checkout -b feature/minha-feature
   ```

#### Desenvolvimento

1. Faça suas alterações
2. Teste localmente:
   ```bash
   python3 -m http.server 8000
   ```
3. Verifique em diferentes navegadores
4. Teste responsividade (mobile, tablet, desktop)

#### Commit

Use mensagens de commit claras e descritivas:

```bash
# Formato
<tipo>: <descrição>

# Exemplos
feat: adiciona quiz interativo ao módulo 3
fix: corrige bug no seletor de cores mobile
docs: atualiza README com instruções de instalação
style: melhora espaçamento no glossário
refactor: reorganiza funções do color picker
```

**Tipos de commit:**
- `feat` - Nova funcionalidade
- `fix` - Correção de bug
- `docs` - Documentação
- `style` - Formatação (sem mudança de código)
- `refactor` - Refatoração
- `test` - Adição de testes
- `chore` - Manutenção

#### Pull Request

1. **Push** para seu fork:
   ```bash
   git push origin feature/minha-feature
   ```

2. **Abra um Pull Request** com:
   - Título descritivo
   - Descrição das mudanças
   - Issue relacionada (se houver)
   - Screenshots (se aplicável)

3. **Aguarde review** e faça ajustes se necessário

---

## Áreas para Contribuição

### Conteúdo

- [ ] Correções de texto e ortografia
- [ ] Novos tópicos nos módulos existentes
- [ ] Novos módulos completos
- [ ] Tradução para outros idiomas
- [ ] Referências bibliográficas adicionais

### Funcionalidades

- [ ] Quiz interativo por módulo
- [ ] Sistema de progresso do usuário
- [ ] Modo escuro
- [ ] PWA (Progressive Web App)
- [ ] Compartilhamento social
- [ ] Certificado de conclusão

### Performance

- [ ] Otimização de imagens (WebP)
- [ ] Lazy loading de imagens
- [ ] Code splitting dos módulos
- [ ] Minificação de assets

### Acessibilidade

- [ ] Melhorar navegação por teclado
- [ ] Adicionar ARIA labels
- [ ] Aumentar contraste de cores
- [ ] Suporte a leitores de tela

### Documentação

- [ ] Tutoriais de uso
- [ ] Documentação de API interna
- [ ] Guias de estilo

---

## Padrões de Código

### JavaScript

```javascript
// Use camelCase para variáveis e funções
const primaryColor = '#5c4b3a';

function calculateColorDistance(color1, color2) {
    // Funções pequenas e focadas
    // Comentários quando necessário
}

// Use const para valores que não mudam
const MAX_MODULES = 6;

// Use let apenas quando necessário
let currentModule = 0;
```

### CSS

```css
/* Use variáveis CSS para cores e fontes */
:root {
    --primary-color: #5c4b3a;
}

/* Classes com kebab-case */
.module-container {
    /* Propriedades agrupadas logicamente */
    display: flex;
    flex-direction: column;

    /* Espaçamento */
    padding: 1rem;
    margin-bottom: 1rem;

    /* Visual */
    background: var(--primary-color);
    border-radius: 0.5rem;
}
```

### HTML

```html
<!-- Use elementos semânticos -->
<article class="module">
    <header>
        <h2>Título do Módulo</h2>
    </header>
    <main>
        <!-- Conteúdo -->
    </main>
</article>

<!-- Sempre inclua alt em imagens -->
<img src="image.png" alt="Descrição da imagem">
```

---

## Estrutura de Arquivos

Ao adicionar novos arquivos, siga a estrutura existente:

```
styleacademy/
├── index.html          # Único arquivo HTML
├── styles.css          # Estilos customizados
├── script.js           # Lógica principal
├── scriptX.js          # Módulos de conteúdo
├── images/
│   └── moduloX/        # Imagens por módulo
└── docs/               # Documentação
```

---

## Adicionando Conteúdo

### Novo Tópico em Módulo Existente

1. Abra o arquivo `scriptX.js` correspondente
2. Adicione um novo objeto ao array `topics`:

```javascript
{
    title: 'Novo Tópico',
    content: `
        <h4 class="text-xl font-semibold mb-3">Título</h4>
        <p class="mb-4">
            Conteúdo do tópico...
        </p>
        <img
            src="images/moduloX/nova-imagem.png"
            alt="Descrição"
            class="rounded-lg my-4"
        >
    `
}
```

### Novo Módulo

1. Crie `script6.js` com a estrutura padrão
2. Adicione imagens em `images/modulo6/`
3. Importe no `index.html`
4. Registre no array `modules` em `script.js`

### Novas Imagens

- **Formato**: PNG ou JPG (WebP preferido)
- **Tamanho**: Máximo 500KB por imagem
- **Dimensões**: Máximo 1200px de largura
- **Nomeação**: Numérica sequencial (1.png, 2.png, ...)

---

## Testes

### Checklist de Teste

Antes de submeter um PR, verifique:

- [ ] Funciona no Chrome
- [ ] Funciona no Firefox
- [ ] Funciona no Safari
- [ ] Funciona no Edge
- [ ] Responsivo em mobile (320px+)
- [ ] Responsivo em tablet (768px+)
- [ ] Responsivo em desktop (1024px+)
- [ ] Navegação por teclado funciona
- [ ] Sem erros no console
- [ ] Imagens carregam corretamente
- [ ] Links externos abrem em nova aba

---

## Dúvidas

Se tiver dúvidas sobre como contribuir:

1. Verifique a documentação existente
2. Procure em issues fechadas
3. Abra uma issue com a tag `question`

---

## Reconhecimento

Todos os contribuidores serão reconhecidos no README do projeto.

Agradecemos sua contribuição! 🎉
