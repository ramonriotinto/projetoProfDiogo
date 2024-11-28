let slideIndex = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const indicators = document.querySelectorAll('.indicator');

        function showSlide(index) {
            if (index >= slides.length) {
                slideIndex = 0;
            } else if (index < 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex = index;
            }

            slides.forEach(slide => {
                slide.style.display = "none";
            });

        
            indicators.forEach(indicator => {
                indicator.classList.remove('active');
            });

    
            slides[slideIndex].style.display = "block";
            indicators[slideIndex].classList.add('active');
        }


        function changeSlide(n) {
            showSlide(slideIndex += n);
        }

  
        function currentSlide(index) {
            showSlide(slideIndex = index);
        }

   
        function autoSlide() {
            changeSlide(1);
            setTimeout(autoSlide, 4000);
        }

        showSlide(slideIndex)
        autoSlide(); 



     
  
  function startCounter(counterId, targetNumber, duration, symbol = "") {
    const incrementTime = 20; 
    const increment = Math.ceil(targetNumber / (duration / incrementTime));
    const counterElement = document.getElementById(counterId);
    let currentNumber = 0;

    const interval = setInterval(() => {
      currentNumber += increment;

      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(interval);
      }

      counterElement.textContent = `${currentNumber}${symbol}`;
    }, incrementTime);
  }
  startCounter('counter1', 35, 2000); 
  startCounter('counter2', 450, 3000, "mil"); 
  startCounter('counter3', 87, 4000, ",2%"); 

 // Função para alternar a exibição do menu hambúrguer
document.getElementById('menu-toggle').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
});
// Função para fechar o menu quando clicar fora dele
document.addEventListener('click', function(event) {
    const nav = document.getElementById('nav');
    const menuToggle = document.getElementById('menu-toggle');
    // Verifica se o clique foi fora do menu e do botão de hambúrguer
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove('active');
    }
});
// Função para fechar o menu quando clicar fora dele
document.addEventListener('click', function(event) {
    const nav = document.getElementById('nav');
    const menuToggle = document.getElementById('menu-toggle');
    // Verifica se o clique foi fora do menu e do botão de hambúrguer
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove('active');
    }
});
// function menuToggle('click') {
//     const menu = document.getElementById('click')
    
// }

// document.getElementById('menu-toggle').addEventListener('click', function () {
//     const navLinks = document.getElementById('nav-links');
//     navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
// });
