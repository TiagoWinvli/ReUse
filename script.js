// script.js
// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }

    // Fechar menu ao clicar em um link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });

    // Animação de scroll para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    document.querySelectorAll('.produto-card, .categoria-card').forEach(el => {
        observer.observe(el);
    });

    // Trocar imagem principal ao clicar nas miniaturas (página de detalhes)
    document.querySelectorAll('.miniatura').forEach(miniatura => {
        miniatura.addEventListener('click', function() {
            // Remove classe active de todas as miniaturas
            document.querySelectorAll('.miniatura').forEach(m => {
                m.classList.remove('active');
            });
            
            // Adiciona classe active à miniatura clicada
            this.classList.add('active');
            
            // Atualiza a imagem principal
            const novaImagem = this.getAttribute('data-img');
            document.getElementById('imagem-principal').src = novaImagem;
        });
    });

    // Filtros de produtos (página de produtos)
    const categoriaSelect = document.getElementById('categoria');
    const precoSelect = document.getElementById('preco');
    const localizacaoSelect = document.getElementById('localizacao');
    
    if (categoriaSelect && precoSelect && localizacaoSelect) {
        [categoriaSelect, precoSelect, localizacaoSelect].forEach(select => {
            select.addEventListener('change', filtrarProdutos);
        });
    }

    // Adicionar ano atual no footer
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        footerYear.innerHTML = `&copy; ${new Date().getFullYear()} ReUse Já - Todos os direitos reservados`;
    }
});

// Função para filtrar produtos (simulação)
function filtrarProdutos() {
    // Em uma aplicação real, isso faria uma requisição ao servidor
    // Aqui é apenas uma simulação
    console.log('Filtrando produtos...');
    
    const categoria = document.getElementById('categoria').value;
    const preco = document.getElementById('preco').value;
    const localizacao = document.getElementById('localizacao').value;
    
    // Simulação de loading
    const produtosGrid = document.querySelector('.produtos-grid');
    if (produtosGrid) {
        produtosGrid.style.opacity = '0.5';
        
        setTimeout(() => {
            produtosGrid.style.opacity = '1';
            alert(`Filtros aplicados:\nCategoria: ${categoria || 'Todas'}\nPreço: ${preco ? 'Até R$ ' + preco : 'Qualquer'}\nLocalização: ${localizacao || 'Todas'}`);
        }, 500);
    }
}

// Adicionar produto aos favoritos (funcionalidade futura)
function adicionarAosFavoritos(produtoId) {
    // Em uma aplicação real, isso salvaria no localStorage ou enviaria ao servidor
    console.log(`Produto ${produtoId} adicionado aos favoritos`);
    alert('Produto adicionado aos favoritos!');
}

// Compartilhar produto (funcionalidade futura)
function compartilharProduto(produtoId) {
    if (navigator.share) {
        navigator.share({
            title: 'ReUse Já - Produto',
            text: 'Confira este produto no ReUse Já',
            url: window.location.href,
        })
        .then(() => console.log('Produto compartilhado com sucesso'))
        .catch((error) => console.log('Erro ao compartilhar:', error));
    } else {
        // Fallback para copiar link
        navigator.clipboard.writeText(window.location.href)
            .then(() => alert('Link copiado para a área de transferência!'))
            .catch(err => console.error('Erro ao copiar link:', err));
    }
}