// main.js
//para mudar a cor do menu quando rolar a tela
window.addEventListener('scroll', function () {
    const menu = document.getElementById('menu');
    if (window.scrollY > 50) {  // se a pessoa rolou mais que 50px
      menu.style.backgroundColor = 'rgba(139, 0, 139, 0.9)'; // rosa escuro com transparência
      menu.style.boxShadow = '0 2px 5px rgba(0,0,0,0.5)';
    } else {
      menu.style.backgroundColor = 'transparent';
      menu.style.boxShadow = 'none';
    }
  });
//para chamar o menu e o rodapé em cada página  
document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});
