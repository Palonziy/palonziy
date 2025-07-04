// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize animations
    initAnimations();

    // Initialize skill bars
    initSkillBars();

    // Initialize project filters
    initProjectFilters();

    // Initialize project modals
    initProjectModals();

    // Initialize mobile menu
    initMobileMenu();

    // Initialize theme toggle
    initThemeToggle();

    // Initialize contact form
    initContactForm();

    // Initialize data visualization
    initDataVisualization();
});

// Animation on scroll
function initAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize skill bars
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    setTimeout(() => {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = `${progress}%`;
        });
    }, 500);
}

// Project filters
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Get filter value
            const filterValue = button.getAttribute('data-filter');

            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-category').includes(filterValue)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Project modals
function initProjectModals() {
    const projectButtons = document.querySelectorAll('.project-btn');
    const modal = document.getElementById('projectModal');
    const modalBody = document.querySelector('.modal-body');
    const closeModal = document.querySelector('.close-modal');

    if (!modal) return;

    // Project data (in a real project, this would come from a database or API)
    const projectData = {
        project3: {
            title: "YouTube Video Downloader",
            image: "images/project3.png",
            problem: "Foydalanuvchilar YouTube videolarini qulay tarzda, turli formatlarda va sifatlarda yuklab olish imkoniyatiga ega bo‘lishni istaydi.",
            methodology: `
                <li>Flask yordamida RESTful API yaratildi</li>
                <li>yt-dlp kutubxonasi orqali video ma'lumotlari va fayllari olindi</li>
                <li>React + Tailwind yordamida responsive frontend yaratildi</li>
                <li>Ma'lumotlar bazasi (SQLite) orqali so‘rovlar va yuklab olishlar logi saqlandi</li>
                <li>Xatoliklarni boshqarish va xavfsizlik (CORS, validatsiya) tadbiq etildi</li>
             `,
            technologies: ["Flask", "React", "Tailwind CSS", "yt-dlp", "SQLite", "Vite"],
            results: `
                 <li>Foydalanuvchi YouTube URL orqali video ma’lumotlarini ko‘ra oladi</li>
                 <li>Videolar turli format va sifatda to‘g‘ridan-to‘g‘ri brauzer orqali yuklab olinadi</li>
                 <li>So‘rovlar, yuklab olishlar va xatoliklar avtomatik ravishda loglanadi</li>
             `,
            links: [
                { name: "GitHub", url: "https://github.com/Palonziy/youtube-video-downloader.git" },
                { name: "Website", url: "https://yuklovchi.vercel.app" },
                { name: "Documentation", url: "https://github.com/Palonziy/youtube-video-downloader/blob/main/README.md" }
            ]
        },
        project1: {
            title: "Sotuvlar tahlili loyihasi",
            image: "images/project1.png",
            problem: "Austin shahrida sodir bo'lgan halokatlar ma'lumotlarini tahlil qilish va kelajakdagi tendentsiyalarni bashorat qilish uchun yechim izlayotgan edi.",
            methodology: `
                <li>Ma'lumotlarni tozalash va tayyorlash</li>
                <li>Vaqt qatorlari tahlili</li>
                <li>Prognozlash modellari</li>
                <li>Vizualizatsiya</li>
            `,
            technologies: ["Excel", "Tableau"],
            results: `
                <li>Halokatlar tahlili</li>
                <li>Mavsum ta'siri aniqlandi</li>
                <li>Yangi choralar topildi</li>
            `,
            links: [
                { name: "GitHub", url: "https://github.com/Palonziy/tableau-bike-dashboard.git" },
                { name: "Tableau Public", url: "https://public.tableau.com/views/new_dashboard_ogabek_razzoqov/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" }
            ]
        },
        project2: {
            title: "Patient Recovery System",
            image: "images/project2.png",
            problem: "Shifokorlar, hamshiralar va bemorlar o‘rtasida ma’lumot ayirboshlashni optimallashtirish va tiklanish jarayonini real vaqt rejimida nazorat qilish zarurati.",
            methodology: `
                <li>Node.js mikroxizmatlari va gRPC yordamida skalabil backend yaratildi</li>
                <li>PostgreSQL da xizmatga xos sxemalar bilan ma’lumotlar bazasi loyihalandi</li>
                <li>React + Vite frontendi Tailwind & shadcn/ui bilan responsive qilib ishlab chiqildi</li>
                <li>JWT hamda RBAC orqali autentifikatsiya va avtorizatsiya ta’minlandi</li>
                <li>Docker Compose bilan konteynerlashtirish va tez ishga tushirish avtomatlashtirildi</li>
             `,
            technologies: [
                "Node.js", "gRPC", "React", "Tailwind CSS",
                "PostgreSQL", "Docker"
            ],
            results: `
                <li>Bemor hayotiy ko‘rsatkichlarini real vaqt rejimida kuzatish va jadvallarda vizualizatsiya</li>
                <li>RBAC orqali xavfsiz kirish va rollarga bog‘liq dashboard interfeyslari</li>
                <li>Docker Compose yordamida 5 daqiqadan kam vaqtda to‘liq tizimni ishga tushirish</li>
    `,
            links: [
                { name: "GitHub", url: "https://github.com/Palonziy/patient-recovery-system.git" },
                { name: "Website", url: "https://patient-recovery-system.vercel.app" },
                { name: "API Docs", url: "https://github.com/Palonziy/patient-recovery-system/blob/master/README.md" }
            ]
        }
    };

    // Open modal when project button is clicked
    projectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const projectId = button.getAttribute('data-project');
            const project = projectData[projectId];

            if (project) {
                // Build modal content
                let modalContent = `
                    <h2>${project.title}</h2>
                    <img src="${project.image}" alt="${project.title}">
                    
                    <h3>Muammo bayoni</h3>
                    <p>${project.problem}</p>
                    
                    <h3>Metodologiya</h3>
                    <ul>${project.methodology}</ul>
                    
                    <h3>Ishlatilgan texnologiyalar</h3>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    
                    <h3>Natijalar</h3>
                    <ul>${project.results}</ul>
                    
                    <h3>Havolalar</h3>
                    <div class="project-links">
                        ${project.links.map(link => `<a href="${link.url}" class="btn project-btn" target="_blank">${link.name}</a>`).join('')}
                    </div>
                `;

                modalBody.innerHTML = modalContent;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    // Close modal when X is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    });
}

// Mobile menu
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (!hamburger) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Theme toggle
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-toggle i');

    if (!themeToggle) return;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Contact form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validate form (simple validation)
        if (!name || !email || !subject || !message) {
            formStatus.textContent = 'Iltimos, barcha maydonlarni to\'ldiring';
            formStatus.className = 'form-status error';
            return;
        }

        // In a real project, you would send the form data to a server here
        // For now, we'll just simulate a successful submission

        // Show success message
        formStatus.textContent = 'Xabaringiz muvaffaqiyatli yuborildi!';
        formStatus.className = 'form-status success';

        // Reset form
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            formStatus.className = 'form-status';
        }, 5000);
    });
}

// Interactive data visualization
function initDataVisualization() {
    const dataVisualization = document.querySelector('.data-visualization');
    const dataPoints = document.querySelector('.data-points');

    if (!dataVisualization) return;

    // Create data points
    const numPoints = 50;
    const colors = ['#3498DB', '#E67E22', '#2C3E50', '#27AE60', '#8E44AD'];

    for (let i = 0; i < numPoints; i++) {
        const point = document.createElement('div');
        point.className = 'data-point';

        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        // Random size
        const size = Math.random() * 10 + 5;

        // Random color
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Random animation delay
        const delay = Math.random() * 5;

        // Apply styles
        point.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background-color: ${color};
            border-radius: 50%;
            opacity: 0.7;
            animation: float 10s infinite ease-in-out;
            animation-delay: ${delay}s;
        `;

        dataPoints.appendChild(point);
    }

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translate(0, 0); }
            25% { transform: translate(10px, 10px); }
            50% { transform: translate(0, 20px); }
            75% { transform: translate(-10px, 10px); }
            100% { transform: translate(0, 0); }
        }
    `;
    document.head.appendChild(style);
}

// CV download
document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'downloadCV') {
        e.preventDefault();
        alert('CV yuklab olish funksiyasi hozircha mavjud emas. Tez orada qo\'shiladi!');
    }
});

