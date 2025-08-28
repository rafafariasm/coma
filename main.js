document.addEventListener("DOMContentLoaded", function () {
    const tracks = document.querySelectorAll(".track");
    const nextButtons = document.querySelectorAll(".next");
    const backButtons = document.querySelectorAll(".back");
    let currentIndex = 0;

    // Mostrar apenas a primeira música no início
    function showTrack(index) {
        tracks.forEach((track, i) => {
            let audio = track.querySelector("audio");
            if (i === index) {
                track.style.display = "block";
            } else {
                track.style.display = "none";
                audio.pause();
                audio.currentTime = 0; // reseta o player
            }
        });
    }

    // Avançar
    nextButtons.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            if (currentIndex < tracks.length - 1) {
                currentIndex++;
                showTrack(currentIndex);
            }
        });
    });

    // Voltar
    backButtons.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                showTrack(currentIndex);
            }
        });
    });

    // Inicializa exibindo apenas a primeira música
    showTrack(currentIndex);
});
