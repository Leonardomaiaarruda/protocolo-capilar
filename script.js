document.addEventListener("DOMContentLoaded", function () {
    
    // Configuração do Link: Insira seu link do Tipo Quiz, Typeform ou do Checkout Direto
    const LINK_DA_TRIAGEM = "https://pay.kiwify.com.br/SEU_LINK_AQUI";

    const secaoOferta = document.getElementById("secao-oferta");
    const barraFlutuante = document.getElementById("barra-flutuante");
    const botoesTriagem = document.querySelectorAll(".iniciar-triagem");

    // Redirecionamento unificado
    function redirecionarUsuario() {
        window.location.href = LINK_DA_TRIAGEM;
    }

    // Vincula cliques aos botões
    botoesTriagem.forEach(botao => {
        botao.addEventListener("click", redirecionarUsuario);
    });

    // Controle inteligente da barra flutuante (Scroll Performance)
    window.addEventListener("scroll", function () {
        if (!secaoOferta || !barraFlutuante) return;

        const limitesOferta = secaoOferta.getBoundingClientRect();
        const alturaJanela = window.innerHeight;

        // Se o topo da seção de oferta entrar na visão do usuário, oculta o CTA flutuante
        if (limitesOferta.top < alturaJanela - 50 || window.scrollY < 250) {
            barraFlutuante.style.display = "none";
        } else {
            barraFlutuante.style.display = "block";
        }
    }, { passive: true });
});