document.addEventListener('DOMContentLoaded', function () {

    // --- PRODUCTOS (HARDCODED) ---
    const products = [
        {
            "id": "gree-12k-22seer",
            "name": "AIRE ACONDICIONADO GREE INVERTER 12,000 BTU - 22 SEER WIFI",
            "price": 34000,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/10/Gree-18000-BTU-Inverter.webp",
            "description": "Experimenta la máxima eficiencia y confort con este aire acondicionado Gree Inverter. Ideal para espacios pequeños y medianos, ofrece un rendimiento superior y ahorro energético.",
            "strongPoints": [
                "Tecnología Inverter de alta eficiencia (22 SEER)",
                "Conectividad WiFi para control remoto",
                "Funcionamiento silencioso",
                "Ahorro significativo en consumo eléctrico"
            ]
        },
        {
            "id": "gree-12k-18seer",
            "name": "AIRE ACONDICIONADO GREE INVERTER 12,000 BTU - 18 SEER WIFI",
            "price": 28000,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/10/Gree-18000-BTU-Inverter.webp",
            "description": "Un aire acondicionado confiable y eficiente para mantener tu hogar fresco. La tecnología Inverter asegura un consumo energético optimizado y un ambiente agradable.",
            "strongPoints": [
                "Tecnología Inverter (18 SEER)",
                "Conectividad WiFi",
                "Refrigeración rápida y efectiva",
                "Durabilidad garantizada"
            ]
        },
        {
            "id": "gree-18k-22seer",
            "name": "AIRE ACONDICIONADO GREE 18,000 BTU INVERTER 22 SEER WIFI",
            "price": 56000,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/10/Gree-Eficiencia-22.png",
            "description": "Potente y eficiente, este aire acondicionado Gree de 18,000 BTU es perfecto para salones y habitaciones grandes. Disfruta de un ambiente fresco y controlado con su función WiFi.",
            "strongPoints": [
                "Alta capacidad de enfriamiento (18,000 BTU)",
                "Eficiencia energética superior (22 SEER)",
                "Control inteligente vía WiFi",
                "Ideal para espacios amplios"
            ]
        },
        {
            "id": "instalacion-12k",
            "name": "INSTALACION BASICA DE AIRE ACONDICIONADO DE 12,000 BTU",
            "price": 4500,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/08/instalacion-basica.jpg",
            "description": "Servicio de instalación básica profesional para aires acondicionados de hasta 12,000 BTU. Incluye mano de obra y materiales estándar para una puesta en marcha óptima.",
            "strongPoints": [
                "Servicio profesional y garantizado",
                "Materiales de instalación estándar incluidos",
                "Técnicos certificados",
                "Puesta en marcha y verificación"
            ]
        },
        {
            "id": "gree-36k-22seer",
            "name": "AIRE ACONDICIONADO GREE 36,000 BTU INVERTER 22 SEER WIFI",
            "price": 106000,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/10/Gree-Eficiencia-22.png",
            "description": "La solución definitiva para climatizar grandes áreas. Este equipo Gree de 36,000 BTU combina potencia, eficiencia y control inteligente para un confort inigualable.",
            "strongPoints": [
                "Capacidad extrema (36,000 BTU)",
                "Máxima eficiencia (22 SEER)",
                "Control WiFi avanzado",
                "Ideal para locales comerciales y grandes residencias"
            ]
        },
        {
            "id": "gree-24k-25seer",
            "name": "AIRE ACONDICIONADO GREE 24,000 BTU INVERTER 25.6 SEER WIFI",
            "price": 82000,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/10/Gree-Eficiencia-22.png",
            "description": "Uno de los aires acondicionados más eficientes del mercado. Con 24,000 BTU y 25.6 SEER, garantiza un ambiente fresco con el mínimo consumo energético.",
            "strongPoints": [
                "Ultra eficiencia energética (25.6 SEER)",
                "24,000 BTU para espacios medianos-grandes",
                "Conectividad WiFi",
                "Tecnología Inverter de última generación"
            ]
        },
        {
            "id": "airmax-24k-20seer",
            "name": "AIRE ACONDICIONADO AIRMAX 24,000 BTU INVERTER 20 SEER WIFI",
            "price": 62500,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/02/Airmax-24000.webp",
            "description": "El Airmax de 24,000 BTU ofrece un equilibrio perfecto entre potencia y eficiencia. Su diseño moderno y funciones inteligentes lo hacen ideal para cualquier hogar o negocio.",
            "strongPoints": [
                "24,000 BTU con tecnología Inverter",
                "Eficiencia de 20 SEER",
                "Control WiFi integrado",
                "Diseño elegante y moderno"
            ]
        },
        {
            "id": "ciac-12k-17seer",
            "name": "AIRE ACONDICIONADO CIAC 12,000 BTU INVERTER 17 SEER WIFI",
            "price": 27500,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/05/CIAC_SERIE_S.png",
            "description": "Un aire acondicionado compacto y eficiente de CIAC, ideal para habitaciones. Disfruta de un ambiente fresco y un control sencillo con su conectividad WiFi.",
            "strongPoints": [
                "12,000 BTU, perfecto para habitaciones",
                "Tecnología Inverter (17 SEER)",
                "Control WiFi",
                "Fácil instalación y mantenimiento"
            ]
        },
        {
            "id": "airmax-24k-20seer-duplicate",
            "name": "AIRE ACONDICIONADO AIRMAX 24,000 BTU INVERTER 20 SEER WIFI",
            "price": 62500,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/02/Airmax-24000.webp",
            "description": "El Airmax de 24,000 BTU ofrece un equilibrio perfecto entre potencia y eficiencia. Su diseño moderno y funciones inteligentes lo hacen ideal para cualquier hogar o negocio.",
            "strongPoints": [
                "24,000 BTU con tecnología Inverter",
                "Eficiencia de 20 SEER",
                "Control WiFi integrado",
                "Diseño elegante y moderno"
            ]
        },
        {
            "id": "airmax-12k-21seer",
            "name": "AIRE ACONDICIONADO AIRMAX 12,000 BTU INVERTER 21 SEER WIFI",
            "price": 32000,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/02/Airmax-24000.webp",
            "description": "Compacto pero potente, este aire acondicionado Airmax de 12,000 BTU es ideal para mantener espacios pequeños frescos y confortables con alta eficiencia energética.",
            "strongPoints": [
                "12,000 BTU de capacidad",
                "Alta eficiencia (21 SEER)",
                "Conectividad WiFi",
                "Ideal para habitaciones y oficinas pequeñas"
            ]
        },
        // --- NUEVOS PRODUCTOS DE TELEVISORES ---
        {
            "id": "skyworth-55-qled",
            "name": "TELEVISOR SKYWORTH 55\" QLED 4K TV GOOGLE TV 2024",
            "price": 32000,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/07/skyworth-55.webp",
            "description": "Sumérgete en una experiencia visual impresionante con el televisor Skyworth QLED 4K de 55 pulgadas. Colores vibrantes y detalles nítidos con la inteligencia de Google TV.",
            "strongPoints": [
                "Pantalla QLED 4K de 55 pulgadas",
                "Sistema operativo Google TV 2024",
                "Colores vibrantes y alto contraste",
                "Funciones inteligentes y control por voz"
            ]
        },
        {
            "id": "skyworth-75-qled",
            "name": "TELEVISOR SKYWORTH GOOGLE TV 75\" QLED+",
            "price": 70000,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/07/Skyworth-75.webp",
            "description": "Disfruta del cine en casa con el majestuoso televisor Skyworth QLED+ de 75 pulgadas. Una calidad de imagen superior y todas las ventajas de Google TV en una pantalla gigante.",
            "strongPoints": [
                "Pantalla QLED+ de 75 pulgadas",
                "Resolución 4K UHD",
                "Google TV integrado",
                "Experiencia inmersiva para películas y juegos"
            ]
        },
        {
            "id": "skyworth-43-fhd",
            "name": "TELEVISOR SKYWORTH 43\" FHD SMART TV GOOGLE",
            "price": 17500,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/07/Skyworth-75.webp",
            "description": "Un televisor inteligente Full HD de 43 pulgadas con Google TV, ideal para cualquier habitación. Accede a tus aplicaciones favoritas y disfruta de contenido en alta definición.",
            "strongPoints": [
                "Pantalla Full HD de 43 pulgadas",
                "Smart TV con Google TV",
                "Acceso a múltiples aplicaciones",
                "Diseño compacto y funcional"
            ]
        },
        {
            "id": "skyworth-32-fhd",
            "name": "TELEVISOR SKYWORTH 32\" FHD SMART TV GOOGLE TV 2024",
            "price": 12500,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/07/Skyworth-75.webp",
            "description": "El televisor perfecto para espacios pequeños o como segunda pantalla. Disfruta de Full HD y las funciones inteligentes de Google TV en un tamaño conveniente.",
            "strongPoints": [
                "Pantalla Full HD de 32 pulgadas",
                "Smart TV con Google TV 2024",
                "Ideal para cocinas o dormitorios",
                "Conectividad completa"
            ]
        },
        {
            "id": "skyworth-85-4k",
            "name": "TELEVISOR SKYWORTH 85\" SMART TV 4K UHD GOOGLE TV",
            "price": 89000,
            "image": "https://api.conformatic.com/wp-content/uploads/2024/07/skyworth-55.webp",
            "description": "La experiencia de entretenimiento definitiva. Este televisor Skyworth de 85 pulgadas con 4K UHD y Google TV transformará tu sala en un centro multimedia de lujo.",
            "strongPoints": [
                "Pantalla gigante 4K UHD de 85 pulgadas",
                "Smart TV con Google TV",
                "Imágenes ultra nítidas y colores realistas",
                "Sonido envolvente y funciones avanzadas"
            ]
        },
        {
            "id": "iffalcon-75-4k",
            "name": "TELEVISOR iFFALCON 75\" SMART TV 4K UHD GOOGLE TV",
            "price": 56000,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/09/iffalcon-tv.webp",
            "description": "Un televisor iFFALCON de 75 pulgadas que ofrece una calidad de imagen 4K UHD excepcional y la comodidad de Google TV. Ideal para una experiencia de visualización inmersiva.",
            "strongPoints": [
                "Pantalla 4K UHD de 75 pulgadas",
                "Smart TV con Google TV",
                "Diseño sin bordes",
                "Rendimiento optimizado para streaming"
            ]
        },
        {
            "id": "diagnosticos-evaluaciones",
            "name": "DIAGNOSTICOS Y EVALUACIONES",
            "price": 2000,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/08/diagnostico-evaluacion.jpg",
            "description": "Nuestro servicio de diagnóstico y evaluación de aire acondicionado permite identificar problemas que afecten su rendimiento. Un técnico especializado analizará tu equipo para ofrecerte un informe detallado y recomendaciones. Aplicable solo a nuestros aires acondicionados.",
            "strongPoints": [
                "Diagnóstico preciso de fallas",
                "Informe detallado y recomendaciones",
                "Técnicos especializados",
                "Optimización del rendimiento"
            ]
        },
        {
            "id": "mantenimiento-profundo-ac",
            "name": "MANTENIMIENTO PROFUNDO DE AIRE ACONDICIONADO DE 12,000 BTU, 18,000 BTU, 24,000 BTU y 36,000 BTU",
            "price": 2500,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/08/mantenimiento-aires.jpg",
            "description": "Servicio de mantenimiento de aire acondicionado para equipos Airmax y Gree de 12,000 BTU, 18,000 BTU, 24,000 BTU y 36,000 BTU. Nuestro equipo técnico garantiza una limpieza profunda y revisión completa para optimizar el rendimiento y prolongar la vida útil de tu equipo.",
            "strongPoints": [
                "Limpieza profunda y completa",
                "Optimización del rendimiento",
                "Prolonga la vida útil del equipo",
                "Aplica a múltiples capacidades de BTU"
            ]
        },
        {
            "id": "desinstalacion-ac-split",
            "name": "SERVICIO DE DESINSTALACION DE AIRE ACONDICIONADO SPLIT",
            "price": 1500,
            "image": "https://termacold.com/wp-content/uploads/2024/04/precio-de-desmontaje-y-montaje-de-aire-acondicionado.webp",
            "description": "Ofrecemos servicio de desinstalación de aire acondicionado tipo split con capacidades de 12,000 a 24,000 BTU. Nuestro equipo profesional garantiza un proceso seguro y eficiente, evitando daños en la unidad y el entorno.",
            "strongPoints": [
                "Proceso seguro y eficiente",
                "Evita daños al equipo",
                "Técnicos profesionales",
                "Para equipos split de 12,000 a 24,000 BTU"
            ]
        },
        {
            "id": "instalacion-ac-36k",
            "name": "INSTALACION BASICA DE AIRE ACONDICIONADO 36,000 BTU",
            "price": 7000,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/08/instalacion-basica.jpg",
            "description": "Servicio de instalación básica de aire acondicionado split de 36,000 BTU. Incluye materiales de fábrica, 10 pies de tubería y requiere una fuente eléctrica 220V a menos de 5 pies. No aplica para desinstalaciones previas ni instalaciones en pisos superiores sin acceso seguro.",
            "strongPoints": [
                "Instalación profesional para 36,000 BTU",
                "Incluye materiales de fábrica y 10 pies de tubería",
                "Requiere fuente eléctrica 220V",
                "Proceso seguro y garantizado"
            ]
        },
        {
            "id": "instalacion-ac-24k",
            "name": "INSTALACION BASICA DE AIRE ACONDICIONADO DE 24,000 BTU",
            "price": 5500,
            "image": "https://api.conformatic.com/wp-content/uploads/2023/08/instalacion-basica.jpg",
            "description": "Servicio de instalación básica de aire acondicionado split de 24,000 BTU. Incluye los materiales de fábrica, 10 pies de tubería y requiere una fuente eléctrica 220V a menos de 5 pies. No aplica para desinstalaciones previas ni instalaciones en pisos superiores sin acceso seguro.",
            "strongPoints": [
                "Instalación profesional para 24,000 BTU",
                "Incluye materiales de fábrica y 10 pies de tubería",
                "Requiere fuente eléctrica 220V",
                "Proceso seguro y garantizado"
            ]
        }
    ];

    const services = [
        {
            "id": "mantenimiento-profundo",
            "name": "Mantenimiento Profundo",
            "image": "https://coolingsolutions.com.do/wp-content/uploads/2023/01/Mantenimiento-de-Aire-Acondicionado.jpg",
            "description": "Planes de mantenimiento preventivo y correctivo para todo tipo de equipos, asegurando su óptimo funcionamiento y prolongando su vida útil. Incluye limpieza exhaustiva, revisión de componentes y ajustes necesarios.",
            "strongPoints": [
                "Optimización del rendimiento del equipo",
                "Prevención de averías costosas",
                "Extensión de la vida útil de sus aparatos",
                "Técnicos especializados y certificados"
            ]
        },
        {
            "id": "reparacion-aires",
            "name": "Reparación de Aires Acondicionados",
            "image": "https://www.sat-aire-acondicionado-malaga.es/wp-content/uploads/reparar-aire-acondicionado.jpg",
            "description": "Diagnóstico preciso y reparación eficiente de todas las marcas y modelos de aires acondicionados. Solucionamos problemas de fugas, fallos eléctricos, ruidos extraños y más, con garantía de servicio.",
            "strongPoints": [
                "Diagnóstico rápido y preciso",
                "Reparación de todas las marcas",
                "Uso de repuestos originales",
                "Garantía en el servicio de reparación"
            ]
        },
        {
            "id": "reparacion-lavadora-secadora",
            "name": "Reparación de Lavadora/Secadora",
            "image": "https://lavysec.cl/cdn/shop/files/iStock-1309384812_724x482_crop_center.jpg?v=1685400936",
            "description": "Soluciones rápidas y efectivas para fallas en equipos de lavado y secado. Desde problemas de drenaje hasta fallos en el motor, nuestros técnicos expertos dejarán sus electrodomésticos como nuevos.",
            "strongPoints": [
                "Expertos en lavadoras y secadoras",
                "Solución a problemas comunes y complejos",
                "Servicio a domicilio",
                "Restauración de la funcionalidad completa"
            ]
        },
        {
            "id": "plomeria",
            "name": "Plomería",
            "image": "https://www.ragasfiteria.cl/media/k2/items/cache/0345422ddcb43c580d78147360d8e84a_XL.jpg",
            "description": "Servicios completos de plomería, incluyendo instalación y reparación de tuberías, detección y reparación de fugas, desatascos y mantenimiento de sistemas de agua. Trabajos limpios y duraderos.",
            "strongPoints": [
                "Instalación y reparación de tuberías",
                "Detección y reparación de fugas",
                "Servicio de desatascos",
                "Profesionales con experiencia"
            ]
        },
        {
            "id": "electricidad-industrial",
            "name": "Electricidad Industrial",
            "image": "https://www.politecnicointercontinental.com/wp-content/uploads/2025/06/tu-futuro-tecnico.jpg",
            "description": "Mantenimiento, instalación y reparación de sistemas eléctricos industriales. Aseguramos la continuidad operativa de su negocio con soluciones robustas y seguras para tableros y sistemas de control.",
            "strongPoints": [
                "Especialistas en sistemas industriales",
                "Mantenimiento preventivo y correctivo",
                "Seguridad y eficiencia energética",
                "Minimización de tiempos de inactividad"
            ]
        },
        {
            "id": "redes-telecomunicacion",
            "name": "Redes y Telecomunicación",
            "image": "https://94fa3c88.delivery.rocketcdn.me/es/files/2024/05/Redes_y_telecomunicaciones_datascientest2.jpg",
            "description": "Diseño, instalación y configuración de redes informáticas y cableado estructurado para hogares y empresas. Optimice su conectividad y asegure una comunicación fluida y segura.",
            "strongPoints": [
                "Diseño de redes a medida",
                "Instalación de cableado estructurado",
                "Configuración de equipos de red",
                "Optimización de la conectividad"
            ]
        },
        {
            "id": "domotica",
            "name": "Domótica",
            "image": "https://www.direnergy.net/wp-content/uploads/2024/03/DOMOTICA-Y-KNX-CASTELLON-768x495.jpg",
            "description": "Transforme su hogar en una casa inteligente con nuestras soluciones de domótica. Automatización de iluminación, seguridad, climatización y entretenimiento para mayor confort y eficiencia.",
            "strongPoints": [
                "Automatización del hogar",
                "Control inteligente de dispositivos",
                "Mayor confort y seguridad",
                "Eficiencia energética"
            ]
        }
    ];

    const productListDiv = document.getElementById('product-list');
    const serviceListDiv = document.getElementById('service-list'); // New
    const cartItemsList = document.getElementById('cart-items-list');
    const cartSubtotalSpan = document.getElementById('cart-subtotal');
    const cartBadge = document.querySelector('.cart-badge');
    const checkoutWhatsappBtn = document.getElementById('checkout-whatsapp-btn');
    const productDetailModalElement = document.getElementById('productDetailModal');
    const serviceDetailModalElement = document.getElementById('serviceDetailModal'); // New
    let productDetailModal;
    let serviceDetailModal; // New

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Initialize Bootstrap modals once
    if (productDetailModalElement) {
        productDetailModal = new bootstrap.Modal(productDetailModalElement);
    }
    if (serviceDetailModalElement) { // New
        serviceDetailModal = new bootstrap.Modal(serviceDetailModalElement);
    }
    const confirmationBootstrapModal = new bootstrap.Modal(document.getElementById('confirmationModal'));

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
                            <div class="d-flex justify-content-around mt-3">
                                <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">Añadir al Carrito</button>
                                <button class="btn btn-outline-secondary view-details-btn" data-product-id="${product.id}" data-bs-toggle="modal" data-bs-target="#productDetailModal">Ver Detalles</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            productListDiv.innerHTML += productCard;
        });

        // Añadir event listeners a los botones "Añadir al Carrito" y "Ver Detalles" usando delegación de eventos
        // These are attached to productListDiv, so they will re-attach correctly if renderProducts is ever re-run
        // but since renderProducts is only called once, this is fine here.
        productListDiv.addEventListener('click', function(event) {
            if (event.target.classList.contains('add-to-cart-btn')) {
                addToCart(event);
            } else if (event.target.classList.contains('view-details-btn')) {
                showProductDetails(event);
            }
        });
    }

    // Añadir event listener al botón "Añadir al Carrito" dentro del modal de detalles (Attach once at DOMContentLoaded)
    if (document.querySelector('.add-to-cart-from-detail-btn')) {
        document.querySelector('.add-to-cart-from-detail-btn').addEventListener('click', function(event) {
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
                if (productDetailModal) {
                    productDetailModal.hide(); // Use the single instance
                }
            }
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

    // Mostrar detalles del producto en un modal
    function showProductDetails(event) {
        const productId = event.target.dataset.productId;
        const product = products.find(p => p.id === productId);

        if (product) {
            document.getElementById('detail-product-image').src = product.image;
            document.getElementById('detail-product-image').alt = product.name;
            document.getElementById('detail-product-name').textContent = product.name;
            document.getElementById('detail-product-description').textContent = product.description;
            document.getElementById('detail-product-price').textContent = `RD$ ${product.price.toLocaleString('es-DO')}`;

            const strongPointsList = document.getElementById('detail-strong-points');
            strongPointsList.innerHTML = '';
            product.strongPoints.forEach(point => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check-circle me-2 text-success"></i>${point}`;
                strongPointsList.appendChild(li);
            });

            const addToCartDetailBtn = document.querySelector('.add-to-cart-from-detail-btn');
            addToCartDetailBtn.dataset.productId = product.id;

            if (productDetailModal) { // Use the single instance
                productDetailModal.show();
            }
        }
    }

    // Renderizar servicios en la página
    function renderServices() {
        if (!serviceListDiv) return;
        serviceListDiv.innerHTML = ''; // Clear existing content
        services.forEach(service => {
            const serviceCard = `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100 service-card">
                        <div class="service-card-img-wrapper">
                            <img src="${service.image}" class="card-img-top" alt="${service.name}">
                            <div class="service-card-overlay">
                                <div class="overlay-content">
                                    <i class="fas fa-search-plus"></i>
                                    <p class="view-service-details-text" data-service-id="${service.id}" data-bs-toggle="modal" data-bs-target="#serviceDetailModal">Ver Detalles</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title">${service.name}</h5>
                            <p class="card-text">${service.description}</p>
                        </div>
                    </div>
                </div>
            `;
            serviceListDiv.innerHTML += serviceCard;
        });

        // Add event listener for "Ver Detalles" buttons on service cards using delegation
        serviceListDiv.addEventListener('click', function(event) {
            if (event.target.classList.contains('view-service-details-text')) {
                showServiceDetails(event);
            }
        });
    }

    // Mostrar detalles del servicio en un modal
    function showServiceDetails(event) {
        const serviceId = event.target.dataset.serviceId;
        const service = services.find(s => s.id === serviceId);

        if (service) {
            document.getElementById('detail-service-image').src = service.image;
            document.getElementById('detail-service-image').alt = service.name;
            document.getElementById('detail-service-name').textContent = service.name;
            document.getElementById('detail-service-description').textContent = service.description;

            const strongPointsList = document.getElementById('detail-service-strong-points');
            strongPointsList.innerHTML = '';
            service.strongPoints.forEach(point => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check-circle me-2 text-success"></i>${point}`;
                strongPointsList.appendChild(li);
            });

            // Update WhatsApp link
            const whatsappLink = document.querySelector('#serviceDetailModal .btn-primary');
            whatsappLink.href = `https://wa.me/18093188687?text=${encodeURIComponent('¡Hola! Me interesa el servicio de ' + service.name + '. ¿Podrían darme más información?')}`;

            if (serviceDetailModal) {
                serviceDetailModal.show();
            }
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

    // Inicializar la tienda y servicios al cargar la página
    renderProducts();
    renderServices(); // New
    updateCartUI();
});
