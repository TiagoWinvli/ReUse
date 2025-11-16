/* ================================== */
/* === SCRIPT.JS (COM FOTOS ESTÁVEIS) === */
/* ================================== */

// --- 1. DADOS ---
// Lista principal com 50 itens e URLs de imagem ESTÁVEIS (nunca expiram)
const allMockItems = [
    // 10 Casacos
    { id: 1, title: "Jaqueta Jeans Vintage", size: "M", condition: "Usado", category: "casacos", imageUrl: "https://picsum.photos/id/106/500/600", owner: "Pessoa B", distance: "São Paulo, SP - 2km" },
    { id: 2, title: "Casaco de Lã Bege", size: "G", condition: "Semiusado", category: "casacos", imageUrl: "https://picsum.photos/id/111/500/600", owner: "Pessoa C", distance: "Rio de Janeiro, RJ - 1km" },
    { id: 3, title: "Blusão de Couro Preto", size: "M", condition: "Novo", category: "casacos", imageUrl: "https://picsum.photos/id/119/500/600", owner: "Pessoa D", distance: "Belo Horizonte, MG - 5km" },
    { id: 4, title: "Corta-vento Colorido", size: "P", condition: "Usado", category: "casacos", imageUrl: "https://picsum.photos/id/136/500/600", owner: "Pessoa E", distance: "Curitiba, PR - 3km" },
    { id: 5, title: "Sobretudo Cinza Escuro", size: "G", condition: "Semiusado", category: "casacos", imageUrl: "https://picsum.photos/id/145/500/600", owner: "Pessoa F", distance: "Porto Alegre, RS - 8km" },
    { id: 6, title: "Jaqueta Puffer Vermelha", size: "M", condition: "Novo", category: "casacos", imageUrl: "https://picsum.photos/id/163/500/600", owner: "Pessoa G", distance: "Salvador, BA - 2km" },
    { id: 7, title: "Cardigã de Malha", size: "P", condition: "Usado", category: "casacos", imageUrl: "https://picsum.photos/id/164/500/600", owner: "Pessoa H", distance: "Recife, PE - 4km" },
    { id: 8, title: "Moletom com Capuz (Preto)", size: "G", condition: "Semiusado", category: "casacos", imageUrl: "https://picsum.photos/id/175/500/600", owner: "Pessoa I", distance: "São Paulo, SP - 10km" },
    { id: 9, title: "Blazer Azul Marinho", size: "M", condition: "Novo", category: "casacos", imageUrl: "https://picsum.photos/id/180/500/600", owner: "Pessoa J", distance: "Rio de Janeiro, RJ - 7km" },
    { id: 10, title: "Jaqueta Bomber Verde", size: "P", condition: "Usado", category: "casacos", imageUrl: "https://picsum.photos/id/201/500/600", owner: "Pessoa K", distance: "Belo Horizonte, MG - 1km" },

    // 10 Camisas
    { id: 11, title: "Camiseta Básica Preta", size: "G", condition: "Usado", category: "camisas", imageUrl: "https://images.unsplash.com/photo-1666358777322-a25eda95848f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", owner: "Pessoa E", distance: "São Paulo, SP - 3km" },
    { id: 12, title: "Camisa Social Branca", size: "M", condition: "Novo", category: "camisas", imageUrl: "https://m.media-amazon.com/images/I/51+R67QO5LL._AC_SX385_.jpg", owner: "Pessoa L", distance: "Curitiba, PR - 2km" },
    { id: 13, title: "Camisa Xadrez Vermelha", size: "P", condition: "Semiusado", category: "camisas", imageUrl: "https://m.media-amazon.com/images/I/61dVvxmBPDL._AC_SX385_.jpg", owner: "Pessoa M", distance: "Porto Alegre, RS - 1km" },
    { id: 14, title: "Camiseta Estampada", size: "M", condition: "Usado", category: "camisas", imageUrl: "https://images.unsplash.com/photo-1627225793904-a2f900a6e4cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", owner: "Pessoa N", distance: "Salvador, BA - 5km" },
    { id: 15, title: "Regata Esportiva Azul", size: "G", condition: "Semiusado", category: "camisas", imageUrl: "https://m.media-amazon.com/images/I/71sVuA08SSL._AC_SY445_.jpg", owner: "Pessoa O", distance: "Recife, PE - 6km" },
    { id: 16, title: "Camisa de Linho", size: "M", condition: "Novo", category: "camisas", imageUrl: "https://picsum.photos/id/243/500/600", owner: "Pessoa P", distance: "São Paulo, SP - 4km" },
    { id: 17, title: "Camiseta Gola V (Cinza)", size: "P", condition: "Usado", category: "camisas", imageUrl: "https://picsum.photos/id/257/500/600", owner: "Pessoa Q", distance: "Rio de Janeiro, RJ - 3km" },
    { id: 18, title: "Polo Listrada", size: "G", condition: "Semiusado", category: "camisas", imageUrl: "https://picsum.photos/id/287/500/600", owner: "Pessoa R", distance: "Belo Horizonte, MG - 2km" },
    { id: 19, title: "Camisa Jeans", size: "M", condition: "Usado", category: "camisas", imageUrl: "https://picsum.photos/id/292/500/600", owner: "Pessoa S", distance: "Curitiba, PR - 5km" },
    { id: 20, title: "Camiseta Manga Longa", size: "P", condition: "Novo", category: "camisas", imageUrl: "https://picsum.photos/id/305/500/600", owner: "Pessoa T", distance: "Porto Alegre, RS - 12km" },
    
    // 10 Calças
    { id: 21, title: "Calça Jeans Skinny", size: "38", condition: "Novo", category: "calcas", imageUrl: "https://picsum.photos/id/308/500/600", owner: "Pessoa F", distance: "Curitiba, PR - 7km" },
    { id: 22, title: "Calça de Moletom (Cinza)", size: "G", condition: "Semiusado", category: "calcas", imageUrl: "https://picsum.photos/id/312/500/600", owner: "Pessoa U", distance: "São Paulo, SP - 1km" },
    { id: 23, title: "Calça Cargo (Verde)", size: "M", condition: "Usado", category: "calcas", imageUrl: "https://picsum.photos/id/327/500/600", owner: "Pessoa V", distance: "Rio de Janeiro, RJ - 9km" },
    { id: 24, title: "Calça de Alfaiataria", size: "P", condition: "Novo", category: "calcas", imageUrl: "https://picsum.photos/id/338/500/600", owner: "Pessoa W", distance: "Belo Horizonte, MG - 3km" },
    { id: 25, title: "Jeans Reto (Azul Claro)", size: "M", condition: "Semiusado", category: "calcas", imageUrl: "https://picsum.photos/id/339/500/600", owner: "Pessoa X", distance: "Porto Alegre, RS - 5km" },
    { id: 26, title: "Legging de Academia", size: "P", condition: "Usado", category: "calcas", imageUrl: "https://picsum.photos/id/353/500/600", owner: "Pessoa Y", distance: "Salvador, BA - 2km" },
    { id: 27, title: "Bermuda Jeans", size: "40", condition: "Semiusado", category: "calcas", imageUrl: "https://picsum.photos/id/366/500/600", owner: "Pessoa Z", distance: "Recife, PE - 7km" },
    { id: 28, title: "Calça Chino (Bege)", size: "M", condition: "Novo", category: "calcas", imageUrl: "https://picsum.photos/id/368/500/600", owner: "Pessoa A1", distance: "São Paulo, SP - 6km" },
    { id: 29, title: "Jeans Rasgado (Destroyed)", size: "P", condition: "Usado", category: "calcas", imageUrl: "https://picsum.photos/id/379/500/600", owner: "Pessoa A2", distance: "Rio de Janeiro, RJ - 2km" },
    { id: 30, title: "Calça Jogger (Preta)", size: "G", condition: "Semiusado", category: "calcas", imageUrl: "https://picsum.photos/id/403/500/600", owner: "Pessoa A3", distance: "Curitiba, PR - 1km" },

    // 10 Tênis
    { id: 31, title: "Tênis Branco", size: "40", condition: "Semiusado", category: "tenis", imageUrl: "https://picsum.photos/id/21/500/600", owner: "Pessoa D", distance: "Belo Horizonte, MG - 1km" },
    { id: 32, title: "Tênis de Corrida (Preto)", size: "41", condition: "Usado", category: "tenis", imageUrl: "https://picsum.photos/id/24/500/600", owner: "Pessoa B1", distance: "São Paulo, SP - 8km" },
    { id: 33, title: "Tênis Cano Alto (Vermelho)", size: "39", condition: "Novo", category: "tenis", imageUrl: "https://picsum.photos/id/26/500/600", owner: "Pessoa B2", distance: "Rio de Janeiro, RJ - 4km" },
    { id: 34, title: "Sapatênis (Azul)", size: "42", condition: "Semiusado", category: "tenis", imageUrl: "https://picsum.photos/id/42/500/600", owner: "Pessoa B3", distance: "Porto Alegre, RS - 3km" },
    { id: 35, title: "Tênis de Skate (Preto)", size: "40", condition: "Usado", category: "tenis", imageUrl: "https://picsum.photos/id/46/500/600", owner: "Pessoa B4", distance: "Curitiba, PR - 11km" },
    { id: 36, title: "Tênis Casual (Bege)", size: "37", condition: "Novo", category: "tenis", imageUrl: "https://picsum.photos/id/48/500/600", owner: "Pessoa B5", distance: "Salvador, BA - 1km" },
    { id: 37, title: "Tênis de Basquete", size: "43", condition: "Semiusado", category: "tenis", imageUrl: "https://picsum.photos/id/49/500/600", owner: "Pessoa B6", distance: "Recife, PE - 14km" },
    { id: 38, title: "Tênis Slip-On (Xadrez)", size: "38", condition: "Usado", category: "tenis", imageUrl: "https://picsum.photos/id/53/500/600", owner: "Pessoa B7", distance: "São Paulo, SP - 2km" },
    { id: 39, title: "Bota de Caminhada", size: "39", condition: "Semiusado", category: "tenis", imageUrl: "https://picsum.photos/id/58/500/600", owner: "Pessoa B8", distance: "Belo Horizonte, MG - 6km" },
    { id: 40, title: "Tênis Plataforma", size: "36", condition: "Novo", category: "tenis", imageUrl: "https://picsum.photos/id/61/500/600", owner: "Pessoa B9", distance: "Rio de Janeiro, RJ - 3km" },

    // 10 Vestidos
    { id: 41, title: "Vestido Floral", size: "P", condition: "Novo", category: "vestidos", imageUrl: "https://picsum.photos/id/1011/500/600", owner: "Pessoa C", distance: "Rio de Janeiro, RJ - 5km" },
    { id: 42, title: "Vestido Preto Básico", size: "M", condition: "Semiusado", category: "vestidos", imageUrl: "https://picsum.photos/id/1012/500/600", owner: "Pessoa C1", distance: "São Paulo, SP - 1km" },
    { id: 43, title: "Vestido de Verão (Amarelo)", size: "P", condition: "Usado", category: "vestidos", imageUrl: "https://picsum.photos/id/1013/500/600", owner: "Pessoa C2", distance: "Salvador, BA - 3km" },
    { id: 44, title: "Vestido Longo Estampado", size: "G", condition: "Semiusado", category: "vestidos", imageUrl: "https://picsum.photos/id/1015/500/600", owner: "Pessoa C3", distance: "Recife, PE - 8km" },
    { id: 45, title: "Vestido de Festa (Vinho)", size: "M", condition: "Novo", category: "vestidos", imageUrl: "https://picsum.photos/id/1016/500/600", owner: "Pessoa C4", distance: "Belo Horizonte, MG - 4km" },
    { id: 46, title: "Vestido Jeans", size: "P", condition: "Usado", category: "vestidos", imageUrl: "https://picsum.photos/id/1020/500/600", owner: "Pessoa C5", distance: "Curitiba, PR - 10km" },
    { id: 47, title: "Vestido de Renda (Branco)", size: "M", condition: "Semiusado", category: "vestidos", imageUrl: "https://picsum.photos/id/1024/500/600", owner: "Pessoa C6", distance: "Porto Alegre, RS - 5km" },
    { id: 48, title: "Macacão (Preto)", size: "G", condition: "Novo", category: "vestidos", imageUrl: "https://picsum.photos/id/1025/500/600", owner: "Pessoa C7", distance: "São Paulo, SP - 2km" },
    { id: 49, title: "Saia Midi Plissada", size: "P", condition: "Usado", category: "vestidos", imageUrl: "https://picsum.photos/id/103/500/600", owner: "Pessoa C8", distance: "Rio de Janeiro, RJ - 1km" },
    { id: 50, title: "Vestido de Malha (Cinza)", size: "M", condition: "Semiusado", category: "vestidos", imageUrl: "https://picsum.photos/id/1031/500/600", owner: "Pessoa C9", distance: "Belo Horizonte, MG - 7km" }
];

// --- 2. VARIÁVEIS GLOBAIS ---
let filteredItems = []; 
let selectedFilters = new Set(); 

let currentItemIndex = 0;
let startX = 0;
let startY = 0;
let currentX = 0;
let currentY = 0;
let isDragging = false;
let currentCard = null;
const threshold = 100; 

// --- 3. SELETORES DE ELEMENTOS ---
const welcomeScreen = document.getElementById('welcome-screen');
const startBtn = document.getElementById('start-btn');
const filterScreen = document.getElementById('filter-screen');
const applyFilterBtn = document.getElementById('apply-filter-btn');
const filterOptions = document.querySelectorAll('.filter-option');
const mainHeader = document.querySelector('header');
const mainContent = document.querySelector('main');
const mainFooter = document.querySelector('footer');
const deckContainer = document.getElementById('deck-container');
const cardTemplate = document.getElementById('card-template');
const matchPopup = document.getElementById('match-popup');
const buyPopup = document.getElementById('buy-popup');
const rejectBtn = document.getElementById('reject-btn');
const tradeBtn = document.getElementById('trade-btn');
const buyBtn = document.getElementById('buy-btn');

// --- 4. LÓGICA DE ONBOARDING ---

startBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    filterScreen.classList.remove('hidden');
});

filterOptions.forEach(option => {
    option.addEventListener('click', () => {
        const filter = option.dataset.filter;
        
        if (filter === 'todos') {
            option.classList.add('active');
            selectedFilters.clear();
            selectedFilters.add('todos');
            filterOptions.forEach(opt => {
                if (opt.dataset.filter !== 'todos') opt.classList.remove('active');
            });
        } else {
            document.querySelector('.filter-option[data-filter="todos"]').classList.remove('active');
            selectedFilters.delete('todos');
            
            option.classList.toggle('active');
            if (option.classList.contains('active')) {
                selectedFilters.add(filter);
            } else {
                selectedFilters.delete(filter);
            }
        }
    });
});

applyFilterBtn.addEventListener('click', () => {
    if (selectedFilters.has('todos') || selectedFilters.size === 0) {
        filteredItems = [...allMockItems]; 
    } else {
        filteredItems = allMockItems.filter(item => selectedFilters.has(item.category));
    }

    shuffleArray(filteredItems);
    
    filterScreen.classList.add('hidden');
    mainHeader.classList.remove('hidden');
    mainContent.classList.remove('hidden');
    mainFooter.classList.remove('hidden');

    currentItemIndex = 0; 
    loadNextCard();
});


// --- 5. LÓGICA DO DECK (SWIPE) ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function resetDeck() {
    currentItemIndex = 0;
    shuffleArray(filteredItems);
    deckContainer.innerHTML = '';
    loadNextCard();
}

function loadNextCard() {
    if (currentItemIndex >= filteredItems.length) { 
        deckContainer.innerHTML = `
            <div class='end-message'>
                <h2>Acabaram os itens!</h2>
                <p>Você viu tudo o que selecionou.</p>
                <button class="refresh-btn" id="reload-deck-btn">Ver de Novo</button>
            </div>`;
        
        document.getElementById('reload-deck-btn').addEventListener('click', resetDeck);
        return;
    }
    
    const item = filteredItems[currentItemIndex]; 
    const cardClone = cardTemplate.content.cloneNode(true);
    
    const card = cardClone.querySelector('.card');
    card.querySelector('.card-image').src = item.imageUrl;
    card.querySelector('.card-image').alt = item.title;
    card.querySelector('.card-title').textContent = item.title;
    card.querySelector('.distance-text').textContent = item.distance;
    card.querySelector('.size-text').textContent = item.size;
    card.querySelector('.condition-text').textContent = item.condition;
    
    deckContainer.appendChild(card);
    
    setupSwipeEvents(card);
}

function setupSwipeEvents(card) {
    currentCard = card;
    card.addEventListener('mousedown', startDrag);
    card.addEventListener('touchstart', startDrag, { passive: false });
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag, { passive: false });
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);
}

function startDrag(e) {
    if (!currentCard) return;
    isDragging = true;
    
    startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    startY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
    
    currentX = startX;
    currentY = startY;
    
    currentCard.style.transition = 'none'; 

    rejectBtn.classList.remove('active-reject');
    tradeBtn.classList.remove('active-trade');
    buyBtn.classList.remove('active-buy');
}

function drag(e) {
    if (!isDragging || !currentCard) return;
    e.preventDefault(); 

    if (e.type.includes('mouse')) {
        currentX = e.clientX;
        currentY = e.clientY;
    } else {
        if (e.touches && e.touches.length > 0) {
            currentX = e.touches[0].clientX;
            currentY = e.touches[0].clientY;
        } else {
            return;
        }
    }
    
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    const maxTranslation = 200; 
    const maxRotation = 20; 
    const maxOpacityEffect = 1.0; 
    const boundedDeltaX = Math.max(-maxTranslation, Math.min(maxTranslation, deltaX));
    const boundedDeltaY = Math.max(-maxTranslation, Math.min(maxTranslation, deltaY));
    
    currentCard.style.transform = `translate(${boundedDeltaX}px, ${boundedDeltaY}px) rotate(${boundedDeltaX / (maxTranslation / maxRotation)}deg)`;
    
    const forceX = Math.min(1, Math.abs(deltaX) / threshold);
    const forceY = Math.min(1, Math.abs(deltaY) / threshold);
    
    const swipeLeftText = document.querySelector('.swipe-left');
    const swipeRightText = document.querySelector('.swipe-right');
    const swipeUpText = document.querySelector('.swipe-up');
    const overlayReject = currentCard.querySelector('.overlay-reject');
    const overlayTrade = currentCard.querySelector('.overlay-trade');
    const overlayBuy = currentCard.querySelector('.overlay-buy');

    // Resetar
    swipeLeftText.style.opacity = 0;
    swipeRightText.style.opacity = 0;
    swipeUpText.style.opacity = 0;
    overlayReject.style.opacity = 0;
    overlayTrade.style.opacity = 0;
    overlayBuy.style.opacity = 0;
    rejectBtn.classList.remove('active-reject');
    tradeBtn.classList.remove('active-trade');
    buyBtn.classList.remove('active-buy');

    // Mostrar feedback
    if (Math.abs(deltaX) > Math.abs(deltaY)) { // Horizontal
        if (deltaX < -threshold / 2) { // Rejeitar
            const opacityFactor = forceX * maxOpacityEffect;
            swipeLeftText.style.opacity = opacityFactor;
            overlayReject.style.opacity = opacityFactor;
            rejectBtn.classList.add('active-reject');
        } else if (deltaX > threshold / 2) { // Trocar
            const opacityFactor = forceX * maxOpacityEffect;
            swipeRightText.style.opacity = opacityFactor;
            overlayTrade.style.opacity = opacityFactor;
            tradeBtn.classList.add('active-trade');
        }
    } else { // Vertical
        if (deltaY < -threshold / 2) { // Comprar
            const opacityFactor = forceY * maxOpacityEffect;
            swipeUpText.style.opacity = opacityFactor;
            overlayBuy.style.opacity = opacityFactor;
            buyBtn.classList.add('active-buy');
        }
    }
}

function endDrag() {
    if (!isDragging || !currentCard) return;
    
    isDragging = false;
    currentCard.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    
    // Esconder indicadores
    document.querySelectorAll('.swipe-left, .swipe-right, .swipe-up').forEach(el => {
        el.style.opacity = 0;
    });
    currentCard.querySelectorAll('.action-overlay').forEach(el => {
        el.style.opacity = 0;
    });

    // Remover classes 'active'
    rejectBtn.classList.remove('active-reject');
    tradeBtn.classList.remove('active-trade');
    buyBtn.classList.remove('active-buy');
    
    // Lógica de decisão do swipe
    if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) { // Swipe horizontal
            handleAction(deltaX > 0 ? 'trade' : 'reject');
        } else { // Swipe vertical
            if (deltaY < 0) {
                handleAction('buy');
            } else {
                currentCard.style.transform = '';
                currentCard.style.opacity = '1';
            }
        }
    } else {
        // Foi um clique ou movimento curto
        currentCard.style.transform = '';
        currentCard.style.opacity = '1';
    }
}

function handleAction(action) {
    const card = document.querySelector('#deck-container .card:last-child');
    if (!card) return;

    // Remove listeners de swipe
    card.removeEventListener('mousedown', startDrag);
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', endDrag);
    card.removeEventListener('touchstart', startDrag);
    document.removeEventListener('touchmove', drag);
    document.removeEventListener('touchend', endDrag);

    let actionProcessed = false; 
    
    const processNextStep = () => {
        if (actionProcessed) return; 
        actionProcessed = true;

        matchPopup.classList.add('hidden');
        buyPopup.classList.add('hidden');
        
        if(card) card.remove();
        currentItemIndex++;
        loadNextCard(); // Chama o próximo card da lista FILTRADA
    };

    // Adiciona listeners aos botões do modal
    document.getElementById('close-match-btn').onclick = processNextStep;
    document.getElementById('close-buy-btn').onclick = processNextStep;

    // Lógica das Ações
    if (action === 'reject') {
        card.classList.add('card-exiting-left');
        console.log("Ação: NÃO GOSTEI");
        setTimeout(processNextStep, 500); 
    } 
    else if (action === 'trade') {
        card.classList.add('card-exiting-right');
        console.log("Ação: QUERO TROCAR.");
        if (Math.random() > 0.7) { // Simula Match
            setTimeout(() => matchPopup.classList.remove('hidden'), 500);
        } else {
            setTimeout(processNextStep, 500);
        }
    } 
    else if (action === 'buy') {
        card.classList.add('card-exiting-up');
        console.log("Ação: QUERO COMPRAR.");
        setTimeout(() => buyPopup.classList.remove('hidden'), 500);
    }
}

// --- 6. INICIALIZAÇÃO DO APP ---

// Adiciona listeners aos botões de ação (que estão escondidos)
document.getElementById('reject-btn').addEventListener('click', () => handleAction('reject'));
document.getElementById('trade-btn').addEventListener('click', () => handleAction('trade'));
document.getElementById('buy-btn').addEventListener('click', () => handleAction('buy'));

// NENHUMA FUNÇÃO É CHAMADA AQUI. O app espera o usuário nas telas de onboarding.