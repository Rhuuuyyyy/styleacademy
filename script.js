document.addEventListener('DOMContentLoaded', function () {
    // Array que irá conter todos os módulos carregados dos outros arquivos
    const courseContent = [
        module0,
        module1,
        module2,
        module3,
        module4,
        module5
    ];

    const curriculumContainer = document.getElementById('curriculum-container');
    const lessonPage = document.getElementById('lesson-page');
    const lessonContentArea = document.getElementById('lesson-content-area');
    const backToModulesBtn = document.getElementById('back-to-modules-btn');
    
    // Função para mostrar a página da aula
    const openLessonPage = (title, content) => {
        // Injeta o conteúdo num container estilizado para melhor leitura
        lessonContentArea.innerHTML = `
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-bold mb-8" style="font-family: 'Cormorant Garamond', serif;">${title}</h2>
                <div class="prose max-w-none text-gray-700 leading-relaxed">${content}</div>
            </div>
        `;
        lessonContentArea.scrollTop = 0; // Garante que a página abra no topo
        document.body.classList.add('lesson-active');
        lessonPage.classList.add('active');
    };

    // Função para fechar a página da aula
    const closeLessonPage = () => {
        lessonPage.classList.remove('active');
        document.body.classList.remove('lesson-active');
    };

    // Eventos
    backToModulesBtn.addEventListener('click', closeLessonPage);
    
    // Gera dinamicamente o conteúdo do curso na página
    courseContent.forEach((moduleData, moduleIndex) => {
        if (!moduleData) return; // Pula se um módulo não for carregado corretamente

        const moduleEl = document.createElement('div');
        moduleEl.className = 'module bg-white rounded-lg shadow-md overflow-hidden fade-in';
        
        let topicsHTML = '';
        if (moduleData.topics) {
            // Cria itens clicáveis para cada aula com conteúdo detalhado
            moduleData.topics.forEach((topicData, topicIndex) => {
                topicsHTML += `
                    <div class="topic-item border-t border-gray-200 first:border-t-0 p-5 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors" data-module-index="${moduleIndex}" data-topic-index="${topicIndex}">
                        <h4 class="font-medium text-gray-800 pr-4">${topicData.title}</h4>
                        <span class="icon text-gray-500 font-normal text-2xl">→</span>
                    </div>
                `;
            });
        } else if (moduleData.simpleTopics) {
             // Apenas lista os tópicos para módulos sem conteúdo detalhado ainda
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
        curriculumContainer.appendChild(moduleEl);
    });

    // Adiciona um único 'event listener' para todos os cliques nos itens das aulas
    curriculumContainer.addEventListener('click', (e) => {
        const topicItem = e.target.closest('.topic-item');
        // Verifica se o item clicado é uma aula e tem os dados necessários
        if (topicItem && topicItem.dataset.moduleIndex !== undefined) {
            const moduleIndex = parseInt(topicItem.dataset.moduleIndex, 10);
            const topicIndex = parseInt(topicItem.dataset.topicIndex, 10);
            const topicData = courseContent[moduleIndex].topics[topicIndex];
            openLessonPage(topicData.title, topicData.content);
        }
    });

    // Lógica do Accordion para os Módulos
    const moduleHeaders = document.querySelectorAll('.module-header');
    moduleHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const module = header.parentElement;
            
            // Fecha outros módulos que possam estar abertos
            document.querySelectorAll('.module').forEach(m => {
                if (m !== module && m.classList.contains('active')) {
                    m.classList.remove('active');
                }
            });

            // Abre ou fecha o módulo clicado
            module.classList.toggle('active');
        });
    });

    // Lógica para animação de scroll (fade-in)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    elementsToFadeIn.forEach(el => observer.observe(el));
});

