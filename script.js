document.addEventListener("DOMContentLoaded", function () {
    
    // URL de checkout da Kiwify atualizada para o seu produto
    const LINK_DA_TRIAGEM = "https://pay.kiwify.com.br/KOvoXfn";

    const secaoOferta = document.getElementById("secao-oferta");
    const barraFlutuante = document.getElementById("barra-flutuante");
    const botoesTriagem = document.querySelectorAll(".iniciar-triagem");

    // Redirecionamento unificado para a Kiwify
    function redirecionarUsuario() {
        window.location.href = LINK_DA_TRIAGEM;
    }

    // Vincula o evento de clique a todos os botões de ação da página
    botoesTriagem.forEach(botao => {
        botao.addEventListener("click", redirecionarUsuario);
    });

    // Controle inteligente da barra flutuante mobile (Scroll Performance)
    window.addEventListener("scroll", function () {
        if (!secaoOferta || !barraFlutuante) return;

        const limitesOferta = secaoOferta.getBoundingClientRect();
        const alturaJanela = window.innerHeight;

        // Oculta a barra flutuante se o usuário estiver no topo ou se a seção de preço já estiver visível
        if (limitesOferta.top < alturaJanela - 50 || window.scrollY < 250) {
            barraFlutuante.style.display = "none";
        } else {
            barraFlutuante.style.display = "block";
        }
    }, { passive: true });
});