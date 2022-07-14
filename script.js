/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});
  
scrollReveal.reveal(
  `body header,
  #key-benefits .benefit,
  body #location,
  body #details, #details .detail,
  body #contact, body footer
  `,
  { interval: 200 }
);

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top');

function backToTop(){
  if (window.scrollY >= 560) {
    backToTopButton.classList.remove('show');
  } else {
    backToTopButton.classList.add('show');
  }
}

window.addEventListener('scroll', function () {
  backToTop();  
});
