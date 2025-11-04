// ===== Inicialização Geral =====
  document.addEventListener('DOMContentLoaded', () => {
  const trilho = document.getElementById('trilho');
  const body = document.body;
  const navLinks = document.querySelectorAll('.nav-links a');
  const menuToggle = document.getElementById('menuToggle');
  const navLinksContainer = document.getElementById('navLinks');

  // ======== 🔆 Tema Claro / Escuro ========

  // Recuperar tema salvo no Local Storage
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'dark') {
  body.classList.add('dark');
  trilho?.classList.add('dark');
} else if (temaSalvo === 'light') {
  body.classList.add('light');
  }

  // Alternar tema ao clicar no botão
  if (trilho) {
  trilho.addEventListener('click', () => {
  trilho.classList.toggle('dark');
  body.classList.toggle('dark');
  body.classList.toggle('light');

      // Salvar tema atual
  const modo = body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('tema', modo);
    });
  }

  // ======== 📱 Menu Mobile ========
  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinksContainer.contains(e.target)) {
    navLinksContainer.classList.remove('active');
      }
    });

    navLinks.forEach(link => {
    link.addEventListener('click', () => navLinksContainer.classList.remove('active'));
    });
  }

  // ======== 💌 Formulário do Modal ========
  const contactForm = document.getElementById('contact-modal-form');
  if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
  name: contactForm.name.value.trim(),
  email: contactForm.email.value.trim(),
  message: contactForm.message.value.trim(),
  date: new Date().toISOString()
  };

      // Simula o envio armazenando localmente
  const list = JSON.parse(localStorage.getItem('contacts') || '[]');
  list.push(data);
  localStorage.setItem('contacts', JSON.stringify(list));

      // Fecha o modal principal
  const modalContato = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
  modalContato.hide();

      // Mostra o modal de sucesso
  setTimeout(() => {
  const modalSucesso = new bootstrap.Modal(document.getElementById('contactSuccessModal'));
  modalSucesso.show();
  }, 300);

contactForm.reset();
    });
  }

  const botao = document.getElementById('botao');
  const texto = document.getElementById('texto');

  botao.addEventListener('click', () => {
  botao.style.display = 'none'; // esconde o botão
  texto.style.display = 'block'; // mostra o texto

  });
});
