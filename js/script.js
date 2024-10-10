// Variável para rastrear a seção atual
let currentSection = 0;
const sections = document.querySelectorAll('section');

function navigate(direction) {
    // Ocultar a seção atual
    sections[currentSection].classList.add('hidden');

    // Atualizar a seção atual
    currentSection += direction;

    // Limitar a seção atual ao número de seções
    if (currentSection < 0) {
        currentSection = 0;
    } else if (currentSection >= sections.length) {
        currentSection = sections.length - 1;
    }

    // Mostrar a nova seção
    sections[currentSection].classList.remove('hidden');
}

// Função para mostrar descrição detalhada
function showDescription(command) {
    let description;
    switch (command) {
        case 'init':
            description = "O comando 'git init' cria um novo repositório Git. É o primeiro passo para começar a usar o Git.";
            break;
        case 'add':
            description = "O comando 'git add' adiciona suas mudanças ao staging area, preparando-as para serem salvas.";
            break;
        case 'commit':
            description = "O comando 'git commit' salva suas mudanças no repositório, criando um ponto de restauração.";
            break;
        case 'log':
            description = "O comando 'git log' exibe o histórico de commits, permitindo ver as mudanças feitas.";
            break;
        case 'checkout':
            description = "O comando 'git checkout' permite que você altere entre diferentes branches ou versões do seu projeto.";
            break;
        case 'branch':
            description = "Os comandos 'git branch' e 'git merge' permitem criar e unir diferentes linhas de desenvolvimento.";
            break;
        default:
            description = "Comando desconhecido.";
    }
    
    alert(description); // Mostra a descrição em um alerta
}

// Inicializa a interface
document.addEventListener("DOMContentLoaded", function() {
    sections[currentSection].classList.remove('hidden'); // Mostra a seção inicial
});
