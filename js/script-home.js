document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    const switchElement = document.getElementById('darkModeSwitch');

    if (!switchElement) {
        console.warn("Elemento de alternância de modo escuro não encontrado.");
        return;
    }

    // Define o tema padrão como 'dark' se não houver configuração no localStorage
    const currentTheme = localStorage.getItem('bsTheme') || 'dark';
    htmlElement.setAttribute('data-bs-theme', currentTheme);
    switchElement.checked = currentTheme === 'dark';

    // Adiciona o evento de mudança ao switch para alternar o tema
    switchElement.addEventListener('change', function () {
        if (this.checked) {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('bsTheme', 'dark');
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('bsTheme', 'light');
        }
    });
});