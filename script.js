// Menu mobile
const menuBtn = document.querySelector('#menu-btn');
const navLinks = document.querySelector('#nav-links');

function setMenu(open) {
    navLinks.classList.toggle('active', open);
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    menuBtn.innerHTML = open
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
}

menuBtn.addEventListener('click', () => {
    setMenu(!navLinks.classList.contains('active'));
});

// Fecha o menu ao escolher uma seção
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
});

// Copiar e-mail. Se o navegador não deixar copiar, o link mailto abre normalmente
const copyEmail = document.querySelector('#copy-email');
const copyFeedback = document.querySelector('#copy-feedback');
let feedbackTimer;

copyEmail.addEventListener('click', async event => {
    if (!navigator.clipboard) return;
    event.preventDefault();
    try {
        await navigator.clipboard.writeText('sabrinacsilva09@gmail.com');
        copyFeedback.textContent = 'E-mail copiado!';
        clearTimeout(feedbackTimer);
        feedbackTimer = setTimeout(() => { copyFeedback.textContent = ''; }, 2500);
    } catch {
        window.location.href = copyEmail.href;
    }
});

// Ano do rodapé
document.querySelector('#year').textContent = new Date().getFullYear();

// Animação de entrada das seções
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealItems.forEach(item => observer.observe(item));
} else {
    revealItems.forEach(item => item.classList.add('visible'));
}
