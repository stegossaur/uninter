function scrollToElement(elementSelector, instance = 0){
    // select todo os elementos que combinam com o seletor
    const elements = document.querySelectorAll(elementSelector);
    //verificando se tem elementos igausi o seletor 
    if(elements.length > instance){
        //rola a tela pra instancia especificada
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

// Função para verificar se o elemento está visível na janela de visualização
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&  // Elemento entrou na tela
        rect.bottom > 0                   // Ainda visível na tela
    );
}
// Função para adicionar a classe 'visible' quando o elemento entra na visualização
function handleScroll() {
    const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-delay');
    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Detecta scroll e rola a tela suavemente
window.addEventListener('scroll', handleScroll);
// Verifica os elementos no carregamento da página
document.addEventListener('DOMContentLoaded', handleScroll);

document.getElementById("sobre-link").addEventListener("click", function(e) {
    e.preventDefault(); // Impede a rolagem

    const descricao = document.getElementById("descricao");

    // Adiciona a classe que aumenta
    descricao.classList.add("expandida");

    // Espera 3 segundos e remove a classe para voltar ao tamanho normal
    setTimeout(() => {
        descricao.classList.remove("expandida");
    }, 2000); // tempo em milissegundos
});