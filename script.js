document.addEventListener('DOMContentLoaded', function () {

    // --- PRODUCTOS (HARDCODED) ---
    const products = [
        {
            "id": "gree-12k-22seer",
            "name": "AIRE ACONDICIONADO GREE INVERTER 12,000 BTU - 22 SEER WIFI",
            "price": 34000,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/10/Gree-18000-BTU-Inverter.webp"
        },
        {
            "id": "gree-12k-18seer",
            "name": "AIRE ACONDICIONADO GREE INVERTER 12,000 BTU - 18 SEER WIFI",
            "price": 28000,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/10/Gree-18000-BTU-Inverter.webp"
        },
        {
            "id": "gree-18k-22seer",
            "name": "AIRE ACONDICIONADO GREE 18,000 BTU INVERTER 22 SEER WIFI",
            "price": 56000,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/10/Gree-Eficiencia-22.png"
        },
        {
            "id": "instalacion-12k",
            "name": "INSTALACION BASICA DE AIRE ACONDICIONADO DE 12,000 BTU",
            "price": 4500,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/08/instalacion-basica.jpg"
        },
        {
            "id": "gree-36k-22seer",
            "name": "AIRE ACONDICIONADO GREE 36,000 BTU INVERTER 22 SEER WIFI",
            "price": 106000,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/10/Gree-Eficiencia-22.png"
        },
        {
            "id": "gree-24k-25seer",
            "name": "AIRE ACONDICIONADO GREE 24,000 BTU INVERTER 25.6 SEER WIFI",
            "price": 82000,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/10/Gree-Eficiencia-22.png"
        },
        {
            "id": "airmax-24k-20seer",
            "name": "AIRE ACONDICIONADO AIRMAX 24,000 BTU INVERTER 20 SEER WIFI",
            "price": 62500,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/02/Airmax-24000.webp"
        },
        {
            "id": "ciac-12k-17seer",
            "name": "AIRE ACONDICIONADO CIAC 12,000 BTU INVERTER 17 SEER WIFI",
            "price": 27500,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/05/CIAC_SERIE_S.png"
        },
        {
            "id": "airmax-24k-20seer-duplicate", // Renamed to avoid ID conflict
            "name": "AIRE ACONDICIONADO AIRMAX 24,000 BTU INVERTER 20 SEER WIFI",
            "price": 62500,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/02/Airmax-24000.webp"
        },
        {
            "id": "airmax-12k-21seer",
            "name": "AIRE ACONDICIONADO AIRMAX 12,000 BTU INVERTER 21 SEER WIFI",
            "price": 32000,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/02/Airmax-24000.webp"
        },
        // --- NUEVOS PRODUCTOS DE TELEVISORES ---
        {
            "id": "skyworth-55-qled",
            "name": "TELEVISOR SKYWORTH 55\" QLED 4K TV GOOGLE TV 2024",
            "price": 32000,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/07/skyworth-55.webp"
        },
        {
            "id": "skyworth-75-qled",
            "name": "TELEVISOR SKYWORTH GOOGLE TV 75\" QLED+",
            "price": 70000,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/07/Skyworth-75.webp"
        },
        {
            "id": "skyworth-43-fhd",
            "name": "TELEVISOR SKYWORTH 43\" FHD SMART TV GOOGLE",
            "price": 17500,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/07/Skyworth-75.webp"
        },
        {
            "id": "skyworth-32-fhd",
            "name": "TELEVISOR SKYWORTH 32\" FHD SMART TV GOOGLE TV 2024",
            "price": 12500,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/07/Skyworth-75.webp"
        },
        {
            "id": "skyworth-85-4k",
            "name": "TELEVISOR SKYWORTH 85\" SMART TV 4K UHD GOOGLE TV",
            "price": 89000,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/07/skyworth-55.webp"
        },
        {
            "id": "iffalcon-75-4k",
            "name": "TELEVISOR iFFALCON 75\" SMART TV 4K UHD GOOGLE TV",
            "price": 56000,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/09/iffalcon-tv.webp"
        }
    ];

    const productListDiv = document.getElementById('product-list');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartSubtotalSpan = document.getElementById('cart-subtotal');
    const cartBadge = document.querySelector('.cart-badge');
    const checkoutWhatsappBtn = document.getElementById('checkout-whatsapp-btn');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // --- FUNCIONES DE LA TIENDA ---

    // Renderizar productos en la página
    function renderProducts() {
        if (!productListDiv) return;
        productListDiv.innerHTML = '';
        products.forEach(product => {
            const productCard = `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card product-card">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="product-price">RD$ ${product.price.toLocaleString('es-DO')}</p>
                            <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">Añadir al Carrito</button>
                        </div>
                    </div>
                </div>
            `;
            productListDiv.innerHTML += productCard;
        });

        // Añadir event listeners a los botones "Añadir al Carrito"
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }

    // Añadir producto al carrito
    function addToCart(event) {
        const productId = event.target.dataset.productId;
        const product = products.find(p => p.id === productId);

        if (product) {
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            saveCart();
            updateCartUI();
        }
    }

    // Guardar carrito en localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Actualizar la interfaz del carrito (modal y badge)
    function updateCartUI() {
        if (!cartItemsList || !cartSubtotalSpan || !cartBadge) return;

        cartItemsList.innerHTML = '';
        let subtotal = 0;
        let totalItems = 0;

        if (cart.length === 0) {
            cartItemsList.innerHTML = '<li class="list-group-item text-center text-muted">El carrito está vacío.</li>';
        } else {
            cart.forEach(item => {
                subtotal += item.price * item.quantity;
                totalItems += item.quantity;

                const cartItem = `
                    <li class="list-group-item d-flex align-items-center">
                        <img src="${item.image}" alt="${item.name}" class="me-3">
                        <div class="item-details">
                            <h6>${item.name}</h6>
                            <span>RD$ ${item.price.toLocaleString('es-DO')} x ${item.quantity}</span>
                        </div>
                        <div class="item-quantity me-3">
                            <button class="btn btn-sm btn-outline-secondary decrease-quantity" data-product-id="${item.id}">-</button>
                            <span class="mx-2">${item.quantity}</span>
                            <button class="btn btn-sm btn-outline-secondary increase-quantity" data-product-id="${item.id}">+</button>
                        </div>
                        <span class="item-price">RD$ ${(item.price * item.quantity).toLocaleString('es-DO')}</span>
                        <button class="btn btn-sm btn-danger ms-3 remove-from-cart" data-product-id="${item.id}"><i class="fas fa-trash"></i></button>
                    </li>
                `;
                cartItemsList.innerHTML += cartItem;
            });
        }

        cartSubtotalSpan.textContent = `RD$ ${subtotal.toLocaleString('es-DO')}`;
        cartBadge.textContent = totalItems;

        // Añadir event listeners para botones de cantidad y eliminar
        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', changeQuantity);
        });
        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', changeQuantity);
        });
        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', removeFromCart);
        });
    }

    // Cambiar cantidad de un producto en el carrito
    function changeQuantity(event) {
        const productId = event.target.dataset.productId;
        const action = event.target.classList.contains('increase-quantity') ? 'increase' : 'decrease';
        
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            if (action === 'increase') {
                cart[itemIndex].quantity++;
            } else if (action === 'decrease') {
                cart[itemIndex].quantity--;
                if (cart[itemIndex].quantity <= 0) {
                    cart.splice(itemIndex, 1); // Eliminar si la cantidad llega a 0
                }
            }
            saveCart();
            updateCartUI();
        }
    }

    // Eliminar producto del carrito
    function removeFromCart(event) {
        const productId = event.target.dataset.productId;
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        updateCartUI();
    }

    // --- LÓGICA DE WHATSAPP CHECKOUT ---
    if (checkoutWhatsappBtn) {
        checkoutWhatsappBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Tu carrito está vacío. Por favor, añade productos antes de confirmar tu pedido.');
                return;
            }

            let whatsappMessage = "¡Hola! Me gustaría confirmar mi pedido de JIRES S.R.L:\n\n";
            let subtotal = 0;

            cart.forEach(item => {
                whatsappMessage += `- ${item.quantity}x ${item.name} (RD$ ${item.price.toLocaleString('es-DO')})\n`;
                subtotal += item.price * item.quantity;
            });

            whatsappMessage += `\nTotal: RD$ ${subtotal.toLocaleString('es-DO')}\n`;
            whatsappMessage += "\nPor favor, indícame los pasos a seguir para completar la compra. ¡Gracias!";

            const whatsappUrl = `https://wa.me/18093188687?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');

            // Opcional: Limpiar carrito después de enviar a WhatsApp
            cart = [];
            saveCart();
            updateCartUI();
            
            // Cerrar modal del carrito
            const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
            if (cartModal) {
                cartModal.hide();
            }
        });
    }


    // --- LÓGICA ORIGINAL DEL SITIO ---

    // Actualizar año en el footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Scroll suave para los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Validación del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));

        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();

            let isValid = true;

            // Validación de email con expresión regular
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailInput.classList.add('is-invalid');
                if(emailError) emailError.textContent = 'Por favor, ingresa un formato de correo válido (ej: tu@correo.com).';
                isValid = false;
            } else {
                emailInput.classList.remove('is-invalid');
            }

            // Añadir validación de Bootstrap para otros campos
            if (!contactForm.checkValidity()) {
                isValid = false;
            }
            
            contactForm.classList.add('was-validated');

            if (isValid) {
                // Si el formulario es válido, enviar a WhatsApp
                const nombre = document.getElementById('nombre').value;
                const email = document.getElementById('email').value;
                const mensaje = document.getElementById('mensaje').value;

                // Crear el mensaje de WhatsApp
                let whatsappMessage = `¡Hola! He llenado el formulario de contacto en el sitio web.\n\n`;
                whatsappMessage += `*Nombre:* ${nombre}\n`;
                whatsappMessage += `*Email:* ${email}\n`;
                whatsappMessage += `*Mensaje:* ${mensaje}\n`;

                const whatsappUrl = `https://wa.me/18093188687?text=${encodeURIComponent(whatsappMessage)}`;

                // Mostrar la ventana modal de confirmación
                confirmationModal.show();

                // Abrir WhatsApp en una nueva pestaña después de un breve retraso
                setTimeout(() => {
                    window.open(whatsappUrl, '_blank');
                }, 500);

                // Limpiar formulario
                contactForm.reset();
                contactForm.classList.remove('was-validated');
            }
        });
    }

    // Inicializar la tienda al cargar la página
    renderProducts();
    updateCartUI();
});
