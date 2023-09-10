// Função para alternar o modo
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Verifica se o modo escuro está ativado e salva a preferência no localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode ? 'true' : 'false');
}

// Captura o botão e adiciona um evento de clique
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);

// Verifica a preferência do usuário ao carregar a página
window.addEventListener('load', () => {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode'); // Ativa o modo escuro se a preferência do usuário for modo escuro
    }
});
