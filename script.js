let slideIndex = 0;
showSlides();

// Defina a data de início do relacionamento (ano, mês - 1, dia)
const startDate = new Date(2021, 11 - 1, -7); // Exemplo: 1 de janeiro de 2020

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

// Função para calcular a duração do relacionamento
function updateRelationshipDuration() {
    const now = new Date();
    const totalSeconds = Math.floor((now - startDate) / 1000);
    
    const years = Math.floor(totalSeconds / (365.25 * 24 * 60 * 60));
    const months = Math.floor((totalSeconds % (365.25 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
    const days = Math.floor((totalSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    const durationText = `Estamos juntos há ${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
    document.getElementById("relationship-duration").innerText = durationText;
}

// Atualiza a duração a cada segundo
setInterval(updateRelationshipDuration, 1000);
updateRelationshipDuration(); // Chama uma vez para inicializar