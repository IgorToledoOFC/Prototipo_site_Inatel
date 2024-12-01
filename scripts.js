function toggleSubmenu() {
    const submenu = document.getElementById("submenu");
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block"; // Exibe o submenu
    } else {
        submenu.style.display = "none"; // Oculta o submenu
    }
}

function openMenu() {
    document.getElementById("menu_aba").style.width = "30%";
}

function closeMenu() {
    document.getElementById("menu_aba").style.width = "0";
}

// Listener para fechar o menu ao clicar fora
document.addEventListener('click', function(event) {
    const menu = document.getElementById("menu_aba");
    const button = document.getElementById("menu");
  
    // Verifica se o clique foi fora do menu e do botão
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        closeMenu(); // Fecha o menu se o clique for fora
    }
  });



/* Intercambio */
document.querySelectorAll('.aumenta_menu').forEach(function(intercambio) {
    intercambio.addEventListener('click', function() {
        // Encontra o elemento pai (.intercambio) e alterna a classe 'active'
        let intercambio = this.closest('.intercambio');
        intercambio.classList.toggle('active');
    });
});

/* Estagio */
document.querySelectorAll('.aumenta_menu').forEach(function(estagio) {
    estagio.addEventListener('click', function() {
        // Encontra o elemento pai (.estagio) e alterna a classe 'active'
        let estagioDiv = this.closest('.estagio');
        estagioDiv.classList.toggle('active');
    });
});

/* Horarios */
document.querySelectorAll('.aumenta_menu').forEach(function(horario) {
    horario.addEventListener('click', function() {
        // Encontra o elemento pai (.horario) e alterna a classe 'active'
        let horario = this.closest('.horario');
        horario.classList.toggle('active');
    });
});

/* Notas */
document.querySelectorAll('.aumenta_menu').forEach(function(notas) {
    notas.addEventListener('click', function() {
        // Alterna a classe 'active' para expandir ou contrair a aba
        let notas = this.closest('.notas');
        notas.classList.toggle('active');
    });
});

/* Frequencia */
document.querySelectorAll('.aumenta_menu').forEach(function(frequencia) {
    frequencia.addEventListener('click', function() {
        // Alterna a classe 'active' para expandir ou contrair a aba
        let frequencia = this.closest('.frequencia');
        frequencia.classList.toggle('active');
    });
});

function tema1() {
    document.documentElement.style.setProperty('--cor-text', 'black'); /* Preto */
    document.documentElement.style.setProperty('--color-ico', 'rgb(147 0 10)');
    document.documentElement.style.setProperty('--md-sys-color-background', 'rgb(255 248 247)');
    document.documentElement.style.setProperty('--md-sys-color-on-background', 'rgb(32 26 26)');
    document.documentElement.style.setProperty('--md-sys-color-primary', 'rgb(3 0 0)');
    document.documentElement.style.setProperty('--md-sys-color-primary-container', 'rgb(66 25 25)');
    document.documentElement.style.setProperty('--md-sys-color-secondary', 'rgb(115 87 86)');
    document.documentElement.style.setProperty('--md-sys-color-secondary-container', 'rgb(255 220 218)');
    document.documentElement.style.setProperty('--md-sys-color-tertiary', 'rgb(3 1 0)');
    document.documentElement.style.setProperty('--md-sys-color-tertiary-container', 'rgb(51 36 7)');
    document.documentElement.style.setProperty('--md-sys-color-error', 'rgb(147 26 26)');
    document.documentElement.style.setProperty('--md-sys-color-error-container' , 'rgb(65 0 2)');
    document.documentElement.style.setProperty('--md-sys-color-on-error-container', 'rgb(255 220 214)');
}

function tema3() {
    document.documentElement.style.setProperty('--cor-text', ' black');
    document.documentElement.style.setProperty('--color-ico','  rgb(0, 0, 238)');
    document.documentElement.style.setProperty('--md-sys-color-background',' rgb(251 248 255)');
    document.documentElement.style.setProperty('--md-sys-color-on-background',' rgb(27 27 32)');
    document.documentElement.style.setProperty('--md-sys-color-primary',' rgb(187 195 255)');
    document.documentElement.style.setProperty('--md-sys-color-primary-container',' rgb(29 41 121)');
    document.documentElement.style.setProperty('--md-sys-color-secondary',' rgb(193 196 234)');
    document.documentElement.style.setProperty('--md-sys-color-secondary-container',' rgb(58 62 93)');
    document.documentElement.style.setProperty('--md-sys-color-tertiary',' rgb(248 173 249)');
    document.documentElement.style.setProperty('--md-sys-color-tertiary-container',' rgb(84 24 90)');
    document.documentElement.style.setProperty('--md-sys-color-error',' rgb(255 180 171)');
    document.documentElement.style.setProperty('--md-sys-color-error-container',' rgb(147 0 10))');
    document.documentElement.style.setProperty('--md-sys-color-on-error-container',' rgb(233, 233, 238)');
   }

function tema4() {
    document.documentElement.style.setProperty('--cor-text', 'black'); /* Preto */
    document.documentElement.style.setProperty('--color-ico', 'rgb(67,131,21)');
    document.documentElement.style.setProperty('--md-sys-color-background', 'rgb(251 248 254)');
    document.documentElement.style.setProperty('--md-sys-color-on-background', 'rgb(27 27 31)');
    document.documentElement.style.setProperty('--md-sys-color-primary', 'rgb(190 194 255)');
    document.documentElement.style.setProperty('--md-sys-color-primary-container', 'rgb(39 44 102))');
    document.documentElement.style.setProperty('--md-sys-color-secondary', 'rgb(196 196 226)');
    document.documentElement.style.setProperty('--md-sys-color-secondary-container', 'rgb(60 62 86)');
    document.documentElement.style.setProperty('--md-sys-color-tertiary', 'rgb(243 178 232)');
    document.documentElement.style.setProperty('--md-sys-color-tertiary-container', 'rgb(80 32 77)');
    document.documentElement.style.setProperty('--md-sys-color-error', 'rgb(255 180 171)');
    document.documentElement.style.setProperty('--md-sys-color-error-container' , 'rgb(147 0 10)');
    document.documentElement.style.setProperty('--md-sys-color-on-error-container', 'rgb(217 234 219)');

}

function aba_temas_personalizados() {
    toggleSubmenu();
}

// Função para fechar o pop-up
function closePopup() {
    let popup = document.querySelector('#popup_container');
    if (popup) {
        popup.style.display = 'none';  // Fecha o pop-up
    }
}

// Adiciona o evento de clique ao botão OK
document.querySelectorAll('.form_class').forEach(function(button) {
    button.addEventListener('click', function(event) {
        // Fecha o pop-up quando o botão OK é clicado
        closePopup();
    });
});

// Adiciona o evento de clique fora do pop-up para fechá-lo
document.addEventListener('click', function(event) {
    let popup = document.querySelector('#popup_container');
    const button = document.querySelectorAll('.form_class');
  
    // Verifica se o clique foi fora do pop-up e do botão OK
    if (popup && !popup.contains(event.target) && !Array.from(button).some(btn => btn.contains(event.target))) {
        popup.style.display = 'none';  // Fecha o pop-up se o clique for fora
    }
});

