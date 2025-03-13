let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Função para mostrar o slide atual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

// Botão "Próximo"
document.getElementById('next-btn').addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    showSlide(currentSlide);
  } else {
    alert("Você chegou ao final da apresentação. Vamos revisar as partes da célula!");
  }
});

// Botão "Anterior"
document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  } else {
    alert("Você já está no início da apresentação. Vamos explorar as partes da célula juntos!");
  }
});

// Mostrar o primeiro slide ao carregar a página
showSlide(currentSlide);
