// ============================
// MAIN.JS - Navegação e Funções
// ============================

// Espera carregar o DOM
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const buttons = document.querySelectorAll("button[data-target]");
  const galleryImages = document.querySelectorAll(".gallery img");

  // Função para mostrar a seção desejada
  function showSection(id) {
    sections.forEach(sec => {
      sec.classList.remove("active");
      if (sec.id === id) {
        sec.classList.add("active");
      }
    });
  }

  // Eventos dos botões de navegação
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      if (target) showSection(target);
    });
  });

  // ============================
  // Player de Áudio
  // ============================
  const audioPlayers = document.querySelectorAll("audio");

  audioPlayers.forEach(player => {
    player.addEventListener("play", () => {
      // Pausar outros players se um for tocado
      audioPlayers.forEach(other => {
        if (other !== player) {
          other.pause();
        }
      });
    });
  });

  // ============================
  // Galeria de Imagens (Zoom)
  // ============================
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      openImageModal(img.src, img.alt);
    });
  });

  // Criar modal de imagem
  function openImageModal(src, alt) {
    // Criar overlay
    const overlay = document.createElement("div");
    overlay.classList.add("image-overlay");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.9)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "9999";

    // Criar imagem
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    image.style.maxWidth = "90%";
    image.style.maxHeight = "90%";
    image.style.borderRadius = "10px";
    image.style.boxShadow = "0 0 20px #00ff88";

    // Fechar ao clicar
    overlay.addEventListener("click", () => {
      overlay.remove();
    });

    overlay.appendChild(image);
    document.body.appendChild(overlay);
  }

  // ============================
  // Vídeo Auto Pause
  // ============================
  const videos = document.querySelectorAll("video");

  videos.forEach(video => {
    video.addEventListener("play", () => {
      videos.forEach(other => {
        if (other !== video) {
          other.pause();
        }
      });
    });
  });

  // ============================
  // Seção inicial
  // ============================
  if (sections.length > 0) {
    showSection(sections[0].id);
  }
});
