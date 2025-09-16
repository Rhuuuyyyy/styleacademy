document.addEventListener('DOMContentLoaded', function () {
    const courseContent = [module0, module1, module2, module3, module4, module5].filter(m => m);
    
    const curriculumContainer = document.getElementById('curriculum-container');
    const lessonPage = document.getElementById('lesson-page');
    const lessonContentArea = document.getElementById('lesson-content-area');
    const backToModulesBtn = document.getElementById('back-to-modules-btn');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // --- Core Functions for Course Display ---

    const openLessonPage = (title, content) => {
        lessonContentArea.innerHTML = `
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-bold mb-8" style="font-family: 'Cormorant Garamond', serif;">${title}</h2>
                <div class="prose max-w-none text-gray-700 leading-relaxed">${content}</div>
            </div>
        `;
        lessonContentArea.scrollTop = 0;
        document.body.classList.add('lesson-active');
        lessonPage.classList.remove('translate-x-full');
    };

    const closeLessonPage = () => {
        lessonPage.classList.add('translate-x-full');
        document.body.classList.remove('lesson-active');
    };

    // --- Dynamic Content Generation ---

    courseContent.forEach((moduleData, moduleIndex) => {
        const moduleEl = document.createElement('div');
        moduleEl.className = 'module bg-white rounded-lg shadow-md overflow-hidden fade-in';
        
        let topicsHTML = '';
        if (moduleData.topics) {
            moduleData.topics.forEach((topicData, topicIndex) => {
                topicsHTML += `
                    <div class="topic-item border-t border-gray-200 first:border-t-0 p-5 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors" data-module-index="${moduleIndex}" data-topic-index="${topicIndex}">
                        <h4 class="font-medium text-gray-800 pr-4">${topicData.title}</h4>
                        <span class="icon text-gray-500 font-normal text-2xl">→</span>
                    </div>
                `;
            });
        } else if (moduleData.simpleTopics) {
             moduleData.simpleTopics.forEach((simpleTopic) => {
                topicsHTML += `<div class="p-5 border-t border-gray-200 first:border-t-0 text-gray-600">${simpleTopic}</div>`;
            });
        }

        moduleEl.innerHTML = `
            <div class="module-header cursor-pointer p-6 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors">
                <h3 class="text-xl font-semibold text-gray-800">${moduleData.title}</h3>
                <div class="icon text-2xl text-gray-600 font-thin">+</div>
            </div>
            <div class="module-content">
                ${topicsHTML}
            </div>
        `;
        if (curriculumContainer) {
            curriculumContainer.appendChild(moduleEl);
        }
    });

    // --- Event Listeners for Course & Mobile Menu ---

    if (backToModulesBtn) backToModulesBtn.addEventListener('click', closeLessonPage);
    if (mobileMenuButton) mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    if (mobileMenu) mobileMenu.addEventListener('click', () => mobileMenu.classList.add('hidden'));

    if(curriculumContainer) {
        curriculumContainer.addEventListener('click', (e) => {
            const topicItem = e.target.closest('.topic-item');
            if (topicItem && topicItem.dataset.moduleIndex !== undefined) {
                const moduleIndex = topicItem.dataset.moduleIndex;
                const topicIndex = topicItem.dataset.topicIndex;
                const topicData = courseContent[moduleIndex].topics[topicIndex];
                openLessonPage(topicData.title, topicData.content);
            }
        });
    }

    const moduleHeaders = document.querySelectorAll('.module-header');
    moduleHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const module = header.parentElement;
            
            document.querySelectorAll('.module').forEach(m => {
                if (m !== module && m.classList.contains('active')) {
                    m.classList.remove('active');
                }
            });

            module.classList.toggle('active');
        });
    });

    // --- Scroll Fade-in Animation ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // --- Color Combiner Functionality ---
    
    let primaryPiece = null;
    let primaryColor = '#FF0000'; // Default to red
    let secondaryPiece = null;

    const namedColorPalette = [
        { name: 'Branco', hex: '#FFFFFF', type: 'neutral' }, { name: 'Preto', hex: '#000000', type: 'neutral' }, { name: 'Cinza', hex: '#808080', type: 'neutral' },
        { name: 'Bege', hex: '#F5F5DC', type: 'neutral' }, { name: 'Marrom', hex: '#A52A2A', type: 'earth' }, { name: 'Vermelho', hex: '#FF0000', type: 'warm' },
        { name: 'Laranja', hex: '#FFA500', type: 'warm' }, { name: 'Amarelo', hex: '#FFFF00', type: 'warm' }, { name: 'Verde-oliva', hex: '#808000', type: 'earth' },
        { name: 'Verde', hex: '#008000', type: 'cool' }, { name: 'Azul-petróleo', hex: '#008080', type: 'cool' }, { name: 'Azul', hex: '#0000FF', type: 'cool' },
        { name: 'Azul-marinho', hex: '#000080', type: 'neutral' }, { name: 'Roxo', hex: '#800080', type: 'cool' }, { name: 'Rosa', hex: '#FFC0CB', type: 'warm' }
    ];

    // DOM Elements
    const primaryPieceSelector = document.getElementById('primary-piece-selector');
    const secondaryPieceSelector = document.getElementById('secondary-piece-selector');
    const resultsContainer = document.getElementById('color-results-container');
    const resultsTitle = document.getElementById('results-title');
    const resultsWrapper = resultsContainer.querySelector('.space-y-5');
    const selectedColorDisplay = document.getElementById('selected-color-display');
    const selectedColorName = document.getElementById('selected-color-name');

    // --- Color Helper Functions ---
    function hexToRgb(hex) {
        let r = 0, g = 0, b = 0;
        if (hex.length == 4) { r = "0x" + hex[1] + hex[1]; g = "0x" + hex[2] + hex[2]; b = "0x" + hex[3] + hex[3]; } 
        else if (hex.length == 7) { r = "0x" + hex[1] + hex[2]; g = "0x" + hex[3] + hex[4]; b = "0x" + hex[5] + hex[6]; }
        return { r: +r, g: +g, b: +b };
    }
    function rgbToHsl({r, g, b}) {
        r /= 255; g /= 255; b /= 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max == min) { h = s = 0; } 
        else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return { h: h * 360, s: s * 100, l: l * 100 };
    }
    function hslToRgb({h, s, l}) {
        s /= 100; l /= 100;
        let c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c/2, r = 0, g = 0, b = 0;
        if (0 <= h && h < 60) { [r,g,b] = [c,x,0]; } else if (60 <= h && h < 120) { [r,g,b] = [x,c,0]; } else if (120 <= h && h < 180) { [r,g,b] = [0,c,x]; } else if (180 <= h && h < 240) { [r,g,b] = [0,x,c]; } else if (240 <= h && h < 300) { [r,g,b] = [x,0,c]; } else if (300 <= h && h < 360) { [r,g,b] = [c,0,x]; }
        return { r: Math.round((r + m) * 255), g: Math.round((g + m) * 255), b: Math.round((b + m) * 255) };
    }
    function rgbToHex({r, g, b}) { return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase(); }

    function findClosestNamedColor(hex, palette) {
        const targetRgb = hexToRgb(hex);
        let minDistance = Infinity;
        let closest = null;
        palette.forEach(color => {
            const currentRgb = hexToRgb(color.hex);
            const distance = Math.pow(targetRgb.r - currentRgb.r, 2) +
                             Math.pow(targetRgb.g - currentRgb.g, 2) +
                             Math.pow(targetRgb.b - currentRgb.b, 2);
            if (distance < minDistance) {
                minDistance = distance;
                closest = color;
            }
        });
        return closest;
    }
    
    // --- Intelligent Combination Logic ---
    function getSmartCombinations(primaryPiece, primaryColorObj, secondaryPiece) {
        // ... (This function remains the same as the previous version)
         let suggestions = [];
        const { name: colorName, type: colorType, hex: colorHex } = primaryColorObj;
        
        const allNeutrals = namedColorPalette.filter(c => c.type === 'neutral');
        const denimColor = namedColorPalette.find(c => c.name === 'Azul-marinho');
        const hsl = rgbToHsl(hexToRgb(colorHex));
        const findColor = (name) => namedColorPalette.find(c => c.name.toLowerCase() === name.toLowerCase());

        const addSuggestion = (suggestion) => {
            if (!suggestions.some(s => s.title === suggestion.title)) {
                suggestions.push(suggestion);
            }
        };

        addSuggestion({
            title: 'Bases Neutras (Apostas Seguras)',
            description: `Peças em tons neutros são a base de um guarda-roupa versátil e harmonizam perfeitamente com ${colorName.toLowerCase()}.`,
            colors: allNeutrals.filter(c => c.hex !== colorHex)
        });

         addSuggestion({
            title: 'Cor Complementar (Look Ousado)',
            description: 'A cor oposta no círculo cromático. Cria o maior contraste, ideal para um visual criativo e cheio de energia.',
            colors: [ { name: '', hex: rgbToHex(hslToRgb({ h: (hsl.h + 180) % 360, s: hsl.s, l: hsl.l })) } ]
        });
         addSuggestion({
            title: 'Cores Análogas (Look Elegante)',
            description: 'Cores vizinhas no círculo cromático. Resultam num visual sofisticado, com uma transição de cor suave e harmoniosa.',
            colors: [
                { name: '', hex: rgbToHex(hslToRgb({ h: (hsl.h + 30) % 360, s: hsl.s, l: hsl.l })) },
                { name: '', hex: rgbToHex(hslToRgb({ h: (hsl.h - 30 + 360) % 360, s: hsl.s, l: hsl.l })) }
            ]
        });

        if (colorType !== 'neutral') {
            addSuggestion({
                title: 'Look Monocromático (Chique e Alongador)',
                description: `Usar ${secondaryPiece.toLowerCase()} da mesma cor ${colorName.toLowerCase()} cria um visual poderoso, elegante e que alonga a silhueta.`,
                colors: [primaryColorObj]
            });
        }

        if (['Blusa', 'Camisa'].includes(primaryPiece) && ['Calça', 'Saia'].includes(secondaryPiece)) {
            if (colorType !== 'neutral' && denimColor) {
                 addSuggestion({
                    title: 'Combinação com Jeans',
                    description: `A combinação de uma peça de cima colorida com jeans é um clássico moderno e infalível.`,
                    colors: [denimColor]
                });
            }
        }
        
        if (['Calça', 'Saia'].includes(primaryPiece) && colorName === 'Azul-marinho') {
             addSuggestion({
                title: 'Tops para Jeans',
                description: 'Com calça jeans, blusas brancas ou pretas são clássicas. Cores quentes como vermelho ou tons terrosos criam um look interessante.',
                colors: [findColor('Branco'), findColor('Preto'), findColor('Vermelho'), findColor('Marrom')].filter(c => c)
            });
        }

        if (primaryPiece === 'Sapato') {
            if (colorType !== 'neutral') {
                const neutralSuggestion = suggestions.find(s => s.title.includes('Bases Neutras'));
                if(neutralSuggestion) {
                    neutralSuggestion.description = `Deixe seu sapato ${colorName.toLowerCase()} ser o protagonista, combinando-o com um look de cores neutras.`;
                }
            } else {
                 const neutralSuggestion = suggestions.find(s => s.title.includes('Bases Neutras'));
                 if(neutralSuggestion){
                    neutralSuggestion.title = 'Look Monocromático ou Neutro sobre Neutro';
                    neutralSuggestion.description = `Sapatos neutros permitem criar looks elegantes com outras peças neutras ou um visual monocromático poderoso.`
                 }
            }
        }
        
        return suggestions;
    }


    // --- UI Update Functions ---
    function createResultSwatchHTML(color) {
        const colorInfo = namedColorPalette.find(p => p.hex.toLowerCase() === color.hex.toLowerCase());
        const colorName = color.name || (colorInfo ? colorInfo.name : '');
        return `
            <div class="result-swatch-container">
                <div class="result-swatch" style="background-color: ${color.hex};" title="${colorName}"></div>
                <span class="text-xs font-medium text-gray-600">${colorName}</span>
            </div>`;
    }

    function displayResults() {
        if (!primaryPiece || !primaryColor || !secondaryPiece) {
            if(resultsContainer) resultsContainer.classList.add('hidden');
            return;
        }

        resultsTitle.innerHTML = `Cores Sugeridas para sua <span class="gradient-text">${secondaryPiece}</span>`;
        
        const primaryColorObj = findClosestNamedColor(primaryColor, namedColorPalette);
        const harmonySuggestions = getSmartCombinations(primaryPiece, primaryColorObj, secondaryPiece);

        let resultsHTML = '';
        harmonySuggestions.forEach(harmony => {
            if(harmony.colors && harmony.colors.length > 0) {
                resultsHTML += `
                    <div class="result-category">
                        <h4 class="font-bold text-lg mb-2 text-gray-600">${harmony.title}</h4>
                        <p class="text-sm text-gray-500 mb-3">${harmony.description}</p>
                        <div class="flex flex-wrap gap-4">
                            ${harmony.colors.map(c => c ? createResultSwatchHTML(c) : '').join('')}
                        </div>
                    </div>`;
            }
        });
        
        resultsWrapper.innerHTML = resultsHTML;
        resultsContainer.classList.remove('hidden');
    }
    
    // --- Event Listeners and Initializer ---
    if(document.getElementById('color-picker-container')){
        const colorPicker = new iro.ColorPicker('#color-picker-container', {
            width: 240,
            color: primaryColor,
            borderWidth: 2,
            borderColor: '#e5e7eb',
        });

        colorPicker.on('color:change', function(color) {
            const hex = color.hexString.toUpperCase();
            primaryColor = hex;
            const closestNamedColor = findClosestNamedColor(hex, namedColorPalette);
            
            selectedColorDisplay.style.backgroundColor = hex;
            selectedColorName.textContent = closestNamedColor.name;
            
            displayResults();
        });

        // Set initial state
        const initialColor = findClosestNamedColor(primaryColor, namedColorPalette);
        selectedColorDisplay.style.backgroundColor = initialColor.hex;
        selectedColorName.textContent = initialColor.name;
    }


    if (primaryPieceSelector) {
        primaryPieceSelector.addEventListener('click', (e) => {
            if (e.target.classList.contains('piece-type-btn')) {
                primaryPieceSelector.querySelectorAll('.piece-type-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                primaryPiece = e.target.dataset.piece;
                displayResults();
            }
        });
    }

    if (secondaryPieceSelector) {
        secondaryPieceSelector.addEventListener('click', (e) => {
            if (e.target.classList.contains('piece-type-btn')) {
                secondaryPieceSelector.querySelectorAll('.piece-type-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                secondaryPiece = e.target.dataset.piece;
                displayResults();
            }
        });
    }
});

