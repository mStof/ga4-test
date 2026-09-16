// Lógica simples para manter a contagem do carrinho usando LocalStorage
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

function updateCartDisplay() {
    const cartElement = document.querySelector('#cart-counter span');
    if (cartElement) {
        cartElement.innerText = cartCount;
    }
}

// Função simulando a adição ao carrinho
function addToCart(sku, name, price) {
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    updateCartDisplay();
    alert(`Produto ${name} adicionado ao carrinho com sucesso!`);
    
    // NOTA DO TUTOR: É AQUI DENTRO que, no futuro, faremos nosso 
    // dataLayer.push() ou gtag() para mensuração. Por enquanto, nada de tags!
}

// Inicializa a exibição do carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', updateCartDisplay);
