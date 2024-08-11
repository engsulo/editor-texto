// Função para aplicar formatação ao texto

function formatText(command) {
    document.execCommand(command, false, null);
}

// Função para salvar o conteúdo do editor no localStorage

function saveText() {
    const content = document.getElementById('editor').innerHTML;
    localStorage.setItem('savedText', content);
    alert('Text saved!');
}

// Função para carregar o conteúdo salvo do localStorage

function loadText() {
    const savedContent = localStorage.getItem('savedText');

    if (savedContent) {
        document.getElementById('editor').innerHTML = savedContent;
    } else {
        alert('No saved text found!');
    }
}

// Carregar o conteúdo salvo automaticamente ao abrir a página

window.onload = function () {
    loadText();
};