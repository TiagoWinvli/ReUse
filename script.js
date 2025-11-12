
        /* ========================== */
        /* === JAVASCRIPT ATUALIZADO === */
        /* ========================== */

        const mockItems = [
            { id: 1, title: "Jaqueta Jeans Vintage", size: "M", condition: "Usado", imageUrl: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", owner: "Pessoa B", distance: "São Paulo, SP - 2km" },
            { id: 2, title: "Vestido Floral", size: "P", condition: "Novo", imageUrl: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", owner: "Pessoa C", distance: "Rio de Janeiro, RJ - 5km" },
            { id: 3, title: "Tênis Branco", size: "40", condition: "Semiusado", imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", owner: "Pessoa D", distance: "Belo Horizonte, MG - 1km" },
            { id: 4, title: "Camiseta Básica Preta", size: "G", condition: "Usado", imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", owner: "Pessoa E", distance: "São Paulo, SP - 3km" },
            { id: 5, title: "Calça Jeans Skinny", size: "38", condition: "Novo", imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", owner: "Pessoa F", distance: "Curitiba, PR - 7km" }
        ];
        
        let currentItemIndex = 0;
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let currentY = 0;
        let isDragging = false;
        let currentCard = null;

        // Seletores de Elementos
        const deckContainer = document.getElementById('deck-container');
        const cardTemplate = document.getElementById('card-template');
        const matchPopup = document.getElementById('match-popup');
        const buyPopup = document.getElementById('buy-popup');

        const rejectBtn = document.getElementById('reject-btn');
        const tradeBtn = document.getElementById('trade-btn');
        const buyBtn = document.getElementById('buy-btn');

        // Constante para o threshold (distância mínima para swipe)
        const threshold = 100;

        function loadNextCard() {
            if (currentItemIndex >= mockItems.length) {
                deckContainer.innerHTML = `
                    <div class='end-message'>
                        <h2>Acabaram os itens!</h2>
                        <p>Volte mais tarde para ver novas roupas.</p>
                        <button class="refresh-btn" onclick="location.reload()">Recarregar</button>
                    </div>`;
                return;
            }
            
            const item = mockItems[currentItemIndex];
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
            currentCard.style.transition = 'none'; // Remove transição durante o arrasto

            // Resetar quaisquer classes 'active' dos botões
            rejectBtn.classList.remove('active-reject');
            tradeBtn.classList.remove('active-trade');
            buyBtn.classList.remove('active-buy');
        }

        function drag(e) {
            if (!isDragging || !currentCard) return;
            
            e.preventDefault();
            currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            currentY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
            const deltaX = currentX - startX;
            const deltaY = currentY - startY;
            
            const maxTranslation = 200; // Máximo de pixels
            const maxRotation = 20; // Rotação máxima em graus
            const maxOpacityEffect = 1.0; // Opacidade máxima para os selos
            
            const boundedDeltaX = Math.max(-maxTranslation, Math.min(maxTranslation, deltaX));
            const boundedDeltaY = Math.max(-maxTranslation, Math.min(maxTranslation, deltaY));
            
            // Aplica transform e rotation ao card
            currentCard.style.transform = `translate(${boundedDeltaX}px, ${boundedDeltaY}px) rotate(${boundedDeltaX / (maxTranslation / maxRotation)}deg)`;
            
            // Calcula a "força" do swipe para controlar a opacidade dos elementos
            const forceX = Math.min(1, Math.abs(deltaX) / threshold);
            const forceY = Math.min(1, Math.abs(deltaY) / threshold);
            
            // Seletores para os selos e indicadores de swipe
            const swipeLeftText = document.querySelector('.swipe-left');
            const swipeRightText = document.querySelector('.swipe-right');
            const swipeUpText = document.querySelector('.swipe-up');

            const overlayReject = currentCard.querySelector('.overlay-reject');
            const overlayTrade = currentCard.querySelector('.overlay-trade');
            const overlayBuy = currentCard.querySelector('.overlay-buy');

            // Resetar opacidade e classes
            swipeLeftText.style.opacity = 0;
            swipeRightText.style.opacity = 0;
            swipeUpText.style.opacity = 0;
            overlayReject.style.opacity = 0;
            overlayTrade.style.opacity = 0;
            overlayBuy.style.opacity = 0;
            
            rejectBtn.classList.remove('active-reject');
            tradeBtn.classList.remove('active-trade');
            buyBtn.classList.remove('active-buy');

            // Lógica para mostrar o feedback visual
            if (Math.abs(deltaX) > Math.abs(deltaY)) { // Movimento horizontal é dominante
                if (deltaX < -threshold / 2) { // Arrasta para a esquerda (Rejeitar)
                    const opacityFactor = forceX * maxOpacityEffect;
                    swipeLeftText.style.opacity = opacityFactor;
                    overlayReject.style.opacity = opacityFactor;
                    rejectBtn.classList.add('active-reject');
                } else if (deltaX > threshold / 2) { // Arrasta para a direita (Trocar)
                    const opacityFactor = forceX * maxOpacityEffect;
                    swipeRightText.style.opacity = opacityFactor;
                    overlayTrade.style.opacity = opacityFactor;
                    tradeBtn.classList.add('active-trade');
                }
            } else { // Movimento vertical é dominante
                if (deltaY < -threshold / 2) { // Arrasta para cima (Comprar)
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
            
            // Esconder indicadores de swipe e selos
            document.querySelectorAll('.swipe-left, .swipe-right, .swipe-up').forEach(el => {
                el.style.opacity = 0;
            });
            // Esconde os selos do card atual
            currentCard.querySelectorAll('.action-overlay').forEach(el => {
                el.style.opacity = 0;
            });

            // Remover classes 'active' dos botões do rodapé
            rejectBtn.classList.remove('active-reject');
            tradeBtn.classList.remove('active-trade');
            buyBtn.classList.remove('active-buy');
            
            if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
                if (Math.abs(deltaX) > Math.abs(deltaY)) { // Swipe horizontal mais forte
                    if (deltaX > 0) {
                        handleAction('trade');
                    } else {
                        handleAction('reject');
                    }
                } else { // Swipe vertical mais forte
                    if (deltaY < 0) {
                        handleAction('buy');
                    } else {
                        // Se não passou do threshold (swipe p/ baixo), volta o card
                        currentCard.style.transform = '';
                        currentCard.style.opacity = '1';
                    }
                }
            } else {
                // Se não passou do threshold, volta o card para a posição original
                currentCard.style.transform = '';
                currentCard.style.opacity = '1';
            }
        }

        function handleAction(action) {
            const card = document.querySelector('#deck-container .card:last-child');
            if (!card) return;

            // Remove listeners de swipe para evitar duplos cliques/ações
            card.removeEventListener('mousedown', startDrag);
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', endDrag);
            card.removeEventListener('touchstart', startDrag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('touchend', endDrag);

            let actionProcessed = false; // Trava para evitar bugs
            
            // Função para ser chamada APÓS o modal fechar ou animação terminar
            const processNextStep = () => {
                if (actionProcessed) return; // Evita rodar duas vezes
                actionProcessed = true;

                // Esconde *todos* os modais
                matchPopup.classList.add('hidden');
                buyPopup.classList.add('hidden');
                
                // Remove o card e carrega o próximo
                if(card) card.remove();
                currentItemIndex++;
                loadNextCard();
            };

            // Adiciona listeners de clique *toda vez* para garantir que funcionem
            document.getElementById('close-match-btn').onclick = processNextStep;
            document.getElementById('close-buy-btn').onclick = processNextStep;

            // Lógica das Ações
            if (action === 'reject') {
                card.classList.add('card-exiting-left');
                console.log("Ação: NÃO GOSTEI");
                setTimeout(processNextStep, 500); // Apenas espera a animação
            } 
            else if (action === 'trade') {
                card.classList.add('card-exiting-right');
                console.log("Ação: QUERO TROCAR.");
                if (Math.random() > 0.7) { // Simula Match
                    // Mostra o modal e ESPERA o clique
                    setTimeout(() => matchPopup.classList.remove('hidden'), 500);
                } else {
                    // Sem match, apenas espera a animação
                    setTimeout(processNextStep, 500);
                }
            } 
            else if (action === 'buy') {
                card.classList.add('card-exiting-up');
                console.log("Ação: QUERO COMPRAR.");
                // Mostra o modal e ESPERA o clique
                setTimeout(() => buyPopup.classList.remove('hidden'), 500);
            }
        }

        // Event listeners para os botões de ação
        document.getElementById('reject-btn').addEventListener('click', () => handleAction('reject'));
        document.getElementById('trade-btn').addEventListener('click', () => handleAction('trade'));
        document.getElementById('buy-btn').addEventListener('click', () => handleAction('buy'));

        // Inicia o app
        loadNextCard();
